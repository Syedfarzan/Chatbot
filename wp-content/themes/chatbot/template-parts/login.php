<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package chatbot
 */
/* Template Name: Login */
get_header()
?>


<?php echo do_shortcode('[pms-login redirect_url="http://localhost/chatbott/account/" register_url="http://localhost/chatbott/register/" lostpassword_url="http://localhost/chatbott/recover-password"]'); ?>



<?php
get_footer();