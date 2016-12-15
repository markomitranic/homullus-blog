function landingHeroInit() {


// First, this unreadable draggable.js, courtesy of css Tricks!!!
(function($) {
    $.fn.drags = function(opt) {

        opt = $.extend({handle:"",cursor:"move"}, opt);

        if(opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
            if(opt.handle === "") {
                var $drag = $(this).addClass('draggable');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', '1000').parents().on("mousemove", function(e) {
                $('.draggable').offset({
                    top:e.pageY + pos_y - drg_h,
                    left:e.pageX + pos_x - drg_w
                }).on("mouseup", function() {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function() {
            if(opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    }
})(jQuery);

function divCreate(object) {
	$('<div>', {
		id: object.id,
		text: object.text || "",
	}).css(object.css).appendTo(landingHero);
	$('#' + object.id).drags();
}



// We will cache the frame element for faster querying
var landingHero = $('#landingHero');
// Now, do some maintenance, hide the fallback and similar stuff
landingHero.css('background-color', '#edece0').children().hide();

// Create all the divs!!!
divCreate({
	id: 'blackSquare',
	css: {
		'height': '228px',
		'width': '86px',
		'background-color': '#333435',
		'top': '102px',
		'left': '255px',
		'z-index': 10,
		'transform': 'rotate(-6deg)',
	},
});
divCreate({
	id: 'grayBox',
	css: {
		'height': '61px',
		'width': '309px',
		'background-color': '#a5a8a4',
		'top': '356px',
		'left': '161px',
		'z-index': 11,
		'transform': 'rotate(2.4deg)',
	},
});
divCreate({
	id: 'redBox',
	css: {
		'height': '74px',
		'width': '74px',
		'background-color': '#b23935',
		'top': '302px',
		'left': '329px',
		'z-index': 12,
		'opacity': 0.9,
	},
});
divCreate({
	id: 'whiteBox',
	css: {
		'height': '189px',
		'width': '164px',
		'background-color': 'white',
		'top': '193px',
		'left': '213px',
		'transform': 'rotate(-13deg)',
		'z-index': 13,
		'opacity': 0.5,
	},
});
divCreate({
	id: 'plusSign',
	css: {
		'top': '236px',
		'left': '319px',
		'z-index': 14,
		'color': 'black',
		'font-size': '140px',
		'font-weight': '100',
	},
	text: "+",
});

}







