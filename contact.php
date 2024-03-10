<?php
$status = ""; // Initialize status variable

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up PHPMailer
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    // Include PHPMailer classes
    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    $mail = new PHPMailer(true);

    // Enable verbose debug output
    //$mail->SMTPDebug = 3;  // Enable verbose debug output

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'mail.gamingforaustralia.com.au';  // Your SMTP server address
        $mail->SMTPAuth = true;
        $mail->Username = 'noreply@gamingforaustralia.com.au';
        $mail->Password = ''; // MAKE SURE YOU SET THIS PASSWORD AND UPDATE IT BEFORE MOVING IT TO THE WEBSERVER
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;  // SMTP server port

        //Recipients
        $mail->setFrom('noreply@gamingforaustralia.com.au', 'Gaming for Australia');
        $mail->addAddress($email, $name); // User's email address

        // Content
        $mail->isHTML(true); // Set email format to HTML
        $mail->Subject = 'Thank you for contacting Gaming for Australia';
        $mail->Body    = "Dear $name,<br><br>Thank you for contacting us! We have received your message and will get back to you soon.<br><br>Best regards,<br>Gaming for Australia";

        // Send confirmation email to the user
        $mail->send();

        // Send notification email to admin
        $mail->clearAddresses();
        $mail->addAddress('contact@gamingforaustralia.com.au');
        $mail->Subject = 'Contact Form Submission';
        $mail->Body    = "Name: $name<br>Email: $email<br><br>Message:<br>$message";
        $mail->send();

        $status = "Thank you for contacting us! We will get back to you soon.";
    } catch (Exception $e) {
        $status = "Oops! Something went wrong. Please try again later. Error: {$mail->ErrorInfo}";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GamingForAustralia - Contact</title>
    <?php include('meta.php'); ?>
</head>
<body>
    <!-- Header -->
    <?php include('header.php'); ?>

    <!-- Content -->
    <div class="row">
        <div class="column">
            <h1>Contact GamingForAustralia</h1>
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <label for="name">Your Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Your Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" required></textarea><br><br>
            <button type="submit" name="submit" value="Submit">Submit</button>
            </form>
            <?php echo "<p>$status</p>"; ?>
        </div>
    </div>
    <br><br><br><br>
    <!-- Footer -->
    <?php include('footer.php'); ?>
</body>
</html>