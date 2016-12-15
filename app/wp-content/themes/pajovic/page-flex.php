<?php 
/*
Template Name: Flexible Page Template
*/

// Template name must be unique and filled in. The template will automatically be shown as a Page Template.
// This template will display slices from the custom page builder using the sliceLoop method from funcions.php

get_header(); 

the_post(); 

the_content();

sliceLoop('slices_flex');

get_footer();

?>