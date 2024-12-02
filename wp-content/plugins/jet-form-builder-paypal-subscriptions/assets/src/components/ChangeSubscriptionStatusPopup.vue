<template>
	<cx-vui-popup
		v-model="isShowPopup"
		:footer="false"
		@on-cancel="closePopup"
		body-width="50vw"
	>
		<template #title>
			{{ current.title }}
		</template>
		<template #content>
			<cx-vui-textarea
				:label="current.control_label"
				:description="current.control_desc"
				:wrapper-css="[ 'equalwidth' ]"
				size="fullwidth"
				v-model="current.reason"
			></cx-vui-textarea>
			<div class="jfb-action-buttons">
				<cx-vui-button
					button-style="accent"
					@click="$emit( 'change-status' )"
					:loading="loading"
					size="mini"
				>
					<template #label>{{ current.ok_label }}</template>
				</cx-vui-button>
				<cx-vui-button
					@click="closePopup"
					size="mini"
				>
					<template #label>{{ current.no_label }}</template>
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
	name: 'ChangeSubscriptionStatusPopup',
	computed: {
		...mapGetters( 'subscription', [
			'current',
			'isShowPopup',
			'loading',
		] ),
	},
	methods: {
		...mapMutations( 'subscription', [
			'closePopup',
		] ),
	},
};
</script>

<style scoped>
.jfb-action-buttons {
	display: flex;
	gap: 1em;
}
</style>