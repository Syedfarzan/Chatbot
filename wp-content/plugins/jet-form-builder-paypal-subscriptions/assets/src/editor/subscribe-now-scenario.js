const {
	compose,
	useCopyToClipboard,
} = wp.compose;

const {
	withSelect,
	withDispatch,
} = wp.data;

const {
	SelectControl,
	BaseControl,
	CustomSelectControl,
	TextControl,
	Button,
	Icon,
} = wp.components;

const { __ } = wp.i18n;

const {
	withSelectFormFields,
	withSelectGateways,
	withDispatchGateways,
} = JetFBHooks;

const { GatewayFetchButton, BaseHelp } = JetFBComponents;

const { RawHTML } = wp.element;

function SubscribeNowScenario( {
	gatewayGeneral,
	formFields,
	getSpecificOrGlobal,
	loadingGateway,
	currentScenario,
	setScenario,
	scenarioSource,
	noticeOperations,
	scenarioLabel,
} ) {

	const { data: fetchedPlans = [] } = loadingGateway.response;

	const displayNotice = status => response => {
		noticeOperations.removeNotice( gatewayGeneral.gateway );
		noticeOperations.createNotice( {
			status,
			content: response.message,
			id: gatewayGeneral.gateway,
			actions: response?.actions ?? [],
		} );
	};

	const getPlan = function ( planID ) {
		return fetchedPlans.find( plan => plan.key === planID );
	};

	const currentPlan = getPlan( currentScenario.plan_manual );
	const copyRef = useCopyToClipboard( currentScenario.plan_manual, console.log );

	return <>
		<BaseControl
			label={ scenarioLabel( 'fetch_button_label' ) }
		>
			<div className="jet-user-fields-map__list">
				{ (
				  ! loadingGateway.success && ! loadingGateway.loading
				  ) && <span
					  className={ 'description-controls' }
				  >
					{ scenarioLabel( 'fetch_button_help' ) }
				</span> }
				<GatewayFetchButton
					initialLabel={ scenarioLabel( 'fetch_button' ) }
					label={ scenarioLabel( 'fetch_button_retry' ) }
					apiArgs={ {
						...scenarioSource.fetch,
						data: {
							client_id: getSpecificOrGlobal( 'client_id' ),
							secret: getSpecificOrGlobal( 'secret' ),
						},
					} }
					onFail={ displayNotice( 'error' ) }
				/>
			</div>
		</BaseControl>
		{ loadingGateway.success && <>
			<SelectControl
				label={ scenarioLabel( 'subscribe_plan_field' ) }
				key={ 'form_fields_subscribe_plan_field' }
				value={ currentScenario.plan_field }
				labelPosition='side'
				onChange={ plan_field => setScenario( { plan_field } ) }
				options={ formFields }
			/>
			{ ! currentScenario.plan_field && <>
				<BaseControl
					label={ scenarioLabel( 'subscribe_plan' ) }
					key='scenario_plan_manual'
				>
					<CustomSelectControl
						hideLabelFromVision
						options={ fetchedPlans }
						value={ currentPlan }
						onChange={ ( { selectedItem } ) => {
							if ( selectedItem.disabled ) {
								return;
							}
							setScenario( { plan_manual: selectedItem.key } );
						} }
					/>
				</BaseControl>
				{ (
				  currentPlan && currentPlan.key
				  ) && <>
					  <Button
						  isLink
						  ref={ copyRef }
						  style={ {
							  marginBottom: currentPlan.description ? 'unset' : '1em',
						  } }
					  >
						  { scenarioLabel( 'copy_plan_button' ) }
					  </Button>
					  { currentPlan.description && <BaseHelp>
						  <RawHTML>{ currentPlan.description }</RawHTML>
					  </BaseHelp> }
				  </> }
			</> }
			<SelectControl
				label={ scenarioLabel( 'quantity_field' ) }
				key={ 'form_fields_quantity_field' }
				value={ currentScenario.quantity_field }
				labelPosition='side'
				onChange={ quantity_field => setScenario( { quantity_field } ) }
				options={ formFields }
			/>
			{ ! currentScenario.quantity_field && <TextControl
				key={ 'control_quantity_manual' }
				label={ scenarioLabel( 'quantity_manual' ) }
				value={ currentScenario.quantity_manual }
				onChange={ quantity_manual => setScenario( { quantity_manual } ) }
			/> }
		</> }
	</>;
}

export default compose(
	withSelect( ( ...props ) => (
		{
			...withSelectFormFields( [], __( 'Manual Input', 'jet-form-builder' ) )( ...props ),
			...withSelectGateways( ...props ),
		}
	) ),
	withDispatch( ( ...props ) => (
		{
			...withDispatchGateways( ...props ),
		}
	) ),
)( SubscribeNowScenario );