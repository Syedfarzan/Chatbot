<template>
	<cx-vui-popup
		v-model="isShowPopup"
		body-width="60vw"
		:footer="false"
		@on-cancel="closePopup"
		class="jfb-popup"
	>
		<template #content>
			<h3>{{ __( 'Payment Details', 'jet-form-builder' ) }}</h3>
			<div class="cx-vui-panel">
				<cx-vui-input
					:label="current.contact_email.label"
					:wrapper-css="[ 'equalwidth' ]"
					:value="current.contact_email.value"
					size="fullwidth"
					disabled
				/>
				<cx-vui-input
					:label="current.gross.label"
					:wrapper-css="[ 'equalwidth' ]"
					:value="current.gross.value"
					size="fullwidth"
					disabled
				/>
				<cx-vui-input
					:label="current.invoice_id.label"
					:wrapper-css="[ 'equalwidth' ]"
					v-model="current.invoice_id.value"
					size="fullwidth"
				/>
				<cx-vui-input
					:label="current.note_to_payer.label"
					:wrapper-css="[ 'equalwidth' ]"
					v-model="current.note_to_payer.value"
					size="fullwidth"
				/>
				<cx-vui-button
					button-style="accent"
					@click="$emit( 'refund' )"
					:loading="loading"
					size="mini"
				>
					<template #label>{{ __( 'Issue Refund', 'jet-form-builder' ) }}</template>
				</cx-vui-button>
			</div>
		</template>
	</cx-vui-popup>
</template>

<script>
const {
	mapMutations,
	mapState,
	mapActions,
	mapGetters,
} = Vuex;

const { i18n } = JetFBMixins;

export default {
	name: 'RefundSalePopup',
	mixins: [ i18n ],
	computed: {
		...mapGetters( 'refund', [
			'current',
			'isShowPopup',
			'loading',
		] )
	},
	methods: {
		...mapMutations( 'refund', [
			'closePopup'
		] )
	}
};
</script>

<style lang="scss">

.jfb-popup {
	.cx-vui-popup__body {
		background: #f0f0f1;
	}

	.cx-vui-panel {
		padding-bottom: 1em;
		text-align: end;

		.cx-vui-button {
			margin-right: 20px;
		}
	}
}

</style>