// Bulma navbar burger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});

// Close notifications when close button is clicked
document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        const $notification = $delete.parentNode;
        
        $delete.addEventListener('click', () => {
            $notification.parentNode.removeChild($notification);
        });
    });
});

// Custom Audio Player
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayers = document.querySelectorAll('.custom-audio-player');
    
    audioPlayers.forEach(player => {
        const audio = player.querySelector('audio');
        const playPauseBtn = player.querySelector('.btn-play-pause');
        const rewindBtn = player.querySelector('.btn-rewind');
        const forwardBtn = player.querySelector('.btn-forward');
        const muteBtn = player.querySelector('.btn-mute');
        const progressBar = player.querySelector('.progress-bar');
        const progressFill = player.querySelector('.progress-fill');
        const progressHandle = player.querySelector('.progress-handle');
        const volumeSlider = player.querySelector('.volume-slider');
        const volumeFill = player.querySelector('.volume-fill');
        const volumeHandle = player.querySelector('.volume-handle');
        const currentTimeEl = player.querySelector('.current-time');
        const totalTimeEl = player.querySelector('.total-time');
        
        // Set audio source
        const src = player.getAttribute('data-src');
        audio.src = src;
        audio.preload = 'metadata';
        
        // Disable right-click context menu on audio
        audio.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
        
        // Format time helper
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }
        
        // Update time displays
        function updateTime() {
            currentTimeEl.textContent = formatTime(audio.currentTime);
            if (!isNaN(audio.duration)) {
                totalTimeEl.textContent = formatTime(audio.duration);
            }
        }
        
        // Update progress bar
        function updateProgress() {
            if (!isNaN(audio.duration)) {
                const progress = (audio.currentTime / audio.duration) * 100;
                progressFill.style.width = `${progress}%`;
                progressHandle.style.left = `${progress}%`;
            }
            updateTime();
        }
        
        // Play/Pause functionality
        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                // Pause all other audio players
                audioPlayers.forEach(otherPlayer => {
                    if (otherPlayer !== player) {
                        const otherAudio = otherPlayer.querySelector('audio');
                        const otherPlayBtn = otherPlayer.querySelector('.btn-play-pause i');
                        otherAudio.pause();
                        otherPlayBtn.className = 'fas fa-play';
                    }
                });
                
                audio.play();
                playPauseBtn.querySelector('i').className = 'fas fa-pause';
            } else {
                audio.pause();
                playPauseBtn.querySelector('i').className = 'fas fa-play';
            }
        });
        
        // Rewind 10 seconds
        rewindBtn.addEventListener('click', () => {
            audio.currentTime = Math.max(0, audio.currentTime - 10);
        });
        
        // Forward 10 seconds
        forwardBtn.addEventListener('click', () => {
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
        });
        
        // Mute/Unmute
        muteBtn.addEventListener('click', () => {
            audio.muted = !audio.muted;
            const icon = muteBtn.querySelector('i');
            if (audio.muted) {
                icon.className = 'fas fa-volume-mute';
                volumeFill.style.width = '0%';
                volumeHandle.style.right = '100%';
            } else {
                icon.className = audio.volume > 0.5 ? 'fas fa-volume-up' : 'fas fa-volume-down';
                const volumePercent = audio.volume * 100;
                volumeFill.style.width = `${volumePercent}%`;
                volumeHandle.style.right = `${100 - volumePercent}%`;
            }
        });
        
        // Progress bar click
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audio.currentTime = pos * audio.duration;
        });
        
        // Volume slider click
        volumeSlider.addEventListener('click', (e) => {
            const rect = volumeSlider.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audio.volume = Math.max(0, Math.min(1, pos));
            const volumePercent = audio.volume * 100;
            volumeFill.style.width = `${volumePercent}%`;
            volumeHandle.style.right = `${100 - volumePercent}%`;
            
            // Update mute button icon
            const icon = muteBtn.querySelector('i');
            if (audio.volume === 0) {
                icon.className = 'fas fa-volume-mute';
            } else if (audio.volume > 0.5) {
                icon.className = 'fas fa-volume-up';
            } else {
                icon.className = 'fas fa-volume-down';
            }
            audio.muted = false;
        });
        
        // Audio event listeners
        audio.addEventListener('loadedmetadata', () => {
            updateTime();
        });
        
        audio.addEventListener('timeupdate', updateProgress);
        
        audio.addEventListener('ended', () => {
            playPauseBtn.querySelector('i').className = 'fas fa-play';
            audio.currentTime = 0;
        });
        
        // Initialize volume display
        const initialVolumePercent = audio.volume * 100;
        volumeFill.style.width = `${initialVolumePercent}%`;
        volumeHandle.style.right = `${100 - initialVolumePercent}%`;
    });
});
