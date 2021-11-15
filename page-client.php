<?php

use \PHPWine\VanillaFlavour\Merge\Html;

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header(); ?> 

 <button id="rest-btn"> Click to load More </button>
 <div id="postContainer"></div>


 <script id="posts-template" type="text/template">
   
  {{#each this}}

   <h2> {{{title.rendered}}} </h2>  
    {{{content.rendered}}} 
 
  {{/each}}


  </script>
<?php get_footer(); ?> 
