import SinglePayment from './SinglePayment';
import RefundSalePlugin from '../../store/RefundSale/RefundSalePlugin';

const {
	BaseStore,
	SingleMetaBoxesPlugin,
	PageActionsPlugin
} = JetFBStore;

const { renderCurrentPage } = window.JetFBActions;

const store = new Vuex.Store( {
	...BaseStore,
	plugins: [ SingleMetaBoxesPlugin, PageActionsPlugin, RefundSalePlugin ],
} );

renderCurrentPage( SinglePayment, { store } );
