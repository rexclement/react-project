<?php
require 'PHPMailer/src/PHPMailer.php';  // Adjust path as necessary
require 'PHPMailer/src/SMTP.php';        // Adjust path as necessary
require 'PHPMailer/src/Exception.php';   // Adjust path as necessary

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $contact = htmlspecialchars(trim($_POST['contact']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Check if email is valid
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email format.');</script>";
        exit;
    }

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);
    try {
        // SMTP configuration
        $mail->isSMTP();                                            // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';                           // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                                   // Enable SMTP authentication
        $mail->Username = 'arunkarthick1422005@gmail.com';       // Your email
        $mail->Password = 'brfy ocll fuow oaqh';                 // Your email password
        $mail->SMTPSecure = 'tls';                               // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                       // TCP port to connect to

        // Set email details
        $mail->setFrom('arunkarthick1422005@gmail.com','Arun'); //company's email
        $mail->addAddress('arunkarthick1422005@gmail.com'); // Replace with your recipient email

        // Email content
        $mail->isHTML(true);                                    // Set email format to HTML
        $mail->Subject = "New message from $name";
        $mail->Body = "Name: $name<br>Email: $email<br>Contact No: $contact<br><br>Message:<br>$message";

        // Send email
        $mail->send();
        echo "<script>alert('Your message has been sent successfully!');</script>";
        echo "<script>window.location.href='index.php';</script>"; // Redirect back to the form
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>


