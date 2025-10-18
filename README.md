# School of Social Change (SOSC) Website

A comprehensive website for the School of Social Change, built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### Pages Implemented
1. **Homepage (Why We Exist)** - `/`
   - Hero section with mission statement
   - Education challenge statistics
   - Root causes analysis (fishbone diagram style)
   - Our approach (A, B, C framework)
   - Theory of change visualization
   - Newsletter signup and social media links

2. **About Us (Who We Are)** - `/about`
   - Founding aspiration
   - Vision, mission, and values
   - Goals and objectives
   - Team sections (founder, board, advisory panel)

3. **Programs (What We Do)** - `/programs`
   - **Impart**: Teacher training programs with signup forms
   - **Deetox**: Counselling and coaching services
   - **Foresight**: Career guidance platform (launching Jan 26, 2025)
   - **Policy Research**: Knowledge products and research
   - **Citizens of Chennai**: Civic movement participation

4. **Get Involved** - `/get-involved`
   - Donation system with payment gateway setup
   - Volunteer opportunities with application forms
   - Career opportunities
   - Contact information and enquiry forms

5. **Blog** - `/blog`
   - Content management system for easy editing
   - Categories and tags
   - Featured posts
   - Individual blog post pages
   - Newsletter signup

### Key Features
- **Content Management**: JSON-based system for easy text editing without code changes
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Payment Integration**: Ready for payment gateway integration (Razorpay, Stripe)
- **Form Management**: Reusable form components for signups and inquiries
- **SEO Optimized**: Meta tags, structured content, proper heading hierarchy
- **Accessibility**: WCAG compliant design and navigation
- **Performance**: Optimized images, lazy loading, efficient code splitting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production
```bash
npm run build
npm start
```

## 📝 Content Management

### Easy Text Editing (No Code Required)
The website uses a JSON-based content management system. See `CONTENT_EDITING_GUIDE.md` for detailed instructions.

**Main content files:**
- `content/site-content.json` - All website content
- `content/blog-posts.json` - Blog posts

**What you can edit:**
- All text content (titles, descriptions, paragraphs)
- Blog posts (add, edit, delete)
- Team member information
- Program descriptions
- Contact information
- Social media links
- Statistics and numbers

### Adding New Blog Posts
1. Open `content/blog-posts.json`
2. Add a new post object:
```json
{
  "id": 6,
  "title": "Your Blog Post Title",
  "excerpt": "Short description",
  "content": "Full blog post content...",
  "author": "Author Name",
  "publishDate": "2025-01-20",
  "category": "Programs",
  "tags": ["education", "training"],
  "featured": false
}
```

## 🎨 Design System

### Colors
- Primary Blue: `#2563eb`
- Purple: `#7c3aed`  
- Green: `#059669`
- Orange: `#ea580c`
- Gray shades for text and backgrounds

### Typography
- Font: Poppins (Google Fonts)
- Weights: 300, 400, 500, 600, 700

### Components
- Navigation with mobile menu
- Footer with newsletter signup
- Reusable form components
- Payment buttons (ready for gateway integration)
- Blog post cards
- Statistics displays
- Team member cards

## 🔧 Technical Stack

- **Framework**: Next.js 15.5.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Content**: JSON-based CMS
- **Icons**: Heroicons (SVG)
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Hosting
1. Build the project: `npm run build`
2. Upload the `out` folder to your hosting provider

## 📋 Next Steps

### Payment Integration
To enable donations and payments:
1. Sign up for Razorpay or Stripe
2. Add API keys to environment variables
3. Update `components/PaymentButton.tsx` with real integration
4. Test thoroughly before going live

### Form Integration
To handle form submissions:
1. Set up a backend service (Node.js, Python, etc.) or use services like:
   - Netlify Forms
   - Formspree
   - EmailJS
2. Update form components to submit to your endpoint

### Email Newsletter
To enable newsletter signup:
1. Choose email service (Mailchimp, ConvertKit, etc.)
2. Update footer component with API integration
3. Set up email templates and automation

### Analytics
Add Google Analytics or similar:
1. Create GA account
2. Add tracking code to layout
3. Set up conversion tracking for donations and signups

## 📁 Project Structure

```
sosc/
├── app/                    # Next.js app directory
│   ├── about/page.tsx     # About page
│   ├── blog/              # Blog pages
│   ├── get-involved/page.tsx
│   ├── programs/page.tsx
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── PaymentButton.tsx
├── content/              # Content management
│   ├── site-content.json
│   └── blog-posts.json
├── public/               # Static assets
└── CONTENT_EDITING_GUIDE.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical questions or support:
- Check the content editing guide first
- Review this README
- Contact the development team

## 📄 License

This project is proprietary to the School of Social Change (SOSC).

---

**School of Social Change** - Transforming Education for a Better Tomorrow
