<template>
	<FormBuilderPage
		:title="__( 'JetFormBuilder Subscriptions', 'jet-form-builder' )"
	>
		<TablePagination/>
		<EntriesTable/>
		<TablePagination/>
		<ChangeSubscriptionStatusPopup
			@change-status="runRowAction"
		/>
	</FormBuilderPage>
</template>

<script>
import ChangeSubscriptionStatusPopup from '../../components/ChangeSubscriptionStatusPopup';

const { applyFilters } = wp.hooks;
const { apiFetch } = wp;

const {
	GetIncoming,
	i18n,
	PromiseWrapper,
	RunActionsMixin,
} = window.JetFBMixins;

const {
	TablePagination,
	EntriesTable,
	FormBuilderPage,
} = JetFBComponents;

const {
	CHOOSE_ACTION,
	CLICK_ACTION,
} = JetFBConst;

const {
	getSearch,
	createPath,
	addQueryArgs,
} = window.JetFBActions;

const {
	mapMutations,
	mapState,
	mapActions,
	mapGetters,
} = Vuex;

export default {
	name: 'jfb-subscriptions',
	components: {
		ChangeSubscriptionStatusPopup,
		TablePagination,
		EntriesTable,
		FormBuilderPage,
	},
	created() {
		/** Suspend */
		this.setBeforeAction( {
			action: 'suspend',
			callback: this.beforeChange.bind( this ),
		} );
		this.setActionPromises( {
			action: 'suspend',
			promise: this.promiseWrapper( this.runChangeStatus.bind( this ) ),
		} );

		/** Cancel */
		this.setBeforeAction( {
			action: 'cancel',
			callback: this.beforeChange.bind( this ),
		} );
		this.setActionPromises( {
			action: 'cancel',
			promise: this.promiseWrapper( this.runChangeStatus.bind( this ) ),
		} );

		/** Delete */
		this.setActionPromises( {
			action: 'delete',
			promise: this.promiseWrapper( this.delete.bind( this ) ),
		} );
	},
	mixins: [ i18n, PromiseWrapper ],
	computed: {
		...mapGetters( [
			'subscription/apiData',
		] ),
	},
	methods: {
		...mapMutations( 'scope-default', [
			'setList',
			'setActionsList',
			'setActionPromises',
			'setBeforeAction',
			'toggleLoading',
			'setApiData',
		] ),
		...mapMutations( [
			'subscription/openPopup',
			'subscription/closePopup',
			'subscription/toggleLoading',
		] ),
		...mapActions( 'scope-default', [
			'fetchPage',
			'updateList',
			'runRowAction',
			'apiFetch',
		] ),
		beforeChange( checked, context, payload ) {
			this[ 'subscription/openPopup' ]( payload );
		},
		runChangeStatus( { resolve, reject } ) {
			this.setApiData( this[ 'subscription/apiData' ] );
			this[ 'subscription/toggleLoading' ]();

			this.apiFetch().then( response => {
				resolve( response.message );

				this.fetchPage();
				this[ 'subscription/closePopup' ]();
			} ).catch( reject ).finally( () => {
				this[ 'subscription/toggleLoading' ]();
			} );
		},
		delete( { resolve, reject } ) {
			this.apiFetch().then( response => {
				this.updateList( response );

				resolve( response.message );
			} ).catch( reject );
		},
	},
};

</script>

<style lang="scss">

</style>