<template>
	<FormBuilderPage>
		<PostBoxGrid/>
		<RefundSalePopup
			@refund="refund"
		/>
	</FormBuilderPage>
</template>

<script>
import RefundSalePopup from '../../components/RefundSalePopup';

const {
	PostBoxGrid,
	FormBuilderPage,
} = JetFBComponents;

const {
	mapMutations,
	mapState,
	mapActions,
	mapGetters,
} = Vuex;

const { apiFetch } = wp;

export default {
	name: 'jfb-payments-single',
	components: {
		PostBoxGrid,
		FormBuilderPage,
		RefundSalePopup,
	},
	created() {
		jfbEventBus.$on( 'payment-details-refund', () => {
			this[ 'refund/openPopup' ]( this.current.payload );
		} );
	},
	computed: {
		...mapGetters( [
			'refund/apiData',
		] ),
		...mapGetters( 'scope-payment-details/actions', [
			'current'
		] )
	},
	methods: {
		...mapMutations( 'scope-payment-details/actions', [
			'toggleLoading',
			'toggleDisabled',
		] ),
		...mapMutations( [
			'toggleDoingAction',
			'refund/openPopup',
			'refund/toggleLoading',
			'refund/closePopup',
		] ),
		...mapActions( [
			'scope-subscription-details/fetchPage',
			'scope-payment-details/fetchPage',
		] ),
		refund() {
			const options = {
				...this.current.endpoint,
				data: this[ 'refund/apiData' ],
			};

			this[ 'refund/toggleLoading' ]();
			this.toggleLoading();
			this.toggleDoingAction();
			jfbEventBus.reactiveCounter ++;

			apiFetch( options ).then( response => {
				this.$CXNotice.add( {
					message: response.message,
					type: 'success',
					duration: 4000,
				} );
				this.toggleDisabled();

				this[ 'refund/closePopup' ]();
				this[ 'scope-subscription-details/fetchPage' ]();
				this[ 'scope-payment-details/fetchPage' ]();
			} ).catch( error => {
				this.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration: 4000,
				} );
			} ).finally( () => {
				this.toggleDoingAction();
				this.toggleLoading();
				this[ 'refund/toggleLoading' ]();
			} );
		},
	},
};
</script>

<style>

</style>