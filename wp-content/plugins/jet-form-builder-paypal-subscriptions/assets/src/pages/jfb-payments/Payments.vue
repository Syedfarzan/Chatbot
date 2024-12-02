<template>
	<PaymentsComponent>
		<RefundSalePopup
			@refund="refund"
		/>
	</PaymentsComponent>
</template>
<script>

import RefundSalePopup from '../../components/RefundSalePopup';

const {
	PaymentsPage: { PaymentsComponent },
} = window.JetFBComponents;

window.jfbEventBus = window.jfbEventBus || new Vue();

const { apiFetch } = wp;

const {
	mapMutations,
	mapState,
	mapActions,
	mapGetters,
} = Vuex;


export default {
	name: 'jfb-payments',
	components: {
		RefundSalePopup,
		PaymentsComponent,
	},
	created() {
		this.setBeforeAction( {
			action: 'refund',
			callback: ( checked, context, payload ) => {
				this[ 'refund/openPopup' ]( payload );
			},
		} );
	},
	computed: {
		...mapGetters( [
			'refund/apiData',
		] ),
	},
	methods: {
		...mapMutations( [
			'toggleDoingAction',
			'refund/closePopup',
			'refund/openPopup',
			'refund/toggleLoading',
		] ),
		...mapMutations( 'scope-default', [
			'setList',
			'setActionPromises',
			'setBeforeAction',
			'setApiData',
		] ),
		...mapActions( 'scope-default', [
			'updateList',
			'apiFetch',
			'fetchPage',
		] ),
		refund() {
			this.setApiData( this[ 'refund/apiData' ] );
			this[ 'refund/toggleLoading' ]();

			this.apiFetch().then( res => {
				this.$CXNotice.add( {
					message: res.message,
					type: 'success',
					duration: 4000,
				} );

				this[ 'refund/closePopup' ]();
				this.fetchPage();

			} ).catch( error => {
				this.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration: 4000,
				} );
			} ).finally( () => {
				this[ 'refund/toggleLoading' ]();
				this.setApiData( {} );
			} );
		},
	},
};
</script>

<style lang="scss">


</style>