<?php
$page_title = "GamingForAustralia - About";
$page_description = "Learn about the GamingForAustralia team - Australian Gamers, gaming and streaming for you, right from the heart of Australia.";
ob_start();
?>

<!-- Content -->
<div class="container">
    <div class="section">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1 has-text-white">About GamingForAustralia</h1>
                <p class="subtitle has-text-white">Australian Gamers, gaming and streaming for you, right from the heart of Australia.</p>
                
                <div class="columns is-multiline">
                    <!-- Profile 1 -->
                    <div class="column is-6-tablet is-3-desktop">
                        <div class="card has-background-dark">
                            <div class="card-image">
                                <figure class="image is-square">
                                    <img src="img/profile/gfaUnDead.png" alt="gfaUnDead">
                                </figure>
                            </div>
                            <div class="card-content has-text-centered">
                                <div class="content">
                                    <h4 class="title is-4 has-text-white">gfaUnDead</h4>
                                    <p class="has-text-white">Gaming, coding and hanging out with friends, you'll see this and more, if you join the zombie horde on Twitch!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Profile 2 -->
                    <div class="column is-6-tablet is-3-desktop">
                        <div class="card has-background-dark">
                            <div class="card-image">
                                <figure class="image is-square">
                                    <img src="img/profile/TheFez.png" alt="TheFez">
                                </figure>
                            </div>
                            <div class="card-content has-text-centered">
                                <div class="content">
                                    <h4 class="title is-4 has-text-white">TheFez</h4>
                                    <p class="has-text-white">The brains, the Fez!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Profile 3 -->
                    <div class="column is-6-tablet is-3-desktop">
                        <div class="card has-background-dark">
                            <div class="card-image">
                                <figure class="image is-square">
                                    <img src="img/profile/Darkness.png" alt="Darkness">
                                </figure>
                            </div>
                            <div class="card-content has-text-centered">
                                <div class="content">
                                    <h4 class="title is-4 has-text-white">FallenAngelDarkness</h4>
                                    <p class="has-text-white">I am The Fallen Angel Darkness, without darkness there will be no light.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Profile 4 -->
                    <div class="column is-6-tablet is-3-desktop">
                        <div class="card has-background-dark">
                            <div class="card-image">
                                <figure class="image is-square">
                                    <img src="img/profile/MrBanyanyaa.png" alt="MrBanyanyaa">
                                </figure>
                            </div>
                            <div class="card-content has-text-centered">
                                <div class="content">
                                    <h4 class="title is-4 has-text-white">MrBanyanyaa</h4>
                                    <p class="has-text-white">G'Day! I'm MrBanyanyaa (pronounced like Ban-Yan-yaa)! I love to play games and hangout with friends. I especially love to mess with my friends and troll them!</p>
                                </div>
                            </div>
                        </div>
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
