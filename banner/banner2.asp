<%
option Explicit

'------ ������ �⺻���� ����.
g_MenuID = "010001"  '�� �� ���ڴ� lnb ��������, �� �� ���ڴ� �޴� �̹��� ���ϸ� ����
g_MenuID_Navi = "2,1"  '������̼� ��
%>
<!--#include virtual = "/common/common.asp"-->
<!--#include virtual = "/include/header/header.asp"-->

<!--#include virtual = "/wwwconf/function/db/DBConnection.asp"-->
<%

%>

</head>

<body>
<!-- ��� -->
<!--#include virtual = "/include/gnb/topMenu.asp"-->


<!-- ���� -->
<div id="contents" class="sub_page">
	<div class="sub_visual banner2">
		<div class="visual_area">
			<h2><img src="../images/h2_banner2.png" alt="������ġ"></h2>
		</div>
	</div>
	<div class="content">
		<div class="con_box">
			<div class="banner_area">
				<div class="tit">
					<h4>���� ��Ī ���α׷�</h4>
				</div>
				<ul class="banner_list">
					<li>
						<em class="num">
							<img src="../images/banner_num1.png" alt="02">	
						</em>
						<dl>
							<dt>���� �뿩 : �ڽ��� ���� �´� ���� �ڵ�!</dt>
							<dd>
								<ul>
									<li>
									�� ��� : �¶��� �ڶ�ȸ ������ �� ��û��(������ 50��)<br>
									�� ��� : �ڶ�ȸ ��� �Ⱓ �� ��û �� �뿩��� �湮 ����<br>
										<span>
											* �뿩 ��� : �λ걤���� �ؿ�뱸 �ؿ���61���� 55-1, 2��<br>
											* �뿩 �Ⱓ : 1����<br>
										</span>
									</li>
									<li>
										�� ���� : �ڽſ��� �´� ���� �뿩<br>
										<span style="margin-top:32px;">
											* �뿩 ��� : ����<br>
											(�� ��ü���� ������ ��û�� ���� ����)
										</span>
									</li>
								</ul>
							</dd>
						</dl>
						<div class="img_box">
							<a href="https://forms.gle/85n7kn4cwTcTzSGD8" target="_blank">
								<img src="../images/banner2_1.jpg" alt="�λ����ڸ�������">	
							</a>
						</div>
					</li>
					<li>
						<em class="num">
							<img src="../images/banner_num2.png" alt="02">	
						</em>
						<dl>
							<dt>�¶��� ��������� : �¶��� Ư��</dt>
							<dd>
								<ul>
									<li>
									     �� ��� : �¶��� �ڶ�ȸ ������ <br>
										<span>
											* �����̴� �̹��� ����ũ�� Ư��
											* 2020�� ���� ���� Ư��
										</span>
									</li>
									<li>
										�� ���� : ���� & ����ũ�� �̹��� Ư�� ����
									</li>
								</ul>
							</dd>
						</dl>
						<div class="img_box">
							<a href="http://wjob.gabia.io/bepa-jobfair/" target="_blank">
								<img src="../images/banner2_2.jpg" alt="�λ�û���÷���">	
							</a>
						</div>
					</li>
				</ul>
			</div><!-- //info_area -->
		</div>
	</div><!-- .content -->

</div>
<!-- //���� -->

<!-- �ϴ� -->
<!--#include virtual = "/include/footer/footer.asp"-->
<!-- �ϴ� -->

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
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer1_1');">�ݱ�</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>�λ걤����</dt>
							<dd>������ �λ걤������ ���Ѵ���</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img1_1.jpg" alt="ȯ���� �ι�">
						</div>
					</div>
					<div class="video_area">
						<video src='../images/jobs/info_videos1_1.mp4' width='550' controls>
						</video>
					</div>
					<p class="txt">
						�ȳ��Ͻʴϱ�? �λ걤������ ���Ѵ��� �������Դϴ�.<br>
						�ڷγ�19�� ������ ������� ���ߵǰ� �ִ� ��� ���ڸ� ������ ���� �ñ��ϰ� �߿��� �ô��� ������ �Ǿ����ϴ�.<br>
						�̿� �츮 �ô� ������� �غ��� �������� ȸ���� ���� ���ڸ� â���� �ֿ켱������ �����ϰ� ���������� �����ϰ� �ֽ��ϴ�.<br><br>

						�̷��� ������� �츮 �ô� �ݳ⵵ ���뵿�� �ְ� ������ġ��ü ���ڸ����մ���� �����ϱ⵵ �߽��ϴ�. �� �ù� ������ �����̶� �����մϴ�.<br>
						�����ε� �ڷγ�19�� ����ް� �ִ� �ùε��� ���� ���ڸ� â�������� ���弭���� �ϰڽ��ϴ�.<br><br>

						�츮 �ô� ���� ������ġ��ü ���ʷ� �¶��ο��� ���Ρ�������û, ȭ�����, �δ������� ���ÿ� �̷������ ������ �¶��� ���ڸ� �ڶ�ȸ�� �����մϴ�.<br><br>

						�̹� �¶��� ���ڸ� �ڶ�ȸ�� ���Ρ������� �������� ���� ���������� ���ڸ� ���񽺸� ������ �� �ֵ���, ������ �������� �ڶ�ȸ�� ��� ���� �¶������� �ŰܿԽ��ϴ�.<br><br>

						�ǽð� ȭ�� ä��������� ��Ʃ�긦 ���� ������ ���̺� ä�뼳��ȸ�� ���Ư��, �׸��������������� ���� ���� ���ڸ�������å���� ����ִ� ��������� �� ������ ���� �� �ֵ��� �غ��߽��ϴ�.<br>
						�̹� ���ڸ� �ڶ�ȸ�� ���� ������ �����е��� ����� �ӿ����� ���� ���ڸ��� ã��, ���� �δ���縦 ���ؼ��� ������ ������ ���ñ⸦ �ٶ��ϴ�.<br><br>

						�츮 �ô� �ù� �������� �������� ������ �ڷγ�19�� �� �̰ܳ��� �ֽ��ϴ�. �츮 ���������� ���ο� �ϻ� �����Ͽ� �ڷγ� ���쿡�� �� ȸ���Ǿ� ������ Ȱ���� ã�� ���̶� �Ͼ� �ǽ�ġ �ʽ��ϴ�.<br>
						���ڸ� �ڶ�ȸ�� ������ �ֽ� ���Ρ������� �������� ��°� ������ �� ���ڸ��� �޿�� ����� ���μ��並 �ؼ��Ͽ� �ڷγ�19 ���ħü�� ����� ���ʰ� �� ���̶� Ȯ���մϴ�.<br><br>

						�ٽ� �ѹ� �ڷγ�19 �غ� �λ� �¶��� ���ڸ� �ڶ�ȸ�� ã���ֽ� �����в� ����帮��, �������� ����� ���� ���ڸ��� �̾����� ������ �ٶ��ϴ�. <br>
						�����մϴ�.
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
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer1_2');">�ݱ�</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>�λ�������뵿û</dt>
							<dd>����ö û��</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img1_2.jpg" alt="ȯ���� �ι�">
						</div>
					</div>
					<div class="video_area">
						<video src='../images/jobs/info_videos1_2.mp4' width='550' controls>
						</video>
					</div>
					<p class="txt">
						�ȳ��Ͻʴϱ�? �λ���뵿û�� ����ö�Դϴ�.<br>
						�ڷγ�19 �غ� �λ�¶������ڸ��ڶ�ȸ�� ã���ֽ� �������� ȯ���մϴ�.<br><br>

						�ڷγ�19�� ���� ������ ��ȭ�Ǿ���, ���� �е��� ���ڸ��� �Ҿ�����, ������� ä�빮�� ������ �ֽ��ϴ�. <br>
						��ȸ�� �Ÿ��α�� ���� ����Ȱ������ ����� ������ �Ǿ����ϴ�. <br>
						�̹� �¶������ڸ��ڶ�ȸ�� ������ ä������� ���̰���, ����Ʈ ������� �غ��ϰ� �Ǿ����ϴ�.<br><br>

						�λ� �¶��� ���ڸ��ڶ�ȸ������ ȭ������� �ǽ��ϰ� ������, �����ڴ� �¶��� ä�뼳��ȸ�� ���Ư���� ���� �ǽð� ������ �� �ְ�, ����� ���γ빫��� ����ȸ��縦 ���� 1:1 �빫���濵�������� ���� �� �ֽ��ϴ�.<br><br>

						�λ���뵿û�� �ڷγ�19�� ��簡 �Բ� �غ��ϱ� ���Ͽ� ������ �������� ������ �����Ͽ���, �������� ����� ���� ���� ä�뺸������ �����ص帮�� �ֽ��ϴ�. û���� ����� �����ϱ� ���Ͽ� û���ϰ��������ݰ� û��Ư�������������� �����Ͽ����ϴ�. <br>
						�׸��� �λ�ÿ� �Բ� �ڷγ�19 ���� ������������ ���վȳ� ���� �����Ͽ� 10��5�Ͽ� ����Ͽ����ϴ�.<br><br>

						�����ε� �λ���뵿û�� �λ��, �׸��� ������ ��������� �����Ͽ� ������� �ް� �ִ� �λ����� ���� Ȱ��ȭ�� ���� �ּ��� ���� ���Դϴ�. ��ǻ�Ϳ� ������� ���� ����, ������ �ͼ����� ���� ����Ʈ ��ȭ�Դϴ�. ������, �� ���� ��ȭ�ϴ� ���ڸ� Ʈ�����̱⿡ ������ ���������� �����ϴ� �ڼ��� �ʿ��ϴٰ� ���ϴ�.<br>
						�̹� �¶��� �ڶ�ȸ�� ���������� �����Ǿ� ����, ������ ��ο��� ���� �� �� �ֱ⸦ �ٶ��ϴ�. ������ �������� ��� ������ ����մϴ�. �����մϴ�.
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
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer1_3');">�ݱ�</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>BNK�λ�����</dt>
							<dd>����� ������</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img1_3.jpg" alt="ȯ���� �ι�">
						</div>
					</div>
					<div class="video_area">
						<video src='../images/jobs/info_videos1_3.mp4' width='550' controls>
						</video>
					</div>
					<p class="txt">
						�ݰ����ϴ�. �λ������� ������Դϴ�.<br><br>

						�ڷγ�19 �غ� �λ� �¶��� ���ڸ� �ڶ�ȸ Ȩ�������� ã���ֽ� <br>
						���α���� ������ �����е��� ȯ���մϴ�.<br><br>

						�ڷγ� Ȯ�� ���ȭ�� ��ΰ� ���� �ñ⸦ �ް� ������<br>
						���� ������ Ȱ���� ��Ű�� Ű��� �ϵ� ���� ��Ȧ�� �� �� �����ϴ�.<br>
						�׷� �鿡�� �̹� �ڶ�ȸ�� <br>
						���� Ȯ���� ������� �ް� �ִ� ��������� <br>
						���� ������ �̷��� å���� û�� ������ ��ο��� �ſ� ū ���� �� ������ <br>
						����ϰ� �ֽ��ϴ�.<br><br>

						Ư�� �̹� �ڶ�ȸ��<br>
						������ ������ Ȱ��ȭ ���� �Ӹ� �ƴ϶�, <br>
						������ ��������ü�� �����ϴ� ������ ����Ʈ ���ڸ� �ڶ�ȸ����� ������<br>
						�ſ� �ǹ̰� �ֽ��ϴ�.<br><br>

						�λ������� �� �ڶ�ȸ�� �������� ���ָ� ���� <br>
						���α���� ���� ä������� ����,����濵������ ����<br>
						������ �ǽ��� �����Դϴ�.<br><br>
						 
						������ û����� �������� ���� �̷��, <br>
						���ڸ����� ���۵� Ȱ���� ���������� �������� �̾�������<br>
						�λ������� ������ �翡�� ������ �����ϰڽ��ϴ�.<br>
						�����մϴ�.
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
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer1_4');">�ݱ�</a> 
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
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer1');">�ݱ�</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>�λ���������</dt>
							<dd>�ڱ�� ����</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_1.jpg" alt="ȯ���� �ι�">
						</div>
					</div>
					<p class="txt">
						�ȳ��Ͻʴϱ�, �λ��������� ���� �ڱ���Դϴ�.<br>
						���� �ڷγ� 19�� ���� ����� ��Ȳ������ ���ڸ� â���� ���� ���� ���ֽ� ���û, �λ�� �� ����� ��� �����<br>
						��� �в� ������ ������ �帳�ϴ�.<br>
						�츮�� �̹� �ڷγ� 19�� �����鼭 ���ο� �з������� ��ȯ�Ǵ� �ñ⸦ �����ϰ� �ֽ��ϴ�. ������ ����� �ָ� �̷��<br>
						���� ������� �������� �ٲ�� ������, �̿� ���� �ð��� ����, �Ÿ��� �Ѱ谡 ������� �ֽ��ϴ�.<br>
						�̹� �ڷγ� 19 �غ� �λ� �¶��� ���ڸ� �ڶ�ȸ�� �̷��� �������� �����ϰ� �Ǿ�����,<br>
						���� ���� 3���� �������� �� �ǹ̸� �ο��ϰ� �ͽ��ϴ�.<br><br>

						ù° �ڷγ� 19�� ���� ����� ������Ȳ�� ��� ���� �ӿ����� ������ ���ڸ��� �����ϰ��� ���ο� �λ��, �������,<br>
						�ΰ���ȸ, ������� ��� ���� ��Ҵٴ� ���Դϴ�.<br><br>

						��° �ʱ��������� ȭ��������� �� ä������� �ڶ�ȸ ����Ʈ���� �̷���� �� �ֵ��� ���¶���ȭ�� �Ͽ� �ڷγ� 19<br>
						���¸� �غ��ϰ��� �ϴ� ������ ��Ÿ�����ٴ� ���Դϴ�.<br><br>

						��° ���Ư��, �¶��� ������ �� �پ��� �¶��� �δ���縦 ���� �����ڿ��� ������� �Ӹ� �ƴ϶� ����� ���� �پ���<br>
						������ �̺�Ʈ�� �����Ѵٴ� ���Դϴ�.<br>
						������� ���� �ñ������� �̷��� �ΰ��� ���������� ���� ��� ����Ѵٸ� �츮�� ����� �̷��� ���� �ñ⸦ �غ���<br>
						�� �ֽ��ϴ�.<br><br>

						�̹� �ڷγ� 19 �غ� �λ� �¶��� ���ڸ� �ڶ�ȸ�� ���α���� �����ڵ鿡�� ����� �����Ͽ� �ڷγ� 19�� ���� ���<br>
						ħü�� �غ��ϴ� ���� ��ȸ�� ���� �Ǳ⸦ ����մϴ�. �����մϴ�.
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
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer2');">�ݱ�</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>�λ���ȸ�Ǽ�</dt>
							<dd>��뵵 ȸ��</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_2.jpg" alt="ȯ���� �ι�">
						</div>
					</div>
					<p class="txt">
						����� �ݰ����ϴ�.<br><br>
						���� �̹� �λ� �¶��� ���ڸ� �ڶ�ȸ ���ָ� �������� ���ϵ帳�ϴ�.<br><br>

						�ƿ﷯ ��� ���ָ� ���� �ֽ��ֽ� ������ �λ걤������ ���Ѵ���԰� ����ö �λ���뵿û���, ����� BNK�λ�������Բ� ����帳�ϴ�.<br><br>

						�� �ƽôٽ��� �ڷγ�19 ������ ���ȭ�� �λ� ������ ��������� ������ ���ҿ� �Һ���� ��ȭ ������ ����� ��Ȳ�� �ް� �ֽ��ϴ�.<br><br> 

						ä����嵵 ����� ��ü�� ����� �濵 ��ȭ�� �ڷγ�19�� ���� ��ȸ�� �Ÿ� �α��� ��ȭ�� ���� ����Ǿ��ֽ��ϴ�.<br><br>

						�̷� �ñ��ϼ��� ������ ���� ������� ���ڸ��� ã�� �ٸ� �������� �������� �ʵ��� ������ �Ρ������а谡 �Բ� ������ ���ڸ��� â���ϴ� �� ���� ��ƾ� �� ���Դϴ�.<br><br>

						�׷� �ǹ̿��� �̹� ���� ���������õ� �� ���ʷ� �ڷγ�19 �ô뿡 �߸��� �غ��� ����Ʈ �¶��� ä��ڶ�ȸ�� ���ڸ��� ���ϴ� ���� û��鿡�� ū ���� �� �� ���� ������ �����մϴ�.<br><br>

						�λ���ȸ�Ǽҵ� ������ ������ �ֿ������� �����Ű��� �Ǽ��� �λ��� ���ո���Ʈ, 2030�λ���忢���� ��ġ�� �������� �����Ͽ� ���� û����� ���ϴ� ������ ���ڸ� â�⿡ ���弭 �������� �ϰڽ��ϴ�.<br><br>

						������ �̹� ��簡 ���� ���ڸ��� ã�� �ִ� ���� �����ڵ�� �Ǹ��� ���縦 ä���ϰ��� �ϴ� ���� ������� ���� ����� ���� �� �ִ� ��ȸ�� ���� �Ǳ� �ٶ�� ��翡 �����Ͻ� ��� �е��� �ǽ��� ����մϴ�. �����մϴ�.	
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
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer3');">�ݱ�</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>�λ�濵������ȸ</dt>
							<dd>�ɻ�� ȸ��</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_3.jpg" alt="ȯ���� �ι�">
						</div>
					</div>
					<p class="txt">
						�ȳ��Ͻʴϱ�.<br>
						�λ�濵������ȸ �ɻ�� ȸ���Դϴ�.<br><br>

						�λ��������� �λ걤����, �λ�������뵿û �� ���� ������� �������Ρ��ڷγ�19 �غ��� ���� �¶��� ���ڸ� �ڶ�ȸ���� �����ϰ� �� ���� ���� ���� �λ縦 �帳�ϴ�.<br><br>

						�ڷγ�19 ���·� ���� ���ε��� ������ϰ� ������, ��� �濵���� ���� �ַλ����� �ֽ��ϴ�. ������ ���� ��Ȳ���� ������� �ʿ�� �ϴ� ��� �η��� Ȯ���ϴ� ���ÿ� �Ǿ����� ���� �� �ִ� �̹� ���¶��� ���ڸ� �ڶ�ȸ���� �ſ� �ǹ̰� ū ����� �����մϴ�.<br><br>

						�̹� ���� ������ ���ڸ� ��縦 �Ѿ� ������ ��� ����, ���̺� ä�뼳��ȸ �� ��� Ư�� �� �¶���, ������ ������ �ִ��� ��� ��� ���̸�, ����� �����ڿ� ��� ������ �Ǵ� ������� �����ְ� ��� �����Դϴ�.<br><br>

						������ȭ, ����ȭ �� �ް��� ȯ�� ��ȭ �ӿ��� �����δ� 4�� ��������� ����� �̿��� ���� ���� ���α׷��� ��������(VR), �ΰ�����(AI) ��� ��� ���� �� ������ ���� �� ���ο� ������ ä�� ��ȸ�� ���õ� ������ �����մϴ�.<br><br>

						���¶��� ���ڸ� �ڶ�ȸ�� ��簡 ���ο� ���ڸ��� â���� �� �ִ� ��ȸ�� �� ������ �����ϸ�, ħü�� ���ȯ�濡�� �������� ��� ��ȸ�� ������ ���� �� ����� ���γ� �ؼҿ� ������ �Ǳ⸦ ����մϴ�.<br><br>

						����� �ӿ����� �����ϴ� ���� �е鿡�� ���� ����� �ֱ⸦ �����ϸ�,<br>
						�������� �ڶ�ȸ�� �Ǳ⸦ �ٽ� �� �� ����մϴ�.<br>
						�λ�濵������ȸ�� ���� ���ڸ� â���� ���� �ּ��� ����� ���ϰڽ��ϴ�.<br><br>

						�����մϴ�.
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
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer4');">�ݱ�</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>�ѱ������������ �λ���������</dt>
							<dd>������ ������</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_4.jpg" alt="ȯ���� �ι�">
						</div>
					</div>
					<p class="txt">
						�ȳ��Ͻʴϱ�, �ѱ������������ �λ������������Դϴ�.<br><br>

						�ڷγ�19 �غ� �¶��� ���ڸ� �ڶ�ȸ�� ���ָ� ���ϵ帮��, �ڷγ�19�� ���� ������ ��Ȳ������ �λ��� ��� Ȱ��ȭ�� ���� ������ֽ� ��� ������ �е鿡�� ������ ������ �帳�ϴ�.<br><br>

						Ư��, ����� ������Ȳ �ӿ����� �� ��翡 ������ �ֽ� ����鿡�� �������� ������ ������ �帳�ϴ�.<br><br>

						�ֱ� ����������� ��Ȳ��迡 ������ �츮���� �������� ���� ���� ���� �� ��ܿ���, ��� �з������� ��ȯ ������ ������� �ް� �ֽ��ϴ�.<br><br>

						������ �λ��� ��� ����������� �������� 7�� ���� ��������� ������� 5.6% ���� �Ͽ��� ���� �������� ������� 1.9%p �����ϴ� �� �������� ���������� ���̰� �ֽ��ϴ�.<br><br>

						��, �ڷγ�19 ���� ��Ȳ �ӿ��� �������� �츮���� ���ȯ�� ������ ������ ������ �ϰ� �ִ� ���Դϴ�.<br><br>

						�̸� �ݿ��ϵ�, �̹� �ڶ�ȸ���� 100�������� ���� �Ǵ� ������ ���������� �����Ͽ���, ����� ����ϴ� ���� �е��� ������ ����ϰ� �ֽ��ϴ�.<br><br>

						�ƹ��ɷ� �������� ����Ǵ� ���������, �پ��� �������� �δ���簡 �غ�Ǿ� ������ �̹����ڷγ�19 �غ� �λ� �¶��� ���ڸ� �ڶ�ȸ���� ���� ��� �� ������ ��� ���� ����� �����ñ� �ٶ��ϴ�. �����մϴ�.
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
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer5');">�ݱ�</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>�λ���ũ����ũ</dt>
							<dd>������ ����</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_5.jpg" alt="ȯ���� �ι�">
						</div>
					</div>
					<p class="txt">
						�ȳ��Ͻʴϱ�?<br><br>

						�λ���ũ����ũ ���� �������Դϴ�. <br><br>

						���� ���ڷγ�19 �غ��� ���� �λ� �¶��� ���ڸ� �ڶ�ȸ�� ���ָ� ���ϵ帳�ϴ�. <br><br>

						���ó� �츮�� �ڷγ�19 �ҵ������� ��� ������ ���Ӱ� ����ǰ� �ִ�
						����Ʈ�ڷγ� ����� �ô븦 �����ϰ� �ֽ��ϴ�.  <br>
						����� �ñ������� ����Ʈ�ڷγ� �ô븦 �غ��ϰ� �����ϱ� ���� 
						�λ���ũ����ũ�� ����� ���� ���ű���� �λ�ô� <br>
						�λ��� ������å �� �ż��� ���� �߱��� ���� ����ϰ� �ֽ��ϴ�. <br>
						�̷��� ��å�� ������ ���������� �̲� �� �ִ� �ٽ� ������
						�ᱹ ������ �����ڿ��� �ֽ��ϴ�. <br><br>

						���鿡 ����� ���ο� ���ڸ� ��Ī�� �÷����� �� �̹� �¶��� �ڶ�ȸ�� ���� <br>
						â���� ������ ���, ����� �����ϰ�, ������ �ٽɵ������� Ȱ���� �� �ִ� <br>
						���� �ο��� ����� ���ñ� �ٶ��ϴ�. 

						�����մϴ�. 
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
				<a href="javascript:void(0)" class="layer_close" onclick="close_layer('layer6');">�ݱ�</a> 
			</div>
			<div class="pop_con info">
				<div class="info_area">
					<div class="tit">
						<h3><img src="../images/jobs/info_pop_logo.jpg" alt="logo"></h3>
					</div>
					<div class="info">
						<dl>
							<dt>�λ������ؾ�����������������</dt>
							<dd>�ֱݽ� �̻���</dd>
						</dl>
						<div class="img_box">
							<img src="../images/jobs/info_img2_6.jpg" alt="ȯ���� �ι�">
						</div>
					</div>
					<p class="txt">
						�ȳ��Ͻʴϱ�? <br>
						�ڷγ�19�� ���ػ�Ȳ���� ������� �ް� �ִ� �λ����� �߼ұ���� ��Ȱ�� �η¼��� ������
						���� ������ ���� ��� Ȱ��ȭ�� ���� �λ걤���ÿ��� �ְ�( ���뵿�� ���� ���� )�Ͽ�
						�ݹ����ڷγ�19 �غ� �λ� �¶��� ���ڸ� �ڶ�ȸ���� 10�� ~ 12��(2������) �����ϰ�
						�Ǿ����ϴ�.<br><br>

						�� �ڶ�ȸ�� �ڷγ�19 Ư����Ȳ�� ����Ͽ� ����Ȩ������ �, �¶��� ��������, ȭ����� 
						�ǽ� �� ���� ����Ʈ(UNTACT) ������� ����ǿ���, Ư�� ����������Դ� BNKä��������,
						�¶��� ä��ý���, ���ȫ���� ���� ��������, ��� ���������� ���� �� �پ��� ����������
						�־� ����η� ���� �� ���� �μ�Ƽ�� ������ ���� ��ȸ�� �� ������ ���˴ϴ�.<br><br>

						�ƹ��ɷ� �̹����ڷγ�19 �غ� �λ� �¶��� ���ڸ� �ڶ�ȸ���� ���� ������Դ� ������縦
						��Ȱ�� Ȯ���Ͻð�, �����ڿ��Դ� ��������� ����� ���޵� �� �ֵ��� �����ϰڽ��ϴ�.
						�����մϴ�.<br><br>

						�λ������ؾ����������������� �̻��� �ֱݽ�
					</p>
				</div>
			</div>
		</div>
	</div>
</div> 


</body>
</html>
