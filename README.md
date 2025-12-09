# LUMINA - Premium Film Production Studio Website

A luxury, cinematic film production studio website built with Next.js, Tailwind CSS, and Framer Motion. Features premium dark-themed design, smooth animations, parallax effects, and responsive layouts.

## Features

### 🎬 Cinematic Design
- Premium dark luxury theme with gold, silver, and neon blue accents
- Glassmorphism effects and layered depth
- Large, bold typography with elegant spacing
- Smooth scroll-triggered animations throughout

### ✨ Advanced Animations
- Framer Motion for all interactive elements
- Staggered grid animations
- Parallax scrolling effects
- Hover transitions and glow effects
- Fade-in, slide-in, and scale animations on viewport entry

### 📱 Responsive & Accessible
- Mobile-first design approach
- Fully responsive across all devices
- ARIA labels and semantic HTML
- Smooth scroll behavior
- Scroll-to-top button

### 📄 Three Premium Pages
1. **Homepage** - Hero section, latest productions, about preview, awards marquee, testimonials
2. **About Us** - Studio story, mission & vision, team showcase, timeline of milestones
3. **Contact** - Contact information grid, map embed, animated contact form

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Type Safety**: TypeScript
- **Production**: Vercel

## Project Structure

\`\`\`
app/
├── layout.tsx              # Root layout with dark theme
├── page.tsx                # Homepage
├── about/
│   └── page.tsx            # About Us page
└── contact/
    └── page.tsx            # Contact page

components/
├── navbar.tsx              # Responsive navigation
├── footer.tsx              # Footer with social links
├── motion-components.tsx   # Reusable animation wrappers
├── hero-section.tsx        # Homepage hero
├── latest-movies-section.tsx
├── about-preview-section.tsx
├── awards-marquee-section.tsx
├── testimonials-carousel.tsx
├── about-hero-banner.tsx
├── about-story-section.tsx
├── mission-vision-section.tsx
├── team-section.tsx
├── timeline-section.tsx
├── contact-hero.tsx
├── contact-info-grid.tsx
├── contact-map.tsx
├── contact-form.tsx
└── scroll-to-top.tsx       # Scroll to top button

globals.css                # Dark luxury theme & animations
\`\`\`

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Colors
Edit the CSS variables in `app/globals.css`:
- `--background`: Main dark background
- `--accent-gold`: Primary accent color
- `--accent-neon`: Secondary accent color
- `--accent-silver`: Tertiary accent color

### Typography
Font configuration is in `app/layout.tsx`. Currently uses Geist family.

### Content
Replace placeholder text and images in component files:
- Update company name and contact info in `components/footer.tsx`
- Customize team members in `components/team-section.tsx`
- Update timeline milestones in `components/timeline-section.tsx`
- Modify testimonials in `components/testimonials-carousel.tsx`

## Performance Optimizations

- Image optimization with Next.js Image component
- Viewport-based animation triggering (only animate when visible)
- CSS animations for smooth 60fps performance
- Minified Tailwind CSS with v4
- Optimized icon imports from lucide-react

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

Deploy easily to Vercel:

\`\`\`bash
npm run build
npm start
\`\`\`

Or push to GitHub and connect to Vercel for automatic deployments.

## Animation Details

### Scroll-Triggered Animations
- `FadeInUp`: Fade + translate up on scroll
- `SlideInLeft/Right`: Slide from sides with fade
- `Parallax`: Background movement effect
- `StaggerContainer`: Children animate in sequence

### Hover Effects
- Scale and glow on product cards
- Color transitions on links
- Shadow elevation on interactive elements

### Page Load Animations
- Staggered title text animation
- Cascading content reveals
- Smooth navigation transitions

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Focus visible outlines
- Screen reader optimized

## License

Commercial use allowed. Modify as needed for your brand.

## Support

For questions or issues, contact: hello@lumina.studio
