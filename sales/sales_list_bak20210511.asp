<!--#include virtual = "/common/common.asp"-->
<!--#include virtual = "/include/header/header.asp"-->
<!--#include virtual = "/wwwconf/function/db/DBConnection.asp"-->

<script type="text/javascript">
	$(document).ready(function () {
		fn_salary_area_show(1,50,'tbody1');
		fn_salary_area_show(51,100,'tbody2');
	});

	//상세보기
	function FN_view(val) {
		$('#hdn_biz_code').val(val);
		$('#frm_view').attr('action', 'sales_view.asp');
		$('#frm_view').submit();
	}
</script>
</head>

<body>

<!-- 상단 -->
<!--#include virtual = "/include/gnb/topMenu.asp"-->

<form method="post" id="frm_view" name="frm_view" action="">
	<input type="hidden" id="hdn_biz_code" name="hdn_biz_code" value="">
</form>

<!-- 본문 -->
<div id="contents" class="sub_page">
	<div class="sub_visual notice">
		<div class="visual_area">
			<h2 style="margin: 0; transform: translate(-50%, -50%);"><img src="/images/h6_tools2.png" alt="연봉자료"></h2>
		</div>
	</div>

	<div class="content">
		<div class="con_box">
			<div class="salary_area2">
				<div class="tab_box">
					<ul>
						<li>
							<button type="button" onclick="fn_salary_area_show(1, 50, 'tbody1'); fn_salary_area_show(51, 100, 'tbody2');" class="on">
								1위~100위
							</button>
						</li>
						<li>
							<button type="button" onclick="fn_salary_area_show(101, 150, 'tbody1'); fn_salary_area_show(151, 200, 'tbody2');" class="">
								101위~200위
							</button>
						</li>
						<li>
							<button type="button" onclick="fn_salary_area_show(201, 250, 'tbody1'); fn_salary_area_show(251, 300, 'tbody2');" class="">
								201위~300위
							</button>
						</li>
						<li>
							<button type="button" onclick="fn_salary_area_show(301, 350, 'tbody1'); fn_salary_area_show(351, 400, 'tbody2');" class="">
								301위~400위
							</button>
						</li>
						<li>
							<button type="button" onclick="fn_salary_area_show(401, 450, 'tbody1'); fn_salary_area_show(451, 500, 'tbody2');" class="">
								401위~500위
							</button>
						</li>
					</ul>
				</div>
				<script>
					//탭
					$(".tab_box button").click(function() {
						$(".tab_box button").removeClass("on");
						$(this).addClass("on");
						return false;
					});

					function fn_salary_area_show(_sRank, _eRank, _body) {
						$.ajax({
							type: 'POST'
							, url: 'ajax_sales_list.asp'
							, data: { sRank : _sRank, eRank : _eRank}
							, success: function (data) {
								$('#' + _body).html(data);
							}
							, error: function (XMLHttpRequest, textStatus, errorThrown) {
								alert(textStatus);
							}
						});
					}

					function fn_show(obj) {
						$('#mentor_area #lb_show').hide();
						$('#mentor_area #lb_hide').show();

						$(obj).children().children('#lb_hide').hide();
						$(obj).children().children('#lb_show').show();

					}
				</script>


	<div class="content">
		<div class="con_box">
			<div class="partner_area">
				<form id="frm" name="frm" method="get">

				<!--<div class="areaArea">
					<ul style="text-align:center;">
						<li>
							<label class="checkbox" for="schArea1">
								<input type="checkbox" id="schArea1" class="chk" name="schArea" value="">
									<span>전체</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea2">
								<input type="checkbox" id="schArea2" class="chk" name="schArea" value="서울,경기,인천">
									<span>서울.경기.인천</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea3">
								<input type="checkbox" id="schArea3" class="chk" name="schArea" value="부산">
									<span>부산</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea4">
								<input type="checkbox" id="schArea4" class="chk" name="schArea" value="대구">
									<span>대구</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea5">
								<input type="checkbox" id="schArea5" class="chk" name="schArea" value="대전">
									<span>대전</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea6">
								<input type="checkbox" id="schArea6" class="chk" name="schArea" value="광주">
									<span>광주</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea7">
								<input type="checkbox" id="schArea7" class="chk" name="schArea" value="울산">
									<span>울산</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea8">
								<input type="checkbox" id="schArea8" class="chk" name="schArea" value="세종">
									<span>세종</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea9">
								<input type="checkbox" id="schArea9" class="chk" name="schArea" value="강원">
									<span>강원도</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea10">
								<input type="checkbox" id="schArea10" class="chk" name="schArea" value="경남">
									<span>경상남도</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea11">
								<input type="checkbox" id="schArea11" class="chk" name="schArea" value="경북">
									<span>경상북도</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea12">
								<input type="checkbox" id="schArea12" class="chk" name="schArea" value="전남">
									<span>전라남도<span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea13">
								<input type="checkbox" id="schArea13" class="chk" name="schArea" value="전북">
									<span>전라북도</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea14">
								<input type="checkbox" id="schArea14" class="chk" name="schArea" value="충남">
									<span>충청남도</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea15">
								<input type="checkbox" id="schArea15" class="chk" name="schArea" value="충북">
									<span>충청북도</span>
							</label>
						</li>
						<li>
							<label class="checkbox off" for="schArea16">
								<input type="checkbox" id="schArea16" class="chk" name="schArea" value="제주">
									<span>제주도</span>
							</label>
						</li>
					</ul>
				</div>-->


				</form>


				<form id="frm_view" name="frm_view" method="post" target="_blank" action="./view.asp">
				<input type="hidden" id="set_bizNum" name="bizNum" value="">
				</form>

				<div class="list_area">
					<ul>

						<li>
							<div class="info_box">
								<!--<div class="la_logo">
									<div class="logo_box">
										<div class="logo">

											<a href="javascript:" onclick="fn_dtl_view('5038506378')"><img src="http://www2.career.co.kr/kangso/202104/5038506378_21461803256.jpg" alt="협력사 회사 로고"></a>

										</div>
									</div>
								</div>-->
								<div class="la_info2">
									<div class="tit">
										<p><a href="sales_view.asp" onclick="fn_dtl_view('5038506378')">(주)커리어넷</a></p>
										<div class="company_icon">

											<!--<em class="icon i-middle on">중견기업</em>-->

											<!--<em class="icon i-kosdaq on">코스피</em>-->

										</div>
									</div>
									<dl>
										<dt>설립년도 :</dt>
										<dd>1974년 / 임직원수 : 270명</dd><br />
										<dt>매출액 :</dt>
										<dd>2,022억 7,591만원 (2020년 기준)</dd><br />

										<dt>매출순위 :</dt>
										<dd>1위</dd>

									</dl>
								</div>
							</div>
						</li>

						<li>
							<div class="info_box">
								<!--<div class="la_logo">
									<div class="logo_box">
										<div class="logo">

											<a href="javascript:" onclick="fn_dtl_view('5038506378')"><img src="http://www2.career.co.kr/kangso/202104/5038506378_21461803256.jpg" alt="협력사 회사 로고"></a>

										</div>
									</div>
								</div>-->
								<div class="la_info2">
									<div class="tit">
										<p><a href="javascript:" onclick="fn_dtl_view('5038506378')">(주)커리어넷</a></p>
										<div class="company_icon">

											<!--<em class="icon i-middle on">중견기업</em>-->

											<!--<em class="icon i-kosdaq on">코스피</em>-->

										</div>
									</div>
									<dl>
										<dt>설립년도 :</dt>
										<dd>1974년 / 임직원수 : 270명</dd><br />
										<dt>매출액 :</dt>
										<dd>2,022억 7,591만원 (2020년 기준)</dd><br />

										<dt>매출순위 :</dt>
										<dd>1위</dd>

									</dl>
								</div>
							</div>
						</li>

						<li>
							<div class="info_box">
								<!--<div class="la_logo">
									<div class="logo_box">
										<div class="logo">

											<a href="javascript:" onclick="fn_dtl_view('5038506378')"><img src="http://www2.career.co.kr/kangso/202104/5038506378_21461803256.jpg" alt="협력사 회사 로고"></a>

										</div>
									</div>
								</div>-->
								<div class="la_info2">
									<div class="tit">
										<p><a href="javascript:" onclick="fn_dtl_view('5038506378')">(주)커리어넷</a></p>
										<div class="company_icon">

											<!--<em class="icon i-middle on">중견기업</em>-->

											<!--<em class="icon i-kosdaq on">코스피</em>-->

										</div>
									</div>
									<dl>
										<dt>설립년도 :</dt>
										<dd>1974년 / 임직원수 : 270명</dd><br />
										<dt>매출액 :</dt>
										<dd>2,022억 7,591만원 (2020년 기준)</dd><br />

										<dt>매출순위 :</dt>
										<dd>1위</dd>

									</dl>
								</div>
							</div>
						</li>

						<li>
							<div class="info_box">
								<!--<div class="la_logo">
									<div class="logo_box">
										<div class="logo">

											<a href="javascript:" onclick="fn_dtl_view('5038506378')"><img src="http://www2.career.co.kr/kangso/202104/5038506378_21461803256.jpg" alt="협력사 회사 로고"></a>

										</div>
									</div>
								</div>-->
								<div class="la_info2">
									<div class="tit">
										<p><a href="javascript:" onclick="fn_dtl_view('5038506378')">(주)커리어넷</a></p>
										<div class="company_icon">

											<!--<em class="icon i-middle on">중견기업</em>-->

											<!--<em class="icon i-kosdaq on">코스피</em>-->

										</div>
									</div>
									<dl>
										<dt>설립년도 :</dt>
										<dd>1974년 / 임직원수 : 270명</dd><br />
										<dt>매출액 :</dt>
										<dd>2,022억 7,591만원 (2020년 기준)</dd><br />

										<dt>매출순위 :</dt>
										<dd>1위</dd>

									</dl>
								</div>
							</div>
						</li>

						<li>
							<div class="info_box">
								<!--<div class="la_logo">
									<div class="logo_box">
										<div class="logo">

											<a href="javascript:" onclick="fn_dtl_view('5038506378')"><img src="http://www2.career.co.kr/kangso/202104/5038506378_21461803256.jpg" alt="협력사 회사 로고"></a>

										</div>
									</div>
								</div>-->
								<div class="la_info2">
									<div class="tit">
										<p><a href="javascript:" onclick="fn_dtl_view('5038506378')">(주)커리어넷</a></p>
										<div class="company_icon">

											<!--<em class="icon i-middle on">중견기업</em>-->

											<!--<em class="icon i-kosdaq on">코스피</em>-->

										</div>
									</div>
									<dl>
										<dt>설립년도 :</dt>
										<dd>1974년 / 임직원수 : 270명</dd><br />
										<dt>매출액 :</dt>
										<dd>2,022억 7,591만원 (2020년 기준)</dd><br />

										<dt>매출순위 :</dt>
										<dd>1위</dd>

									</dl>
								</div>
							</div>
						</li>

						<li>
							<div class="info_box">
								<!--<div class="la_logo">
									<div class="logo_box">
										<div class="logo">

											<a href="javascript:" onclick="fn_dtl_view('5038506378')"><img src="http://www2.career.co.kr/kangso/202104/5038506378_21461803256.jpg" alt="협력사 회사 로고"></a>

										</div>
									</div>
								</div>-->
								<div class="la_info2">
									<div class="tit">
										<p><a href="javascript:" onclick="fn_dtl_view('5038506378')">(주)커리어넷</a></p>
										<div class="company_icon">

											<!--<em class="icon i-middle on">중견기업</em>-->

											<!--<em class="icon i-kosdaq on">코스피</em>-->

										</div>
									</div>
									<dl>
										<dt>설립년도 :</dt>
										<dd>1974년 / 임직원수 : 270명</dd><br />
										<dt>매출액 :</dt>
										<dd>2,022억 7,591만원 (2020년 기준)</dd><br />

										<dt>매출순위 :</dt>
										<dd>1위</dd>

									</dl>
								</div>
							</div>
						</li>

						<li>
							<div class="info_box">
								<!--<div class="la_logo">
									<div class="logo_box">
										<div class="logo">

											<a href="javascript:" onclick="fn_dtl_view('5038506378')"><img src="http://www2.career.co.kr/kangso/202104/5038506378_21461803256.jpg" alt="협력사 회사 로고"></a>

										</div>
									</div>
								</div>-->
								<div class="la_info2">
									<div class="tit">
										<p><a href="javascript:" onclick="fn_dtl_view('5038506378')">(주)커리어넷</a></p>
										<div class="company_icon">

											<!--<em class="icon i-middle on">중견기업</em>-->

											<!--<em class="icon i-kosdaq on">코스피</em>-->

										</div>
									</div>
									<dl>
										<dt>설립년도 :</dt>
										<dd>1974년 / 임직원수 : 270명</dd><br />
										<dt>매출액 :</dt>
										<dd>2,022억 7,591만원 (2020년 기준)</dd><br />

										<dt>매출순위 :</dt>
										<dd>1위</dd>

									</dl>
								</div>
							</div>
						</li>

						<li>
							<div class="info_box">
								<!--<div class="la_logo">
									<div class="logo_box">
										<div class="logo">

											<a href="javascript:" onclick="fn_dtl_view('5038506378')"><img src="http://www2.career.co.kr/kangso/202104/5038506378_21461803256.jpg" alt="협력사 회사 로고"></a>

										</div>
									</div>
								</div>-->
								<div class="la_info2">
									<div class="tit">
										<p><a href="javascript:" onclick="fn_dtl_view('5038506378')">(주)커리어넷</a></p>
										<div class="company_icon">

											<!--<em class="icon i-middle on">중견기업</em>-->

											<!--<em class="icon i-kosdaq on">코스피</em>-->

										</div>
									</div>
									<dl>
										<dt>설립년도 :</dt>
										<dd>1974년 / 임직원수 : 270명</dd><br />
										<dt>매출액 :</dt>
										<dd>2,022억 7,591만원 (2020년 기준)</dd><br />

										<dt>매출순위 :</dt>
										<dd>1위</dd>

									</dl>
								</div>
							</div>
						</li>

						<li>
							<div class="info_box">
								<!--<div class="la_logo">
									<div class="logo_box">
										<div class="logo">

											<a href="javascript:" onclick="fn_dtl_view('5038506378')"><img src="http://www2.career.co.kr/kangso/202104/5038506378_21461803256.jpg" alt="협력사 회사 로고"></a>

										</div>
									</div>
								</div>-->
								<div class="la_info2">
									<div class="tit">
										<p><a href="javascript:" onclick="fn_dtl_view('5038506378')">(주)커리어넷</a></p>
										<div class="company_icon">

											<!--<em class="icon i-middle on">중견기업</em>-->

											<!--<em class="icon i-kosdaq on">코스피</em>-->

										</div>
									</div>
									<dl>
										<dt>설립년도 :</dt>
										<dd>1974년 / 임직원수 : 270명</dd><br />
										<dt>매출액 :</dt>
										<dd>2,022억 7,591만원 (2020년 기준)</dd><br />

										<dt>매출순위 :</dt>
										<dd>1위</dd>

									</dl>
								</div>
							</div>
						</li>

						<li>
							<div class="info_box">
								<!--<div class="la_logo">
									<div class="logo_box">
										<div class="logo">

											<a href="javascript:" onclick="fn_dtl_view('5038506378')"><img src="http://www2.career.co.kr/kangso/202104/5038506378_21461803256.jpg" alt="협력사 회사 로고"></a>

										</div>
									</div>
								</div>-->
								<div class="la_info2">
									<div class="tit">
										<p><a href="javascript:" onclick="fn_dtl_view('5038506378')">(주)커리어넷</a></p>
										<div class="company_icon">

											<!--<em class="icon i-middle on">중견기업</em>-->

											<!--<em class="icon i-kosdaq on">코스피</em>-->

										</div>
									</div>
									<dl>
										<dt>설립년도 :</dt>
										<dd>1974년 / 임직원수 : 270명</dd><br />
										<dt>매출액 :</dt>
										<dd>2,022억 7,591만원 (2020년 기준)</dd><br />

										<dt>매출순위 :</dt>
										<dd>1위</dd>

									</dl>
								</div>
							</div>
						</li>

					</ul>
				</div><!-- //list_area -->

				<!--페이징-->
				<div class="pagingArea"><strong>1</strong><a href='/partner/list.asp?page=2&schKw=&schArea=#skipnavi'>2</a><a href='/partner/list.asp?page=3&schKw=&schArea=#skipnavi'>3</a><a href='/partner/list.asp?page=4&schKw=&schArea=#skipnavi'>4</a><a href='/partner/list.asp?page=5&schKw=&schArea=#skipnavi'>5</a><a href='/partner/list.asp?page=6&schKw=&schArea=#skipnavi'>6</a><a href='/partner/list.asp?page=7&schKw=&schArea=#skipnavi'>7</a><a href='/partner/list.asp?page=8&schKw=&schArea=#skipnavi'>8</a><a href='/partner/list.asp?page=9&schKw=&schArea=#skipnavi'>9</a><a href='/partner/list.asp?page=10&schKw=&schArea=#skipnavi'>10</a><a href='/partner/list.asp?page=11&schKw=&schArea=#skipnavi'><span class="next"></span></a></div>

			</div>
		</div>
	</div><!-- .content -->


</div>
<!-- //본문 -->

<!-- 하단 -->
<!--#include virtual = "/include/footer/footer.asp"-->

</body>
</html>
