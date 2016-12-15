<?php

// This is a simple blank page with a Loop.
// Wordpress Tags Usage: https://codex.wordpress.org/Template_Tags


get_header();


echo '<h2>Search Results for: <span>'.get_search_query().'</span></h2>';

get_search_form();
query_posts("s='$s'");

	if (have_posts()) { 				
		$i = 0;
		while (have_posts()) : the_post();
			echo '<a href="'.get_the_permalink().'">
			<h3 class="vesti-naslov" style="">'.get_the_title().'</h3>
			</a>';
			$i++;
		endwhile;

} else {
	echo 'Sorry, there are no results.';
}

get_footer();

?>




