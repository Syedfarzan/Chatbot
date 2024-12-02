import Payments from './Payments';
import RefundSalePlugin from '../../store/RefundSale/RefundSalePlugin';

const { PaymentsPage: { options } } = window.JetFBComponents;
const { renderCurrentPage } = window.JetFBActions;

options.store.plugins.push( RefundSalePlugin );
options.store = new Vuex.Store( options.store );

renderCurrentPage( Payments, options );
