<?php

// 404 Error Page
// We need to say "Sorry you're wrong" to our users, but we need to do it in a gracious manner. So we need header and footer to be seen, and we need some content in the middle. This content can be suggestions, or an animation, or anything you wish.
// Creating an error page: https://codex.wordpress.org/Creating_an_Error_404_Page


get_header();


echo '404 Error. Sorry, the page does not exist. :(';

get_footer();


?>