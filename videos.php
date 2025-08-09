<?php
$page_title = "GamingForAustralia - Videos";
$page_description = "Watch GamingForAustralia YouTube videos - Gaming content from our Australian team.";
ob_start();
?>

<!-- Content -->
<div class="container">
    <div class="section">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1 has-text-white">Welcome to GamingForAustralia</h1>
                <p class="subtitle has-text-white">This is the videos page for YouTube videos.</p>
            </div>
        </div>
    </div>
</div>

<?php
$content = ob_get_clean();
include 'layout.php';
?>
