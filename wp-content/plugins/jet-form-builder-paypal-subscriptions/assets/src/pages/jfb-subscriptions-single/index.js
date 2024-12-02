import SubscriptionSingle from './SubscriptionSingle';
import RefundSalePlugin from '../../store/RefundSale/RefundSalePlugin';
import SubscriptionPlugin from '../../store/Subscription/SubscriptionPlugin';

const {
	BaseStore,
	SingleMetaBoxesPlugin,
	PageActionsPlugin,
	OnUpdateEditableCellPlugin,
	EditCollectorPlugin,
} = JetFBStore;

const { renderCurrentPage } = window.JetFBActions;

const store = new Vuex.Store( {
	...BaseStore,
	plugins: [
		SingleMetaBoxesPlugin,
		PageActionsPlugin,
		RefundSalePlugin,
		SubscriptionPlugin,
		OnUpdateEditableCellPlugin,
		EditCollectorPlugin,
	],
} );

renderCurrentPage( SubscriptionSingle, { store } );
