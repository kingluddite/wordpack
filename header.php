<?php
/**
 * The header for our theme
  *
   * This is the template that displays all of the <head> section and everything up until <div id="content">
    *
     * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
      *
       * @package underscores
        */

?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?php wp_title( '|', true, 'right' ); ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
 <div id="header">aaa
     <img src="images/logo.gif" alt="Jay Skript and the Domsters" />
   </div>
   <?php
   $defaults = array(
     'theme_location'  => 'main-menu',
     'menu'            => '',
     'container'       => 'nav',
     'container_class' => '',
     'container_id'    => 'navigation',
     'menu_class'      => '',
     'menu_id'         => '',
     'echo'            => true,
     'fallback_cb'     => 'wp_page_menu',
     'before'          => '',
     'after'           => '',
     'link_before'     => '',
     'link_after'      => '',
     'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
     'depth'           => 0,
     'walker'          => ''
   );
   wp_nav_menu( $defaults );
  ?>

