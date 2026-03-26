# TermVibe Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd /workspace/group/termvibe
vercel
```

3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? (select your account)
   - Link to existing project? **N**
   - Project name: **termvibe**
   - Directory: **.**
   - Override settings? **N**

4. Your site will be live at: `https://termvibe.vercel.app`

### Method 2: GitHub Integration

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial TermVibe MVP"
git remote add origin https://github.com/veebeeyoukay/Termvibe.git
git push -u origin main
```

2. Go to [Vercel Dashboard](https://vercel.com/new)

3. Import your GitHub repository

4. Vercel will auto-detect Next.js and deploy

5. Your site will be live with automatic deployments on push

## Custom Domain Setup

1. In Vercel Dashboard, go to your project
2. Settings → Domains
3. Add `termvibe.com` and `www.termvibe.com`
4. Follow DNS instructions from Vercel
5. Wait for DNS propagation (usually 5-60 minutes)

## Environment Variables (Future)

When you add backend features, set environment variables in Vercel:

```
NEXT_PUBLIC_API_URL=https://api.termvibe.com
DATABASE_URL=your-database-url
ANTHROPIC_API_KEY=your-claude-api-key
```

## Performance Optimization

The MVP is already optimized for:
- ✓ Static generation where possible
- ✓ Image optimization (Next.js built-in)
- ✓ Font optimization (Inter via next/font)
- ✓ CSS optimization (Tailwind purging)
- ✓ PWA manifest for mobile installation

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## PWA Testing

Test PWA installation on mobile:

**iOS:**
1. Open Safari on iPhone
2. Visit your deployed URL
3. Tap Share icon
4. Tap "Add to Home Screen"
5. Name it "TermVibe"
6. Launch from home screen

**Android:**
1. Open Chrome on Android
2. Visit your deployed URL
3. Tap the "Install" prompt (or menu → "Install app")
4. Launch from home screen

## Monitoring

After deployment, monitor:
- Vercel Analytics (built-in)
- Google Analytics (add later)
- Plausible Analytics (privacy-friendly option)

## Next Steps After MVP Deploy

1. Create actual icon images (192x192 and 512x512 PNG)
2. Add service worker for offline support
3. Implement backend API for lesson progress
4. Integrate Claude API for real AI coaching
5. Add user authentication
6. Connect payment processing (Stripe)
7. Set up analytics tracking
