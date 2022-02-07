+(function (window, document) {

  'use strict';
	
	function webserial_button_onclick(input_button, input_id) {
		if (document.getElementById(input_id)) {
			if (input_button=="webserial_open")
				document.getElementById(input_id).addEventListener('click', async () => {startSerial();});
			else
				document.getElementById(input_id).addEventListener('click', async () => {buttonClose();});	
		}
	}
  
	window.webserial_button_onclick = webserial_button_onclick;

}(window, window.document));
