<?php
$page_title = "GamingForAustralia - Videos";
$page_description = "Watch GamingForAustralia YouTube videos - Gaming content from our Australian team.";

// Define playlists array for easy management
$playlists = [
    [
        'title' => 'Life is Strange 2',
        'subtitle' => 'Complete Playthrough Series',
        'description' => 'Join us as we experience the emotional journey of Sean and Daniel Diaz in this award-winning narrative adventure game.',
        'image' => 'img/featured-videos/LifeIsStrange2.jpg',
        'playlist_url' => 'https://www.youtube.com/playlist?list=PLKg1x2WfdZdYvQgpXx4wVmUHW6K70MpLm'
    ],
    [
        'title' => 'Detroit: Become Human',
        'subtitle' => 'Complete Playthrough Series',
        'description' => 'Experience the future of artificial intelligence and humanity through the stories of Connor, Markus, and Kara.',
        'image' => 'img/featured-videos/DetroitBecomeHuman.jpg',
        'playlist_url' => 'https://www.youtube.com/playlist?list=PLKg1x2WfdZdZtZWsjj_wttiQz1VbRNJIU'
    ],
    [
        'title' => 'Life Is Strange: True Colors',
        'subtitle' => 'Complete Playthrough Series',
        'description' => 'Follow Alex Chen\'s story as she uses her psychic power of empathy to uncover the truth behind her brother\'s death.',
        'image' => 'img/featured-videos/LifeIsStrangeTrueColours.jpg',
        'playlist_url' => 'https://www.youtube.com/playlist?list=PLKg1x2WfdZdYT3ffck2IvCDKqy-1oP2Ph'
    ],
    [
        'title' => 'Quantum Break',
        'subtitle' => 'Complete Playthrough Series',
        'description' => 'Master time manipulation powers in this sci-fi thriller that blends intense gameplay with live-action episodes.',
        'image' => 'img/featured-videos/QuantumBreak.jpg',
        'playlist_url' => 'https://www.youtube.com/playlist?list=PLKg1x2WfdZdZltGjRWcWLA3ro_xnjx4yf'
    ],
    [
        'title' => 'A Plague Tale: Requiem',
        'subtitle' => 'Complete Playthrough Series',
        'description' => 'Continue Amicia and Hugo\'s heart-wrenching journey in this stunning sequel set in medieval France.',
        'image' => 'img/featured-videos/APlagueTaleRequiem.jpg',
        'playlist_url' => 'https://www.youtube.com/playlist?list=PLKg1x2WfdZdaoTsJAOHy56Y9BHFj0NLJG'
    ]
];

ob_start();
?>

<!-- Content -->
<div class="container">
    <div class="section">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1 has-text-white">GamingForAustralia Videos</h1>
                <p class="subtitle has-text-white">Watch our gaming content and playthroughs on YouTube.</p>
                <!-- Important Notice -->
                <div class="notification is-warning mb-6">
                    <div class="content">
                        <p class="has-text-dark">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                <span><strong>Important Notice:</strong></span>
                            </span>
                        </p>
                        <p class="has-text-dark">
                            This page may be outdated. For the most current videos and playlists, 
                            please visit our <a href="https://www.youtube.com/@GamingForAustralia" target="_blank" class="has-text-dark">
                            <strong>YouTube channel</strong> <i class="fas fa-external-link-alt"></i></a> directly.
                        </p>
                    </div>
                </div>
                <!-- Video Playlists -->
                <h2 class="title is-2 has-text-white mb-5">
                    <span class="icon-text">
                        <span class="icon has-text-primary">
                            <i class="fab fa-youtube"></i>
                        </span>
                        <span>Featured Playlists</span>
                    </span>
                </h2>
                <div class="columns is-multiline">
                    <?php foreach ($playlists as $playlist): ?>
                        <div class="column is-12-tablet is-6-desktop">
                            <div class="box has-background-dark">
                                <div class="media">
                                    <div class="media-left">
                                        <span class="icon is-large has-text-primary">
                                            <i class="fas fa-play-circle fa-2x"></i>
                                        </span>
                                    </div>
                                    <div class="media-content">
                                        <div class="level">
                                            <div class="level-left">
                                                <div class="level-item">
                                                    <div>
                                                        <h3 class="title is-4 has-text-white"><?php echo htmlspecialchars($playlist['title']); ?></h3>
                                                        <p class="subtitle is-6 has-text-grey-light"><?php echo htmlspecialchars($playlist['subtitle']); ?></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="level-right">
                                                <div class="level-item">
                                                    <a href="<?php echo htmlspecialchars($playlist['playlist_url']); ?>" 
                                                       target="_blank" class="button is-primary">
                                                        <span class="icon">
                                                            <i class="fab fa-youtube"></i>
                                                        </span>
                                                        <span>Watch Playlist</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <figure class="image mb-4">
                                            <img src="<?php echo htmlspecialchars($playlist['image']); ?>" 
                                                 alt="<?php echo htmlspecialchars($playlist['title']); ?> Cover" 
                                                 style="max-width: 465px; height: auto;">
                                        </figure>
                                        <p class="has-text-white-ter mb-4">
                                            <?php echo htmlspecialchars($playlist['description']); ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <!-- YouTube Channel CTA -->
                <div class="box has-background-dark mt-6">
                    <div class="content has-text-centered">
                        <h2 class="title is-3 has-text-white">
                            <span class="icon-text">
                                <span class="icon has-text-danger">
                                    <i class="fab fa-youtube"></i>
                                </span>
                                <span>Subscribe to Our Channel</span>
                            </span>
                        </h2>
                        <p class="has-text-white mb-4">
                            Don't miss out on our latest gaming content! Subscribe to our YouTube channel for regular uploads, 
                            live streams, and gaming discussions.
                        </p>
                        <a href="https://www.youtube.com/@GamingForAustralia" target="_blank" 
                           class="button is-danger is-large">
                            <span class="icon">
                                <i class="fab fa-youtube"></i>
                            </span>
                            <span>Visit Our YouTube Channel</span>
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
