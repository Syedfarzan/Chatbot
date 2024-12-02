<?php


namespace Jet_FB_Paypal\Proxy;

use Jet_FB_Paypal\RestEndpoints;
use JetPaypalCore\JetFormBuilder\RestApiProxy;

class RestApiController extends RestApiProxy {

	public function plugin_version_compare(): string {
		return '2.0.3';
	}

	public function routes(): array {
		return array(
			new RestEndpoints\PaypalWebHookFormId(),
			new RestEndpoints\PaypalWebHookGlobal(),
			new RestEndpoints\PayPalCancelSubscription(),
			new RestEndpoints\PayPalSuspendSubscription(),
			new RestEndpoints\FetchSubscribeNowEditor(),
			new RestEndpoints\PayPalRefundPayment(),
			new RestEndpoints\AddSubscriptionNote(),
			new RestEndpoints\ReceiveSubscriptions(),
			new RestEndpoints\ReceivePayments(),
			new RestEndpoints\ReceiveSubscription(),
			new RestEndpoints\FetchNotesBySubscription(),
			new RestEndpoints\FetchPaymentsBySubscription(),
			new RestEndpoints\ReceivePayment(),
			new RestEndpoints\DeleteSubscriptions(),
			new RestEndpoints\DeleteSubscription(),
		);
	}

	public function on_base_need_install() {
	}

	public function on_base_need_update() {
	}

}