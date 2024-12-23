<?php


namespace Jet_FB_Paypal\ApiActions;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal;

class RefundPaymentSale extends Paypal\Api_Actions\Base_Action {

	protected $auth_assertion;

	public function action_slug() {
		return 'REFUND_PAYMENT';
	}

	public function action_endpoint() {
		return 'v1/payments/sale/{sale_id}/refund';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}

	public function set_invoice_id( $invoice_id ): RefundPaymentSale {
		if ( ! $invoice_id ) {
			return $this;
		}

		return $this->set_body(
			array(
				'invoice_id' => $invoice_id,
			)
		);
	}


	public function set_note_to_payer( $note_to_payer ): RefundPaymentSale {
		if ( ! $note_to_payer ) {
			return $this;
		}

		return $this->set_body(
			array(
				'note_to_payer' => $note_to_payer,
			)
		);
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	public function refund() {
		$response = $this->send_request();

		if ( 'COMPLETED' === strtoupper( $response['status'] ?? $response['state'] ?? '' ) ) {
			return $response;
		}

		throw new Gateway_Exception( $response['message'] ?? 'Unknown error', $response );
	}


	/**
	 * @param $form_id
	 * @param $payer_id
	 *
	 * @return RefundPaymentSale
	 * @throws Gateway_Exception
	 * @link https://github.com/paypal/Payouts-PHP-SDK/issues/7
	 *
	 * @link https://developer.paypal.com/docs/api/reference/api-requests/#paypal-auth-assertion
	 */
	public function set_auth_assertion( $form_id, $payer_id ): RefundPaymentSale {
		$credits = Paypal\Controller::get_credentials_by_form( $form_id );

		if ( empty( $credits['client_id'] ) ) {
			throw new Gateway_Exception( 'Empty `client_id`', $credits, $form_id );
		}
		if ( ! $payer_id ) {
			throw new Gateway_Exception( 'Empty `$payer_id`', $payer_id );
		}
		// phpcs:disable WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode

		// JOSE header
		$header = array( base64_encode( '{"alg":"none"}' ) );

		// Payload
		$header[] = base64_encode( "{\"iss\":\"{$credits['client_id']}\",\"payer_id\":\"{$payer_id}\"}" );

		// Signature
		$header[] = '';

		$this->auth_assertion = implode( '.', $header );

		// phpcs:enable WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode

		return $this;
	}
}
