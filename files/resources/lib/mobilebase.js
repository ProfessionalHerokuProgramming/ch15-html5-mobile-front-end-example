function createSpinner(pathToSpinnerImg) {
	if($('body.ui-mobile-viewport #ajaxBusy').length == 0) {
		$(document).bind('pageinit', function(){
			if($('body.ui-mobile-viewport #ajaxBusy').length == 0) {
				$('body.ui-mobile-viewport').append('<div id="ajaxBusy"><p><img src=' + pathToSpinnerImg + '></p></div>');
				bindSpinner();
			}
		});
	} 
}

function bindSpinner() {
	$(document).ajaxStart(showSpinner).ajaxStop(hideSpinner);
}


function unbindSpinner(){
	$(document).unbind("ajaxStart ajaxStop");	
}


function showSpinner(){
	$('#ajaxBusy').show();
}


function hideSpinner(){
	$('#ajaxBusy').hide();
}