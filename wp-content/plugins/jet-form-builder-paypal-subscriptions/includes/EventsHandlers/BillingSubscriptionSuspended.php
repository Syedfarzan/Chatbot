<?php


namespace Jet_FB_Paypal\EventsHandlers;

class BillingSubscriptionSuspended extends Base\BillingSubscription {

	public static function get_event_type() {
		return 'BILLING.SUBSCRIPTION.SUSPENDED';
	}

}
