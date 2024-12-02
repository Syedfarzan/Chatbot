<?php


namespace Jet_FB_Paypal\TableViews\Columns;


use Jet_FB_Paypal\TableViews\Actions\RefundPaymentIsset;
use Jet_FB_Paypal\TableViews\Actions\ViewPayment;
use Jet_FB_Paypal\TableViews\Actions\ViewPaymentSubscriptionIsset;
use Jet_Form_Builder\Admin\Table_Views\Actions\View_Single_Action;
use Jet_Form_Builder\Admin\Table_Views\Columns\Base_Row_Actions_Column;

class PaymentRowActions extends Base_Row_Actions_Column {

	/**
	 * @return View_Single_Action[]
	 */
	protected function get_actions(): array {
		return array(
			new ViewPayment(),
			new ViewPaymentSubscriptionIsset(),
			new RefundPaymentIsset(),
		);
	}
}