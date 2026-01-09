function submit_cf(){
    //Validate Form
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+.)+[A-Z]{2,4}$/i;
    var name = $('#name').val();
    var lastname = $('#lastname').val(); 
    var tel = $('#tel').val();
    var email = $('#email').val();
    var file_cv = $('#cvFile').prop('files')[0];
    //var file_cv = $('#cvFile').val();
    console.log(file_cv);
    //check if the field is empty
    if(name.trim() == ''){
        alert('Porfavor escribe tu nombre.');
        $('#name').focus();
        return false;
    }else if(lastname.trim() == ''){
        alert('Porfavor escribe tu apellido.');
        $('#lastname').focus();
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
    }else{
        $.ajax({
            type:'POST',
            url:'submit_form_CV.php',
            data:'contactFrmSubmit=1&name='+name+'&lastname='+lastname+'&email='+email+'&tel='+tel+'&file_cv'+file_cv,
            contentType: false,
                  cache: false,
            processData:false,
            beforeSend: function(){
                $('.submitBtn').attr("disabled","disabled");
                $('.modal-body').css('opacity', '.5');
            },
            success:function(msg){
                if(msg == 'ok'){
                    $('#inputName').val('');
                    $('#inputEmail').val('');
                    $('#inputMessage').val('');
                    $('.statusMsg').html('<span style="color:#072348;">Gracias por enviarnos tu solicitud, en breve nos contactaremos contigo.</p>');
                }else{
                    $('.statusMsg').html('<span style="color:#f22613;">Ocurrio un error, porfavor intente más tarde.</span>');
                }
                $('.submitBtn').removeAttr("disabled");
                $('.modal-body').css('opacity', '');
            }
        });
    }
}