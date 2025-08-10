# GamingForAustralia

GamingForAustralia is a modern stream team website built using PHP and the Bulma CSS framework, featuring a dark gaming theme and professional layout designed for Australian gaming content creators.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Installation](#installation)
- [Contributing](#contributing)

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
├── index.php              # Home page with stream team introduction
├── about.php              # Team member profiles
├── videos.php             # YouTube playlist showcase
├── podcast.php            # Podcast episodes with custom player
├── layout.php             # Centralized template system
├── css/
│   └── app.css            # Custom Bulma theme and component styles
├── js/
│   └── app.js             # Navigation and custom audio player logic
├── img/
│   ├── favicon/           # Multi-format favicon collection
│   ├── profile/           # Team member profile images
│   ├── featured-videos/   # YouTube playlist cover images
│   └── logo files         # Brand logos and assets
└── README.md              # Project documentation
```

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

## Installation

1. Clone the repository to your web server
2. Ensure PHP 8+ is installed and configured
3. Configure your web server to serve PHP files
4. Update streaming URLs in `podcast.php` if needed
5. Add your content images to appropriate directories
6. Customize content arrays in each PHP file

## Contributing

This project follows modern PHP best practices and emphasizes:
- Security through `htmlspecialchars()` output escaping
- Maintainability through centralized layout systems
- Performance through efficient asset loading and caching
- Accessibility through semantic HTML and proper ARIA labels

For contributions, please maintain the existing code style and ensure all dynamic content is properly escaped for security.
