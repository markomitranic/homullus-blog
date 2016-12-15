<!--
Header Template
This is just a suggestion of what woudl be used within the header when making Wordpress templates.

Header menu can be created simply with calling a function. It will generate a simple ul>li>a list of menu items from that particular menu.
Creating header menus: https://developer.wordpress.org/reference/functions/wp_nav_menu/

If you are not into that kind of stuff and need special elements, classes and stuff, you can create a custom loop menu. This is what the second example is for.
-->


<!-- echo site_url(); -->
<!-- $is_home = (is_front_page()) ? true : false; -->
<!-- echo ($is_home) ? 'class="hidden"' : ''; -->

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php wp_title('');?></title>
	<meta name="description" content="<?php bloginfo('description'); ?>"> <!-- TODO: Excerpt -->
	<meta name="author" content="Marko Mitranić">

	<!-- FAVICON IMPORTS -->
  	<link rel="icon" type="image/png" href="img/favicon/favicon-16x16.png" sizes="16x16" />
 	<link rel="icon" type="image/png" href="img/favicon/favicon-32x32.png" sizes="32x32" />

    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <?php wp_head(); ?>
</head>
<body>