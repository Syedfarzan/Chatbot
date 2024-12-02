import SubscriptionModule from './SubscriptionModule';

export default function SubscriptionPlugin( store ) {
	store.registerModule( 'subscription', SubscriptionModule );
}