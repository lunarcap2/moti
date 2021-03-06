
	function chkNull(obj, msg) {
		if(obj.value.split(" ").join("") == "") {
			alert(msg);
			obj.focus();
			return false;
		} else {
			return true;
		}
	}

	function ischecked(obj,msg) {
		var sObj = eval(obj);
		var i = 0;
		for(i=0;i<sObj.length; i++) {
			if(sObj[i].checked) {
				return true;
			}
		}
		alert(msg);
		return false;
	}

	function isselected(obj,msg) {
		var sObj = eval(obj);
		if(sObj.selectedIndex > 0) {
			return true;
		}
		alert(msg);
		return false;
	}

	function chkLen(obj, minSize, maxSize, msg){
		if(minSize > maxSize){
			alert(obj.name + '에 대한 길이 체크에 잘못된 범위를 사용했습니다.');
			return false;
		}

		var objval_len = obj.value.length;
		var temp;

		for(i = 0; i < objval_len; i++) {
			temp = obj.value.charAt(i);
			if(escape(temp).length > 4)
			objval_len++;
		}

		if((objval_len < minSize) || (objval_len > maxSize)) {
			alert(msg);
			obj.focus();
			return false;
		} else {
			return true;
		}
	}
	
	//---------------------------------------------------------------------------------------------------
	// 등록시 글자수 체크
	//---------------------------------------------------------------------------------------------------
	function FC_ChkTextLen(form, maxLen) {
		var f = form;
		var text = f.value;
		
		var i = 0;
		var li_byte = 0;
		var li_len = 0; 
		var ls_one_char = "";
		var text2 = "";
	 
		for (i=0; i< text.length; i++) {
			ls_one_char = text.charAt(i);

			if (escape(ls_one_char).length > 4) {
				li_byte += 2;
			} else {
				li_byte++;
			}

			if(li_byte <= maxLen) {
				li_len = i + 1;
			}
		}

		if (li_byte > maxLen) {
			alert( maxLen + " 글자를 초과 입력할수 없습니다. \n 초과된 내용은 자동으로 삭제 됩니다. ");
			text2 = text.substr(0, li_len);
			f.value = text2;
		}

		f.focus();
	}
	
	/*
		숫자와영문만 입력받기
		obj = 인풋박스
		return = void
		키 이벤트 사용
	*/
	function NumEngCheck(obj){ 
		temp_value = obj.value.toString(); 
		regexp = /[^0-9a-zA-Z]/g; 
		repexp = ''; 
		temp_value = temp_value.replace(regexp,repexp); 
		obj.value = temp_value; 
	} 


	/*
		숫자,영문,특수문자만 입력받기
		obj = 인풋박스
		return = void
		키 이벤트 사용
	*/
	function NumEngSpecialCheck(obj){ 
		temp_value = obj.value.toString(); 
		regexp = /[^0-9a-zA-Z~!@\#$%^&*\()\-=+_'\"]/g; 
		repexp = ''; 
		temp_value = temp_value.replace(regexp,repexp); 
		obj.value = temp_value; 
	} 


	/*
		영어만 입력받기  (대소문자)
		obj = 인풋박스
		type = 입력형태
			'small' : 소문자
			'big' : 대문자
			'all' : 전체
		return = void
		키 이벤트 사용
	*/
	function engCheck(obj, type){ 
		temp_value = obj.value.toString(); 
		regexp = ''; 
		repexp = ''; 
		switch(type){ 
			case 'small':
				regexp = /[^a-z]/g;
				break; 
			case 'big':
				regexp = /[^A-Z]/g;
				break; 
			case 'all':
				regexp = /[^a-z]/i;
				break; 
			default :
				regexp = /[^a-z]/i;
				break;
		}

		temp_value = temp_value.replace(regexp,repexp); 
		obj.value = temp_value; 
	} 


	/*
		숫자만 입력받기
		obj = 인풋박스
		type = 입력형태
			'int' : 양의 정수 
			'float' : 양의 실수 
			'-int' : 음의 정수 포함 
			'-float' : 음의 실수 포함 
		return = void
		키 이벤트 사용
	*/
	function numCheck(obj, type){ 
		temp_value = obj.value.toString(); 
		regexp = /[^-\.0-9]/g; 
		repexp = ''; 
		temp_value = temp_value.replace(regexp,repexp); 
		regexp = ''; 
		repexp = ''; 
		switch(type){ 
			case 'int':
				regexp = /[^0-9]/g;
				repexp = '';
				break; 
			case 'float':
				regexp = /^(-?)([0-9]*)(\.?)([^0-9]*)([0-9]*)([^0-9]*)/;
				repexp = '$2$3$5';
				break;
			case '-int':
				regexp = /^(-?)([0-9]*)([^0-9]*)([0-9]*)([^0-9]*)/;
				repexp = '$1$2$4';
				break;
			case '-float':
				regexp = /^(-?)([0-9]*)(\.?)([^0-9]*)([0-9]*)([^0-9]*)/;
				repexp = '$1$2$3$5';
				break; 
			default :
				regexp = /[^0-9]/g;
				repexp = '';
				break; 
		} 

		temp_value = temp_value.replace(regexp,repexp); 
		obj.value = temp_value; 
	}

	function numCheck_alert(obj, type){ 
		temp_value = obj.value.toString(); 

		if(!Validchar(temp_value,num)) {
			alert('숫자만 입력하실 수 있습니다');	
		}

		regexp = /[^-\.0-9]/g; 
		repexp = ''; 
		temp_value = temp_value.replace(regexp,repexp); 
		regexp = ''; 
		repexp = ''; 
		switch(type){ 
			case 'int':
				regexp = /[^0-9]/g;
				repexp = '';
				break; 
			case 'float':
				regexp = /^(-?)([0-9]*)(\.?)([^0-9]*)([0-9]*)([^0-9]*)/;
				repexp = '$2$3$5';
				break;
			case '-int':
				regexp = /^(-?)([0-9]*)([^0-9]*)([0-9]*)([^0-9]*)/;
				repexp = '$1$2$4';
				break;
			case '-float':
				regexp = /^(-?)([0-9]*)(\.?)([^0-9]*)([0-9]*)([^0-9]*)/;
				repexp = '$1$2$3$5';
				break; 
			default :
				regexp = /[^0-9]/g;
				repexp = '';
				break; 
		} 

		temp_value = temp_value.replace(regexp,repexp); 
		obj.value = temp_value; 
	}

	/* 
		한글만 입력 받기
		obj = 인풋박스
		type = 입력형태
			'c' : 초성 포함 
			's' : 초성 포함 + 공백 포함 
			'' : 초성, 공백 무시 
		return = void
		한글은 키이벤트로 사용 할 수없기 때문에 onBlur, onChange, onFocus이벤트 사용 해야함
	*/ 
	function korCheck(obj, type) { 
		temp_value = obj.value.toString(); 
		regexp = ''; 
		repexp = ''; 
		switch(type){ 
			case 'c':
				regexp = /[^ㄱ-ㅎ가-힣]/g;
				break; 
			case 's':
				regexp = /[^ㄱ-ㅎ가-힣\s]/g;
				break; 
			case '':
				regexp = /[^가-힣]/g;
				break; 
			default :
				regexp = /[^ㄱ-ㅎ가-힣\s]/g; 
				break; 
		} 

		if(regexp.test(temp_value)) { 
			temp_value = temp_value.replace(regexp,repexp); 
			obj.value = temp_value; 
		} 
	} 

	function korCheck_confirm(obj, type) { 

		temp_value = obj.value.toString(); 
		regexp = ''; 
		repexp = ''; 
		switch(type){ 
			case 'c':
				regexp = /[^ㄱ-ㅎ가-힣]/g;
				break; 
			case 's':
				regexp = /[^ㄱ-ㅎ가-힣\s]/g;
				break; 
			case '':
				regexp = /[^가-힣]/g;
				break; 
			default :
				regexp = /[^ㄱ-ㅎ가-힣\s]/g; 
				break; 
		} 

		if(regexp.test(temp_value)) { 
			return false;
		} else {
			return true;
		}
	} 


	function NumEngCheck_confirm(obj){ 
		temp_value = obj.value.toString(); 
		regexp = /[^0-9a-zA-Z]/g; 
		repexp = ''; 

		if(regexp.test(temp_value)) { 
			return false;
		} else {
			return true;
		}
	} 


	//주민번호 탭 자동이동
	function nextTab(sObj, nObj, eLength) {
		if (sObj.value.length == eLength) {
			nObj.focus();
		}
	}

	
	function chkDateType(obj) {
		temp_value = obj.value.toString().length; 
		if (temp_value > 0 && temp_value < 6) {
			alert("유효하지 않은 날짜입니다.");
			return;
		}
	}

	//날짜변환 yyyymm -> yyyy-mm
	function changeDateType(obj) {
		temp_value = obj.value.toString(); 
		if (temp_value.length == 6) {

			oDate = new Date();
			//oDate.setFullYear(temp_value.substring(0, 4));
			//oDate.setMonth(parseInt(temp_value.substring(4, 6)) - 1);

			var year = temp_value.substring(0, 4);
			var month = parseInt(temp_value.substring(4, 6));

			//if( oDate.getFullYear() != temp_value.substring(0, 4) || oDate.getMonth() + 1 != temp_value.substring(4, 6) ) {
			if (year < oDate.getFullYear() -100 || year > oDate.getFullYear() +100 || month < 1 || month > 12) {
				alert("유효하지 않은 날짜입니다.");
				return;
			}

			obj.value = temp_value.substr(0, 4) + "." + temp_value.substr(4, 2);
		}
	}


	//휴대폰번호 변환 0101231234 -> 010-123-1234
	function changePhoneType(obj) {
		temp_value = obj.value.toString().replace("-", "");

		if (temp_value.length > 3) {
			obj.value = temp_value.substr(0, 3) + "-" + temp_value.substr(3);
		}
		if (temp_value.length > 6) {
			obj.value = temp_value.substr(0, 3) + "-" + temp_value.substr(3, 3) + "-" + temp_value.substr(6);
		}
		if (temp_value.length == 11) {
			obj.value = temp_value.substr(0, 3) + "-" + temp_value.substr(3, 4) + "-" + temp_value.substr(7, 4);
		}

	}

	//생년월일 변환 19900312 -> 1990.03.12
	function changeBirthType(obj) {
		temp_value = obj.value.toString().replace(".", "");

		if (temp_value.length > 4) {
			obj.value = temp_value.substr(0, 4) + "." + temp_value.substr(4);
		}
		if (temp_value.length > 6) {
			obj.value = temp_value.substr(0, 4) + "." + temp_value.substr(4, 2) + "." + temp_value.substr(6);
		}
	}

	// 주민등록번호 변환 1234561234567 -> 123456-1234567
	function changeJuminType(obj) {
		temp_value = obj.value.toString().replace("-", "");

		if (temp_value.length > 7) {
			obj.value = temp_value.substr(0, 6) + "-" + temp_value.substr(6);
		}
		if (temp_value.length == 13) {
			obj.value = temp_value.substr(0, 6) + "-" + temp_value.substr(6);
		}
	}


	/*이메일 체크 시작*/
	function email_check( email ) {    
		var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return (email != '' && email != 'undefined' && regex.test(email)); 
	}