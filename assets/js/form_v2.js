// Handle form submission
        $("#contactForm").submit(function(event) {
            event.preventDefault();
            
            if(firstname.trim() == ''){
                alert('Porfavor escribe tu nombre.');
                $('#firstname').focus();
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
                
            }

            const formData = {
                company: $("#company").val(),
                email: $("#email").val(),
                firstname: $("#firstname").val(),
                lastname: $("#lastname").val(),
                phone: $("#phone").val(),
                website: $("#website").val(),
                city: $('#city').val(),
                message: $('#message').val(),
            };
            
            console.log(formData);

            // Send the form data to the PHP script for processing
            $.ajax({
                url: "submit_form_v2.php", // PHP script to handle the request
                type: "POST",
                data: formData,
                dataType: "json",
                beforeSend: function(){
                            $('.submitBtn').attr("disabled","disabled");
                            $('.modal-body').css('opacity', '.5');
                        },
                success: function(response) {
                    alert("Mensaje enviado!");
                },
                error: function(error) {
                    alert("Error creating contact: " + error.responseText);
                },
            });
        });