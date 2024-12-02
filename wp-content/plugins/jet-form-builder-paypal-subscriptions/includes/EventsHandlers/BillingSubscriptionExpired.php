<?php


namespace Jet_FB_Paypal\EventsHandlers;


class BillingSubscriptionExpired extends Base\BillingSubscription {

	public static function get_event_type() {
		return 'BILLING.SUBSCRIPTION.EXPIRED';
	}

}



