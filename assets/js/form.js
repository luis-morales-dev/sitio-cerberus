function submit_cf(){
    //Validate Form
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+.)+[A-Z]{2,4}$/i;
    var name = $('#name').val();
    var lastname = $('#lastname').val();
    var company = $('#company').val();
    var city = $('#inputCity').val();
    var tel = $('#tel').val();
    var email = $('#email').val();
    var message = $('#inputMessage').val();
    //check if the field is empty
    if(name.trim() == ''){
        alert('Porfavor escribe tu nombre.');
        $('#name').focus();
        return false;
    }else if(lastname.trim() == ''){
        alert('Porfavor escribe tu apellido.');
        $('#lastname').focus();
        return false;
    }else if(company.trim() == ''){
        alert('Porfavor escribe el nombre de tu empresa.');
        $('#state').focus();
        return false;
    }else if(city.trim() == ''){
        alert('Porfavor escribe tu ciudad.');
        $('#inputCity').focus();
        return false;
    }else if(tel.trim() == ''){
        alert('Porfavor escribe tu telefono.');
        $('#tel').focus();
        return false;                 
    }else if(email.trim() == ''){
        alert('Porfavor escribe tu email.');
        $('#email').focus();
        return false;
    }else if(email.trim() != '' && !reg.test(email)){
        alert('Porfavor escribe un email valido.');
        $('#email').focus();
        return false;
    }else if(message.trim() == ''){
        alert('Porfavor escribe un mensaje.');
        $('#inputMessage').focus();
        return false;
    }else{
        $.ajax({
                        type:'POST',
                        url:'submit_form.php',
                        data:'contactFrmSubmit=1&name='+name+'&lastname='+lastname+'&email='+email+'&tel='+tel+'&company='+company+'&city='+city+'&message='+message,
                        beforeSend: function(){
                            $('.submitBtn').attr("disabled","disabled");
                            $('.modal-body').css('opacity', '.5');
                        },
                        success:function(msg){
                            console.log(msg);
                            if(msg == 'ok'){
                                alert('¡Gracias por enviar tu solicitud, en breve nos pondremos en contacto!');
                                $(location).attr('href','https://cerberusconsulting.mx/');
                            }else{
                                $('.statusMsg').html('<span style="color:#f22613;">Ocurrio un error, porfavor intente más tarde.</span>');
                            }
                            $('.submitBtn').removeAttr("disabled");
                            $('.modal-body').css('opacity', '');
                        }
                    });
        
    }
}