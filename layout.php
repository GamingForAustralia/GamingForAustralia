<?php
// Default values if not set by the page
if (!isset($page_title)) {
    $page_title = "GamingForAustralia";
}

if (!isset($page_description)) {
    $page_description = "Australian Gamers, gaming and streaming for you, right from the heart of Australia.";
}

if (!isset($content)) {
    $content = "";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo htmlspecialchars($page_description); ?>">
    <title><?php echo htmlspecialchars($page_title); ?></title>
    <!-- CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css">
    <link rel="stylesheet" href="css/app.css">
    <!-- Favicons for modern browsers -->
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/32x32.png">
    <link rel="icon" type="image/png" sizes="48x48" href="img/favicon/48x48.png">
    <link rel="icon" type="image/png" sizes="64x64" href="img/favicon/64x64.png">
    <!-- For Safari on Mac OS -->
    <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon.png">
    <!-- For Windows -->
    <link rel="shortcut icon" href="img/favicon/favicon.ico">
</head>
<body>
    <!-- Header -->
    <header>
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="index.php">
                    <img src="img/logo.png" alt="GamingForAustralia Logo" class="navbar-logo">
                    <span class="ml-2 has-text-white is-size-4">GamingForAustralia</span>
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                    <a href="index.php" class="navbar-item">Home</a>
                    <a href="about.php" class="navbar-item">About</a>
                    <a href="videos.php" class="navbar-item">Videos</a>
                    <a href="podcast.php" class="navbar-item">Podcast</a>
                </div>
            </div>
        </nav>
    </header>
    <!-- Main Content -->
    <main>
        <?php echo $content; ?>
    </main>
    <!-- Footer -->
    <footer class="footer has-background-dark">
        <div class="content has-text-centered">
            <p class="has-text-white">&copy; 2015-<?php echo date('Y'); ?> GamingForAustralia. All rights reserved.</p>
        </div>
    </footer>
    <!-- JavaScript -->
    <script src="js/app.js"></script>
</body>
</html>
