<?php
$page_title = "GamingForAustralia - Podcast";
$page_description = "Listen to the GamingForAustralia podcast - Gaming discussions and content from our Australian team.";

// Media folder path
$media_path = '/home/gamingfo/podcasts.gamingforaustralia.com.au/media';

// Streaming URL for audio files
$stream_url = 'https://podcasts.gamingforaustralia.com.au';

// Function to parse episode XML data
function parseEpisodeXML($xmlFile) {
    if (!file_exists($xmlFile)) {
        return null;
    }
    
    $xml = simplexml_load_file($xmlFile);
    if ($xml === false) {
        return null;
    }
    
    return [
        'title' => (string)$xml->episode->titlePG,
        'shortdesc' => (string)$xml->episode->shortdescPG,
        'longdesc' => (string)$xml->episode->longdescPG,
        'duration' => (string)$xml->episode->fileInfoPG->duration,
        'size' => (string)$xml->episode->fileInfoPG->size,
        'author' => (string)$xml->episode->authorPG->namePG,
        'explicit' => (string)$xml->episode->explicitPG
    ];
}

// Define episodes with their file paths
$episodes = [
    [
        'date' => 'November 4, 2016',
        'mp3' => $stream_url . '/2016-11-04_episode_1.mp3',
        'xml' => $media_path . '/2016-11-04_episode_1.xml'
    ],
    [
        'date' => 'November 4, 2016',
        'mp3' => $stream_url . '/2016-11-04_episode_2.mp3',
        'xml' => $media_path . '/2016-11-04_episode_2.xml'
    ],
    [
        'date' => 'November 4, 2016',
        'mp3' => $stream_url . '/2016-11-04_episode_3.mp3',
        'xml' => $media_path . '/2016-11-04_episode_3.xml'
    ],
    [
        'date' => 'November 4, 2016',
        'mp3' => $stream_url . '/2016-11-04_episode_4.mp3',
        'xml' => $media_path . '/2016-11-04_episode_4.xml'
    ],
    [
        'date' => 'November 4, 2016',
        'mp3' => $stream_url . '/2016-11-04_episode_5.mp3',
        'xml' => $media_path . '/2016-11-04_episode_5.xml'
    ],
    [
        'date' => 'November 4, 2016',
        'mp3' => $stream_url . '/2016-11-04_episode_6.mp3',
        'xml' => $media_path . '/2016-11-04_episode_6.xml'
    ],
    [
        'date' => 'November 4, 2016',
        'mp3' => $stream_url . '/2016-11-04_episode_7.mp3',
        'xml' => $media_path . '/2016-11-04_episode_7.xml'
    ],
    [
        'date' => 'November 4, 2016',
        'mp3' => $stream_url . '/2016-11-04_episode_8.mp3',
        'xml' => $media_path . '/2016-11-04_episode_8.xml'
    ],
    [
        'date' => 'October 10, 2020',
        'mp3' => $stream_url . '/2020-10-10-gfa_radio_1__this_is_not_a_podcast_.mp3',
        'xml' => $media_path . '/2020-10-10-gfa_radio_1__this_is_not_a_podcast_.xml'
    ]
];

ob_start();
?>

<!-- Content -->
<div class="container">
    <div class="section">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1 has-text-white">GamingForAustralia Podcast</h1>
                <p class="has-text-white mb-5">Listen to our podcast episodes below. All episodes are hosted by the GFA Staff team.</p>
                <!-- Podcast Info -->
                <div class="box has-background-dark mb-6">
                    <div class="content has-text-centered">
                        <h2 class="title is-3 has-text-white">
                            <span class="icon-text">
                                <span class="icon has-text-primary">
                                    <i class="fas fa-info-circle"></i>
                                </span>
                                <span>About Our Podcast</span>
                            </span>
                        </h2>
                        <p class="has-text-white">
                            The GamingForAustralia podcast features discussions about gaming, technology, and Australian gaming culture. 
                            All episodes are produced by our talented GFA Staff team and are available for free listening.
                        </p>
                        <p class="has-text-grey-light">
                            <strong>Contact:</strong> podcasts@gamingforaustralia.com.au
                        </p>
                    </div>
                </div>
                <!-- Podcast Episodes -->
                <div class="columns is-multiline">
                    <?php foreach ($episodes as $episode): ?>
                        <?php 
                        $episodeData = parseEpisodeXML($episode['xml']);
                        $title = $episodeData ? $episodeData['title'] : 'Episode';
                        $description = $episodeData ? $episodeData['longdesc'] : '';
                        $duration = $episodeData ? $episodeData['duration'] : '';
                        $author = $episodeData ? $episodeData['author'] : 'GFA Staff';
                        ?>
                        <div class="column is-12-tablet is-6-desktop">
                            <div class="box has-background-dark">
                                <div class="media">
                                    <div class="media-left">
                                        <span class="icon is-large has-text-primary">
                                            <i class="fas fa-podcast fa-2x"></i>
                                        </span>
                                    </div>
                                    <div class="media-content">
                                        <h3 class="title is-4 has-text-white"><?php echo htmlspecialchars($title); ?></h3>
                                        <p class="subtitle is-6 has-text-grey-light mt-2">
                                            <span class="icon-text">
                                                <span class="icon">
                                                    <i class="fas fa-calendar"></i>
                                                </span>
                                                <span><?php echo $episode['date']; ?></span>
                                            </span>
                                            <?php if ($duration): ?>
                                                <span class="icon-text ml-3">
                                                    <span class="icon">
                                                        <i class="fas fa-clock"></i>
                                                    </span>
                                                    <span><?php echo $duration; ?></span>
                                                </span>
                                            <?php endif; ?>
                                        </p>
                                        <?php if ($description && $description !== $title): ?>
                                            <p class="has-text-white-ter mb-3"><?php echo htmlspecialchars($description); ?></p>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <!-- Custom Audio Player -->
                                <div class="custom-audio-player" data-src="<?php echo htmlspecialchars($episode['mp3']); ?>">
                                    <audio preload="metadata"></audio>
                                    <div class="player-controls">
                                        <div class="control-buttons">
                                            <button class="btn-rewind" title="Rewind 10 seconds">
                                                <i class="fas fa-backward"></i>
                                            </button>
                                            <button class="btn-play-pause" title="Play/Pause">
                                                <i class="fas fa-play"></i>
                                            </button>
                                            <button class="btn-forward" title="Forward 10 seconds">
                                                <i class="fas fa-forward"></i>
                                            </button>
                                        </div>
                                        <div class="progress-container">
                                            <div class="time-display current-time">0:00</div>
                                            <div class="progress-bar">
                                                <div class="progress-fill"></div>
                                                <div class="progress-handle"></div>
                                            </div>
                                            <div class="time-display total-time">0:00</div>
                                        </div>
                                        <div class="volume-container">
                                            <button class="btn-mute" title="Mute/Unmute">
                                                <i class="fas fa-volume-up"></i>
                                            </button>
                                            <div class="volume-slider">
                                                <div class="volume-fill"></div>
                                                <div class="volume-handle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
$content = ob_get_clean();
include 'layout.php';
?>