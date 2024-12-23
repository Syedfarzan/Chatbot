<?php


namespace JetPaypalCore\JetEngine;


use JetPaypalCore\PreventFormSubmitBase;

abstract class PreventFormSubmit extends PreventFormSubmitBase {

	protected $action = 'jet_engine_form_booking_submit';

	public function can_init() {
		return (
			function_exists( 'jet_engine' )
		    && jet_engine()->modules->is_module_active( 'booking-forms' )
		);
	}

	public function action_init() {
		return 'init';
	}

	public function manage_hooks_data() {
		return array(
			jet_engine()->forms->handler,
			$this->action,
		);
	}


}