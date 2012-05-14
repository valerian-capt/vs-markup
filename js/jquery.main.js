// init page
jQuery(function(){
	initCapsDetected();
});

function initCapsDetected(){
	var alertBox = jQuery('.alert');
	jQuery('.sign-in input:password').keyup(function(e) { 
		if ( jQuery(this).val().toUpperCase() === jQuery(this).val() && jQuery(this).val().toLowerCase() !== jQuery(this).val() && !e.shiftKey ) alertBox.show();
		else alertBox.hide();
	});
}
