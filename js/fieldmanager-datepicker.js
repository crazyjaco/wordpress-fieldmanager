( function( $ ) {
	fm.datepicker = {
		add_datepicker: function() {
			$( '.fm-datepicker-popup:visible' ).each( function() {
				if ( !$( this ).hasClass( 'fm-has-date-picker' ) ) {
					var opts = $( this ).data( 'datepicker-opts' );
					$( this ).datepicker( opts ).addClass( 'fm-has-date-picker' );
				}
			} );
		}
	};

	fmLoadModule( fm.datepicker.add_datepicker );

	$( document ).on( 'fm_collapsible_toggle fm_added_element fm_displayif_toggle fm_activate_tab', fm.datepicker.add_datepicker );
	$( document ).on( 'focus', 'input[class*="fm-datepicker-group"]:not(.fm-has-date-picker)', fm.autocomplete.add_datepicker );

} ) ( jQuery );
