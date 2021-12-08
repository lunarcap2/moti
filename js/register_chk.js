//���̵� �ߺ� Ȯ��
function fn_id_check() {
	var id				= $('#user_id').val();

	var checkNumber		= id.search(/[0-9]/g);	// ���� �Է� üũ
	var checkEnglish	= id.search(/[a-z]/ig);	// ���� �Է� üũ

	if (id == "") {
		$('#msgBox_id').text('���̵� �Է��� �ֽñ� �ٶ��ϴ�.');
		$('#user_id').focus();
		return;
	} 
	else if (!Validchar(id, num+alpha)) {
		$('#msgBox_id').text('���̵�� �ѱ� �� Ư�����ڸ� �������� �ʽ��ϴ�.');
		$('#user_id').focus();
		return;
	} 
	else if (id.length < 5) {
		$('#msgBox_id').text('���̵�� �ּ� 5���̻��̿��� �մϴ�.');
		$('#user_id').focus();
		return;
	} 
	else if(checkNumber < 0 || checkEnglish < 0){
		$('#msgBox_id').text('������ ���ڸ� ȥ���Ͽ� �Է��� �ֽñ� �ٶ��ϴ�.');
		$('#user_id').focus();
		return;
	} 
	else if (/(\w)\1\1\1/.test(id)){
		$('#msgBox_id').text("������ ���� ���� 4���� �̻��� ��� �����մϴ�.");
		$('#user_id').focus();
		return;
	}
	else {
		$.ajax({
			type: "POST"
			, url: "/my/signup/Id_CheckAll.asp"
			, data: { user_id: id }
			, dataType: "text"					
			, async: true
			, success: function (data) {
				// ���� ��ϵ� ���̵� �����ϸ� X, ������ O
				if (data.trim() == "X") {
					$('#msgBox_id').text("Ż���� ���̵� �Ǵ� �̹� ������� ���̵��, �̿��Ͻ� �� �����ϴ�.");
					$('#user_id').focus();
					return;
				} else {
					$('#msgBox_id').text("��� ������ ���̵��Դϴ�.");
					return;
				}
			}
			, error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.responseText);
			}

		});
	}
}

//��й�ȣ Ȯ��
function fn_pw_check() {
	var id			= $('#user_id').val();
	var pw1			= $('#user_pw1').val();
	var pw2			= $('#user_pw2').val();

	var pattern1	= /[0-9]/;					// ���� 
	var pattern2	= /[a-zA-Z]/;				// ���� 
	var pattern3	= /[~!@#$%^&*()_+|<>?:{}]/; // Ư������

	if (pw1.length == 0) {
		return;
	}
	else {
		if (pw1.length < 8 || pw1.length > 32) {
			$("#msgBox_pw1").text("��й�ȣ�� 8~32�� ������ ���˴ϴ�.");
			$('#user_pw1').focus();
			return;
		}
		
		if (id != "" && pw1.search(id) > -1) {
			$("#msgBox_pw1").text("��й�ȣ�� ���̵� ���ԵǾ� �ֽ��ϴ�.");
			$('#user_pw1').focus();
			return;
		}	
		
		if(!pattern1.test(pw1) || !pattern2.test(pw1) || !pattern3.test(pw1)) {
			$("#msgBox_pw1").text("��й�ȣ�� ����, ���� �� Ư�������� �������� �����ؾ� �մϴ�");
			$('#user_pw1').focus();
			return;
		}
		else{
			if(pw1.search(id) > -1) {
				$("#msgBox_pw1").text("��й�ȣ�� ���̵� ���ԵǾ� �ֽ��ϴ�.");
				$('#user_pw1').focus();
				return;
			}else{
				$("#msgBox_pw1").text("");
			}
		}
	}

	if (pw2.split(" ").join("") == "") {
		$("#msgBox_pw2").text("��й�ȣ Ȯ���� �Է��� �ּ���.");
		return;
	} 

	if (pw1 != pw2) {
		$("#msgBox_pw2").text("��й�ȣ�� ��ġ���� �ʽ��ϴ�.");
		return;
	} 
	else {
		$("#msgBox_pw1").text("");
		$("#msgBox_pw2").text("");
	}
}

//�����ϱ�
function onSubmit() {
	var hArea		= $('[name=hArea]').is(':checked');
	//var id			= $('#user_id').val();
	//var pw1			= $('#user_pw1').val();
	//var pw2			= $('#user_pw2').val();
	var salary		= $('#salary_sel').val();
	
	var agreeCheck = "";
	$('input:radio[name="agreeCheck"]').each(function() {
		if (this.checked) {
			agreeCheck = this.value;
		}
	});

	if (hArea == false){
		alert('���Ȱ�� ��������� ������ �ּ���.');
		$('[name=hArea]').focus();
		return;
	}
	
	/*
	if (id == '') {
		alert('���̵� �Է��� �ּ���.');
		$('#user_id').focus();
		return;
	}

	if(pw1 == '') {
		alert('��й�ȣ�� �Է��� �ּ���.');
		$('#user_pw1').focus();
		return;
	}

	if(pw2 == ''){
		alert('��й�ȣ Ȯ���� �Է��� �ּ���.');
		$('#user_pw2').focus();
		return;
	}

	if(pw1 != pw2){
		alert('��й�ȣ�� ��й�ȣ Ȯ�ο� �Է��� ������ ��ġ���� �ʽ��ϴ�.');
		$('#user_pw2').focus();
		return;
	}	
	*/

	if (salary == '') {
		alert('��������� �Է��� �ּ���.');
		$('#salary_sel').focus();
		return;
	}

	if (agreeCheck != "1"){
		alert('�������� �����ø� �ڶ�ȸ ����Ʈ �̿��� �Ұ��մϴ�.');
		$('[name=agreeCheck]').focus();
		return;
	}
	
	$('#join_wrap').attr('action', './memberRegProc_moti_school.asp');
	$('#join_wrap').submit();
}