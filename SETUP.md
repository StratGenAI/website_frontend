# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Adding Founder Information

1. **Add Founder Photos**
   - Place images in `public/founders/` folder
   - Name them: `founder1.jpg`, `founder2.jpg`, `founder3.jpg`
   - Recommended size: 400x400px (square images work best)

2. **Update Founder Details**
   - Open `components/sections/FoundersPanel.tsx`
   - Update the `founders` array with:
     - Actual names
     - Roles (CEO, CTO, CPO, etc.)
     - Bio descriptions
     - Email addresses
     - LinkedIn and GitHub URLs

3. **Uncomment Image Code**
   - In `FoundersPanel.tsx`, uncomment the Image component code
   - Make sure to import Next.js Image component at the top

## Customization

### Colors
- Edit `tailwind.config.js` to change color scheme
- Main gradients: Blue (#0ea5e9) and Pink (#ec4899)

### Content
- All content is in component files in `components/sections/`
- Update text directly in these files

### Styling
- Global styles: `app/globals.css`
- Component-specific styles: Inline Tailwind classes

## Production Build

```bash
npm run build
npm start
```

## Deploy

The website is ready to deploy on:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform



