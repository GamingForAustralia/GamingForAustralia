<?php
$status = ""; // Initialize status variable

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Set up email details
    $to = "your_email@example.com"; // Change this to your email address
    $subject = "Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        $status = "Thank you for contacting us! We will get back to you soon.";
    } else {
        $status = "Oops! Something went wrong. Please try again later.";
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

                <input type="submit" name="submit" value="Submit">
            </form>
            <?php echo "<p>$status</p>"; ?>
        </div>
    </div>

    <!-- Footer -->
    <?php include('footer.php'); ?>
</body>
</html>
