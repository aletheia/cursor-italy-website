# Cursor Italy Website

Welcome to the official website for **Cursor Italy**, Milan's premier community for AI-powered development with Cursor IDE.

## 🚀 About

Cursor Italy is a vibrant community of developers, creators, and curious minds shaping the future with AI. We host monthly meetups, workshops, and talks in Milano, focusing on Cursor - the AI-native IDE that's transforming how we build software.

### Community Features

- 🇮🇹 **Based in Milano** - Italy's tech hub
- 👥 **14+ Active Members** and growing
- 📅 **Monthly Events** with expert speakers
- 🎤 **Open CFP** via Sessionize
- 🏆 **Founded by Luca Bianchi** - Official Cursor Ambassador

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown-based CMS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```bash
cursor-italy-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── events/         # Events listing
│   │   ├── code-of-conduct/ # Community guidelines
│   │   ├── founder/        # Founder profile
│   │   └── ...
│   ├── components/         # Reusable React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   ├── Hero.tsx        # Homepage hero section
│   │   ├── EventCard.tsx   # Event display component
│   │   └── SponsorGrid.tsx # Sponsor showcase
│   ├── lib/                # Utilities and configurations
│   │   ├── markdown.ts     # Markdown processing
│   │   ├── types.ts        # TypeScript type definitions
│   │   └── config.ts       # Site configuration
│   └── utils/              # Helper functions
├── content/                # Markdown content files
│   ├── events/            # Event descriptions
│   ├── sponsors/          # Sponsor information
│   └── about/             # About pages content
├── public/
│   └── images/            # Static images
└── design/                # Design assets (existing)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cursor-italy-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Adding Events

Create a new markdown file in `content/events/` with the following structure:

```markdown
---
title: 'Event Title'
date: '2025-MM-DD'
startTime: '18:30'
endTime: '21:00'
timezone: 'CEST'
location: 'TBD'
locationUrl: ''
description: 'Brief event description'
image: '/images/events/event-image.jpg'
published: true
attendees: 0
maxAttendees: 50
registrationUrl: 'https://meetup.com/...'
tags: ['AI', 'Development', 'Cursor']
speakers:
  - name: 'Speaker Name'
    topic: 'Talk Title'
    bio: 'Speaker bio'
---

Full event description in markdown...
```

### Adding Sponsors

Create a new markdown file in `content/sponsors/` with:

```markdown
---
name: 'Sponsor Name'
tier: 'main' # main, gold, silver, bronze, community
logo: '/images/sponsors/sponsor-logo.png'
website: 'https://sponsor.com'
description: 'Brief description'
featured: true
order: 1
---

Full sponsor description...
```

### Updating About Content

Modify files in `content/about/`:

- `description.md` - Main about page content
- `founder.md` - Founder profile
- `code-of-conduct.md` - Community guidelines

## 🎨 Design System

### Colors

- **Primary**: Cursor Blue (`#007ACC`)
- **Milano Gradient**: Teal to Blue to Pink
- **Background**: Gray-50 for sections
- **Cards**: White with subtle shadows

### Components

- **Buttons**: Primary (blue) and Secondary (gray) variants
- **Cards**: Hover effects with gentle shadows
- **Typography**: Inter font family
- **Icons**: Lucide React icons

## 🔧 Configuration

### Site Settings

Update `src/lib/config.ts` to modify:

- Site title and description
- Social media links
- Contact information
- Navigation structure

### Social Platforms

Current integrations:

- **Meetup.com**: Main event platform
- **LinkedIn**: Professional networking
- **Lu.ma**: Event announcements
- **Sessionize**: Call for Papers (CFP)

## 📱 Features

### Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

### SEO Optimized

- Meta tags and Open Graph
- Structured data
- Optimized images
- Fast loading times

### Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader friendly
- Color contrast optimized

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Set environment variables** (if needed)
3. **Deploy** automatically on push to main

### Custom Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Start production server**

   ```bash
   npm start
   ```

## 📋 Content Guidelines

### Events

- Use clear, engaging titles
- Include all relevant details (time, location, speakers)
- Add compelling descriptions
- Use high-quality images

### Speakers

- Provide speaker bios and photos
- Include talk abstracts
- Link to speaker social profiles
- Respect speaker preferences

### Code of Conduct

- Maintain inclusive language
- Update regularly as community grows
- Ensure clear reporting procedures
- Provide multiple contact methods

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Content Contributions

- Event reports and photos
- Speaker profiles
- Community stories
- Technical articles

### Code Contributions

- Bug fixes
- Feature enhancements
- Performance improvements
- Accessibility improvements

## 📞 Contact

- **Founder**: Luca Bianchi (Cursor Ambassador)
- **Meetup**: [Cursor Italy Meetup](https://www.meetup.com/cursor-italy/)
- **LinkedIn**: [Follow us](https://linkedin.com/company/cursor-italy)
- **Email**: <organizers@cursor-italy.dev>

## 📄 License

This project is open source. Please see the LICENSE file for details.

## 🙏 Acknowledgments

- **Cursor** - Our main sponsor and the amazing IDE we love
- **Milano Tech Community** - For the warm welcome
- **All Speakers and Attendees** - For making our events special
- **Open Source Community** - For the tools and inspiration

---

## Built with ❤️ for the Italian developer community

_"The future of development is here, and it's powered by AI. Let's build it together."_ - Luca Bianchi
