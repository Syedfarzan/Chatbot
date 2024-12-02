<?php


namespace Jet_FB_Paypal\EventsHandlers\Base;

use Jet_FB_Paypal\QueryViews\SubscriptionsView;
use Jet_FB_Paypal\Resources\Subscription;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

abstract class BillingSubscription extends EventHandlerBase {

	/**
	 * @param $webhook_event
	 *
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function on_catch_event( $webhook_event ) {
		$subscription_id = $webhook_event['resource']['id'] ?? false;

		try {
			$subscription = SubscriptionsView::findOne(
				array(
					'billing_id' => $subscription_id,
				)
			)->query()->query_one();

		} catch ( Query_Builder_Exception $exception ) {
			throw new Gateway_Exception( "Undefined subscription: {$subscription_id}" );
		}

		$resource = new Subscription( $subscription );
		$resource->update_status( $webhook_event['resource']['status'] );

		return array( $subscription, $resource );
	}

}
