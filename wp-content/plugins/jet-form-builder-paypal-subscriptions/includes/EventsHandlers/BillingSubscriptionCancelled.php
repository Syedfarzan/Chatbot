<?php


namespace Jet_FB_Paypal\EventsHandlers;


class BillingSubscriptionCancelled extends Base\BillingSubscription {

	public static function get_event_type() {
		return 'BILLING.SUBSCRIPTION.CANCELLED';
	}

}
