import SubscriptionEntries from './SubscriptionEntries';
import SubscriptionPlugin from '../../store/Subscription/SubscriptionPlugin';

const {
	BaseStore,
	TableModulePlugin,
	TableSeedPlugin,
} = JetFBStore;

const {
	renderCurrentPage,
} = window.JetFBActions;

const store = new Vuex.Store( {
	...BaseStore,
	plugins: [
		TableModulePlugin(),
		TableSeedPlugin(),
		SubscriptionPlugin,
	],
} );

renderCurrentPage( SubscriptionEntries, { store } );
