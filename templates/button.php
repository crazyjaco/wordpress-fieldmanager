<?php
/**
 * Default template for Fieldmanager_Button
 *
 * @package Fieldmanager
 */
?>
<input
	class="fm-button-element button-secondary <?php echo esc_attr( $this->field_class ); ?>"
	type="button"
	name="<?php echo esc_attr( $this->get_form_name() ); ?>"
	id="<?php echo esc_attr( $this->get_element_id() ); ?>"
	value="<?php echo esc_attr( $this->attributes['button_text'] ); ?>"
	<?php echo $this->get_element_attributes(); // Escaped interally. xss ok. ?>
/>