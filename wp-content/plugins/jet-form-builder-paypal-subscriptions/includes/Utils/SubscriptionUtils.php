<?php


namespace Jet_FB_Paypal\Utils;

use Jet_FB_Paypal\DbModels\SubscriptionModel;
use Jet_FB_Paypal\DbModels\SubscriptionNoteModel;
use Jet_FB_Paypal\Logic\SubscribeNow;
use Jet_FB_Paypal\Pages\SingleSubscriptionPage;
use Jet_FB_Paypal\Resources\Subscription;
use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenario_Logic_Base;

class SubscriptionUtils {

	public static function default_statuses(): array {
		return array(
			SubscribeNow::APPROVAL_PENDING,
			SubscribeNow::APPROVED,
			SubscribeNow::ACTIVE,
			SubscribeNow::SUSPENDED,
			SubscribeNow::CANCELLED,
			SubscribeNow::EXPIRED,
		);
	}

	public static function broken_statuses(): array {
		return array(
			SubscribeNow::APPROVAL_PENDING,
			SubscribeNow::APPROVED,
			SubscribeNow::EXPIRED,
			SubscribeNow::CANCELLED,
		);
	}

	public static function is_custom_status( $record ): bool {
		$status = self::prepare_status( $record );

		return ( ! in_array( $status, self::default_statuses(), true ) );
	}

	private static function prepare_status( $record ): string {
		if ( is_array( $record ) ) {
			return $record['status'] ?? '';
		}

		return $record;
	}

	public static function is_broken( $record ): bool {
		$status = self::prepare_status( $record );

		return in_array( $status, self::broken_statuses(), true );
	}

	public static function is_active( $record ): bool {
		$status = self::prepare_status( $record );

		return SubscribeNow::ACTIVE === $status;
	}

	public static function is_expired( $record ): bool {
		$status = self::prepare_status( $record );

		return SubscribeNow::EXPIRED === $status;
	}

	public static function is_cancelled( $record ): bool {
		$status = self::prepare_status( $record );

		return SubscribeNow::CANCELLED === $status;
	}

	public static function is_suspended( $record ): bool {
		$status = self::prepare_status( $record );

		return SubscribeNow::SUSPENDED === $status;
	}

	public static function can_be_suspended( $record ): bool {
		$status = self::prepare_status( $record );

		return (
			SubscribeNow::ACTIVE === $status
			|| self::is_custom_status( $status )
		);
	}

	public static function can_be_cancelled( $record ): bool {
		$status = self::prepare_status( $record );

		return (
			SubscribeNow::SUSPENDED === $status
			|| SubscribeNow::ACTIVE === $status
			|| self::is_custom_status( $status )
		);
	}

	public static function status_note( string $old_status, string $new_status ): string {
		if ( $old_status === $new_status ) {
			return '';
		}

		return sprintf(
			__( 'Subscription status changed from %1$s to %2$s', 'jet-form-builder' ),
			$old_status,
			$new_status
		);
	}

	public static function is_single(): bool {
		return is_a( jet_fb_current_page(), SingleSubscriptionPage::class );
	}

}