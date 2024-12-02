<?php


namespace Jet_FB_Paypal\Pages;


use Jet_FB_Paypal\Plugin;
use Jet_Form_Builder\Admin\Pages\Base_Page;

trait PaypalPageTrait {

	public function base_script_url(): string {
		return Plugin::instance()->plugin_url( "assets/js/pages/{$this->slug()}.js" );
	}

}