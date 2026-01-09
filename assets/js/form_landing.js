function submit_cf(){
    //Validate Form
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+.)+[A-Z]{2,4}$/i;
    var name = $('#inputName').val();
    var lastname = $('#inputLastName').val();
    var email = $('#InputEmail').val();
    var tel = $('#inputTel').val();
    var puesto = $('#inputPuesto').val();
    var company = $('#inputCompany').val();
    var giro = $('#inputGiro').val();
    var message = $('#inputMessage').val();
    //check if the field is empty
    if(name.trim() == ''){
        alert('Porfavor escribe tu nombre.');
        $('#inputName').focus();
        return false;
    }else if(lastname.trim() == ''){
        alert('Porfavor escribe tu apellido.');
        $('#inputLastName').focus();
        return false;
    }else if(puesto.trim() == ''){
        alert('Porfavor escribe el nombre de tu puesto.');
        $('#inputPuesto').focus();
        return false;
    }else if(company.trim() == ''){
        alert('Porfavor escribe el nombre de tu empresa.');
        $('#inputCompany').focus();
        return false;
    }else if(giro.trim() == ''){
        alert('Porfavor escribe el giro de tu empresa.');
        $('#inputGiro').focus();
        return false;
    }else if(tel.trim() == ''){
        alert('Porfavor escribe tu telefono.');
        $('#inputTel').focus();
        return false;                 
    }else if(email.trim() == ''){
        alert('Porfavor escribe tu email.');
        $('#InputEmail').focus();
        return false;
    }else if(email.trim() != '' && !reg.test(email)){
        alert('Porfavor escribe un email valido.');
        $('#InputEmail').focus();
        return false;
    }else if(message.trim() == ''){
        alert('Porfavor escribe un mensaje.');
        $('#inputMessage').focus();
        return false;
    }else{
        $.ajax({
            type:'POST',
            url:'submit_form_landing.php',
            data:'contactFrmSubmit=1&name='+name+'&lastname='+lastname+'&email='+email+'&tel='+tel+'&company='+company+'&puesto='+puesto+'&giro='+giro+'&message='+message,
            beforeSend: function(){
                $('.submitBtn').attr("disabled","disabled");
                $('.modal-body').css('opacity', '.5');
            },
            success:function(msg){
                console.log(msg);
                if(msg == 'ok'){
                    $('#inputName').val('');
                    $('#inputEmail').val('');
                    $('#inputMessage').val('');
                    $('.statusMsg').html('<span style="color:#072348;">Gracias por escribirnos, en breve nos pondremos en contacto contigo.</p>');
                }else{
                    $('.statusMsg').html('<span style="color:#f22613;">Ocurrio un error, porfavor intente más tarde.</span>');
                }
                $('.submitBtn').removeAttr("disabled");
                $('.modal-body').css('opacity', '');
            }
        });
    }
}