//$(function() {

	$(function() {
		$('#menu_toggle').click(function() {
			$('.left-side.sidebar-offcanvas').hide();
			$('.right-side').css('margin-left','0px');
			//$('#menu_show').show();
		});

		$('#menu_show').click(function() {
			$('.left-side.sidebar-offcanvas').show();
			$('.right-side').css('margin-left','300px');
			//$('#menu_show').show();
		});
	});

	 IMAGE 		= 1; 
	 SWF 		= 2; 
	 FILE 		= 3; 
	 VIDEO 		= 4; 
	 HTML 			= 5; 
	 OFICCE_FILE 	= 5; 
	 IMAGE_EMPTY 	= "../img/categories/category.png";




	function showError(element, message) {
		var parent = element.parentNode;
		var message_error = $('<div class="error-message">'+message+'</div>',{
							   'class': 'danger'
							}).appendTo(parent);
		
		message_error.parent().parent().addClass('has-error');
	}

	function showOk(element) {
		var message = 'Correct !';
		var parent = element.parentNode;
		var message_ok = $('<div class="succes-message">'+message+'</div>',{
							   'class': 'success'
							}).appendTo(parent);
		
		message_ok.parent().parent().addClass('has-success');
	}




	function showErrorInputsPassword(inputs_password) {
		for(var i = 0; i < inputs_password.length; i++) {
			if(!isPassword(inputs_password[i].value.trim())) {
				showError(inputs_password[i],"This value should be an password");
			}
		}
	}


	function showErrorInputsEmail(inputs_email) {
		for(var i = 0; i < inputs_email.length; i++) {
			if(!isEmail(inputs_email[i].value.trim())) {
				showError(inputs_email[i],"This value should be an email");
			}
		}
	}

	function showErrorInputsSame(inputs_same_pass) {

		//for(var i = 0; i < inputs_same_pass.length; i++) {
		if (inputs_same_pass[0] != inputs_same_pass[1]) {
			showError(inputs_same_pass[1],"This value should be the same");
		}
		//}
	}



/*

	function showErrorInputsColor(inputs_color) {
		for(var i = 0; i < inputs_color.length; i++) {
			if(!isColor(inputs_color[i].value.trim())) {
				showError(inputs_color[i],"This value should be a color (A-z0-9\\-)");
			}
		}
	}
	*/

	function isFormLoginValid() {
		var inputs_phone = $('form[data-validate-login]').find('input[type=tel]');
		var inputs_date = $('form[data-validate-login]').find('input[type=date]');
		var inputs_email = $('form[data-validate-login]').find('input[type=email]');
		var inputs_password = $('form[data-validate-login]').find('input[type=password]');

		var inputs_text = $('form[data-validate-login]').find('input[type=text]');
		var inputs_number = $('form[data-validate-login]').find('input[type=number]');
		var inputs_file = $('form[data-validate-login]').find('input[type=file]');
		var textareas = $('form[data-validate-login]').find('textarea');
		var selects = $('form[data-validate-login]').find('select');

		var inputs_datetime = $('form[data-validate-login]').find('input[data-datetime]');
		var inputs_checkbox = $('form[data-validate-login]').find('input[data-checked]');

		showOkInputs(inputs_email);
		showOkInputs(inputs_password);
		showOkInputs(inputs_phone);
		showOkInputs(inputs_text);
		showOkInputs(inputs_number);
		showOkInputs(inputs_file);
		showOkInputs(inputs_date);
		showOkTextareas(textareas);

		showOkInputs(selects);

		showOkInputsDateTime(inputs_datetime);

		showOkInputsCheckbox(inputs_checkbox);
		//var inputs_file_image = $('form[data-validate]').find('input[data-image]');

		return $('form[data-validate-login]').find('div.error-message').length == 0;
	}

	function isFormValid() {
		var inputs_phone = $('form[data-validate]').find('input[type=tel]');
		var inputs_date = $('form[data-validate]').find('input[type=date]');
		var inputs_email = $('form[data-validate]').find('input[type=email]');
		var inputs_password = $('form[data-validate]').find('input[type=password]');

		var inputs_text = $('form[data-validate]').find('input[type=text]');
		var inputs_number = $('form[data-validate]').find('input[type=number]');
		var inputs_file = $('form[data-validate]').find('input[type=file]');
		var textareas = $('form[data-validate]').find('textarea');
		var selects = $('form[data-validate]').find('select');

		var inputs_datetime = $('form[data-validate]').find('input[data-datetime]');
		var inputs_checkbox = $('form[data-validate]').find('input[data-checked]');

		showOkInputs(inputs_email);
		showOkInputs(inputs_password);
		showOkInputs(inputs_phone);
		showOkInputs(inputs_text);
		showOkInputs(inputs_number);
		showOkInputs(inputs_file);
		showOkInputs(inputs_date);
		showOkTextareas(textareas);

		showOkInputs(selects);

		showOkInputsDateTime(inputs_datetime);

		showOkInputsCheckbox(inputs_checkbox);
		//var inputs_file_image = $('form[data-validate]').find('input[data-image]');

		return $('form[data-validate]').find('div.error-message').length == 0;
	}

	function validateLogin(e) {
		cleanAll();
		var inputs_password = $('form[data-validate-login]').find('input[data-password]');

		var inputs_code = $('form[data-validate-login]').find('input[data-code]');
		var inputs_name = $('form[data-validate-login]').find('input[data-name]');
		var inputs_lastname = $('form[data-validate-login]').find('input[data-lastname]');
		var inputs_description = $('form[data-validate-login]').find('input[data-description]');
		var inputs_required = $('form[data-validate-login]').find('input[data-required]');
		var inputs_color = $('form[data-validate-login]').find('input[data-color]');
		var inputs_email = $('form[data-validate-login]').find('input[data-email]');
		var inputs_checkbox = $('form[data-validate-login]').find('input[data-checked]');

		var inputs_same_pass = $('form[data-validate-login]').find('input[data-samepassword]');



		var inputs_file_image = $('form[data-validate-login]').find('input[data-image]');
		var inputs_file_thumbnail = $('form[data-validate-login]').find('input[data-thumbnail]');
		var inputs_datetime = $('form[data-validate-login]').find('input[data-datetime]');
		var inputs_date = $('form[data-validate-login]').find('input[data-date]');

		var textareas_required = $('form[data-validate-login]').find('textarea[data-required]');

		var selects_required = $('form[data-validate-login]').find('select[data-required]');

		showErrorInputsPassword(inputs_password);

		showErrorInputsEmail(inputs_email);
		showErrorInputsCode(inputs_code);
		showErrorInputsName(inputs_name);
		showErrorInputsLastName(inputs_lastname);
		showErrorInputsRequired(inputs_required);
		showErrorInputsColor(inputs_color);
		showErrorInputsFileImage(inputs_file_image);
		showErrorInputsFileThumbnail(inputs_file_thumbnail);


		showErrorInputsDateTime(inputs_datetime);
		showErrorTextareasRequired(textareas_required);
		showErrorSelects(selects_required);
		showErrorInputsCheckbox(inputs_checkbox);

		showErrorInputsSame(inputs_same_pass);

	
		if(isFormLoginValid()) {
			return true;
		}

		return false;
	}

	function validate(e) {
		cleanAll();
		var inputs_integer = $('form[data-validate]').find('input[data-integer]');
		var inputs_password = $('form[data-validate]').find('input[data-password]');

		var inputs_code = $('form[data-validate]').find('input[data-code]');
		var inputs_name = $('form[data-validate]').find('input[data-name]');
		var inputs_lastname = $('form[data-validate]').find('input[data-lastname]');
		var inputs_description = $('form[data-validate]').find('input[data-description]');
		var inputs_required = $('form[data-validate]').find('input[data-required]');
		var inputs_color = $('form[data-validate]').find('input[data-color]');
		var inputs_email = $('form[data-validate]').find('input[data-email]');
		var inputs_checkbox = $('form[data-validate]').find('input[data-checked]');

		var inputs_same_pass = $('form[data-validate]').find('input[data-samepassword]');



		var inputs_file_image = $('form[data-validate]').find('input[data-image]');
		var inputs_file_thumbnail = $('form[data-validate]').find('input[data-thumbnail]');
		var inputs_datetime = $('form[data-validate]').find('input[data-datetime]');
		var inputs_date = $('form[data-validate]').find('input[data-date]');

		var textareas_required = $('form[data-validate]').find('textarea[data-required]');

		var selects_required = $('form[data-validate]').find('select[data-required]');

		showErrorInputsPassword(inputs_password);

		showErrorInputsEmail(inputs_email);
		showErrorInputsCode(inputs_code);
		showErrorInputsName(inputs_name);
		showErrorInputsLastName(inputs_lastname);
		showErrorInputsRequired(inputs_required);
		showErrorInputsColor(inputs_color);
		showErrorInputsFileImage(inputs_file_image);
		showErrorInputsFileThumbnail(inputs_file_thumbnail);


		showErrorInputsDateTime(inputs_datetime);
		showErrorTextareasRequired(textareas_required);
		showErrorSelects(selects_required);
		showErrorInputsCheckbox(inputs_checkbox);

		showErrorInputsSame(inputs_same_pass);

	
		if(isFormValid()) {
			return true;
		}

		return false;
	}

	/* S H O W   O K */

	function showOkInputsCheckbox(inputs_checkbox) {
		var some_is_checked = false;
		for(var i = 0; i < inputs_checkbox.length; i++) {
			if(inputs_checkbox[i].checked) {
				some_is_checked=true;
			}
		}
		if(some_is_checked && inputs_checkbox.length > 0)
			showOk(inputs_checkbox[0].parentNode.parentNode);
	}

	function showOkInputsDateTime(inputs_datetime) {
		for(var i = 0; i < inputs_datetime.length; i++) {
			if(inputs_datetime.eq(i).siblings('div.error-message').length ==0) {
				showOk(inputs_datetime[i].parentNode);
			}
		}
	}

	function showOkInputs(inputs) {

		for(var i = 0; i < inputs.length; i++) {
			if(inputs.eq(i).siblings('div.error-message').length ==0) {
				showOk(inputs[i]);
			}
		}
	}

	function showOkTextareas(textareas) {

		for(var i = 0; i < textareas.length; i++) {
			if(textareas.eq(i).siblings('div.error-message').length ==0) {
				showOk(textareas[i]);
			}
		}
	}

	/* S H O W   E R R O R S */

	function showErrorInputsCode(inputs_code) {
		for(var i = 0; i < inputs_code.length; i++) {
			if(!isCode(inputs_code[i].value.trim())) {
				showError(inputs_code[i],"This value should be a code");
			} 
		}
	}


	function showErrorInputsName(inputs_name) {
		for(var i = 0; i < inputs_name.length; i++) {
			if(!isName(inputs_name[i].value.trim())) {
				showError(inputs_name[i], "This value should be a name");
			} 
		}
	}

	function showErrorInputsLastName(inputs_lastname) {
		for(var i = 0; i < inputs_lastname.length; i++) {
			if(!isLastName(inputs_lastname[i].value.trim())) {
				showError(inputs_lastname[i], "This value should be a last name");
			} 
		}
	}



	function showErrorInputsFileImage(inputs_file_image) {
		for(var i = 0; i < inputs_file_image.length; i++) {
			if(!isFileAllowed(inputs_file_image[i],IMAGE)) {
				showError(inputs_file_image[i], "This file should be a image");
			} else {
				showImage(inputs_file_image[i]);
			}
		}
	}

	function showErrorInputsFileThumbnail(inputs_file_thumbnail) {
		for(var i = 0; i < inputs_file_thumbnail.length; i++) {
			if(!isFileAllowed(inputs_file_thumbnail[i],IMAGE)) {
				showError(inputs_file_thumbnail[i], "This file should be a image");
			} else {
				showImage(inputs_file_thumbnail[i]);
			}
		}
	}

	function showErrorInputsColor(inputs_color) {
		for(var i = 0; i < inputs_color.length; i++) {
			if(!isColor(inputs_color[i].value.trim())) {
				showError(inputs_color[i],"This value should be a color (A-z0-9\\-)");
			}
		}
	}

	/*  R E Q U I R E D  */


	function showErrorInputsRequired(inputs_required) {
		for(var i = 0; i < inputs_required.length; i++) {
			if(inputs_required[i].value.trim() == "") {
				showError(inputs_required[i],"This value is required");
			}
		}
	}


	function showErrorTextareasRequired(textareas_required) {
		for(var i = 0; i < textareas_required.length; i++) {
			if(textareas_required[i].value.trim() == "") {
				showError(textareas_required[i],"This value is required");
			} 
		}
	}

	function showErrorSelects(selects_required) {
		for(var i = 0; i < selects_required.length; i++) {
			
			if(selects_required[i].value== "") {
				showError(selects_required[i],"This value is required");
			}
		}
	}

	function showErrorInputsCheckbox(inputs_checkbox) {
		var some_is_checked = false;
		for(var i = 0; i < inputs_checkbox.length; i++) {
			if(inputs_checkbox[i].checked) {
				some_is_checked=true;
			}
		}
		if(!some_is_checked && inputs_checkbox.length > 0)
			showError(inputs_checkbox[0].parentNode.parentNode,"You should select some options");
	}

	function showErrorInputsDateTime(inputs_datetime) {
		for(var i = 0; i < inputs_datetime.length; i++) {
			if(!isDateTime(inputs_datetime[i].value.trim())) {
				showError(inputs_datetime[i].parentNode,"This value should be a date");
			}
		}
	}





	/* V A L I D A T I O N S */
	function isPassword(password) {
		var expreg = /^(?=^.{4,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  
		if(expreg.test(password)) {
			return true;
		} else {
			return false;
		}
	}

	function isEmail(email) {
		var expreg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  
		if(expreg.test(email)) {
			return true;
		} else {
			return false;
		}
	}

	function isCode(code) {
		var expreg = /^([A-Za-z0-9\-]{10,})+$/;
  
		if(expreg.test(code)) {
			return true;
		} else {
			return false;
		}
	}

	function isName(name) {
		var expreg = /^(([A-Za-záéíóúñ]{2,})|([A-Za-záéíóúñ]{2,}[\s][A-Za-záéíóúñ]{2,}))+$/;
  
		if(expreg.test(name)) {
			return true;
		} else {
			return false;
		}
	}

	function isLastName(lastname) {
		var expreg = /^(([A-Za-záéíóúñ]{2,})|([A-Za-záéíóúñ]{2,}[\s][A-Za-záéíóúñ]{2,}))+$/;
  
		if(expreg.test(lastname)) {
			return true;
		} else {
			return false;
		}
	}

	function isColor(color) {
		var expreg = /^([A-Za-z0-9\-]{2,})+$/;
  
		if(expreg.test(color)) {
			return true;
		} else {
			return false;
		}
	}


	function isDateTime(datetime) {
		var expreg = /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/](19|20)\d{2} (0?[1-9]|1[012]):([0-5][0-9]) (am|pm|AM||PM)+$/;
  
		if(expreg.test(datetime)) {
			return true;
		} else {
			return false;
		}
	}

	function isInteger(number) {
		var expreg = /^([0-9]{1,})+$/;
  
		if(expreg.test(number)) {
			return true;
		} else {
			return false;
		}
	}


	function isFileAllowed(input_file, type) {
		var file = input_file.value;
		var allowed = true;

		if(file !="") {
			allowed = false;
			switch(type) {
				case IMAGE: extensions = new Array(".gif",".jpg",".png"); break;
				case SWF: extensions = new Array(".swf"); break;
				case FILE: extensions = new Array(".exe",".sit",".zip",".tar",".swf",".mov",".hqx",".ra",".wmf",".mp3",".qt",".med",".et"); break;
				case VIDEO: extensions = new Array(".mov",".ra",".wmf",".mp3",".qt",".med",".et",".wav"); break;
				case HTML: extensions = new Array(".html",".htm",".shtml"); break;
				case OFICCE_FILE: extensions = new Array(".doc",".xls",".ppt");  break;
			}

			if(!file) {return;}
			while (file.indexOf("\\") != -1) {
				file = file.slice(file.indexOf("\\") + 1); 
			}
			
			extension = file.slice(file.indexOf(".")).toLowerCase(); 

			for (var i = 0; i < extensions.length; i++) { 
				if (extensions[i] == extension) { 
					allowed = true; 
					break; 
				} 
			} 
		}

		return allowed;
	}


	/* E F E C T S */

	function cleanAll() {
		$('form[data-validate]').find('div.error-message').remove();
		$('form[data-validate]').find('div.form-group.has-error').removeClass('has-error');

		$('form[data-validate]').find('div.has-error').removeClass('has-error');


		$('form[data-validate]').find('div.succes-message').remove();
		$('form[data-validate]').find('div.form-group.has-success').removeClass('has-success');

		$('form[data-validate]').find('div.has-success').removeClass('has-success');

		$('form[data-validate-login]').find('div.error-message').remove();
		$('form[data-validate-login]').find('div.form-group.has-error').removeClass('has-error');

		$('form[data-validate-login]').find('div.has-error').removeClass('has-error');


		$('form[data-validate-login]').find('div.succes-message').remove();
		$('form[data-validate-login]').find('div.form-group.has-success').removeClass('has-success');

		$('form[data-validate-login]').find('div.has-success').removeClass('has-success');
	}

	function showImage(input_file_image) {
		if(isFileAllowed(input_file_image,IMAGE)) {
			var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#image-file').attr('src', e.target.result);
	        }

	        reader.readAsDataURL(input_file_image.files[0]); 
		} else {
			$('#image-file').attr('src', IMAGE_EMPTY);
		}
	}

	function showThumbnail(inputs_file_thumbnail) {
		if(isFileAllowed(inputs_file_thumbnail,IMAGE)) {
			var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#thumbnail-file').attr('src', e.target.result);
	        }

	        reader.readAsDataURL(inputs_file_thumbnail.files[0]); 
		} else {
			$('#thumbnail-file').attr('src', IMAGE_EMPTY);
		}
	}

	$("input[data-image]").change(function (){
		showImage(this);
     });

	$("input[data-thumbnail]").change(function (){
		showThumbnail(this);
     });

	$('.btn-delete-category').click(function(){
    var id =  $(this).attr("id");
    
    var input_hidden = $('.input-delete-category').val(id);
  });

  $('.button-delete-category').click(function() {
  	var id = $('.input-delete-category').val();
  	$.ajax({
            type: "POST",
            url: "ajax/delete-category.php",
            data: "id="+id,
            error: function(){
                //alert("error petici�n ajax");
            },
            success: function(data){
                if(data) {
                	//alert(data);
                  $(location).attr('href','index.php?ctrl=categories');
                } else {
                	//alert(data);
                  $(location).attr('href','index.php?ctrl=categories');
                }
            }
        });
  })

//});