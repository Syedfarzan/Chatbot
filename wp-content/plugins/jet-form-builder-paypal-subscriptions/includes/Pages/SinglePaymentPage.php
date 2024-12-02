<?php


namespace Jet_FB_Paypal\Pages;


use Jet_FB_Paypal\Pages\Actions\RefundSinglePayment;
use Jet_Form_Builder\Gateways\Pages\Single_Payment_Page;

class SinglePaymentPage extends Single_Payment_Page {

	use PaypalPageTrait;

}