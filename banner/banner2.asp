<%
option Explicit

'------ 페이지 기본정보 셋팅.
g_MenuID = "010001"  '앞 두 숫자는 lnb 페이지명, 맨 뒤 숫자는 메뉴 이미지 파일명에 참조
g_MenuID_Navi = "2,1"  '내비게이션 값
%>
<!--#include virtual = "/common/common.asp"-->
<!--#include virtual = "/include/header/header.asp"-->

<!--#include virtual = "/wwwconf/function/db/DBConnection.asp"-->
<%

%>

</head>

<body>
<!-- 상단 -->
<!--#include virtual = "/include/gnb/topMenu.asp"-->


<!-- 본문 -->
<div id="contents" class="sub_page">
	<div class="sub_visual banner2">
		<div class="visual_area">
			<h2><img src="../images/h2_banner2.png" alt="면접코치"></h2>
		</div>
	</div>
	<div class="content">
		<div class="con_box">
			<div class="banner_area">
				<div class="tit">
					<h4>면접 코칭 프로그램</h4>
				</div>
				<ul class="banner_list">
					<li>
						<em class="num">
							<img src="../images/banner_num1.png" alt="02">	
						</em>
						<dl>
							<dt>정장 대여 : 자신의 몸에 맞는 정장 코디!</dt>
							<dd>
								<ul>
									<li>
									· 대상 : 온라인 박람회 참가자 중 신청자(선착순 50명)<br>
									· 방법 : 박람회 행사 기간 내 신청 및 대여장소 방문 수령<br>
										<span>
											* 대여 장소 : 부산광역시 해운대구 해운대로61번길 55-1, 2층<br>
											* 대여 기간 : 1주일<br>
										</span>
									</li>
									<li>
										· 내용 : 자신에게 맞는 정장 대여<br>
										<span style="margin-top:32px;">
											* 대여 비용 : 무료<br>
											(※ 구체적인 사항은 신청자 개별 통지)
										</span>
									</li>
								</ul>
							</dd>
						</dl>
						<div class="img_box">
							<a href="https://forms.gle/85n7kn4cwTcTzSGD8" target="_blank">
								<img src="../images/banner2_1.jpg" alt="부산일자리정보망">	
							</a>
						</div>
					</li>
					<li>
						<em class="num">
							<img src="../images/banner_num2.png" alt="02">	
						</em>
						<dl>
							<dt>온라인 취업컨설팅 : 온라인 특강</dt>
							<dd>
								<ul>
									<li>
									     · 대상 : 온라인 박람회 참가자 <br>
										<span>
											* 돋보이는 이미지 메이크업 특강
											* 2020년 성공 면접 특강
										</span>
									</li>
									<li>
										· 내용 : 면접 & 메이크업 이미지 특강 제공
									</li>
								</ul>
							</dd>
						</dl>
						<div class="img_box">
							<a href="http://wjob.gabia.io/bepa-jobfair/" target="_blank">
								<img src="../images/banner2_2.jpg" alt="부산청년플랫폼">	
							</a>
						</div>
					</li>
				</ul>
			</div><!-- //info_area -->
		</div>
	</div><!-- .content -->

</div>
<!-- //본문 -->

<!-- 하단 -->
<!--#include virtual = "/include/footer/footer.asp"-->
<!-- 하단 -->

<script> 
$('.info_ul .btn').click(function(){
	$('video').trigger('pause');
	var activePop = $(this).attr("href");
	$(activePop).show().children('.layer_pop, .layer_dim').show();
	$poHeight = $(activePop).children('.layer_pop').outerHeight();
	winHeight = $(activePop).children('.layer_dim').height();
	if ($poHeight > winHeight) {
		$(activePop).children('.layer_pop').css("top", Math.max(0, $(window).scrollTop()));
		$(activePop).children('.layer_pop').css({
			marginTop:0});
		return this;
	}
	else{
		$(activePop).children('.layer_pop').css("top", Math.max(0,  $(window).scrollTop() + winHeight / 2) + "px"); 
		$(activePop).children('.layer_pop').css({
			marginTop: -$poHeight / 2});
	   return this;
	}
	
}); 

function close_layer(name){ 
	$('video').trigger('pause');
	document.getElementById(name).style.display='none'; 
} 
</script> 

<div id="layer1_1" class="layer_popup"> 
	<div class="layer_dim" onclick="close_layer('layer1_1');"></div>
	<div class="layer_pop">
		<div class="layer_wrap">
			<div class="pop_head">
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer1_1');">닫기</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>부산광역시</dt>
							<dd>변성완 부산광역시장 권한대행</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img1_1.jpg" alt="환영사 인물">
						</div>
					</div>
					<div class="video_area">
						<video src='../images/jobs/info_videos1_1.mp4' width='550' controls>
						</video>
					</div>
					<p class="txt">
						안녕하십니까? 부산광역시장 권한대행 변성완입니다.<br>
						코로나19로 경제적 어려움이 가중되고 있는 가운데 일자리 문제는 가장 시급하고 중요한 시대적 과제가 되었습니다.<br>
						이에 우리 시는 고용위기 극복과 지역경제 회복을 위해 일자리 창출을 최우선과제로 선정하고 시정역량을 집중하고 있습니다.<br><br>

						이러한 노력으로 우리 시는 금년도 고용노동부 주관 지방자치단체 일자리종합대상을 수상하기도 했습니다. 다 시민 여러분 덕분이라 생각합니다.<br>
						앞으로도 코로나19로 고통받고 있는 시민들을 위한 일자리 창출지원에 앞장서도록 하겠습니다.<br><br>

						우리 시는 전국 광역자치단체 최초로 온라인에서 구인·구직신청, 화상면접, 부대행사까지 동시에 이루어지는 완전한 온라인 일자리 박람회를 개최합니다.<br><br>

						이번 온라인 일자리 박람회는 구인·구직자 여러분이 보다 만족스러운 일자리 서비스를 받으실 수 있도록, 예전의 오프라인 박람회의 모든 것을 온라인으로 옮겨왔습니다.<br><br>

						실시간 화상 채용면접부터 유튜브를 통한 생생한 라이브 채용설명회와 취업특강, 그리고‘일포유’앱을 통한 각종 일자리지원정책까지 살아있는 취업정보를 한 곳에서 얻을 수 있도록 준비했습니다.<br>
						이번 일자리 박람회를 통해 참여자 여러분들이 어려움 속에서도 좋은 일자리도 찾고, 각종 부대행사를 통해서도 유익한 정보를 얻어가시기를 바랍니다.<br><br>

						우리 시는 시민 여러분의 적극적인 협조로 코로나19를 잘 이겨내고 있습니다. 우리 지역경제도 새로운 일상에 적응하여 코로나 몸살에서 곧 회복되어 예전의 활력을 찾을 것이라 믿어 의심치 않습니다.<br>
						일자리 박람회에 참여해 주신 구인·구직자 여러분의 노력과 열정이 빈 일자리를 메우고 기업의 구인수요를 해소하여 코로나19 경기침체를 벗어나는 전초가 될 것이라 확신합니다.<br><br>

						다시 한번 코로나19 극복 부산 온라인 일자리 박람회를 찾아주신 여러분께 감사드리며, 여러분의 노력이 좋은 일자리로 이어지길 간절히 바랍니다. <br>
						감사합니다.
					</p>
					
				</div>
			</div>
		</div>
	</div>
</div>

<div id="layer1_2" class="layer_popup"> 
	<div class="layer_dim" onclick="close_layer('layer1_2');"></div>
	<div class="layer_pop">
		<div class="layer_wrap">
			<div class="pop_head">
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer1_2');">닫기</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>부산지방고용노동청</dt>
							<dd>강현철 청장</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img1_2.jpg" alt="환영사 인물">
						</div>
					</div>
					<div class="video_area">
						<video src='../images/jobs/info_videos1_2.mp4' width='550' controls>
						</video>
					</div>
					<p class="txt">
						안녕하십니까? 부산고용노동청장 강현철입니다.<br>
						코로나19 극복 부산온라인일자리박람회를 찾아주신 여러분을 환영합니다.<br><br>

						코로나19로 인해 경제가 악화되었고, 많은 분들이 일자리를 잃었으며, 기업들은 채용문을 좁히고 있습니다. <br>
						사회적 거리두기로 인해 구직활동조차 어려운 지경이 되었습니다. <br>
						이번 온라인일자리박람회는 얼어붙은 채용시장을 녹이고자, 언택트 방식으로 준비하게 되었습니다.<br><br>

						부산 온라인 일자리박람회에서는 화상면접을 실시하고 있으며, 구직자는 온라인 채용설명회와 취업특강을 통해 실시간 소통할 수 있고, 기업은 공인노무사와 공인회계사를 통해 1:1 노무·경영컨설팅을 받을 수 있습니다.<br><br>

						부산고용노동청은 코로나19를 노사가 함께 극복하기 위하여 고용안정 협약지원 제도를 마련하였고, 실직자의 취업을 돕기 위해 채용보조금을 지원해드리고 있습니다. 청년의 취업을 촉진하기 위하여 청년일경험지원금과 청년특별구직지원금을 마련하였습니다. <br>
						그리고 부산시와 함께 코로나19 대응 정부지원제도 종합안내 앱을 개발하여 10월5일에 출시하였습니다.<br><br>

						앞으로도 부산고용노동청은 부산시, 그리고 지역의 유관기관과 협업하여 어려움을 겪고 있는 부산지역 경제 활성화를 위해 최선을 다할 것입니다. 컴퓨터와 모바일을 통한 면접, 아직은 익숙하지 않은 언택트 문화입니다. 하지만, 이 또한 변화하는 일자리 트랜드이기에 오히려 적극적으로 대응하는 자세가 필요하다고 봅니다.<br>
						이번 온라인 박람회가 성공적으로 추진되어 구인, 구직자 모두에게 힘이 될 수 있기를 바랍니다. 구직자 여러분의 취업 성공을 기원합니다. 감사합니다.
					</p>
					
				</div>
			</div>
		</div>
	</div>
</div> 

<div id="layer1_3" class="layer_popup"> 
	<div class="layer_dim" onclick="close_layer('layer1_3');"></div>
	<div class="layer_pop">
		<div class="layer_wrap">
			<div class="pop_head">
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer1_3');">닫기</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>BNK부산은행</dt>
							<dd>빈대인 은행장</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img1_3.jpg" alt="환영사 인물">
						</div>
					</div>
					<div class="video_area">
						<video src='../images/jobs/info_videos1_3.mp4' width='550' controls>
						</video>
					</div>
					<p class="txt">
						반갑습니다. 부산은행장 빈대인입니다.<br><br>

						코로나19 극복 부산 온라인 일자리 박람회 홈페이지를 찾아주신 <br>
						구인기업과 구직자 여러분들을 환영합니다.<br><br>

						코로나 확산 장기화로 모두가 힘든 시기를 겪고 있지만<br>
						지역 경제의 활력을 지키고 키우는 일도 결코 소홀히 할 수 없습니다.<br>
						그런 면에서 이번 박람회는 <br>
						인재 확보에 어려움을 겪고 있는 지역기업과 <br>
						지역 경제의 미래를 책임질 청년 구직자 모두에게 매우 큰 힘이 될 것으로 <br>
						기대하고 있습니다.<br><br>

						특히 이번 박람회는<br>
						지역의 고용경제 활성화 측면 뿐만 아니라, <br>
						‘전국 광역지자체가 추진하는 최초의 온택트 일자리 박람회’라는 점에도<br>
						매우 의미가 있습니다.<br><br>

						부산은행은 본 박람회의 성공적인 개최를 위해 <br>
						구인기업에 대한 채용장려금 지원,기업경영컨설팅 등의<br>
						지원을 실시할 예정입니다.<br><br>
						 
						지역의 청년들이 지역에서 꿈을 이루고, <br>
						일자리에서 시작된 활력이 지역경제의 성장으로 이어지도록<br>
						부산은행이 여러분 곁에서 끝까지 응원하겠습니다.<br>
						감사합니다.
					</p>
					
				</div>
			</div>
		</div>
	</div>
</div> 

<div id="layer1_4" class="layer_popup"> 
	<div class="layer_dim" onclick="close_layer('layer1_4');"></div>
	<div class="layer_pop">
		<div class="layer_wrap">
			<div class="pop_head">
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer1_4');">닫기</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="video_area">
						<video src='../images/jobs/info_videos1_4.mp4' width='550' controls>
						</video>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> 

<div id="layer1" class="layer_popup"> 
	<div class="layer_dim" onclick="close_layer('layer1');"></div>
	<div class="layer_pop">
		<div class="layer_wrap">
			<div class="pop_head">
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer1');">닫기</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>부산경제진흥원</dt>
							<dd>박기식 원장</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_1.jpg" alt="환영사 인물">
						</div>
					</div>
					<p class="txt">
						안녕하십니까, 부산경제진흥원 원장 박기식입니다.<br>
						먼저 코로나 19로 인해 어려운 상황에서도 일자리 창출을 위해 힘을 써주신 고용청, 부산시 및 기업과 기관 담당자<br>
						모든 분께 감사의 말씀을 드립니다.<br>
						우리는 이번 코로나 19를 겪으면서 새로운 패러다임이 전환되는 시기를 맞이하고 있습니다. 기존의 대면이 주를 이루는<br>
						여러 사업들이 비대면으로 바뀌고 있으며, 이에 따라 시간과 공간, 거리의 한계가 사라지고 있습니다.<br>
						이번 코로나 19 극복 부산 온라인 일자리 박람회도 이러한 차원에서 마련하게 되었으며,<br>
						저는 다음 3가지 관점에서 그 의미를 부여하고 싶습니다.<br><br>

						첫째 코로나 19로 인해 어려운 경제상황과 고용 위축 속에서도 양질의 일자리를 제공하고자 정부와 부산시, 공공기관,<br>
						민간협회, 기업들이 모두 힘을 모았다는 점입니다.<br><br>

						둘째 필기전형부터 화상면접까지 전 채용과정을 박람회 사이트에서 이루어질 수 있도록 ‘온라인화’ 하여 코로나 19<br>
						사태를 극복하고자 하는 의지를 나타내었다는 점입니다.<br><br>

						셋째 취업특강, 온라인 컨설팅 등 다양한 온라인 부대행사를 통해 구직자에게 기업정보 뿐만 아니라 취업을 위한 다양한<br>
						정보와 이벤트를 제공한다는 점입니다.<br>
						여러모로 힘든 시기이지만 이렇게 민관이 적극적으로 힘을 모아 노력한다면 우리는 충분히 이렇게 힘든 시기를 극복할<br>
						수 있습니다.<br><br>

						이번 코로나 19 극복 부산 온라인 일자리 박람회가 구인기업과 구직자들에게 희망을 선물하여 코로나 19로 인한 고용<br>
						침체를 극복하는 좋은 기회의 장이 되기를 기원합니다. 감사합니다.
					</p>
				</div>
			</div>
		</div>
	</div>
</div> 

<div id="layer2" class="layer_popup"> 
	<div class="layer_dim" onclick="close_layer('layer2');"></div>
	<div class="layer_pop">
		<div class="layer_wrap">
			<div class="pop_head">
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer2');">닫기</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>부산상공회의소</dt>
							<dd>허용도 회장</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_2.jpg" alt="환영사 인물">
						</div>
					</div>
					<p class="txt">
						대단히 반갑습니다.<br><br>
						먼저 이번 부산 온라인 일자리 박람회 개최를 진심으로 축하드립니다.<br><br>

						아울러 행사 개최를 위해 애써주신 변성완 부산광역시장 권한대행님과 강현철 부산고용노동청장님, 빈대인 BNK부산은행장님께 감사드립니다.<br><br>

						잘 아시다시피 코로나19 사태의 장기화로 부산 경제는 지역기업의 수출입 감소와 소비시장 둔화 등으로 어려운 상황을 겪고 있습니다.<br><br> 

						채용시장도 고용의 주체인 기업의 경영 악화와 코로나19에 따른 사회적 거리 두기의 강화로 많이 위축되어있습니다.<br><br>

						이런 시기일수록 지역의 젊은 인재들이 일자리를 찾아 다른 지역으로 떠나가지 않도록 지역의 민·관·학계가 함께 양질의 일자리를 창출하는 데 힘을 모아야 할 것입니다.<br><br>

						그런 의미에서 이번 행사는 전국광역시도 중 최초로 코로나19 시대에 발맞춰 준비한 언택트 온라인 채용박람회로 일자리를 구하는 지역 청년들에게 큰 힘이 될 수 있을 것으로 생각합니다.<br><br>

						부산상공회의소도 앞으로 지역의 주요현안인 가덕신공항 건설과 부산형 복합리조트, 2030부산월드엑스포 유치를 차질없이 추진하여 지역 청년들이 원하는 양질의 일자리 창출에 앞장서 나가도록 하겠습니다.<br><br>

						끝으로 이번 행사가 좋은 일자리를 찾고 있는 많은 구직자들과 훌륭한 인재를 채용하고자 하는 지역 기업들이 좋은 결실을 맺을 수 있는 기회의 장이 되길 바라며 행사에 참여하신 모든 분들의 건승을 기원합니다. 감사합니다.	
					</p>
				</div>
			</div>
		</div>
	</div>
</div> 

<div id="layer3" class="layer_popup"> 
	<div class="layer_dim" onclick="close_layer('layer3');"></div>
	<div class="layer_pop">
		<div class="layer_wrap">
			<div class="pop_head">
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer3');">닫기</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>부산경영자총협회</dt>
							<dd>심상균 회장</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_3.jpg" alt="환영사 인물">
						</div>
					</div>
					<p class="txt">
						안녕하십니까.<br>
						부산경영자총협회 심상균 회장입니다.<br><br>

						부산지역에서 부산광역시, 부산지방고용노동청 및 지역 유관기관 공동으로「코로나19 극복을 위한 온라인 일자리 박람회」를 개최하게 된 점에 먼저 감사 인사를 드립니다.<br><br>

						코로나19 사태로 많은 국민들이 힘들어하고 있으며, 기업 경영에도 많은 애로사항이 있습니다. 현재의 위기 상황에서 기업에서 필요로 하는 우수 인력을 확보하는 동시에 실업률을 낮출 수 있는 이번 ‘온라인 일자리 박람회’는 매우 의미가 큰 행사라고 생각합니다.<br><br>

						이번 행사는 기존의 일자리 행사를 넘어 맞춤형 취업 지원, 라이브 채용설명회 및 취업 특강 등 온라인, 비대면의 장점을 최대한 살려 운영될 것이며, 기업과 구직자에 모두 도움이 되는 방식으로 내실있게 운영될 예정입니다.<br><br>

						디지털화, 비대면화 등 급격한 환경 변화 속에서 앞으로는 4차 산업혁명의 기술을 이용한 구직 지원 프로그램과 가상현실(VR), 인공지능(AI) 기술 기반 면접 및 컨설팅 진행 등 새로운 형태의 채용 기회가 마련될 것으로 생각합니다.<br><br>

						‘온라인 일자리 박람회’ 행사가 새로운 일자리를 창출할 수 있는 기회가 될 것으로 예상하며, 침체된 고용환경에서 구직자의 취업 기회를 넓히고 지역 내 기업의 구인난 해소에 도움이 되기를 기대합니다.<br><br>

						어려움 속에서도 도전하는 많은 분들에게 좋은 결과가 있기를 응원하며,<br>
						성공적인 박람회가 되기를 다시 한 번 기원합니다.<br>
						부산경영자총협회도 지역 일자리 창출을 위해 최선의 노력을 다하겠습니다.<br><br>

						감사합니다.
					</p>
				</div>
			</div>
		</div>
	</div>
</div> 

<div id="layer4" class="layer_popup"> 
	<div class="layer_dim" onclick="close_layer('layer4');"></div>
	<div class="layer_pop">
		<div class="layer_wrap">
			<div class="pop_head">
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer4');">닫기</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>한국산업단지공단 부산지역본부</dt>
							<dd>이장훈 본부장</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_4.jpg" alt="환영사 인물">
						</div>
					</div>
					<p class="txt">
						안녕하십니까, 한국산업단지공단 부산지역본부장입니다.<br><br>

						코로나19 극복 온라인 일자리 박람회의 개최를 축하드리며, 코로나19로 인해 엄중한 상황에서도 부산의 고용 활성화를 위해 노력해주신 모든 관계자 분들에게 감사의 말씀을 드립니다.<br><br>

						특히, 어려운 경제상황 속에서도 이 행사에 참여해 주신 기업들에게 진심으로 감사의 말씀을 드립니다.<br><br>

						최근 전국산업단지 현황통계에 따르면 우리나라 제조업은 생산 수출 감소 등 대외여건, 산업 패러다임의 전환 등으로 어려움을 겪고 있습니다.<br><br>

						하지만 부산의 경우 국가산업단지 기준으로 7월 월간 생산실적이 전월대비 5.6% 증가 하였고 공장 가동률도 전월대비 1.9%p 증가하는 등 긍정적인 경제전망을 보이고 있습니다.<br><br>

						즉, 코로나19 이후 상황 속에도 제조업이 우리나라 고용환경 개선에 선도적 역할을 하고 있는 것입니다.<br><br>

						이를 반영하듯, 이번 박람회에는 100여개사의 제조 또는 비제조 우수기업들이 참여하였고, 취업을 희망하는 많은 분들의 참여도 기대하고 있습니다.<br><br>

						아무쪼록 비대면으로 진행되는 행사이지만, 다양한 콘텐츠와 부대행사가 준비되어 있으니 이번「코로나19 극복 부산 온라인 일자리 박람회」를 통해 기업 및 구직자 모두 좋은 결과를 얻으시길 바랍니다. 감사합니다.
					</p>
				</div>
			</div>
		</div>
	</div>
</div> 

<div id="layer5" class="layer_popup"> 
	<div class="layer_dim" onclick="close_layer('layer5');"></div>
	<div class="layer_pop">
		<div class="layer_wrap">
			<div class="pop_head">
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer5');">닫기</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>부산테크노파크</dt>
							<dd>최종열 원장</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_5.jpg" alt="환영사 인물">
						</div>
					</div>
					<p class="txt">
						안녕하십니까?<br><br>

						부산테크노파크 원장 최종열입니다. <br><br>

						먼저 ‘코로나19 극복을 위한 부산 온라인 일자리 박람회’ 개최를 축하드립니다. <br><br>

						오늘날 우리는 코로나19 팬데믹으로 모든 영역이 새롭게 재편되고 있는
						포스트코로나 뉴노멀 시대를 맞이하고 있습니다.  <br>
						어려운 시기이지만 포스트코로나 시대를 극복하고 대응하기 위해 
						부산테크노파크를 비롯한 지역 혁신기관과 부산시는 <br>
						부산형 뉴딜정책 등 신성장 동력 발굴을 위해 노력하고 있습니다. <br>
						이러한 정책과 혁신을 성공적으로 이끌 수 있는 핵심 동력은
						결국 지역의 인적자원에 있습니다. <br><br>

						비대면에 기반한 새로운 일자리 매칭의 플랫폼이 될 이번 온라인 박람회를 통해 <br>
						창의적 역량과 재능, 경력을 발휘하고, 지역의 핵심동력으로 활약할 수 있는 <br>
						계기와 인연을 만들어 가시길 바랍니다. 

						감사합니다. 
					</p>
				</div>
			</div>
		</div>
	</div>
</div> 

<div id="layer6" class="layer_popup"> 
	<div class="layer_dim" onclick="close_layer('layer6');"></div>
	<div class="layer_pop">
		<div class="layer_wrap">
			<div class="pop_head">
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer6');">닫기</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>부산조선해양기자재공업협동조합</dt>
							<dd>최금식 이사장</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_6.jpg" alt="환영사 인물">
						</div>
					</div>
					<p class="txt">
						안녕하십니까? <br>
						코로나19로 피해상황으로 어려움을 겪고 있는 부산지역 중소기업의 원활한 인력수급 지원과
						구직 지원을 통한 고용 활성화를 위해 부산광역시에서 주관( 고용노동부 예산 지원 )하여
						금번「코로나19 극복 부산 온라인 일자리 박람회」를 10월 ~ 12월(2개월간) 개최하게
						되었습니다.<br><br>

						본 박람회는 코로나19 특수상황을 고려하여 전용홈페이지 운영, 온라인 구인접수, 화상면접 
						실시 등 비대면 언택트(UNTACT) 방식으로 진행되오며, 특히 참여기업에게는 BNK채용지원금,
						온라인 채용시스템, 기업홍보물 무료 영상제작, 기업 지원컨설팅 제공 등 다양한 지원혜택이
						있어 우수인력 수급 및 각종 인센티브 수혜에 좋은 기회가 될 것으로 사료됩니다.<br><br>

						아무쪼록 이번「코로나19 극복 부산 온라인 일자리 박람회」를 통해 기업에게는 우수인재를
						원활히 확보하시고, 구직자에게는 성공취업의 기운이 전달될 수 있도록 응원하겠습니다.
						감사합니다.<br><br>

						부산조선해양기자재공업협동조합 이사장 최금식
					</p>
				</div>
			</div>
		</div>
	</div>
</div> 


</body>
</html>
