
function makeCalendar_B() {

	var tmpCalendarHTML;
	var tmpCalendarDate;
	var tmpClass; 
	var tmpTodayClass;

	tmpCalendarHTML = "";
	tmpCalendarDate = "";

	// ������ ������ üũ
	if (CalBigNowMM == "02"){
		CalBigNowYY	= "2021";
		CalBigNowMM = "05";
		CalBigNowDD	= "01";

		next_b_Action();
	}else{
		CalBigNowYY	= CalBigNowYY;
		CalBigNowMM = CalBigNowMM;
		CalBigNowDD	= CalBigNowDD;
	}

	// ��,��¥ Ÿ��Ʋ �Է�
	tmpCalendarDate += '<button type="button" class="btn left" onclick="prev_b_Action();">����</button>'
	tmpCalendarDate += '<p><span>'+CalBigNowYY.substring(0,4)+'</span>.<span>'+CalBigNowMM.substring(0,2)+'</span>.</p>'
	tmpCalendarDate += '<button type="button" class="btn right" onclick="next_b_Action();">������</button>'

	$("#calendar_date_in").html(tmpCalendarDate);
	$("#sel_calendar_box").html(tmpCalendarDate);
	

	// ���� �޷ºκ� �Է�
	tmpCalendarHTML += '<table class="calendar_tb">';
	tmpCalendarHTML += '	<colgroup>';
	tmpCalendarHTML += '		<col>';
	tmpCalendarHTML += '		<col>';
	tmpCalendarHTML += '		<col>';
	tmpCalendarHTML += '		<col>';
	tmpCalendarHTML += '		<col>';
	tmpCalendarHTML += '		<col>';
	tmpCalendarHTML += '		<col>';
	tmpCalendarHTML += '	</colgroup>';
	tmpCalendarHTML += '	<thead>';
	tmpCalendarHTML += '		<tr>';
	tmpCalendarHTML += '			<th>��</th>';
	tmpCalendarHTML += '			<th>��</th>';
	tmpCalendarHTML += '			<th>ȭ</th>';
	tmpCalendarHTML += '			<th>��</th>';
	tmpCalendarHTML += '			<th>��</th>';
	tmpCalendarHTML += '			<th>��</th>';
	tmpCalendarHTML += '			<th>��</th>';
	tmpCalendarHTML += '		</tr>';
	tmpCalendarHTML += '	</thead>';
	tmpCalendarHTML += '	<tbody>';

	tmpCalendarHTML += '<tr>';

	//�� 1������ �Ͽ��Ϻ��� ����� ä���
	for (i=1; i<=parseInt(CalBigStartWW); i++) {
		tmpCalendarHTML += '<td></td>';
	}
	

var cons_id = $('#set_consultant_id').val();

if (!cons_id){	// �⺻ - ������Ʈ ���� ������ ����

	//���������� �ִ� ��¥ ����Ʈ
	var chk_day = $('#str_set_interview_day').val();

	for (i=1; i<=parseInt(CalBigEndDD); i++) {
		var nowWeek = new Date(CalBigNowYY,CalBigNowMM-1,i).getDay();
		var tmpDTVal = getDateToString(new Date(CalBigNowYY,CalBigNowMM-1,i));
		if(nowWeek == 0){tmpClass = 'day sun'}else if (nowWeek == 6){tmpClass = 'day sat'}else{tmpClass = 'day'}
		if(tmpDTVal == todayToString){tmpTodayClass = 'on'}else{tmpTodayClass = 'none'}

		var class_dot = '';
		if (chk_day.indexOf(tmpDTVal) >= 0) {
			class_dot = ' dot';
		}

		tmpCalendarHTML += '<td>';
		tmpCalendarHTML += '	<button type="button" class="day_btn'+ class_dot +'" value="'+ tmpDTVal +'" onclick="day_btn_click(this)">'+ i +'</button>';
		tmpCalendarHTML += '</td>';

		//����� ���� �� �ٹٲ�
		if (nowWeek == 6) {
			tmpCalendarHTML += "</tr><tr>";
		}
	}

}else{	// ������Ʈ ���� ��

	//���������� �ִ� ��¥ ����Ʈ
	var chk_day = $('#str_set_interview_day').val();

	for (i=1; i<=parseInt(CalBigEndDD); i++) {
		var nowWeek = new Date(CalBigNowYY,CalBigNowMM-1,i).getDay();
		var tmpDTVal = getDateToString(new Date(CalBigNowYY,CalBigNowMM-1,i));
		if(nowWeek == 0){tmpClass = 'day sun'}else if (nowWeek == 6){tmpClass = 'day sat'}else{tmpClass = 'day'}
		
		var class_today;
		if(tmpDTVal == todayToString){
			tmpTodayClass	= 'on';
			class_today		= ' today'; 
		}else{
			tmpTodayClass	= 'none';
			class_today		= ''; 
		}

		var class_dot = '';
		if('<%=inside_yn%>' == 'Y') {
			if (chk_day.indexOf(tmpDTVal) >= 0 && tmpDTVal >= getDateToString(new Date)) {
				class_dot	= ' dot';
				chk_attr	= '';	
			}else{
				class_dot	= ' disable';
				chk_attr	= ' readonly=readonly disabled=disabled';	
			}
		}
		else {
			class_dot	= ' disable';
			chk_attr	= ' readonly=readonly disabled=disabled';	
		}		

		tmpCalendarHTML += '<td>';
		tmpCalendarHTML += '	<button type="button" class="day_btn'+ class_today + class_dot +'"'+ chk_attr +' value="'+ tmpDTVal +'" onclick="day_btn_click(this)">'+ i +'</button>';
		tmpCalendarHTML += '</td>';

		//����� ���� �� �ٹٲ�
		if (nowWeek == 6) {
			tmpCalendarHTML += "</tr><tr>";
		}
	}
}


	//�� �������� ���� ����ϱ��� ����� ä���
	if (parseInt(CalBigLastDD) <= 6) {
		for (i=1; i<=parseInt(CalBigLastDD); i++){
			tmpCalendarHTML += '<td></td>';
		}
	}
	
	tmpCalendarHTML += "</tr>";
	tmpCalendarHTML += "</tbody>";
	tmpCalendarHTML += "</table>";

	
	$("#table-id").html(tmpCalendarHTML);	

	//document.getElementById("table-id").innerHTML = tmpCalendarHTML;
	//document.getElementById("sel_calendar_table").innerHTML = tmpCalendarHTML.replace(/day_btn_click/g, "day_btn_click_sch");
}


//��¥ Ŭ��(�˻�box)
function day_btn_click_sch(obj) {
	var day_value = $(obj).val();

	//���� Ŭ����(��¥)
	$(obj).addClass('on');
	$('.day_btn').not(obj).removeClass('on');

	//�޷� ����
	$(obj).parents('.select_box').removeClass( 'on' );

	$('#sel_interview_day').text(day_value);
	$('#interview_day').val(day_value);
	$('#interview_time').val("");
	
	//�˻�
	fn_sch();
}

function getAddDate(DT, iYear, iMonth, iDay){//add��¥(Calendar��)
	var tmpDate = DT;
	var yy = tmpDate.getFullYear();
	var mm = tmpDate.getMonth();
	var dd = tmpDate.getDate();
	var d = new Date();
	//�⺻ �� ����(29���̳� 31�� ������� 2���̳� ��Ÿ 30�ϸ� �ִ°�� month ���� ����Ǹ� ���� �����޷� �Ѿ�����°� ����)
	d.setFullYear(2000);
	d.setMonth(1);
	d.setDate(1);

	d.setFullYear(yy + iYear);
	d.setMonth(mm + iMonth);
	d.setDate(dd + iDay);

	return d;
}

function getDateToString(DT){//Datetime�� => String �������� ����ȯ
	var tmpDate = DT;
	var yy = tmpDate.getFullYear();
	var mm = getDateAddZero(tmpDate.getMonth()+1);
	var dd = getDateAddZero(tmpDate.getDate());
	var d = yy + '-' + mm + '-' +dd
	return d;
}

function getDateAddZero(val){//���̳� ��¥�� 10���� ������� �տ� '0' �־���
	var rtn;
	if (val < 10){
		val = '0' + val;
	}
	return val.toString();
}

function getDayOfTheWeek(language, val){
	var tmpVal;
	if (language=='K'){
		switch(val) { 
			case 0 : //��
				tmpVal = '��';
				break;
			case 1 : //��
				tmpVal = '��';
				break;
			case 2 : //ȭ
				tmpVal = 'ȭ';
				break;
			case 3 : //��
				tmpVal = '��';
				break;
			case 4 : //��
				tmpVal = '��';
				break;
			case 5 : //��
				tmpVal = '��';
				break;
			case 6 : //��
				tmpVal = '��';
				break;
		}
	}

	if (language=='E'){
		switch(val) { 
			case 0 : //��
				tmpVal = 'sun';
				break;
			case 1 : //��
				tmpVal = 'mon';
				break;
			case 2 : //ȭ
				tmpVal = 'tue';
				break;
			case 3 : //��
				tmpVal = 'wed';
				break;
			case 4 : //��
				tmpVal = 'thu';
				break;
			case 5 : //��
				tmpVal = 'fri';
				break;
			case 6 : //��
				tmpVal = 'sat';
				break;
		}
	}
	
	return tmpVal;
}

//������ư
function next_b_Action(){//Big Calendar �� �̵�
	makeCalendar_B_Action('next', '');
}

//������ư
function prev_b_Action(){//Big Calendar �� �̵�
	if (CalBigNowYY == "2021" && CalBigNowMM <= "03"){

	}else{
		makeCalendar_B_Action('prev', '');
	}
}


function makeCalendar_B_Action(act, setDT){
	setDateTime(act, 'Big', setDT);
	makeCalendar_B();

	//��¥Ŭ�� �̺�Ʈ(���� Ŭ����)
	/*
	$('.day_btn').click(function() {
		$(this).addClass('on');
		$('.day_btn').not(this).removeClass('on');
		return false;
	});
	*/
}

function makeCalendar_Reset_Action(act, setdate){//��¥ ����(������ ����)
	makeCalendar_B_Action(act, setdate);
}

//##Calendar ���� ��ũ��Ʈ
function setDateTime(act, obj, setDT){	//Calendar ��¥ ����
	if (obj == 'Big'){

		//Big Calendar	
		if (act == 'Today'){//�⺻�� ����
			switch(tabGubun) { 
				case 'M' : //����
					//CalBigNowDate				= new Date(today.getFullYear(), today.getMonth(), 1)		//���� Ķ���� ���ؿ��� 1��
					CalBigNowDate				= today;													//���ñ���

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowOneDay;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigNowOneDay, 0, +1, -1);					//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= getAddDate(CalBigStartDate, 0, 0, -CalBigStartWW);		//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������)
					CalBigLastDate				= getAddDate(CalBigEndDate, 0, 0, 6-CalBigEndWW);			//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������)
					break;
				case 'W' : //�ְ�
					CalBigNowDate				= today;													//ó���� ���ñ���

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= getAddDate(CalBigNowDate, 0, 0, -CalBigNowDate.getDay());	//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigNowDate, 0, 0, 6-CalBigNowDate.getDay());//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigStartDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(����,������ ���� �ʿ� �����Ƿ�)
					CalBigLastDate				= CalBigEndDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(����,������ ���� �ʿ� �����Ƿ�)
					break;
				case 'D' : //�ϰ�
					//�Ʒ� �ӽ�(�����ؾ���)
					CalBigNowDate				= today;													//ó���� ���ñ���

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowDate;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= CalBigNowDate;											//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigNowDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(������ �Ϸ��)
					CalBigLastDate				= CalBigNowDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(������ �Ϸ��)
					break;
				case 'L' : //���
				//�Ʒ� �ӽ�(�����ؾ���)
					CalBigNowDate				= today;													//ó���� ���ñ���

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowOneDay;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigStartDate, 0, +1, -1);					//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigStartDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(�ش� �� �����͸� ����)
					CalBigLastDate				= CalBigEndDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(�ش� �� �����͸� ����)
					break;
			}
		}

		if (act == 'n_date'){//�⺻�� ����
			switch(tabGubun) { 
				case 'M' : //����
					CalBigNowDate				= setDT;		//���� Ķ���� ���ؿ��� 1��

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowOneDay;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigNowOneDay, 0, +1, -1);					//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= getAddDate(CalBigStartDate, 0, 0, -CalBigStartWW);		//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������)
					CalBigLastDate				= getAddDate(CalBigEndDate, 0, 0, 6-CalBigEndWW);			//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������)
					break;
				case 'W' : //�ְ�
					CalBigNowDate				= setDT;													//ó���� ���ñ���

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= getAddDate(CalBigNowDate, 0, 0, -CalBigNowDate.getDay());	//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigNowDate, 0, 0, 6-CalBigNowDate.getDay());//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigStartDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(����,������ ���� �ʿ� �����Ƿ�)
					CalBigLastDate				= CalBigEndDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(����,������ ���� �ʿ� �����Ƿ�)
					break;
				case 'D' : //�ϰ�
					//�Ʒ� �ӽ�(�����ؾ���)
					CalBigNowDate				= setDT;													//ó���� ���ñ���

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowDate;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= CalBigNowDate;											//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigNowDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(������ �Ϸ��)
					CalBigLastDate				= CalBigNowDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(������ �Ϸ��)
					break;
				case 'L' : //���
				//�Ʒ� �ӽ�(�����ؾ���)
					CalBigNowDate				= setDT;													//ó���� ���ñ���

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowOneDay;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigStartDate, 0, +1, -1);					//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigStartDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(�ش� �� �����͸� ����)
					CalBigLastDate				= CalBigEndDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(�ش� �� �����͸� ����)
					break;
			}
		}


		if (act=='prev'){//���� Ȥ�� ���� Ȥ�� ����
			switch(tabGubun) { 
				case 'M' : //����
					CalBigNowDate				= getAddDate(CalBigNowOneDay, 0, -1, 0);					//Big ���� Ķ������ ������(Ķ������ �� ǥ�õ� ���� ��¥)

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowOneDay;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigNowOneDay, 0, +1, -1);					//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= getAddDate(CalBigStartDate, 0, 0, -CalBigStartWW);		//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������)
					CalBigLastDate				= getAddDate(CalBigEndDate, 0, 0, 6-CalBigEndWW);			//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������)


					break;
				case 'W' : //�ְ�
					CalBigNowDate				= getAddDate(CalBigFirstDate, 0, 0, -7);					//�������� �̵��� ���� ù�� ����

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= getAddDate(CalBigNowDate, 0, 0, -CalBigNowDate.getDay());	//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigNowDate, 0, 0, 6-CalBigNowDate.getDay());	//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigStartDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(�� ���� ���� 7�ϸ�ŭ�� ��µǹǷ�)
					CalBigLastDate				= CalBigEndDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(�� ���� ���� 7�ϸ�ŭ�� ��µǹǷ�)
					break;
				case 'D' : //�ϰ�
					CalBigNowDate				= getAddDate(CalBigFirstDate, 0, 0, -1);					//������ ����

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowDate;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= CalBigNowDate;											//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigNowDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(������ �Ϸ��)
					CalBigLastDate				= CalBigNowDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(������ �Ϸ��)
					break;
				case 'L' : //���
					CalBigNowDate				= getAddDate(CalBigFirstDate, 0, -1, 0);					//������ ����

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowOneDay;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigStartDate, 0, +1, -1);					//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigStartDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(�ش� �� �����͸� ����)
					CalBigLastDate				= CalBigEndDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(�ش� �� �����͸� ����)
					break;
			}
		}
		
		if (act=='next'){//������ Ȥ�� ������ Ȥ�� ������
			switch(tabGubun) { 
				case 'M' : //����
					CalBigNowDate				= getAddDate(CalBigNowOneDay, 0, +1, 0);					//Big ���� Ķ������ ������(Ķ������ �� ǥ�õ� ���� ��¥)

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowOneDay;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigStartDate, 0, +1, -1);					//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= getAddDate(CalBigStartDate, 0, 0, -CalBigStartWW);		//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������)
					CalBigLastDate				= getAddDate(CalBigEndDate, 0, 0, 6-CalBigEndWW);			//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������)


					break;
				case 'W' : //�ְ�
					CalBigNowDate				= getAddDate(CalBigFirstDate, 0, 0, +7);					//�������� �̵��� ���� ù�� ����

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= getAddDate(CalBigNowDate, 0, 0, -CalBigNowDate.getDay());	//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigNowDate, 0, 0, 6-CalBigNowDate.getDay());	//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigStartDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(�� ���� ���� 7�ϸ�ŭ�� ��µǹǷ�)
					CalBigLastDate				= CalBigEndDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(�� ���� ���� 7�ϸ�ŭ�� ��µǹǷ�)
					break;
				case 'D' : //�ϰ�
					CalBigNowDate				= getAddDate(CalBigFirstDate, 0, 0, +1);					//������ ����

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowDate;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= CalBigNowDate;											//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigNowDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(������ �Ϸ��)
					CalBigLastDate				= CalBigNowDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(������ �Ϸ��)
					break;
				case 'L' : //���
					CalBigNowDate				= getAddDate(CalBigFirstDate, 0, +1, 0);					//������ ����

					CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

					CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
					CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

					CalBigStartDate				= CalBigNowOneDay;											//Big Ķ������ ������(�̴��� ����)
					CalBigEndDate				= getAddDate(CalBigStartDate, 0, +1, -1);					//Big Ķ������ ��������(�̴��� ����)

					CalBigFirstDate				= CalBigStartDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(�ش� �� �����͸� ����)
					CalBigLastDate				= CalBigEndDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(�ش� �� �����͸� ����)
					break;
			}
		}

		if (act == 'day'){//SmallCalendar���� ��¥ ���ý�
			CalBigNowDate				= setDT;														//�������� ����

			CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

			CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
			CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

			CalBigStartDate				= CalBigNowDate;											//Big Ķ������ ������(�̴��� ����)
			CalBigEndDate				= CalBigNowDate;											//Big Ķ������ ��������(�̴��� ����)

			CalBigFirstDate				= CalBigNowDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(������ �Ϸ��)
			CalBigLastDate				= CalBigNowDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(������ �Ϸ��)
		}

		if (act == 'n_month'){//SmallCalendar���� ��¥ ���ý�
			CalBigNowDate				= setDT;														//�������� ����

			CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

			CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
			CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

			CalBigStartDate				= CalBigNowOneDay;											//Big Ķ������ ������(�̴��� ����)
			CalBigEndDate				= getAddDate(CalBigStartDate, 0, +1, -1);					//Big Ķ������ ��������(�̴��� ����)

			CalBigFirstDate				= getAddDate(CalBigStartDate, 0, 0, -CalBigStartWW);		//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������)
			CalBigLastDate				= getAddDate(CalBigEndDate, 0, 0, 6-CalBigEndWW);			//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������)
		}

		if (diart_date != 'empty' && diart_date_clear != 'clear'){
			var set_diart_date = new Date(diart_date.substring(0,4), parseInt(diart_date.substring(5,7)-1), diart_date.substring(8,10));
			CalBigNowDate				= set_diart_date;														//�������� ����

			CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);//���� Ķ���� ���ؿ��� 1��

			CalBigStartWW				= CalBigNowOneDay.getDay();									//����� 1���� ����
			CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();			//����� ���������� ����

			CalBigStartDate				= CalBigNowDate;											//Big Ķ������ ������(�̴��� ����)
			CalBigEndDate				= CalBigNowDate;											//Big Ķ������ ��������(�̴��� ����)

			CalBigFirstDate				= CalBigNowDate;											//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������) - ��(������ �Ϸ��)
			CalBigLastDate				= CalBigNowDate;											//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������) - ��(������ �Ϸ��)

			CalSmallNowDate				= set_diart_date;

			diart_date_clear = 'clear';
		}
		
		CalBigNowDateToString		= getDateToString(CalBigNowDate);
		CalBigNowOneDayToString		= getDateToString(CalBigNowOneDay);

		CalBigStartDateToString		= getDateToString(CalBigStartDate);
		CalBigEndDateToString		= getDateToString(CalBigEndDate);

		CalBigFirstDateToString		= getDateToString(CalBigFirstDate);
		CalBigLastDateToString		= getDateToString(CalBigLastDate);

		CalBigNowYY					= CalBigNowDate.getFullYear().toString();			//Big ���� �̸����� ������ ��
		CalBigNowMM					= getDateAddZero(CalBigNowDate.getMonth()+1);		//Big ���� �̸����� ������ ��
		CalBigNowDD 				= getDateAddZero(CalBigNowDate.getDate());			//Big ���� �̸����� ������ ��

		CalBigStartYY				= CalBigStartDate.getFullYear().toString();			//Big Ķ������ ������ ��
		CalBigStartMM 				= getDateAddZero(CalBigStartDate.getMonth()+1);		//Big Ķ������ ������ ��
		CalBigStartDD				= getDateAddZero(CalBigStartDate.getDate());		//Big Ķ������ ������ ��
		CalBigEndYY					= CalBigEndDate.getFullYear().toString();			//Big Ķ������ �������� ��(�̹��� ����)
		CalBigEndMM					= getDateAddZero(CalBigEndDate.getMonth()+1);		//Big Ķ������ �������� ��
		CalBigEndDD					= getDateAddZero(CalBigEndDate.getDate());			//Big Ķ������ �������� ��

		CalBigFirstYY				= CalBigFirstDate.getFullYear().toString();			//Big Ķ������ �������� ��(���� Ȥ�� ������)
		CalBigFirstMM 				= getDateAddZero(CalBigFirstDate.getMonth()+1);		//Big Ķ������ �������� ��
		CalBigFirstDD				= getDateAddZero(CalBigFirstDate.getDate());		//Big Ķ������ �������� ��
		CalBigLastYY				= CalBigLastDate.getFullYear().toString();			//Big Ķ������ �������� ��(������ Ȥ�� ������)
		CalBigLastMM 				= getDateAddZero(CalBigLastDate.getMonth()+1);		//Big Ķ������ �������� ��
		CalBigLastDD				= getDateAddZero(CalBigLastDate.getDate());			//Big Ķ������ �������� ��
			
		//Big �޷� �̵��� Small �޷µ� ���� �������� �̵��ϱ� ����(setDateTime(act, 'Small') ȣ��� +-1 �޾� �̵��ǹǷ� ����ȭ ���� �̸� +-1���� ����)
		if (act=='prev'){//���� Ȥ�� ���� Ȥ�� ����
			CalSmallNowOneDay			= getAddDate(CalBigNowOneDay, 0, +1, 0);
		}	
		if (act=='next'){//������ Ȥ�� ������ Ȥ�� ������
			CalSmallNowOneDay			= getAddDate(CalBigNowOneDay, 0, -1, 0); 
		}
	}
}

//��ư�׼�
function onLoad_Action(){	
	//Calendar ����	
	makeCalendar_B_Action('', '');
}

//�������� ����(�� ó�� ���� �������� ���� #��������)
var tabGubun	= 'M';
var tabGubun2	= '00';


function loadingBarCall(obj, TF,str){
	//�̵��� ��ġ obj X, Y�� ���Ͽ� �̵�
	if (TF){
		var objX = $(obj).offset().left-($('#loading_'+str+'DIV').width()/2)+($(obj).width()/2);
		var objY = $(obj).offset().top+($(obj).height()/2)-($('#loading_'+str+'DIV').height()/2);
		//var objX = 450;
		//var objY = 300;
		//if (document.body.clientWidth >= $("#career_wrap").width()){//�߾������̶�...
		//	objX = objX - (document.body.clientWidth - $("#career_wrap").width())/2;
		//}

		var objXY = {"top":objY, "left":objX};
		$('#loading_'+str+'DIV').animate(objXY, 0);
		$('#loading_'+str+'DIV').fadeIn("normal");
	}else{
		$('#loading_'+str+'DIV').fadeOut("normal");
	}
}



var btn_slide_click_chk = 1;
//var small_action_chk = 1;			//�����޷� �Ⱥ��϶� ū�޷¿��� �׼ǰ� ����
var diart_date_clear = 'empty';		//Ŀ���� ���̾���� �Ѿ�� ���� �ʱ�ȭ ����
var today						= new Date();										//������
var todayToString				= getDateToString(today);							//String�� ������	

//Big Calendar
var CalBigNowDate				= today;											//big ���� Ķ������ ������(Ķ������ �� ǥ�õ� ���� ��¥)
var CalBigNowDateToString		= getDateToString(CalBigNowDate);
var CalBigNowOneDay				= new Date(CalBigNowDate.getFullYear(), CalBigNowDate.getMonth(), 1);	//���� Ķ���� ���ؿ��� 1��
var CalBigNowOneDayToString		= getDateToString(CalBigNowOneDay);

var CalBigStartWW				= CalBigNowOneDay.getDay();							//����� 1���� ����
var CalBigEndWW					= getAddDate(CalBigNowOneDay, 0, +1, -1).getDay();	//����� ���������� ����

var CalBigStartDate				= CalBigNowOneDay;									//Big Ķ������ ������(�̴��� ����)
var CalBigStartDateToString		= getDateToString(CalBigStartDate);
var CalBigEndDate				= getAddDate(CalBigStartDate, 0, +1, -1);			//Big Ķ������ ��������(�̴��� ����)
var CalBigEndDateToString		= getDateToString(CalBigEndDate);

var CalBigFirstDate				= getAddDate(CalBigNowOneDay, 0, 0, -CalBigStartWW);//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������)
var CalBigFirstDateToString		= getDateToString(CalBigFirstDate);
var CalBigLastDate				= getAddDate(CalBigEndDate, 0, 0, +6-CalBigEndWW);	//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������)
var CalBigLastDateToString		= getDateToString(CalBigLastDate);

var CalBigNowYY					= CalBigNowDate.getFullYear().toString();			//Big ���� �̸����� ������ ��
var CalBigNowMM					= getDateAddZero(CalBigNowDate.getMonth()+1);		//Big ���� �̸����� ������ ��
var CalBigNowDD 				= getDateAddZero(CalBigNowDate.getDate());			//Big ���� �̸����� ������ ��

var CalBigStartYY				= CalBigStartDate.getFullYear().toString();			//big Ķ������ ������ ��
var CalBigStartMM 				= getDateAddZero(CalBigStartDate.getMonth()+1);		//big Ķ������ ������ ��
var CalBigStartDD				= getDateAddZero(CalBigStartDate.getDate());		//big Ķ������ ������ ��
var CalBigEndYY					= CalBigEndDate.getFullYear().toString();			//big Ķ������ �������� ��(�̹��� ����)
var CalBigEndMM					= getDateAddZero(CalBigEndDate.getMonth()+1);		//big Ķ������ �������� ��
var CalBigEndDD					= getDateAddZero(CalBigEndDate.getDate());			//big Ķ������ �������� ��

var CalBigFirstYY				= CalBigFirstDate.getFullYear().toString();			//big Ķ������ �������� ��(���� Ȥ�� ������)
var CalBigFirstMM 				= getDateAddZero(CalBigFirstDate.getMonth()+1);		//big Ķ������ �������� ��
var CalBigFirstDD				= getDateAddZero(CalBigFirstDate.getDate());		//big Ķ������ �������� ��
var CalBigLastYY				= CalBigLastDate.getFullYear();						//big Ķ������ �������� ��(������ Ȥ�� ������)
var CalBigLastMM 				= getDateAddZero(CalBigLastDate.getMonth()+1);		//big Ķ������ �������� ��
var CalBigLastDD				= getDateAddZero(CalBigLastDate.getDate());			//big Ķ������ �������� ��


//Small Calendar
var CalSmallNowDate				= today;											//Small ���� Ķ������ ������(Ķ������ �� ǥ�õ� ���� ��¥)
var CalSmallNowDateToString		= getDateToString(CalSmallNowDate);
var CalSmallNowOneDay			= new Date(CalSmallNowDate.getFullYear(), CalSmallNowDate.getMonth(), 1);	//���� Ķ���� ���ؿ��� 1��
var CalSmallNowOneDayToString	= getDateToString(CalSmallNowOneDay);

var CalSmallStartWW				= CalSmallNowOneDay.getDay();						//����� 1���� ����
var CalSmallEndWW				= getAddDate(CalSmallNowOneDay, 0, +1, -1).getDay();//����� ���������� ����

var CalSmallStartDate			= CalSmallNowOneDay;								//Small Ķ������ ������(�̴��� ����)
var CalSmallStartDateToString	= getDateToString(CalSmallStartDate);
var CalSmallEndDate				= getAddDate(CalSmallStartDate, 0, +1, -1);			//Small Ķ������ ��������(�̴��� ����)
var CalSmallEndDateToString		= getDateToString(CalSmallEndDate);

var CalSmallFirstDate			= getAddDate(CalSmallNowOneDay, 0, 0, -CalSmallStartWW);	//�޷¿� ��µǴ� ���۵Ǵ³�(���� Ȥ�� ������)
var CalSmallFirstDateToString	= getDateToString(CalSmallFirstDate);
var CalSmallLastDate			= getAddDate(CalSmallEndDate, 0, 0, 6-CalSmallEndWW);//�޷¿� ��µǴ� ����Ǵ³�(������ Ȥ�� ������)
var CalSmallLastDateToString	= getDateToString(CalSmallLastDate);

var CalSmallNowYY				= CalSmallNowDate.getFullYear().toString();			//Small ���� �̸����� ������ ��
var CalSmallNowMM				= getDateAddZero(CalSmallNowDate.getMonth()+1);		//Small ���� �̸����� ������ ��
var CalSmallNowDD 				= getDateAddZero(CalSmallNowDate.getDate());		//Small ���� �̸����� ������ ��

var CalSmallStartYY				= CalSmallStartDate.getFullYear().toString();		//Small Ķ������ ������ ��
var CalSmallStartMM 			= getDateAddZero(CalSmallStartDate.getMonth()+1);	//Small Ķ������ ������ ��
var CalSmallStartDD				= getDateAddZero(CalSmallStartDate.getDate());		//Small Ķ������ ������ ��
var CalSmallEndYY				= CalSmallEndDate.getFullYear().toString();			//Small Ķ������ �������� ��(�̹��� ����)
var CalSmallEndMM				= getDateAddZero(CalSmallEndDate.getMonth()+1);		//Small Ķ������ �������� ��
var CalSmallEndDD				= getDateAddZero(CalSmallEndDate.getDate());		//Small Ķ������ �������� ��

var CalSmallFirstYY				= CalSmallFirstDate.getFullYear().toString();		//Small Ķ������ �������� ��(���� Ȥ�� ������)
var CalSmallFirstMM 			= getDateAddZero(CalSmallFirstDate.getMonth()+1);	//Small Ķ������ �������� ��
var CalSmallFirstDD				= getDateAddZero(CalSmallFirstDate.getDate());		//Small Ķ������ �������� ��
var CalSmallLastYY				= CalSmallLastDate.getFullYear().toString();		//Small Ķ������ �������� ��(������ Ȥ�� ������)
var CalSmallLastMM 				= getDateAddZero(CalSmallLastDate.getMonth()+1);	//Small Ķ������ �������� ��
var CalSmallLastDD				= getDateAddZero(CalSmallLastDate.getDate());		//Small Ķ������ �������� ��

var dt = new Date();
var nn_year = dt.getFullYear();
var nn_month = dt.getMonth()+1;
if (nn_month < 10)
{
	nn_month= "0"+nn_month;
}
var nn_day = dt.getDate();
if (nn_day < 10)
{
	nn_day= "0"+nn_day;
}
var nn_hour = dt.getHours();
if (nn_hour < 10)
{
	nn_hour= "0"+nn_hour;
}
var nn_minute = dt.getMinutes();
if (nn_minute < 10)
{
	nn_minute= "0"+nn_minute;
}
var nn_second = dt.getSeconds();
if (nn_second < 10)
{
	nn_second= "0"+nn_second;
}
var nn_s_state = nn_year+nn_month+nn_day+nn_hour+nn_minute+nn_second;
var summary_layout_v = "t";
var summary_layout_seq = "";