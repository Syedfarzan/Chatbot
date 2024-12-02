<?php

namespace Jet_FB_Paypal;

use Jet_FB_Paypal\Proxy\AdminPages;
use Jet_FB_Paypal\Proxy\AdminSinglePages;
use Jet_FB_Paypal\Proxy\EditorAssets;
use Jet_FB_Paypal\Proxy\RestApiController;
use Jet_FB_Paypal\Proxy\ScenariosLogic;
use Jet_FB_Paypal\Proxy\ScenariosViews;
use JetPaypalCore\LicenceProxy;

if ( ! defined( 'WPINC' ) ) {
	die();
}

class Plugin {
	/**
	 * Instance.
	 *
	 * Holds the plugin instance.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 * @var Plugin
	 */
	public static $instance = null;

	public $slug = 'jet-form-builder-paypal-subscriptions';

	public function __construct() {
		/** For correct work of Dashboard with addons to JetFormBuilder */
		LicenceProxy::register();

		AdminPages::register();
		AdminSinglePages::register();

		ScenariosLogic::register();

		ScenariosViews::register();

		EditorAssets::register();

		RestApiController::register();
	}

	public function get_version() {
		return JET_FB_PAYPAL_VERSION;
	}

	public function plugin_url( $path ) {
		return JET_FB_PAYPAL_URL . $path;
	}

	public function plugin_dir( $path = '' ) {
		return JET_FB_PAYPAL_PATH . $path;
	}

	/**
	 * Instance.
	 *
	 * Ensures only one instance of the plugin class is loaded or can be loaded.
	 *
	 * @return Plugin An instance of the class.
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

}

Plugin::instance();