<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package chatbot
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'chatbot' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'chatbot' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'chatbot' ), 'chatbot', '<a href="http://underscores.me/">Underscores.me</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
<script src="<?php bloginfo('template_directory'); ?>/assets/vendors/bootstrap/bootstrap.min.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/assets/vendors/bootstrap/popper.min.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/assets/vendors/jQuery/jquery-3.6.1.min.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/assets/js/subscription-handler.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/assets/vendors/fancybox/fancybox.umd.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/assets/js/custom.js"></script>
</body>
</html>
