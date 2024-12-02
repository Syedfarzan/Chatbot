<?php
/**
 * Template Name: Chatbot Subscription
 * 
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package chatbot
 */

get_header();
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <?php 
        while ( have_posts() ) :
            the_post();
            
            // Display the page content
            the_content();
            
            // Display the subscription shortcode
            echo do_shortcode('[chatbot_subscription]');

        endwhile;
        ?>
    </main>
</div>

<?php
get_sidebar();
get_footer();