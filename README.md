# GamingForAustralia

GamingForAustralia is a modern stream team website built using PHP and the Bulma CSS framework, featuring a dark gaming theme and professional layout designed for Australian gaming content creators.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Content Management](#content-management)

## Introduction

GamingForAustralia is a comprehensive website dedicated to an Australian gaming stream team, providing information about the team members, their gaming content, podcast episodes, and YouTube videos. The site emphasizes community building and showcases the unique Australian gaming culture.

## Features

### Core Pages
- **Home page (index.php)**: Welcoming introduction with comprehensive "What is a Stream Team?" explanation and call-to-action buttons
- **About page (about.php)**: Team member profiles with uniform card layouts and profile images
- **Videos page (videos.php)**: Dynamic YouTube playlist showcase with cover images and streaming links
- **Podcast page (podcast.php)**: Custom audio player with secure streaming and XML metadata integration

### Design & User Experience
- **Responsive design**: Built with Bulma CSS framework for seamless cross-device compatibility
- **Dark gaming theme**: Custom color scheme (#1A1A1A background, #4DB10C primary, #BC050A secondary)
- **Professional layout**: Consistent branding with centralized navigation and footer
- **Accessibility**: Proper alt tags, semantic HTML, and keyboard navigation support

### Technical Features
- **Centralized layout system**: Single PHP template file using output buffering for maintainable code
- **Dynamic content generation**: PHP arrays and foreach loops for easy content management
- **Custom audio player**: Secure podcast streaming with limited download controls
- **Cache busting**: CSS versioning with unique IDs to ensure fresh content delivery
- **SEO optimized**: Proper meta tags, page titles, and descriptions for each page

### Content Management
- **YouTube integration**: Easy playlist management through PHP arrays
- **Podcast streaming**: Secure audio delivery via dedicated streaming URLs
- **Team profiles**: Simple array-based team member management
- **Image optimization**: Organized asset structure with proper sizing and alt text

## Technology Stack

- **Backend**: PHP 8+ with fully centralized layout system (single template file)
- **Frontend**: Bulma CSS 1.0.4 for modern, responsive design
- **Icons**: FontAwesome 7.0.0 for comprehensive icon library
- **JavaScript**: Vanilla JavaScript (no jQuery dependency) for custom audio player and navigation
- **Architecture**: Clean MVC-inspired structure with minimal file dependencies
- **Audio Streaming**: Custom secure audio player with XML metadata parsing

## Project Structure

```
GamingForAustralia/
├── layout.php             # Centralized template system
├── index.php              # Home page with stream team introduction
├── about.php              # Team member profiles
├── podcast.php            # Podcast episodes with custom player
├── videos.php             # YouTube playlist showcase
├── .gitattributes         # Git configuration file
├── README.md              # Project documentation
├── css/
│   └── app.css            # Custom Bulma theme and component styles
├── js/
│   └── app.js             # Navigation and custom audio player logic
├── img/
│   ├── favicon/           # Multi-format favicon collection
│   │   ├── 16x16.png         # 16x16 favicon
│   │   ├── 32x32.png         # 32x32 favicon
│   │   ├── 48x48.png         # 48x48 favicon
│   │   ├── 64x64.png         # 64x64 favicon
│   │   ├── apple-touch-icon.png # iOS Safari icon
│   │   ├── favicon.ico       # Legacy ICO format
│   │   └── favicon.png       # Standard PNG favicon
│   ├── profile/           # Team member profile images
│   │   ├── Darkness.png      # FallenAngelDarkness profile image
│   │   ├── gfaUnDead.png     # gfaUnDead profile image
│   │   ├── MrBanyanyaa.png   # MrBanyanyaa profile image
│   │   └── TheFez.png        # TheFez profile image
│   ├── featured-videos/   # YouTube playlist cover images
│   │   ├── APlagueTaleRequiem.jpg    # A Plague Tale: Requiem cover
│   │   ├── DetroitBecomeHuman.jpg    # Detroit: Become Human cover
│   │   ├── LifeIsStrange2.jpg        # Life is Strange 2 cover
│   │   ├── LifeIsStrangeTrueColours.jpg # Life Is Strange: True Colors cover
│   │   └── QuantumBreak.jpg          # Quantum Break cover
│   ├── logo-upscaled.jpg  # High resolution logo (JPEG)
│   ├── logo-upscaled.png  # High resolution logo (PNG)
│   ├── logo.jpg           # Standard logo (JPEG)
│   └── logo.png           # Standard logo (PNG, used in navbar)
└── .git/                  # Git repository metadata

Podcasts/ (External Media Directory)
├── 2016-11-04_episode_1.mp3    # Episode 1 audio file
├── 2016-11-04_episode_1.xml    # Episode 1 metadata
├── 2016-11-04_episode_2.mp3    # Episode 2 audio file
├── 2016-11-04_episode_2.xml    # Episode 2 metadata
├── 2016-11-04_episode_3.mp3    # Episode 3 audio file
├── 2016-11-04_episode_3.xml    # Episode 3 metadata
├── 2016-11-04_episode_4.mp3    # Episode 4 audio file
├── 2016-11-04_episode_4.xml    # Episode 4 metadata
├── 2016-11-04_episode_5.mp3    # Episode 5 audio file
├── 2016-11-04_episode_5.xml    # Episode 5 metadata
├── 2016-11-04_episode_6.mp3    # Episode 6 audio file
├── 2016-11-04_episode_6.xml    # Episode 6 metadata
├── 2016-11-04_episode_7.mp3    # Episode 7 audio file
├── 2016-11-04_episode_7.xml    # Episode 7 metadata
├── 2016-11-04_episode_8.mp3    # Episode 8 audio file
├── 2016-11-04_episode_8.xml    # Episode 8 metadata
├── 2020-10-10-gfa_radio_1__this_is_not_a_podcast_.mp3  # GFA Radio Episode 1 audio
└── 2020-10-10-gfa_radio_1__this_is_not_a_podcast_.xml  # GFA Radio Episode 1 metadata
```

## File Overview

### Core PHP Files
- **index.php**: Homepage featuring stream team explanation, community information, and navigation buttons
- **about.php**: Team member showcase with profile cards and descriptions
- **videos.php**: YouTube playlist gallery with cover images and streaming links
- **podcast.php**: Podcast episode listing with custom secure audio player and XML metadata
- **layout.php**: Master template containing HTML structure, navigation, and footer

### Styling & Assets
- **css/app.css**: Custom Bulma theme with dark gaming colors, audio player styles, and responsive layouts
- **js/app.js**: Vanilla JavaScript for navbar functionality and comprehensive custom audio player controls
- **img/**: Organized image assets including logos, favicons, profile pictures, and video covers

### Configuration Files
- **.gitattributes**: Git configuration for line endings and file handling
- **.git/**: Git repository metadata and version control information
- **README.md**: Comprehensive project documentation

### External Media Directory
- **Podcasts/**: External directory containing podcast audio files and XML metadata
  - **Audio Files (.mp3)**: Streaming audio content served via https://podcasts.gamingforaustralia.com.au/
  - **Metadata Files (.xml)**: Episode information including titles, descriptions, duration, and author details
  - **File Structure**: Each episode has both an MP3 audio file and corresponding XML metadata file

### Key Features by File
- **layout.php**: Centralized template system, CSS cache busting with unique IDs, responsive navigation
- **podcast.php**: XML metadata parsing, secure streaming URLs, custom audio player integration
- **videos.php**: Dynamic playlist generation, YouTube integration, responsive card layouts
- **about.php**: Team member management through PHP arrays, uniform card heights
- **css/app.css**: Dark theme implementation, custom audio player styling, Bulma framework customizations
- **js/app.js**: Mobile navigation burger menu, comprehensive audio player with security features

## Content Management

### Adding New Team Members
Edit the `$profiles` array in `about.php`:
```php
[
    'name' => 'Username',
    'description' => 'Profile description',
    'image' => 'img/profile/username.png'
]
```

### Adding New YouTube Playlists
Edit the `$playlists` array in `videos.php`:
```php
[
    'title' => 'Game Title',
    'subtitle' => 'Series Description',
    'description' => 'Detailed description',
    'image' => 'img/featured-videos/GameTitle.jpg',
    'playlist_url' => 'https://www.youtube.com/playlist?list=PLAYLIST_ID'
]
```

### Adding New Podcast Episodes
Edit the `$episodes` array in `podcast.php`:
```php
[
    'date' => 'Episode Date',
    'mp3' => $stream_url . '/episode_file.mp3',
    'xml' => $media_path . '/episode_metadata.xml'
]
```
