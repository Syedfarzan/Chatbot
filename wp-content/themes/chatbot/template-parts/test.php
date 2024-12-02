<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package chatbot
 */
/* Template Name: test */
get_header()
?>

<?php echo do_shortcode('[pms-register subscription_plans]'); ?>

<?php
get_footer();