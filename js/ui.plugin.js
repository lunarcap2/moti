(function ($) {
	$.fn.extend({
		cmmLocLaypop: function (obj) {
			var defaults = {
				type: '',
				align: ['center', 'center'], //['center' , 'center'] �迭�� css��׶��� ó�� ����
				garaboon: false, //�ʺ�����
				width: '1080px', //�ʺ�����
				height: null, //�׳� �����ʴ°� ����
				openAfterScroll: false, //�˾����� �� ��ũ�� ���� false ��ũ�� �ȸ��� true
				title: 'Ÿ��Ʋ', //�˾� Ÿ��Ʋ
				parentAddClass: '', //Ư����Ҹ� Ŀ����style �ؾ��Ҷ� �߰�
				targetBtnsName: ['��<span class="cmm_layerpop_btn_blank"></span>��', 'Ȯ<span class="cmm_layerpop_btn_blank"></span>��'], //��ư�ؽ�Ʈ [0][1] �ε��� ��ȣ�� �̺�Ʈ�� �ο��Ǵ� ���� ���Ѿ���
				targetCustomBtnsName: null,
				useBottomArea: true,
				attrSetParams: {},
				clearFormElement: true,
				beforeCallback: null, //�����˾��� �����ǰ�, �ð�ȭ �Ǳ����� ȣ��
				afterCallback: null, //�����˾��� �����ǰ�, �ð�ȭ �ǰ� ȣ��
				submit: null, //Ȯ�ι�ư(targetBtnsName[1]) Ŭ���� ȣ��
				closeCallb: null, //x��ư, ��ҹ�ư(targetBtnsName[2]) Ŭ���� ȣ��
				closeInit: null //x��ư, ��ҹ�ư Ŭ���� �̺�Ƶ�߻� ���� �ݹ��� X
			};

			function CmmLocLaypop($this) {
				var _this = this;
				this.target = $this;
				this.obj = typeof obj === 'object' ? $.extend(defaults, obj) : obj;
				this.dimmClsName = '.cmm_dimm';
				this.targetParent = '.laypopWarp';
				this.targetParentIn = '.laypopIn';
				this.targetTitle = '.laypopTit';
				this.targetTitleTxt = '.laypopTitTxt';
				this.targetCont = '.laypopCont';
				this.targetBottom = '.laypopBottom';
				this.targetBtns = ['.layClosebtn', '.laySmtbtn'];
				this.cont = '';
				this.title = '';
				this.bottom = '';
				this.currentScrolltop = $(document).scrollTop();
				window.ZOOM_VIEW = window.ZOOM_VIEW ? window.ZOOM_VIEW : 1;
				this.init();
				$(window).resize(function () {
					_this.alignFun(true, true);
				});
				return {
					submit: function (callback) {
						if (typeof callback === 'function') {
							_this.obj.submit = callback;
						}
					},
					align: function (bool) {
						_this.alignFun(bool, true);
					}
				};
			};
			CmmLocLaypop.prototype = {
				init: function () {
					var _this = this;
					if (this.obj == 'close') {
						this.act().hide();
						return;
					}
					if (this.obj == 'open') {
						this.act().show();
						return;
					}
					_this.set();
					_this.dimm().set();
					_this.act().show();
					_this.close();
					_this.submitFun();
				},
				set: function () {
					var _this = this;
					switch (this.obj.type) {
						case 'alert':
							this.cont += '<div class="' + this.clsFormat(this.targetParent) + ' cmmParaenAlert ' + this.obj.parentAddClass + '">';
							break;
						case 'confirm':
							this.cont += '<div class="' + this.clsFormat(this.targetParent) + ' cmmParaenConfirm ' + this.obj.parentAddClass + '">';
							break;
						default:
							this.cont += '<div class="' + this.clsFormat(this.targetParent) + ' ' + (
								!this.obj.useBottomArea ? 'hiddenBottomArea' : ''
							) + '  ' + this.obj.parentAddClass + '">';
					}
					if (!this.obj.height) {
						this.obj.height = 'auto';
					} else {
						this.obj.height = this.obj.height + 'px';
					}
					this.cont += '<div class="' + this.clsFormat(this.targetParentIn) + '" style="width: ' + (
						typeof this.obj.width === 'number' ? this.obj.width + 'px' : this.obj.width
					) + '; height : ' + this.obj.height + '">';
					this.cont += '<div class="' + this.clsFormat(this.targetCont) + '">';
					if (this.obj.type == 'alert' || this.obj.type == 'confirm') {
						this.cont += '<div class="alert_msg">' + this.obj.msg + '</div>';
					}
					this.cont += '</div>';
					this.cont += '</div>';
					this.cont += '</div>';
					this.title += '<div class="' + this.clsFormat(this.targetTitle) + '">';
					this.title += '<span class="' + this.clsFormat(this.targetTitleTxt) + '">' + this.obj.title + '</span>';
					this.title += '<a href="javascript: ;" class="' + this.clsFormat(this.targetBtns[0]) + ' " title=""><span class="ti-close"></span></a>';
					this.title += '</div>';
					if (this.obj.useBottomArea) {
						this.bottom += '<div class="' + this.clsFormat(this.targetBottom) + '">';
						if (this.obj.type != 'alert') {
							this.bottom += '<a href="javascript:;" class="btns blue outline ' + this.clsFormat(this.targetBtns[0]) + ' " title="">' + this.obj.targetBtnsName[0] + '</a>';
							this.bottom += '<a href="javascript:;" class="btns blue ' + this.clsFormat(this.targetBtns[1]) + ' " title="">' + this.obj.targetBtnsName[1] + '</a>';
						} else {
							this.bottom += '<a href="javascript:;" class="btns blue ' + this.clsFormat(this.targetBtns[1]) + ' ">' + this.obj.targetBtnsName[0] + '</a>';
						}
					}
					this.bottom += '</div>';
					if (!$(this.target).closest(this.targetParent).length) {
						$(this.target).wrap(this.cont);
						$(this.target).closest(this.targetParentIn).prepend(this.title);
						$(this.target).closest(this.targetParentIn).append(this.bottom);
						//�˾� �ϴܺ� Ŀ���� ��ư ����
						if (this.obj.targetCustomBtnsName && typeof this.obj.targetCustomBtnsName === 'object') {
							$(this.target).closest(this.targetParentIn).find(this.targetBottom).html('');
							for (var i = 0; i < this.obj.targetCustomBtnsName.length; i++) {
								var clsn = this.obj.targetCustomBtnsName[i][1] ? this.obj.targetCustomBtnsName[i][1] : 'cst_btn';
								if (typeof this.obj.targetCustomBtnsName[i][2] === 'object') {
									var t = this.obj.targetCustomBtnsName[i][2];
									var o = {
										href: t.href ? t.href : '',
										target: t.target ? t.target : '_self',
										title: t.title ? t.title : '',
									}
									var html = '<a href="' + o.href + '" target="' + o.target + '" title="' + o.title + '"  class="' + clsn + '">' + this.obj.targetCustomBtnsName[i][0] + '</a>';
								} else {
									var html = '<a href="javascript:;" class="' + clsn + '">' + this.obj.targetCustomBtnsName[i][0] + '</a>';
								}
								var $html = $(html);
								$(this.target).closest(this.targetParentIn).find(this.targetBottom).append(html);
								if (typeof this.obj.targetCustomBtnsName[i][2] === 'function') {
									this.obj.targetCustomBtnsName[i][2]($html, $(this.target).closest(this.targetParent));
								}
							}
						}
						this.cont = '';
						this.title = '';
						this.bottom = '';
					}
					$(this.target).closest(this.targetParent).attr('data-params', (function () {
						var _p = '';
						if (_this.obj.attrSetParams && typeof _this.obj.attrSetParams === 'object') {
							_p = JSON.stringify(_this.obj.attrSetParams);
						}
						return _p;
					})());
					if (typeof this.obj.beforeCallback === 'function') {
						this.obj.beforeCallback($(this.target));
					}
					$(this.target).show();
					$(this.target).closest(this.targetParent).hide();
				},
				alignFun: function (bool, popOpenGoobun) {
					var _this = this;
					if (bool) {
						var sc = {
							//val: $(document).scrollTop() * (1 / window.ZOOM_VIEW),
							val: $('body').is('[data-scroll-value]') ? Math.abs($('body').attr('[data-scroll-value]')) : $(document).scrollTop() * (1 / window.ZOOM_VIEW),
						};
						var align = function ($this) {
							var v = null;
							console.log(_this.obj.align);
							if (!_this.obj || !_this.obj.align) {
								return false;
							}
							switch (_this.obj.align[0], _this.obj.align[1]) {
								case 'center', 'center':
									var tp = (function () {
										if ($('body').outerHeight() <= $this.outerHeight()) {
											$(_this.target).closest(_this.targetParent).addClass('oversizeHeight');
											return 0;
										} else {
											$(_this.target).closest(_this.targetParent).removeClass('oversizeHeight');
											return $('html').is('.mobile') ? sc.val + (window.innerHeight / 2) + ($this.outerHeight() / 2) : sc.val + (window.innerHeight / 2) - ($this.outerHeight() / 2)
										}
									})();
									if (!popOpenGoobun && $('body').css('margin-top')) {
										tp += Number($('body').css('margin-top').replace(/[^0-9.]/g, ''));
									}
									v = {
										'top': tp
									};
									break;
								case 'left', 'top':
								case 'right', 'top':
									v = {
										'top': sc.val + 50
									};
									break;
							}
							return v;
						};
						setTimeout(function () { //���� �˾��ȿ� �̹������ִٸ� �̹����ҷ����½ð������� ���̰��� ����� �����ȵ�. �׷���Ÿ�Ӿƿ�
							$(_this.target).closest(_this.targetParent).css(align($(_this.target).closest(_this.targetParent)));
							if (typeof _this.obj.afterCallback === 'function') {
								$(_this.target).closest(_this.targetParent).attr('data-layerpop-visible', true);
								_this.obj.afterCallback($(_this.target).closest(_this.targetParent));
							}
						}, 10);
					}
				},
				submitFun: function () {
					var _this = this;
					$(_this.target).closest(_this.targetParent).find(this.targetBtns[1]).off().on({
						'click': function () {
							if (typeof _this.obj.submit === 'function' && _this.obj.submit) {
								_this.obj.submit($(this).closest(_this.targetParent));
								if (_this.obj.type == 'alert' || _this.obj.type == 'confirm') {
									$(_this).closest(_this.targetParent).remove();
								}
								$(document).scrollTop(_this.currentScrolltop);
							} else {
								_this.act().hide();
							}
						}
					});
				},
				scrLock: function (bool, popOpenGoobun) {
					/*
					 * parametter : popOpenGoobun = �˾��� �ϳ��� ���������� ? false : true
					 */
					this.alignFun(bool, popOpenGoobun);
					var scrollValue = -(this.currentScrolltop * (1 / window.ZOOM_VIEW));
					if (!this.obj.garaboon) {
						if (bool) {
							var o = {
								'overflow-y': 'hidden',
								'position': 'fixed',
								'width': '100%',
								'height': '100%',
							}
							if (popOpenGoobun) {
								o = $.extend(false, o, {
									'margin-top': scrollValue
								});
							}
							$('body').css(o).attr('data-scroll-value', scrollValue);
							// $(this.target).closest(this.targetParent).find(this.dimmClsName).on('wheel scroll mousemove touchmove touchstart', function(e) {
							//     e.preventDefault();
							//     e.stopPropagation();
							//     return false;
							// });
							$(this.target).closest(this.targetParent).on('touchmove', function (e) {
								var cnt = true;
								var lastY = 0;
								if (e.originalEvent) {
									var currentY = e.originalEvent.touches[0].clientY;
									if (currentY != lastY) {
										cnt = false;
									}
									lastY = currentY;
								}
								return cnt;
							});
						} else {
							if (popOpenGoobun) {
								$('body').css({
									'overflow-y': 'auto',
									'position': 'static',
									'width': 'auto',
									'height': 'auto',
									'margin-top': 0
								}).removeAttr('data-scroll-value');
								$(document).scrollTop(this.currentScrolltop);
							}
						}
					}
					if (this.obj.openAfterScroll) {
						$(this.target).closest(this.targetParent).addClass('oversizeHeight');
					}
				},
				close: function () {
					var _this = this;
					// $(document).keyup(function() {
					//     if(event.keyCode == 27) {//esc
					//         if(typeof _this.obj.closeInit === 'function'){
					//             _this.obj.closeInit();
					//         }else{
					//             _this.act().hide();
					//         }
					//     }
					// });
					$(_this.target).closest(_this.targetParent).find(this.targetBtns[0]).off().on({
						'click': function (e) {
							if (typeof _this.obj.closeInit === 'function') {
								_this.obj.closeInit($(this).closest(_this.targetParent));
							} else {
								_this.act().hide($(this));
							}
							return false;
						}
					});
					$(_this.target).closest(_this.targetParent).find(this.dimmClsName).off().on({
						'click': function () {
							if (typeof _this.obj.closeInit === 'function') {
								_this.obj.closeInit($(this).closest(_this.targetParent));
							} else {
								_this.act().hide($(this));
							}
							return false;
						}
					});
				},
				act: function (bool) {
					var _this = this;
					var popOpenFun = function () {
						var popOpenGoobun = true;
						/* �˾��� �ϳ��� ���������� �ٵ����� ��Ž : S */
						$(_this.targetParent).each(function () {
							var $this = $(this);
							if ($this.is(':visible')) {
								popOpenGoobun = false;
							}
						});
						/* �˾��� �ϳ��� ���������� �ٵ����� ��Ž : E */
						return popOpenGoobun;
					};
					return {
						show: function () {
							var gt = popOpenFun();
							$(_this.target).closest(_this.targetParent).show();
							$(_this.target).closest(_this.targetParentIn).addClass('layerpop_on');
							_this.dimm().get(true);
							_this.scrLock(true, gt);
						},
						hide: function ($self) {
							$(_this.target).closest(_this.targetParent).hide();
							$(_this.target).closest(_this.targetParentIn).removeClass('layerpop_on');
							_this.dimm().get(false, '', $self);
							_this.scrLock(false, popOpenFun());
							if (_this.obj.clearFormElement) {
								$(_this.target).find('input, select, textarea').each(function () {
									var $this = $(this);
									if ($this.is('[type="radio"]') || $this.is('[type="checkbox"]')) {
										$this.prop('checked', false);
									} else {
										$this.val('');
									}
								});
							}
							$(_this.target).closest(_this.targetParent).attr('data-layerpop-visible', false);
							if (typeof _this.obj.closeCallb === 'function') {
								_this.obj.closeCallb($(_this.target).closest(_this.targetParent));
							}
						}
					};
				},
				dimm: function () {
					var _this = this;
					var $p = $(_this.target).closest(_this.targetParent);
					return {
						set: function () {
							$p.prepend('<div class="' + _this.clsFormat(_this.dimmClsName) + ' " style="display: none;"></div>');
							$p.find(_this.dimmClsName).css({
								'position': 'fixed',
								'z-index': 100,
								'left': 0,
								'top': 0,
								'bottom': 0,
								'width': '100%',
								'opacity': 0,
								'background': 'black'
							});
							//Ŭ�������� ������ �ȵǴ°� ��ܺο� ���� touch swipe ��� �̺�Ʈ off��Ŵ
						},
						get: function (bool, callb, $self) {
							if (bool) {
								$p.find(_this.dimmClsName).show().animate({
									'opacity': .7
								}, $.extend({
									'duration': 200,
									'complete': function () {}
								}, callb));
							} else {
								$p.find(_this.dimmClsName).animate({
									'opacity': 0
								}, $.extend({
									'complete': function () {
										$(this).remove();
									}
								}, callb));
							}
						},
					};
				},
				aniCallb: function (obj) {
					return $.extend({
						'duration': 600,
						'easing': 'swing',
						'complete': function () {},
						'step': function () {}
					}, obj);
				},
				clsFormat: function (str) {
					return str.replace('.', '');
				},
			};
			// this.each(function() {
			//     $.data(this, new CmmLocLaypop($(this), obj));
			// });
			return new CmmLocLaypop($(this), obj);
		},
	});
})(jQuery);
