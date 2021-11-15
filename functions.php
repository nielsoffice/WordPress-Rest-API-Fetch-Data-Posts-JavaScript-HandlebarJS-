<?php 

// Enqueue own styles
function rest_api_fetch_register() {

    wp_enqueue_script('Handlebar-JS','https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js', NULL , NULL , true );
    wp_enqueue_script('app-fetch-rest-api-JS', get_template_directory_uri() . '/js/app-fetch-rest-api.js', NULL , 1.0 , true );
  
  }
  add_action( 'wp_enqueue_scripts', 'rest_api_fetch_register' );