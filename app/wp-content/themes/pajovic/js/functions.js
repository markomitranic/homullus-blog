var mobileMenu = {
	finished : false,
	init : function() {
		if (this.finished === false) {

			//Calculate width of all menu items and fix the scroll width if needed
			var width = 0;
			$('#sidebar nav ul li').each(function() { width += $(this).outerWidth( true ); });

			//Apply new width to element, with +10px just in case.
			$('#sidebar nav ul').css('width', width + 10);

			//Mark task as done, so that we dont overflow the DOM with junk
			this.finished = true;
		}
	},
	positionCenter : function() {
		//calculate menu position
		//scrollleft
		//.active
	}
}

function escapeHtml() {
	// Get all elements with multiline PRE+code 
	var codeEl = $('pre code');
	// Loop through them and escape text, in the end
	// call the button creation function
	codeEl.each(function() {
		var that = $(this);
		var text = that.html();
		that.text(text); // Replace contents with escaped
		return copyAllCode(that, text); // Send Scope and unescaped text
	});
}
escapeHtml();

function copyAllCode(that, input) {
	// Find all boxes matching pre+code selector
	// and add a new copyButton element to all of them
	var codeEl = that;
	$('<div>', {
		text: 'Click here to copy',
		class: 'text-copy-tooltip'
	}).prependTo(codeEl);
	// Start listener on the button element,
	// gets text and sets it to clipboard
	$('.text-copy-tooltip').on('click', function() {
		var text = input;
		sendToClipboard(text);
	});
	// Creates a new textarea element far away from sight
	// fills it with the copied text, selects and
	// adds it to clipboard, removes the element
	function sendToClipboard(text) {
		$('<textarea>', {
			text: text,
			id: 'clipboardArea'
		}).appendTo('body').select();
		document.execCommand('copy');
		$('#clipboardArea').remove();
	}
}

(function(){
	var scrollEl = $('.icon-scroll');
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();

	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    var percent = scrollPercent(scroll);
	    animate(percent);
	});

	function scrollPercent(pxFromTop) {
	    var onePercentInPx = (documentHeight - windowHeight) / 100;
	    var result = Math.floor(pxFromTop / onePercentInPx);
		return result;
	}
	function animate(percent) {
		scrollEl.css('height', percent + "%");
	}
})();


