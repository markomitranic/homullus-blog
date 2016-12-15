<?php 
/*
Template Name: Generic Page Template
*/

// Template name must be unique and filled in. The template will automatically be shown as a Page Template.

get_header(); 
get_template_part('sidebar');
the_post(); 

the_content();

get_footer();



// In case we just want to use single page template or the FLex template, we can specify:

// get_template_part("single");

?>