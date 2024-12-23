<?php


namespace Jet_FB_Paypal\ApiActions\Traits;


use Jet_Form_Builder\Exceptions\Gateway_Exception;

trait WithSubscriptionId {

	private $subscription_id;

	/**
	 * @param $subscription_id
	 *
	 * @return $this
	 */
	public function set_subscription_id( $subscription_id ) {
		$this->subscription_id = $subscription_id;

		return $this;
	}

	public function get_subscription_id() {
		return $this->subscription_id;
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function before_make_request() {
		if ( ! $this->get_subscription_id() ) {
			throw new Gateway_Exception( '`subscription_id` is not set.' );
		}
	}
}