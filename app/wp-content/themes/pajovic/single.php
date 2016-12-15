<?php

// Single Post template
// Single Post is the default template for all Posts. Pages on the other hand use page.php!
// We CAN use a regular (header|content|footer) structure for all posts the same, but we CAN also use the category based divination as shown below. In the example, this page is loaded by default. It checks what category the current post is in (ID), and loads a completely unrelated template file in all it's glory!

if (in_category('8')) { 
	include ('hacking_news.php');
}
else if (in_category('24')) {
	include ('posts_about_voldemort.php');
}
else {
	include ('page.php');
}


