# لا تشيل هم | Don't Worry - Video Downloader

<p align="center">
  <strong>حمّل فيديوهاتك المفضلة بسهولة وسرعة</strong><br>
  <em>Download your favorite videos easily and quickly</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React">
</p>

---

## Features

- **Multi-Platform Support**: TikTok, Douyin, Instagram, Twitter/X, YouTube, Facebook, Bilibili, Pinterest, Reddit, and more
- **Bilingual**: Arabic (RTL) and English interfaces
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **No Registration**: No account needed
- **Multiple Quality Options**: HD, SD, and Audio-only downloads
- **Download History**: Track your recent downloads locally
- **Proxy Download**: Bypass CORS restrictions for direct downloads
- **Responsive Design**: Works on all screen sizes

## Supported Platforms

| Platform | Status |
|----------|--------|
| TikTok / Douyin | ✅ (via TikWM API + yt-dlp) |
| YouTube | ✅ (via yt-dlp) |
| Twitter / X | ✅ (via yt-dlp) |
| Instagram | ✅ (via yt-dlp) |
| Facebook | ✅ (via yt-dlp) |
| Bilibili | ✅ (via yt-dlp) |
| Pinterest | ✅ (via yt-dlp) |
| Reddit | ✅ (via yt-dlp) |
| Vimeo / Twitch / Snapchat | ✅ (via yt-dlp) |

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Variables (Dark/Light themes)
- **Video Processing**: yt-dlp + TikWM API
- **i18n**: Custom AR/EN context system

## Getting Started

### Prerequisites

- Node.js 18+
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) installed and accessible

### Installation

```bash
# Clone the repository
git clone https://github.com/binnoma/dont-worry.git
cd dont-worry

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Install yt-dlp

```bash
# Using pip
pip install yt-dlp

# Or using brew (macOS)
brew install yt-dlp

# Or using apt (Ubuntu/Debian)
sudo apt install yt-dlp
```

> **Note**: Update the `YTDLP` path in `src/app/api/download/route.ts` and `src/app/api/resolve/route.ts` to match your yt-dlp installation path.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── download/route.ts      # Main download API (yt-dlp)
│   │   ├── resolve/route.ts       # Video resolver API
│   │   └── proxy-download/route.ts # Proxy download API
│   ├── globals.css                # CSS Variables & themes
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Main page
├── components/
│   ├── Header.tsx                 # Header with theme/language toggles
│   ├── VideoDownloader.tsx        # Main download component
│   └── Footer.tsx                 # Footer with credits
└── contexts/
    ├── I18nContext.tsx             # Arabic/English i18n system
    └── ThemeContext.tsx            # Dark/Light theme system
```

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/resolve` | POST | Resolve video URL and return metadata + download options |
| `/api/download` | POST/GET | Download video via yt-dlp (stream) |
| `/api/proxy-download` | POST | Proxy download to bypass CORS |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variable for yt-dlp path if needed
4. Deploy

### Self-Hosted

```bash
npm run build
npm start
```

## Credits

Made with ❤️ from UAE

Designed & Developed by [Binnoma](https://github.com/binnoma)

## License

MIT License
