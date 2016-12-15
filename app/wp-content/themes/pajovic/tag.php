<?php 

// THE Archive page. If no tag pages are available, tags will fall back to archive page.


get_header(); 

$tag = get_queried_object();

// Basic WP_QUERY
	$args = array(
		'posts_per_page'   => -1,
		'offset'           => 0,
		'orderby'          => 'date',
		'order'            => 'DESC',
		'post_type'        => 'post',
		'post_status'      => 'publish',
		'tag'	 			=> $tag->slug
	);
	$the_query = new WP_Query( $args );
	if ( $the_query->have_posts() ) :
		while ( $the_query->have_posts() ) :
		$the_query->the_post();
		
			// $slika = get_field('hero_slika');	
			// the_permalink();
			the_title();
			echo '<br>';

		endwhile;
	endif;
	wp_reset_postdata();


get_footer();