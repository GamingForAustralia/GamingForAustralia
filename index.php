<?php
$page_title = "GamingForAustralia - Home";
$page_description = "Welcome to GamingForAustralia - This is the home of our stream team. Australian Gamers, gaming and streaming for you.";
ob_start();
?>

<!-- Content -->
<div class="container">
    <div class="section">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1 has-text-white">Welcome to GamingForAustralia</h1>
                <p class="subtitle has-text-white">This is the home of our stream team.</p>
            </div>
        </div>
    </div>
</div>

<?php
$content = ob_get_clean();
include 'layout.php';
?>
