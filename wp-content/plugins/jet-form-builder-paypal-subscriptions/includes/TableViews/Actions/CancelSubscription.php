<?php


namespace Jet_FB_Paypal\TableViews\Actions;


use Jet_FB_Paypal\Utils\SubscriptionUtils;
use Jet_Form_Builder\Admin\Table_Views\Actions\Api_Single_Action;
use Jet_FB_Paypal\RestEndpoints\PayPalCancelSubscription;

class CancelSubscription extends Api_Single_Action {

	use BaseSubscriptionArgs;

	public function get_slug(): string {
		return 'cancel';
	}

	public function get_type(): string {
		return 'danger';
	}

	public function get_label(): string {
		return __( 'Cancel', 'jet-form-builder-paypal-subscriptions' );
	}

	public function get_method(): string {
		return PayPalCancelSubscription::get_methods();
	}

	public function get_rest_url( array $record ): string {
		return PayPalCancelSubscription::dynamic_rest_url( $this->get_args( $record ) );
	}

	public function show_in_header(): bool {
		return false;
	}

	public function show_in_row( array $record ): bool {
		return SubscriptionUtils::can_be_cancelled( $record );
	}

	public function get_payload( array $record ): array {
		return PayPalCancelSubscription::get_messages();
	}
}