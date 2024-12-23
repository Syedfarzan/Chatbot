<?php


namespace JetPaypalCore\JetEngine;


use JetPaypalCore\PreventRenderFormBase;

abstract class PreventFormRender {

	use PreventRenderFormBase;

	public function form_id_key() {
		return '_form_id';
	}

	public function action_name() {
		return 'jet-engine/forms/pre-render-form';
	}

}