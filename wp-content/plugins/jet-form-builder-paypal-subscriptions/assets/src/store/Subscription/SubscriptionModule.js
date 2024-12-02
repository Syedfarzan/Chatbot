import popup from '../PopupModule';

export default {
	namespaced: true,
	getters: {
		apiData: ( { popup } ) => {
			return {
				reason: popup.current.reason,
			}
		},
	},
	modules: {
		popup
	}
}