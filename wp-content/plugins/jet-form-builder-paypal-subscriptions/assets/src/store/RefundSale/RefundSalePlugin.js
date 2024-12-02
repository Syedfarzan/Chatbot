import RefundModule from './RefundModule';

export default function RefundSalePlugin( store ) {
	store.registerModule( 'refund', RefundModule );
}