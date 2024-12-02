import SubscribeNowScenario from './subscribe-now-scenario';

const {
		  registerGateway,
	  } = JetFBActions;

const { __ } = wp.i18n;

const {
	BaseControl,
} = wp.components;

const scenario = 'SUBSCRIBE_NOW';
const gateway = 'paypal';

registerGateway(
	gateway,
	SubscribeNowScenario,
	scenario,
);

registerGateway(
	gateway,
	({ CURRENT_SCENARIO, Placeholder }) => {
		if ( CURRENT_SCENARIO !== scenario ) {
			return Placeholder;
		}
		return <BaseControl
			key="payment_result_macros_base_control"
		>
			<h4>
				{ __( 'Available macros list: ', 'jet-form-builder' ) }<br/>
				{ __( '%gateway_status% - subscription status returned from payment gateway;', 'jet-form-builder' ) }<br/>
				{ __( '%field_name% - replace "field_name" with any field name from the form;', 'jet-form-builder' ) }<br/>
			</h4>
		</BaseControl>;
	},
	'macrosList',
);