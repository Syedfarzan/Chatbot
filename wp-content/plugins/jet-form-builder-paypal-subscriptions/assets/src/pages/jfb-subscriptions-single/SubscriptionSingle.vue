<template>
	<FormBuilderPage>
		<template #default>
			<PostBoxGrid>
				<template #after-related-payments>
					<TablePagination scope="related-payments"/>
				</template>
				<template #in-footer-notes>
					<div class="jfb-add-note">
						<cx-vui-textarea
							:wrapper-css="[ 'equalwidth' ]"
							size="fullwidth"
							v-model="note"
						></cx-vui-textarea>
						<cx-vui-button
							button-style="accent"
							size="mini"
							@click="addNote"
							:loading="noteLoading"
							:disabled="noteLoading"
						>
							<template #label>{{ __( 'Add Note', 'jet-form-builder-paypal-subscriptions' ) }}</template>
						</cx-vui-button>
					</div>
				</template>
			</PostBoxGrid>
			<ChangeSubscriptionStatusPopup
				@change-status="changeStatusSubscription"
			/>
			<RefundSalePopup
				@refund="refund"
			/>
		</template>
	</FormBuilderPage>
</template>

<script>
import RefundSalePopup from '../../components/RefundSalePopup';
import ChangeSubscriptionStatusPopup from '../../components/ChangeSubscriptionStatusPopup';

const {
	PostBoxGrid,
	TablePagination,
	FormBuilderPage,
	EntriesTable,
} = JetFBComponents;

const { apiFetch } = wp;

const {
	mapGetters,
	mapMutations,
	mapActions,
} = Vuex;

const { i18n } = JetFBMixins;

export default {
	name: 'jfb-subscriptions-single',
	components: {
		ChangeSubscriptionStatusPopup,
		PostBoxGrid,
		TablePagination,
		FormBuilderPage,
		EntriesTable,
		RefundSalePopup,
	},
	created() {
		jfbEventBus.$on( 'subscription-details-cancel', () => {
			this[ 'subscription/openPopup' ]( this.current.payload );
		} );
		jfbEventBus.$on( 'subscription-details-suspend', () => {
			this[ 'subscription/openPopup' ]( this.current.payload );
		} );
		jfbEventBus.$on( 'subscription-details-delete', () => {
			this[ 'scope-subscription-details/actions/defaultDelete' ]();
		} );

		this[ 'scope-related-payments/setBeforeAction' ]( {
			action: 'refund',
			callback: ( checked, context, payload ) => {
				this[ 'refund/openPopup' ]( payload );
			},
		} );
	},
	data() {
		return {
			note: '',
			noteLoading: false,
		};
	},
	mixins: [ i18n ],
	computed: {
		...mapGetters( 'scope-subscription-details/actions', [
			'current',
			'endpointWithPayload',
		] ),
		...mapGetters( 'scope-notes', [
			'options/all',
		] ),
		...mapGetters( [
			'refund/apiData',
			'subscription/apiData',
		] ),
	},
	methods: {
		...mapMutations( 'scope-subscription-details/actions', [
			'toggleLoading',
			'toggleDisabled',
			'disabledAll',
		] ),
		...mapMutations( [
			'toggleDoingAction',
			'scope-related-payments/setApiData',
			'scope-related-payments/setBeforeAction',
			'refund/toggleLoading',
			'refund/closePopup',
			'refund/openPopup',
			'subscription/openPopup',
			'subscription/closePopup',
			'subscription/toggleLoading',
		] ),
		...mapActions( [
			'scope-subscription-details/fetchPage',
			'scope-related-payments/fetchPage',
			'scope-notes/fetchPage',
			'scope-related-payments/apiFetch',
			'scope-subscription-details/actions/defaultDelete',
		] ),
		changeStatusSubscription() {
			const options = {
				...this.current.endpoint,
				data: this[ 'subscription/apiData' ],
			};

			this[ 'subscription/toggleLoading' ]();
			this.toggleLoading();
			this.toggleDoingAction();
			jfbEventBus.reactiveCounter ++;

			apiFetch( options ).then( response => {
				this.$CXNotice.add( {
					message: response.message,
					type: 'success',
					duration: 4000,
				} );
				this.disableActions();

				this[ 'subscription/closePopup' ]();
				this[ 'scope-subscription-details/fetchPage' ]();
				this[ 'scope-notes/fetchPage' ]();
			} ).catch( error => {
				this.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration: 4000,
				} );
			} ).finally( () => {
				this.toggleDoingAction();
				this.toggleLoading();
				this[ 'subscription/toggleLoading' ]();
			} );
		},
		addNote() {
			const options = {
				...this[ 'options/all' ].add_note,
				data: {
					note: this.note,
				},
			};

			this.noteLoading = true;

			apiFetch( options ).then( () => {
				this.note = '';
				this[ 'scope-notes/fetchPage' ]();
			} ).catch( error => {
				this.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration: 4000,
				} );
			} ).finally( () => {
				this.noteLoading = false;
			} );
		},
		disableActions() {
			const { slug } = this.current;

			switch ( slug ) {
				case 'suspend':
					this.toggleDisabled();
					break;
				case 'cancel':
					this.disabledAll();
					break;
			}
		},
		refund() {
			this[ 'scope-related-payments/setApiData' ]( this[ 'refund/apiData' ] );
			this[ 'refund/toggleLoading' ]();

			this[ 'scope-related-payments/apiFetch' ]().then( res => {
				this.$CXNotice.add( {
					message: res.message,
					type: 'success',
					duration: 4000,
				} );

				this[ 'refund/closePopup' ]();
				this[ 'scope-subscription-details/fetchPage' ]();
				this[ 'scope-related-payments/fetchPage' ]();
				this[ 'scope-notes/fetchPage' ]();

			} ).catch( error => {
				this.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration: 4000,
				} );
			} ).finally( () => {
				this[ 'refund/toggleLoading' ]();
				this[ 'scope-related-payments/setApiData' ]( {} );
			} );
		},
	},
};
</script>

<style lang="scss">

#notes-wrapper {
	.cell--text {
		flex: 3.5;
	}

	.jfb-add-note {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 1em;
		gap: 1em;

		.cx-vui-component {
			flex: 1;
			display: block;
			padding: unset;
		}
	}
}

</style>