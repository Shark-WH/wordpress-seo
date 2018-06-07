<?php

/**
 * WPSEO plugin file.
 *
 * @package WPSEO\Internals
 */

class OpenGraph {

	/**
	 * @var string
	 */
	private $title;

	/**
	 * @var string
	 */
	private $description;

	/**
	 * @var string
	 */
	private $image;

	/**
	 * OpenGraph constructor.
	 *
	 * @param string $title 	  The OpenGraph title.
	 * @param string $description The OpenGraph description.
	 * @param string $image 	  The OpenGraph image.
	 *
	 * @throws Exception
	 */
	public function __construct( $title, $description, $image ) {
		if ( ! empty( $title ) && ! WPSEO_Validator::is_string( $title ) ) {
			throw WPSEO_Invalid_Type_Exception::invalid_parameter_type( $title, 'title', 'string' );
		}

		$this->title = $title;

		if ( ! empty( $description ) && ! WPSEO_Validator::is_string( $description ) ) {
			throw WPSEO_Invalid_Type_Exception::invalid_parameter_type( $description, 'description', 'string' );
		}

		$this->description = $description;

		if ( ! empty( $image ) && ! WPSEO_Validator::is_string( $image ) ) {
			throw WPSEO_Invalid_Type_Exception::invalid_parameter_type( $image, 'image', 'string' );
		}

		$this->image = $image;
	}

	/**
	 * Returns an array representation of the OpenGraph object.
	 *
	 * @return array The object as an array.
	 */
	public function to_array() {
		return array(
			'og_title' 		 => $this->title,
			'og_description' => $this->description,
			'og_image' 		 => $this->image,
		);
	}
}
