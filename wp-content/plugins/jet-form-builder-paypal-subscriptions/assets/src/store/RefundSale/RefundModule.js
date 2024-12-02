import popup from '../PopupModule';

export default {
	namespaced: true,
	getters: {
		apiData: ( { popup } ) => {
			return {
				note_to_payer: popup.current.note_to_payer.value,
				invoice_id: popup.current.invoice_id.value,
			}
		}
	},
	modules: {
		popup
	}
}