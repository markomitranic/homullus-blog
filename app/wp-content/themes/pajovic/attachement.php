<?php

// Attachement Page
// This is a special page. Used when viewing a single attachment. This page may not be needed at all if you are certain that you wont use links to attachement pages, ever... Your choice.
// More info: http://www.hongkiat.com/blog/wordpress-attachment-pages/


get_header();

the_post(); 

the_content();

get_footer();



?>