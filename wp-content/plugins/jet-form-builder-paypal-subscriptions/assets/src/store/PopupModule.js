export default {
	state: () => (
		{
			isShowPopup: false,
			current: {},
			loading: false,
		}
	),
	getters: {
		current: state => {
			return state.current;
		},
		isShowPopup: state => {
			return state.isShowPopup;
		},
		loading: state => {
			return state.loading;
		}
	},
	mutations: {
		toggleLoading( state ) {
			state.loading = ! state.loading;
		},
		openPopup( state, value ) {
			state.current = value;
			state.isShowPopup = true;
		},
		closePopup( state ) {
			state.isShowPopup = false;
			state.current = {};
		}
	}
};