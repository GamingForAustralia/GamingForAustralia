<?php
$page_title = "GamingForAustralia - Podcast";
$page_description = "Listen to the GamingForAustralia podcast - Gaming discussions and content from our Australian team.";
ob_start();
?>

<!-- Content -->
<div class="container">
    <div class="section">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1 has-text-white">GamingForAustralia Podcast</h1>
                <p class="has-text-white mb-4">You can listen to our podcast, on a rolling repeat playlist here:</p>
                <div class="box has-background-dark">
                    <iframe src="https://relay-cloud.fourflavors.net/public/gamingforaustralia/embed?theme=dark" frameborder="0" allowtransparency="true" style="width: 100%; min-height: 150px; border: 0;"></iframe>
                </div>
                <p class="has-text-white mt-5 mb-4">Or you may listen to any of our PodCast Episodes here:</p>
                <div class="box has-background-dark">
                    <iframe src="https://relay-cloud.fourflavors.net/public/gamingforaustralia/podcast/1eee112c-7c9a-6292-a115-b1115c059090?embed=true&theme=dark" frameborder="0" allowtransparency="true" style="width: 100%; height: 800px; border: 0;"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
$content = ob_get_clean();
include 'layout.php';
?>