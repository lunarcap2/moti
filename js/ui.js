var toggle2Fnc,inputFnc;
$(function() {

	$(document).ready(function() {
		$('#header .gnb-wrap .gnb').attr('data-gnb-length', $('#header .gnb-wrap .gnb>ul>li').not('.my').length);
		tabFnc();//��
		accordionFnc();//���ڵ��
		chkFnc();//����,üũ ����
        fileboxFnc();//���Ϲڽ�
        if($('input.txt').length > 0) inputFnc();//��ǲ�ڽ� 2020.07.07
		inevtFnc();//��ǲ�ؽ�Ʈ ����
        selectboxFnc();//����Ʈ�ڽ�
		selectDown();//����Ʈ�� UL
		selectStyle();//����Ʈ��Ÿ�� 2020.07.03
		hiddenOpen();//���迵��
        checkboxFnc();//üũ�ڽ�.
		chkpassFnc();//üũ�ڽ� ��й�ȣ ���̱�/���߱�
        radioboxFnc();//�����ڽ�
		disableFnc();//��Ȱ����Ű��
		popFnc();//�˾�
		popFnc2();//�˾�
		popFnc3();//�˾�
		popupFnc();//�˾�new
		menuboxFnc();//�޴��ڽ�
		noncheckallFnc();//üũ�ڽ� ��ü
		//checkAllFnc();//üũ�ڽ� ��ü ����,���� 2020.07.03

        if($('.rnb .navi_ul li').length > 0) scrollMove();//��ũ�� �̵�
		if($('.rnb_wrap .rnb_con').length > 0) scrollFixed();//��ũ�� ���޴�
		if ($('.toggle').length > 0) toggle2Fnc();//�����������
		if ($('.datepicker, .datepicker_single').length > 0) useDatePicker();//�޷�
		/* 2020.06.10
		�˻��� �˻���¥,�˻�Ű���� �����ְ� �ϱ� ���� �ּ� ó����
		if ($('.datePick .btn.reset').length > 0) dateReset();//�޷� �ʱ�ȭ
		*/
		if ($('input.placehd, textarea.placehd').length > 0) $('input.placehd, textarea.placehd').placeholder();//input,textarea placehd

		function scrollMove() { //��ũ�� �̵�
			(function (global, $) {
				var $menu = $('.rnb .navi_ul li'),
					  $contents = $('.view_box'),
					  $doc = $('html, body');
				$(function () { // �ش� �������� ��ũ�� �̵�
					$menu.on('click','a', function(e){
						$menu.eq(e).addClass('on');
						var $target = $(this).parent(),
							  idx = $target.index(),
							  section = $contents.eq(idx),
							  offsetTop = section.offset().top;
							  $doc.stop().animate({scrollTop :offsetTop});
						return false;
					});
				});

				// menu class �߰�
				$(window).scroll(function(){
					var scltop = $(window).scrollTop();
					var scltop2 = $(window).scrollTop() + $(window).height();
					$.each($contents, function(idx, item){
						var $target = $contents.eq(idx),
							i = $target.index(),
							targetTop = $target.offset().top - $(window).height() / 2;

						if ( $(window).scrollTop() >= $(document).height() - $(window).height() - 10 ) {
							$menu.removeClass('on');
							$('.rnb .navi_ul li:last-child').addClass('on');
						}
						else if (targetTop < scltop) {
							$menu.removeClass('on');
							$menu.eq(idx).addClass('on');
						}

					})
				});

			}(window, window.jQuery));
		};//��ũ�� �̵�

		function scrollFixed() {
			$(document ).ready( function() {
				var jbOffset = $( '.rnb_wrap .rnb_con' ).offset();
					$( window ).scroll( function() {
					if ( $(document ).scrollTop() > jbOffset.top ) {
						$( '.rnb_wrap .rnb_con' ).addClass( 's_f' );
					}
					else {
						$( '.rnb_wrap .rnb_con' ).removeClass( 's_f' );
					}
				});
			});
		}


		$(window).load(function() {
			if($("#table-id-1").length > 0) calMoreShow();//Ķ���� ���̾� ��ġ�� ��������
		});

		//������� ����˾�
		$(".applicantBtn").click(function(){
			location.href="applicant.asp";
			$(".applicantPop").hide();
		});

	});

/*
	$(document).ready(function() {
		$('input, textarea').placeholder();
	});//placeholder
*/

	tabFnc = function(){
		$(".tab_content").hide();
		$(".tabs li:first").addClass("on").show();
		$(".tab_content:first").show();

		$(".tabs li").click(function() {
			$(".tabs li").removeClass("on");
			$(".acco li a").removeClass("on")
			$(".acco_txt").hide();
			$(this).addClass("on");
			$(".tab_content").hide();
			var activeTab = $(this).find("a").attr("href");
			$(activeTab).fadeIn();
			return false;
		});
	}

	accordionFnc = function(){
		$(".acco li a").click(function(){
			$(this).toggleClass('on');
			$(this).next().slideToggle(300);
			$(".acco li a").not(this).next().slideUp(300);
			$(".acco li a").not(this).removeClass('on');
			return false;
		});
		//$("ul li a").eq(0).trigger("click");
	}

	chkFnc = function (){
		$(".sel_box input").click(function(){
			if($(".sel_box .radiobox").hasClass("on") === true) {
				$(this).parents('.sel_box').prev().addClass('sel');
			}else{
				$(this).parents('.sel_box').prev().removeClass('sel');
			}
		});
	}

    function fileboxFnc() {//ã�ƺ���
        $('.filebox input:file').each(function (index, value) {
            $(this).prev().val($(this).val());
        }).bind('click change', function () {
            $(this).prev().val($(this).val());
        }).bind('focus', function () {
            $(this).prev().addClass('on');
        }).bind('blur', function () {
            $(this).prev().removeClass('on');
        });
    }//ã�ƺ���
    inputFnc = function (obj) {//��ǲ�ڽ�
        var _obj = $('.contentWrap');
        var _input = _obj.find('input.pwd');
        var _this, _tmp, _bg = null;
        if (!obj)
            _this = $('input.txt, textarea.area');
        else
            _this = $(obj).find('input.txt, textarea.area');
        _this.unbind('focus blur').bind('focus', function () {
            _bg = ($(this).attr('class').indexOf('bg') > -1) ? true : false;
            $(this).addClass('on');//Ŭ���� ���
            if(_bg) $(this).removeClass('bg');
        }).bind('blur', function () {
            $(this).removeClass('on');//Ŭ���� ���
            if (_bg && $(this).val() == '') $(this).addClass('bg');
        });

        _input.bind('focus', function() {//��ǲ���
            if (!$(this).val() || $(this).val()) $(this).addClass('bgnone');
        }).bind('blur', function() {
            if ($(this).val()) $(this).addClass('bgnone');
            else $(this).removeClass('bgnone');
        });
    }//��ǲ�ڽ�

	/*
    $.fn.check = function(index) {//��ǲ�ؽ�Ʈ üũ
        return this.each(function(index, value) {
            var _default = $(this).attr('default');

			this.value = _default;

            if(this.value == '' || this.value == _default) {
                $(this).attr('value', _default);
            } else {
                $(this).removeClass('value');
            }
            $(this).bind('focus', function() {
                if(this.value == _default) {
                    this.value = '';
                }
                $(this).removeClass('value');

            }).bind('blur', function() {
                if(this.value == '' || this.value == _default) {
                    this.value = _default;
                    $(this).addClass('value');
					$(this).siblings('.in_txt .txt_reset').hide();
                }else {
					$(this).addClass('on');
				}
            });
        });
    };//��ǲ�ؽ�Ʈ üũ
	*/

	inevtFnc = function() { //��ǲ ��Ŀ��, Ŭ��, val ȿ��
		var _re = $('.in_txt .txt_reset');
		var _inTxt = $('.in_txt .txt');
		var _inPass = $('.in_txt .pass');

		/*
		$(_inTxt).keydown(function() {
			$(this).siblings(_re).show();
		});
		*/

		$(_re).click(function () {
			$(this).hide();
			$(this).siblings(_inTxt).removeClass('on');
			$(this).parents('.in_txt').css('border','2px solid #d0d0d0');
			$(this).parents('.in_txt').css('z-index','0');
		});

		$('.in_txt .txt, .in_txt .pass').focus(function() {
			$(this).parents('.in_txt').css('border','2px solid #333');
			$(this).parents('.in_txt').css('z-index','50');
		});
		$('.in_txt .txt, .in_txt .pass').blur(function() {
			if($(this).val() !== '') {
				$(this).parents('.in_txt').css('border','2px solid #333');
				$(this).parents('.in_txt').css('z-index','50');
			}else {
				$(this).parents('.in_txt').css('border','2px solid #d0d0d0');
				$(this).parents('.in_txt').css('z-index','0');
			}
		});
	} //��ǲ �ؽ�Ʈ ���� ��ư

    $.fn.inputnumFnc = function(index) {//��ǲ��ȭ��ȣ üũ
        if (!$("#hd_pop").children().hasClass('hd_pops')) {
			$("#dim_pop_bg").css("display", "none");
		}
    };
    function numeric(value) {//��������
        return value.toString().replace(/[^\d$]/gi, "");
    }//��ǲ��ȭ��ȣ üũ

	selectboxFnc = function (obj) {//����Ʈ�ڽ�
		var _select = null
		if (!obj)
			_select = $('.selectbox select');
		else
			_select = ($(obj).find('.selectbox select').length > 0) ? $(obj).find('.selectbox select') : $(obj);
		_select.unbind().each(function (index, value) {
			$(this).prev().html($(this).children('option:selected').text());
			if ($(this).val() == 'direct') {//�����Է�
				$(this).parent().prev().css('display', 'inline');
			}
		}).bind('change keyup', function (evt) {
			$(this).prev().html($(this).children('option:selected').text());
			if ($(this).prev().is('.ellipsis')) $(this).prev().ellipsis();//������ ����
			if ($(this).find("option[value='direct']").length == 1) {//�����Է� ����
				if ($(this).val() == 'direct') {
					$(this).parent().prev().css('display', 'inline');
					if (evt.type == 'change') $(this).parent().prev().focus();//�����Է� ��Ŀ�� �̵�
				} else {
					$(this).parent().prev().css('display', 'none');
				}
			}
		}).bind('focus', function () {
			$(this).prev().addClass('on');
		}).bind('blur', function () {
			$(this).prev().removeClass('on');
		});
	}//����Ʈ�ڽ�

	selectDown = function() {
		$(".select_down .name a").click(function() {
			$(this).parents('.name').next('.sel').find('ul').show();
		});

		$(".select_down .sel ul li a").click(function() {
			var text = $(this).html();
			$(this).parents('.sel').prev('.name').find('span').html(text);
			$(this).parents('.sel').find('ul').hide();
		});

		$(document).bind('click', function(e) {
			var $clicked = $(e.target);
			if (! $clicked.parents().hasClass("select_down"))
				$(".select_down .sel ul").hide();
		});
	}

	selectStyle = function() {
		$(".select_box .name a").click(function() {
			var sel_a = $(".select_box .name a");
			if (!$(this).parents('.select_box').hasClass('on')) {
				$(this).parents('.select_box').addClass( 'on' );
				$(sel_a).not(this).parents('.select_box').removeClass('on');
			}else{
				$(this).parents('.select_box').removeClass( 'on' );
			}
		});

		$(".select_box .sel ul li a").click(function() {
			var text = $(this).html();
			$(this).parents('.sel').prev('.name').find('span').html(text);
			//(this).parents('.sel').find('ul').hide();
			$(this).parents('.select_box').removeClass( 'on' );
		});

		/*
		$(document).bind('click', function(e) {
			var $clicked = $(e.target);
			console.log($clicked);
			if (! $clicked.parents().hasClass("select_box")){
				$('.select_box').removeClass( 'on' );
			}
		});
		*/

		$(document).bind('click', function(e) {
			var $clicked = $(e.target);
			if (!$clicked.parents().hasClass("select_box") ) {
				if ($($clicked).attr('class') != null && !$($clicked).attr('class').match('btn')) {
					$('.select_box').removeClass( 'on' );
				}
			}
		});

	}//����Ʈ ��Ÿ��

	selectCalendar = function() {
		$(".select_box.calendar .name a").click(function() {
			var sel_a = $(".select_box .name a");
			if (!$(this).parents('.select_box').hasClass('on')) {
				$(this).parents('.select_box').addClass( 'on' );
				$(sel_a).not(this).parents('.select_box').removeClass('on');
			}else{
				$(this).parents('.select_box').removeClass( 'on' );
			}
		});

		$(".select_box.calendar .sel .calendar_box button").click(function() {
			$(this).parents('.select_box').addClass( 'on' );
		});

		$(document).bind('click', function(e) {
			var $clicked = $(e.target);
			if (! $clicked.parents().hasClass("select_box"))
				$('.select_box').removeClass( 'on' );

		});
	}//����Ʈ ��Ÿ��

	hiddenOpen = function() {
		$(".hidden_open button").click(function() {
			$(this).next('.ho_area').find('.cols').show();
		});

		$(".select_down .sel ul li a").click(function() {
			var text = $(this).html();
			$(this).parents('.sel').prev('.name').find('span').html(text);
			$(this).parents('.sel').find('ul').hide();
		});

		$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("hidden_open"))
			$(".hidden_open .ho_area .cols").hide();
		});

		$(".hidden_open .btm_btn .save").click(function() {
			$(".hidden_open .ho_area .cols").hide();
		});
	}


    checkallFnc = function (obj, name) {//��ü����
        var _this = $(obj);
        var _chk = $('input[name='+name+']');
        if(_this.is(':checked')) {
            _chk.each(function(index, value) {
                $(this).attr('checked', true).parent().removeClass('off').addClass('on');
            });
        } else {
            _chk.each(function(index, value) {
                $(this).attr('checked', false).parent().removeClass('on').addClass('off');
            });
        }
    }//��ü����

    checkboxFnc = function () {//üũ�ڽ�
        var _chk = $('.chk').parent();
        _chk.each(function() {
            if ($(this).find('input').is(':checked')) {
                $(this).removeClass('off').addClass('on');

            } else {
                $(this).removeClass('on').addClass('off');
            }
        }).click(function() {
            if ($(this).find('input').is(':checked')) {
                $(this).removeClass('off').addClass('on');
            } else {
                $(this).removeClass('on').addClass('off');
            }
        });
    }//üũ�ڽ�

	chkpassFnc = function () { //�н����� ���̱�/���߱�
		$("#passChk").change(function(){
			// Check the checkbox state
			if($(this).is(':checked')){
				// Changing type attribute
				$("#inPass").attr("type","text");

				// Change the Text
				//$(".pass_txt").text("��й�ȣ ���̱�");
			}else{
				// Changing type attribute
				$("#inPass").attr("type","password");

				// Change the Text
				//$(".pass_txt").text("��й�ȣ ���߱�");
			}
		});
	} //�н����� ���̱�/���߱�

    radioboxFnc = function () {//�����ڽ�

		//��Ȱ��ȭ Ŭ������
		$(".disable").attr("readonly",true);
		$(".disable , .disable input").attr("disabled","disabled");

        var _rdi = $('.rdi').parent();
        _rdi.unbind().each(function() {
            if ($(this).find('input').is(':checked')) {
                $(this).removeClass('off').addClass('on');
            }else if ($(this).find('input').is('[disabled=disabled]'))//��Ȱ��ȭ��ų��
			{
				//$(this).find("span").css({'color':'#a8a8a8','cursor':'default'});
				//$(this).find('input').attr('name','disable')
			} else {
                $(this).removeClass('on').addClass('off');
            }
        }).bind('click', function() {
            var _name = $(this).find('input').attr('name');
            var _radio = $('label input[name$='+_name+']');
            var _index = _radio.parent().index(this);
            _radio.each(function(index, value) {
                if (_index == index) {
                    $(this).checked = true;
                    $(this).parent().removeClass('off').addClass('on');
					if ($(this).is('[disabled=disabled]'))
					{
						$(this).parent().removeClass('on');
						$(this).find('input').is('[disabled=disabled]').attr("disabled","disabled");
					}
                } else {
                    $(this).checked = false;
                    $(this).parent().removeClass('on').addClass('off');
                }
            });
        });

        $('input:radio').click(function() {
            $('input:radio[name='+$(this).attr('name')+']').parent().removeClass('on');
            $(this).parent().addClass('on');
        });

    }//�����ڽ�

	moreFnc = function() {//�ְ� ������
		var _obj = $('.weekly-area .more a');
		_obj.bind('click', function() {
			var _more = $(this).parent();
			_more.prev().css('max-height','none');
			_more.find('a:first-child').hide();
			_more.append('<a class="close" href="#">����</a>').bind('click', function() {
				_more.prev().removeAttr('style');
				_more.find('a:first-child').show();
				_more.find('a.close').remove();
				return false;
			});
			return false;
		});
	}//�ְ� ������

	expandFnc = function (obj, closeTxt, openTxt, count) {//��ġ�� ��ư
		var _obj = $(obj);
		var _target = $(obj).prev().find(".limit");
		var _closeTxt = closeTxt;
		var _openTxt = openTxt;
		var _count = count;

		_obj.toggleClass("open");

		if(_obj.hasClass("open")) {
			if (_target.get(0).tagName == 'TABLE') {
			_target.nextAll().css('display','table');
			} else if (_target.get(0).tagName == 'TR') {
				_target.nextAll().css('display','table-row');
			} else {
				_target.nextAll().css('display','block');
			}
			_obj.find("span").text(_closeTxt)
		} else {
			_obj.prev().find(".limit").nextAll().hide()
			_obj.find("span").text(_openTxt);

			//�δ�
			if(_obj.parents().hasClass("tip")) {
				var _html = '<span>��.�� TIP <strong>'+_count+'</strong>��������/�亯�� �� �ֽ��ϴ�.</span>';
				_obj.html(_html);
			}

			//�δ�COOL
			if(_obj.parents().hasClass("cool")) {
				var _html = '<span>��.�� COOL���䰡 <strong>'+_count+'</strong>�� �� �ֽ��ϴ�.</span>';
				_obj.html(_html);
			}

			//�ڱ�Ұ����׸�
			if(_obj.parents().hasClass("introduction")) {
				var _html = '<span>�ڱ�Ұ��� �׸��� <strong>'+_count+'</strong>�� �� �ֽ��ϴ�.</span>';
				_obj.html(_html);
			}
		}

		/*$('html, body').animate({
			scrollTop: (_obj.parent().prev().offset().top) - 80
		}, 200);*/
	};//��ġ�� ��ư

	showLayerFnc = function(obj) {//Ķ���� ���̾� v1 2016-06-21 skydown@career.co.kr
		var _table = $('#table-id');
		var _tr = _table.find('tbody tr');
		var _more = _table.find('tbody td').not('td.none, td.nodata').find('.more a');
		var _layer = $('#layer-id');
		var _inner = _layer.find('.inner');
		var _close = _layer.find('.close');
		if(!obj) {
			_more.unbind('click').bind('click', function() {
				var _td = $(this).parents('td');
				var _width = parseInt(_td.outerWidth()) + ((_td.next().length > 0) ? parseInt(_td.next().outerWidth()) : parseInt(_td.prev().outerWidth())) - 1;
				var _x = _td.offset().left - 1;
				var _y = _td.offset().top - 1;
				_layer.css({'width':_width + 'px','left':_x, 'top':_y}).show(200);
				return false;
			});
		} else {
			var _td = $(obj).parents('td');
			var _width = parseInt(_td.outerWidth()) + ((_td.next().length > 0) ? parseInt(_td.next().outerWidth()) : parseInt(_td.prev().outerWidth())) - 1;
			var _x = _td.offset().left - 1;
			var _y = _td.offset().top - 1;
			_layer.css({'width':_width + 'px','left':_x, 'top':_y}).show(200);
			return false;
		}
		$('#layer-id .close').unbind('click').bind('click', function () {
			_more.unbind('click');
			$('#layer-id').hide(200, function() {
				$(this).removeAttr('style');
				showLayerFnc();
			});
			return false;
		});
	}//Ķ���� ���̾�

	hideLayerFnc = function() {//Ķ���� ���̾� ���߱�
		$('#layer-id').hide(200, function() {
			$(this).removeAttr('style');
		});
	}//Ķ���� ���̾� ���߱�

	/* �޷� 2014-09-17 skydown@career.co.kr */
	_calArray = {
		Box: null,
		Month: null,
		Body: null,
		Prev: null,
		Next: null,
		Input: null,
		calClose: null,
		calButton: null,
		calToday: null,
		calDate: null,
		calMonth: null,
		calNow: null,
		calYear: null,
		Weekday: null,
		MonthA: null,
		Mdays: null
	};
	calendarBoxFnc = {
		init: function() {
			_calArray.Box = $('#calendarBox');
			_calArray.Month = $('#calendarMonth');
			_calArray.Body = $('#calendarBody');
			_calArray.Prev = _calArray.Box.find('.calHead .prev');
			_calArray.Next = _calArray.Box.find('.calHead .next');
			_calArray.calClose = _calArray.Box.find('.calClose');
			_calArray.calButton = _calArray.Box.find('td > button');
			_calArray.calClose.click(function() {
				_calArray.Box.hide();
				_calArray.Input.focus();
				calendarBoxFnc.set();
			});
			_calArray.Prev.click(function() {
				_calArray.calToday.setMonth( _calArray.calToday.getMonth() - 1 );
				calendarBoxFnc.set();
			});
			_calArray.Next.click(function() {
				_calArray.calToday.setMonth( _calArray.calToday.getMonth() + 1 );
				calendarBoxFnc.set();
			});
			calendarBoxFnc.set();
		},
		input: function(d) {
			var month = _calArray.MonthA[_calArray.calMonth];
			var day = d;
			(month < 10) ? month = '0' + month : month;
			(day < 10) ? day = '0' + day : day;

			_calArray.calDate = d;
			_calArray.Input.val(_calArray.calYear + '-' + month + '-' + day).focus();
			_calArray.Box.hide();
		},
		show: function(p, obj) {
			_calArray.Input = $('#' + p);
			var _pos = _calArray.Input.position();
			calendarBoxFnc.set(obj.value);
			_calArray.Box.show().css({
				'left': _pos.left,
				'top': _pos.top
			}).find('#calendarBody button.on').focus();
		},
		set: function(v) {
		// this array gives the weekday names
			_calArray.Weekday = new Array();
			_calArray.Weekday[0] = "Sunday";
			_calArray.Weekday[1] = "Monday";
			_calArray.Weekday[2] = "Tuesday";
			_calArray.Weekday[3] = "Wednesday";
			_calArray.Weekday[4] = "Thursday";
			_calArray.Weekday[5] = "Friday";
			_calArray.Weekday[6] = "Saturday";
		// this array gives month names
			_calArray.MonthA = new Array();
			_calArray.MonthA[0] = "1" //January";
			_calArray.MonthA[1] = "2" //February";
			_calArray.MonthA[2] = "3" //March";
			_calArray.MonthA[3] = "4" //April";
			_calArray.MonthA[4] = "5" //May";
			_calArray.MonthA[5] = "6" //June";
			_calArray.MonthA[6] = "7" //July";
			_calArray.MonthA[7] = "8" //August";
			_calArray.MonthA[8] = "9" //September";
			_calArray.MonthA[9] = "10" //October";
			_calArray.MonthA[10] = "11" //November";
			_calArray.MonthA[11] = "12" //December";
		// this array gives the number of days in each month
			_calArray.Mdays = new Array();
			_calArray.Mdays[0] = 31;
			_calArray.Mdays[1] = 28;
			_calArray.Mdays[2] = 31;
			_calArray.Mdays[3] = 30;
			_calArray.Mdays[4] = 31;
			_calArray.Mdays[5] = 30;
			_calArray.Mdays[6] = 31;
			_calArray.Mdays[7] = 31;
			_calArray.Mdays[8] = 30;
			_calArray.Mdays[9] = 31;
			_calArray.Mdays[10] = 30;
			_calArray.Mdays[11] = 31;
		// this code gets current date information
			if (_calArray.calToday == null) {
				_calArray.calToday = new Date();
				_calArray.calNow = _calArray.calToday.getDate();
			}
			if (v == undefined || v == '') {
				_calArray.calYear = _calArray.calToday.getYear();
				_calArray.calMonth = _calArray.calToday.getMonth();
				_calArray.calDate = _calArray.calToday.getDate();
			} else {
				var _v = v.split('-');
				var _vyear = _v[0];
				var _vmonth = (_v[1] < 10) ? _v[1].split('0')[1] : _v[1];
				var _vdate = (_v[2] < 10) ? _v[2].split('0')[1] : _v[2];
				_calArray.calYear = _vyear;
				_calArray.calMonth = _vmonth - 1;
				_calArray.calDate = _vdate;
				_calArray.calNow = _vdate;
			}
		// these are variables for
			var day = 1;
			var i, j;
		// adjust year for browser differences
			if (_calArray.calYear < 2000) {
				_calArray.calYear += 1900;
			}
		// account for leap year
			if ((_calArray.calYear % 400 == 0) || ((_calArray.calYear % 4 == 0) && (_calArray.calYear % 100 !=0)))
				_calArray.Mdays[1] = 29;
		// determine day of week for first day of the month
			var Mfirst = _calArray.calToday;
			Mfirst.setDate(1);
			var dow1 = Mfirst.getDay();
		// write out current date
			var _month = _calArray.calYear + "." + _calArray.MonthA[_calArray.calMonth];
			_calArray.Month.html(_month);

		// construct calendar for current month
			var _tbody = "";
			for (i = 0; i < 6; i++) {
		// this loop writes one row of days Sun-Sat
				_tbody += ("<tr>");
				for (j = 0; j < 7; j++) {
		// this loop determines which dates to display and in which column
					if ((i == 0 && j < dow1) || (day > _calArray.Mdays[_calArray.calMonth])) {
		// this puts in blank cells at the beginning an end of the month
						_tbody += ("<td>&nbsp;</td>");
					} else {
						if (day == _calArray.calNow) {
		// highlight the current day and display the date for this cell
							_tbody += ("<td><button class='on' type='button' value='"+ day +"' onclick='calendarBoxFnc.input(this.value);'>" + day + "</button></td>");
						} else {
		// display the date for this cell
							_tbody += ("<td><button type='button' value='"+ day +"' onclick='calendarBoxFnc.input(this.value);'>" + day + "</button></td>");
						}
		// increment day counter
						day++;
					}
				}
		// end of row; determine if more rows needed
				_tbody += ("</tr>");
				if (day > _calArray.Mdays[_month]) {
					i = 6;
				}
			}
		// end of table
			_calArray.Body.html(_tbody);

		}
	};/* //�޷� */

	//Ķ���� ���̾� ��ġ�� ��������
	calMoreShow = function(){
		$(".plusIcon").click(function(){

			$(".openPop").hide();//Ŭ���� �ش� �˾� ���� ����ó��

			$(this).next("div").show(0,function(){
				$(this).css({
					"left": "-1px",
					"top" : "-7px"
				});
			});
		});
	}
	disableFnc = function (obj, param) {//��Ȱ��
		var _obj = $(obj);
		var _input = _obj.find('input.txt, input.rdi, input.chk, textarea.area');
		switch(param) {
			case 'disable':
				_obj.addClass('disable');
				if (_input.length > 0) _input.attr('readonly','readonly');
				if (_input.length > 0) _input.attr('disabled','disabled');
				selectboxFnc();
				break;
			case 'active':
				_obj.removeClass('disable');
				if (_input.length > 0) _input.removeAttr('readonly');
				break;
			case 'check'://üũ�ڽ�
				if ((_obj.attr('class')) ? (_obj.attr('class') == 'disable') : false) {
					_obj.removeClass('disable');
					if (_input.length > 0) _input.removeAttr('readonly');
				} else {
					_obj.addClass('disable');
					if (_input.length > 0) _input.attr('readonly','readonly');
				}
				break;
			default:
				return false;
		}
	};//��Ȱ��


	popFnc = function (obj) {//�˾�
		$('.pop').click(function(){
			$('.popup, .pop_dim').show();
			$('.popup.double, .pop_dim.double').hide();

			$poHeight = $('.popup').height();
			$poHeight2 = $('#pop_result_apply .popup').height();
			$poHeight3 = $('#pop_result_interview .popup').height();

			docWidth = $(document).width();
			winHeight = $(window).height();
			//alert("�ʺ� : "+ $poHeight3);
			if ($poHeight > winHeight/*&& $poWidth < docWidth*/) {
				$('.popup').css("top", Math.max(0, $(window).scrollTop()));
				$('.popup').css({
					marginTop:0});
					//,marginLeft:-$poWidth / 2});
				return this;
			}

			else if ($poHeight2 > winHeight/*&& $poWidth < docWidth*/) {
				$('.popup').css("top", Math.max(0, $(window).scrollTop()));
				$('.popup').css({
					marginTop:0});
					//,marginLeft:-$poWidth / 2});
				return this;
			}

			else{
				$('.popup').css("top", Math.max(0,  $(window).scrollTop() + $(window).height() / 2) + "px");
				$('.popup').css({
					marginTop: -$poHeight / 2});
					//,marginLeft: -$poWidth / 2});

				$('#pop_result_interview .popup').css({
				marginTop: -$poHeight3 / 2});
				//,marginLeft: -$poWidth / 2});
			   return this;
			}

		});


		$('.layer_close').click(function(e){
			e.preventDefault();
			$(this).parents('.popup').hide().prev('.pop_dim').hide();
		});

		$('.pop_dim').click(function(e){
			e.preventDefault();
			$(this).hide().next('.popup').hide();
		});

		$('.popup .btn_area .btn.close').click(function(){
			$(this).parents('.popup').hide().prev('.pop_dim').hide();
		});

    }//�˾�

	popFnc2 = function () {//�˾�
		$('.pop2').click(function(){
			$('#popup2, #pop_dim2').show();

			$poHeight = $('#popup2').outerHeight();
			$poHeight2 = $('#pop_result_interview .popup').height();
			docWidth = $(document).width(),
			winHeight = $(window).height();



			if ($poHeight > winHeight/*&& $poWidth < docWidth*/) {
				$('#popup2').css("top", Math.max(0, $(window).scrollTop()));
				$('#popup2').css({
					marginTop:0});
					//,marginLeft:-$poWidth / 2});
				return this;
			}
			else if ($poHeight2 > winHeight/*&& $poWidth < docWidth*/) {
				$('#popup2').css("top", Math.max(0, $(window).scrollTop()));
				$('#popup2').css({
					marginTop:0});
					//,marginLeft:-$poWidth / 2});
				return this;
			}
			else{
				$('#popup2').css("top", Math.max(0,  $(window).scrollTop() + jQuery(window).height() / 2) + "px");
				$('#popup2').css({
					marginTop: -$poHeight / 2});
					//,marginLeft: -$poWidth / 2});
			   return this;
			}

		});

		$('#popup2 .layer_close, #pop_dim2').click(function(e){
			e.preventDefault();
			$('#popup2, #pop_dim2').hide();
		});

		$('#popup2 .btn_area .btn.close').click(function(){
			$('#popup2, #pop_dim2').hide();
		});

    }//�˾�2

	popFnc3 = function () {//�˾�
		$('.pop3').click(function(){
			$('#popup3, #pop_dim3').delay( 2000 ).show();
			$poHeight = $('#popup3').outerHeight();
			docWidth = $(document).width(),
			winHeight = $(window).height();
			if ($poHeight > winHeight/*&& $poWidth < docWidth*/) {
				$('#popup3').css("top", Math.max(0, $(window).scrollTop()));
				$('#popup3').css({
					marginTop:0});
					//,marginLeft:-$poWidth / 2});
				return this;
			}
			else{
				$('#popup3').css("top", Math.max(0,  $(window).scrollTop() + jQuery(window).height() / 2) + "px");
				$('#popup3').css({
					marginTop: -$poHeight / 2});
					//,marginLeft: -$poWidth / 2});
			   return this;
			}

		});

		$('#popup3 .layer_close, #pop_dim3').click(function(e){
			e.preventDefault();
			$('#popup3, #pop_dim3').hide();
		});

		$('#popup3 .btn_area .btn.close').click(function(){
			$('#popup3, #pop_dim3').hide();
		});

    }//�˾�3

	popupFnc = function (obj) {//�˾�
		$('.pop_up').click(function(){
			var activePop = $(this).attr("href");
			$(activePop).show().children('.popup, .pop_dim').show();
			$poHeight = $(activePop).children('.popup').outerHeight();
			winHeight = $(activePop).children('.pop_dim').height();
			if ($poHeight > winHeight) {
				$(activePop).children('.popup').css("top", Math.max(0, $(window).scrollTop()));
				$(activePop).children('.popup').css({
					marginTop:0});
				return this;
			}
			else{
				$(activePop).children('.popup').css("top", Math.max(0,  $(window).scrollTop() + winHeight / 2) + "px");
				$(activePop).children('.popup').css({
					marginTop: -$poHeight / 2});
			   return this;
			}
		});

		$('.pop_dim, .popup .close').click(function(){
			$(this).parents('.pop_area').hide();
		});
    }//�˾�

	menuboxFnc = function () {

		var mbOpen = $('.btn_menu .open');
		var mbClose = $('.btn_menu .close');
		var container = $(".mb_menu");

		$(mbOpen).click(function () {
			$(this).hide();
			$(this).siblings('.close').show();
			$(this).parent().next(container).show();
		});
		$(mbClose).click(function () {
			$(this).hide();
			$(this).siblings('.open').show();
			$(this).parent().next(container).hide();
		});
		$(document).mouseup(function (e) {

			if ($(container).is(':visible'))
			{
				if (!container.is(e.target) && container.has(e.target).length === 0){
				container.css("display","none");
				}
				$(mbClose).hide();
				$(mbOpen).show();
			}

		});
	}

	function toggle2Fnc() {//�����������

	};//�����������


	noncheckallFnc = function (obj, chk, rdi) {//��ü����
		var _this = $(obj);
		var _chk = $('input[name='+chk+']');
		var _rdi = $('input[name='+rdi+']');
		if(_this.is(':checked')) {
			_chk.each(function(index, value) {
				$(this).attr('checked', true).parent().removeClass('off').addClass('on');
			});
			_rdi.each(function(index, value) {
				$(this).attr('checked', true).parent().removeClass('off').addClass('on');
			});
			return false;
		} else {
			_chk.each(function(index, value) {
				$(this).attr('checked', false).parent().removeClass('on').addClass('off');
			});
			_rdi.each(function(index, value) {
				$(this).attr('checked', false).parent().removeClass('on').addClass('off');
			});
			return false;
		}
	}//��ü����

	checkAllFnc =function() {
		var $checkHead = $(".tb thead th input[type='checkbox']"); // thead���� üũ�ڽ��� input�� ã�´�.
		var $checkBody = $(".tb tbody td input[type='checkbox']"); // tbody���� üũ�ڽ��� input�� ã�´�.

		/* ��ü���� */
		$checkHead.click(function(){
			var $bodyPutCk = $checkHead.is(":checked");

			if ( $bodyPutCk == true ) {
				//$lastActive.addClass("active");
				$checkBody.attr("checked", true).parent().removeClass('off').addClass('on');
				$checkBody.prop("checked", true).parent().removeClass('off').addClass('on');
			}else {
				//$lastActive.removeClass("active");
				$checkBody.attr("checked", false).parent().removeClass('on').addClass('off');
				$checkBody.prop("checked", false).parent().removeClass('on').addClass('off');
			}
		});

		/* ���� ��ü ���ý� ��ü��ư ���� */
		$checkBody.click(function(){
			var tdInput_Length = $checkBody.length; // td �� �ִ� input ����
			var tdInput_Check_Length = $(".tb tbody td input[type='checkbox']:checked").length; // td �� �ִ� ���õ� input ����

			console.log(tdInput_Length);
			console.log(tdInput_Check_Length);

			if ( tdInput_Length == tdInput_Check_Length ) {
				//$checkHead.addClass("active");
				$checkHead.attr("checked", true).parent().removeClass('off').addClass('on');
				$checkHead.prop("checked", true).parent().removeClass('off').addClass('on');
			}else {
				//$checkHead.removeClass("active");
				$checkHead.attr("checked", false).parent().removeClass('on').addClass('off');
				$checkHead.prop("checked", false).parent().removeClass('on').addClass('off');
			}
		});
	}



	useDatePicker = function() {

		$(document).ready(function() {

			//datepicker �ѱ���� ����ϱ� ���� ����
			$.datepicker.setDefaults($.datepicker.regional['ko']);

			// Datepicker
			$(".datepicker").datepicker({
				dateFormat: "yy-mm-dd",
				dayNamesMin: ["��", "��", "ȭ", "��", "��", "��", "��"],
				monthNames: ["1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"],
				monthNamesShort: ["1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"],
				changeMonth: true,
				changeYear: true,
				yearRange: 'c-60:c+10',
				showButtonPanel: true,
				closeText: '�ݱ�',
				currentText: '����',
				onClose : function ( selectedDate ) {
					var eleId = $(this).attr("id");
					var optionName = "";
					if(eleId.indexOf("StartDate") > 0) {
						eleId = eleId.replace("StartDate", "EndDate");
						optionName = "minDate";
					} else if (eleId.indexOf("EndDate") > 0) {
						eleId = eleId.replace("EndDate", "StartDate");
						optionName = "maxDate";
					}
					$("#"+eleId).datepicker( "option", optionName, selectedDate);
					$(".searchDate").find(".chkbox2").removeClass("on");
				}

			});

			$(".datepicker_single").datepicker({
				dateFormat: "yy-mm-dd",
				dayNamesMin: ["��", "��", "ȭ", "��", "��", "��", "��"],
				monthNames: ["1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"],
				monthNamesShort: ["1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"],
				changeMonth: true,
				changeYear: true,
				showButtonPanel: true,
				closeText: '�ݱ�',
				currentText: '����'
			});

			$.datepicker._gotoToday = function(id) {
				$(id).datepicker('setDate', new Date()).datepicker('hide').blur();
			};

			$(".dateclick").dateclick();    // DateClick
			$(".searchDate").schDate();        // searchDate

		});

		// Search Date
		jQuery.fn.schDate = function(){
			var $obj = $(this);
			var $chk = $obj.find("input[type=radio]");
			$chk.click(function(){
				$('input:not(:checked)').parent(".chkbox2").removeClass("on");
				$('input:checked').parent(".chkbox2").addClass("on");
			});
		};

		// DateClick
		jQuery.fn.dateclick = function(){
			var $obj = $(this);
			$obj.click(function(){
				$(this).parent().find("input").focus();
			});
		}

	}

	/* 2020.06.10
	�ʱ�ȭ�� �˻�Ű���嵵 ����, ��� ���ΰ�ħ �߰�
	dateReset = function() {
		var $datepicker = $('.datepicker');
		$datepicker.val('');
		$datepicker.datepicker('option', {minDate: null, maxDate: null});
	}
	*/

	dateReset = function() {
		var $datepicker = $('.datepicker');
		$datepicker.val('');
		$datepicker.datepicker('option', {minDate: null, maxDate: null});

		$("#schKeyword").val("");

		$('#frm_list').submit();
	}


	/* 2020.11.03 */
	view_layer = function (_val){
		var popUp = $("#pop_area_question_" + _val);
		popUp.show().find(".pop_dim").show();
	}

	view_layer_hide = function (_val) {
		var popUp = $("#pop_area_question_" + _val);
		popUp.show().hide(".pop_dim").hide();
	}


});



function fn_pop_show() {
	$('.popup, .pop_dim').show();
	$poHeight = $('.popup').outerHeight();
	docWidth = $(document).width(),
	winHeight = $(window).height();
	if ($poHeight > winHeight/*&& $poWidth < docWidth*/) {
		$('.popup').css("top", Math.max(0, $(window).scrollTop()));
		$('.popup').css({
			marginTop:0});
			//,marginLeft:-$poWidth / 2});
		return this;
	}
	else{
		$('.popup').css("top", Math.max(0,  $(window).scrollTop() + jQuery(window).height() / 2) + "px");
		$('.popup').css({
			marginTop: -$poHeight / 2});
			//,marginLeft: -$poWidth / 2});
	   return this;
	}
}




;
(function($) {
    //$.__CLSFORMAT('.asdf .asdf .asdf')
    //return asdf asdf asdf
    //$.__ARRAY_SHUFFLE([1, 2, 3, 4, 5, 6, 7, 8])
    //return 8
    //$.__ARRAY_SHUFFLE([1, 2, 3, 4, 5, 6, 7, 8])
    //$.__RANDOM(6,8)
    //6�̻�8�̸��� �Ǽ�;
    //$.__GETPARAMS('tnna')
    //url = absc.com?tnna=123 ==> return 123;
    var utills = '__';
    var utills_array = utills + 'ARRAY_';
    $[utills_array + 'SHUFFLE'] = function(a) {
        var va = a;
        var j, x, i;
        for(i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = va[i];
            va[i] = va[j];
            va[j] = x;
        }
        return va;
    }
    $[utills + 'CLSFORMAT'] = function(s) {
        return s.replace(/\./g, '');
    };
    $[utills_array + 'LAST'] = function(a) {
        return a[a.length - 1];
    };
    $[utills_array + 'MAX'] = function(a) {
        return Math.max.apply(null, a);
    };
    $[utills_array + 'MIN'] = function(a) {
        return Math.min.apply(null, a);
    };
    $[utills + 'RANDOM'] = function(min, max) {
        return Math.random() * (max - min) + min;
    };
    $[utills + 'GETPARAMS'] = function(param, str, amp, url) {
        var url = url ? url : location.search;
        if(url) {
            var arry = url.split(str ? str : '?');
            var amp = amp ? amp : '&';
            var result = null;
            var arryDp = arry[1].split(amp);
            for(var i = 0; i < arryDp.length; i++) {
                var resArry = arryDp[i].split('=');
                for(var j = 0; j < resArry.length; j++) {
                    if(resArry[0] == param) {
                        result = resArry[1];
                    }
                }
            }
            return result;
        }
    };
    $[utills + 'SCROLL'] = function(b, t, fnc) {
        var t = t ? t : window;
        var events = 'scroll wheel mousemove touchmove';
        if(b) {
            $(t).on(events, function(e) {
                if(typeof fnc === 'function') fnc($(this));
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        } else {
            $(t).off(events);
        }
    };
    $[utills + 'GET_IP'] = null;
})(jQuery);
