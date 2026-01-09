<?php
// Replace "YOUR_HUBSPOT_ACCESS_TOKEN" with your actual HubSpot access token

// HubSpot API endpoint for creating contacts
$hubspotUrl = "https://api.hubapi.com/crm/v3/objects/contacts";

// Retrieve form data from AJAX request
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
//$website = $_POST['website'];

$city     = $_POST['city'];
$message   = $_POST['message'];

// Create the contact data array
$contactData = array(
    'properties' => array(
        'company' => $company,
        'email' => $email,
        'firstname' => $firstname,
        'lastname' => $lastname,
        'phone' => $phone,
        'website' => $website
    )
);

// Convert the data to JSON
$contactJson = json_encode($contactData);

// Create a new cURL resource
$ch = curl_init($hubspotUrl);

// Set cURL options
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $contactJson);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: Bearer ' . $accessToken, 'Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute cURL and get the response
$response = curl_exec($ch);

// Close cURL resource
curl_close($ch);

// Return the response to AJAX
echo $response;

/*
     * Datos de Envio
     */
    // Datos de prueba
    //$to     = 'pruebas@dmstudio.online'; //Correo a quien envia
    //Datos de produccion
    $to     = 'contacto@cerberusconsulting.mx, asistentedireccion@cerberusconsulting.mx'; //Correo a quien envia
    $subject= 'Contacto Web Cerberus'; //Asunto del correo

    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    // Additional headers
    //Datos de prueba
    //$headers .= 'From: Cerberus Consulting <pruebas@dmstudio.online>' . "\r\n";
    //Datos de produccion 
    $headers .= 'From: Cerberus Consulting <contacto@cerberusconsulting.mx>' . "\r\n";
    
    
    $htmlContent = '
    <html>
    <body>
    <h4>Registro de formulario web.</h4>
    <table cellspacing="0" style="width: 300px; height: 200px;">
        <tr>
            <th>Nombre:</th><td>'.$firstname.'</td>
        </tr>
        <tr style="background-color: #e0e0e0;">
            <th>Apellido:</th><td>'.$lastname.'</td>
        </tr>
        <tr>
            <th>Email:</th><td>'.$email.'</td>
        </tr>
        <tr style="background-color: #e0e0e0;">
            <th>Telefono:</th><td>'.$phone.'</td>
        </tr>
        <tr>
            <th>Ciudad:</th><td>'.$city.'</td>
        </tr>
        <tr style="background-color: #e0e0e0;">
            <th>Empresa:</th><td>'.$company.'</td>
        </tr>
        <tr>
            <th>Mensaje:</th><td>'.$message.'</td>
        </tr>
    </table>
    </body>
    </html>';

    mail($to,$subject,$htmlContent,$headers);
    
    // Output status
    //echo $status;die;

?>