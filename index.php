<?php
$page_title = "GamingForAustralia - Home";
$page_description = "Welcome to GamingForAustralia - This is the home of our stream team. Australian Gamers, gaming and streaming for you.";
ob_start();
?>

<!-- Content -->
<div class="container">
    <div class="section">
        <!-- Hero Section -->
        <div class="columns">
            <div class="column">
                <h1 class="title is-1 has-text-white">Welcome to GamingForAustralia</h1>
                <p class="subtitle is-3 has-text-white">This is the home of our stream team.</p>
            </div>
        </div>
        
        <!-- What is a Stream Team Section -->
        <div class="columns mt-6">
            <div class="column">
                <div class="box has-background-dark">
                    <h2 class="title is-2 has-text-white has-text-centered mb-5">
                        <span class="icon-text">
                            <span class="icon has-text-primary">
                                <i class="fas fa-users fa-lg"></i>
                            </span>
                            <span>What is a Stream Team?</span>
                        </span>
                    </h2>
                    
                    <div class="columns is-multiline">
                        <div class="column is-12-tablet is-6-desktop">
                            <div class="content has-text-white">
                                <h3 class="title is-4 has-text-primary">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i class="fas fa-broadcast-tower"></i>
                                        </span>
                                        <span>Collaborative Gaming</span>
                                    </span>
                                </h3>
                                <p>A stream team is a group of content creators who work together to entertain audiences through live gaming streams, collaborative gameplay, and shared community experiences.</p>
                            </div>
                        </div>
                        
                        <div class="column is-12-tablet is-6-desktop">
                            <div class="content has-text-white">
                                <h3 class="title is-4 has-text-primary">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i class="fas fa-heart"></i>
                                        </span>
                                        <span>Community Building</span>
                                    </span>
                                </h3>
                                <p>We focus on building a welcoming community where gamers can connect, share experiences, and enjoy quality entertainment from the heart of Australia.</p>
                            </div>
                        </div>
                        
                        <div class="column is-12-tablet is-6-desktop">
                            <div class="content has-text-white">
                                <h3 class="title is-4 has-text-primary">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i class="fas fa-gamepad"></i>
                                        </span>
                                        <span>Diverse Content</span>
                                    </span>
                                </h3>
                                <p>From intense gaming sessions to casual hangouts, podcasts to collaborative projects - our team creates diverse content to keep our community engaged and entertained.</p>
                            </div>
                        </div>
                        
                        <div class="column is-12-tablet is-6-desktop">
                            <div class="content has-text-white">
                                <h3 class="title is-4 has-text-primary">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i class="fas fa-globe-oceania"></i>
                                        </span>
                                        <span>Australian Gaming</span>
                                    </span>
                                </h3>
                                <p>Proudly representing the Australian gaming community, we bring you authentic Aussie gaming culture, humor, and perspectives to the global streaming scene.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Call to Action Section -->
        <div class="columns mt-6">
            <div class="column">
                <div class="has-text-centered">
                    <h2 class="title is-3 has-text-white mb-4">Ready to Join Our Community?</h2>
                    <div class="buttons is-centered">
                        <a href="about.php" class="button is-primary is-medium">
                            <span class="icon">
                                <i class="fas fa-user-friends"></i>
                            </span>
                            <span>Meet the Team</span>
                        </a>
                        <a href="videos.php" class="button is-secondary is-medium">
                            <span class="icon">
                                <i class="fas fa-play"></i>
                            </span>
                            <span>Watch Videos</span>
                        </a>
                        <a href="podcast.php" class="button is-info is-medium">
                            <span class="icon">
                                <i class="fas fa-podcast"></i>
                            </span>
                            <span>Listen to Podcast</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
$content = ob_get_clean();
include 'layout.php';
?>
