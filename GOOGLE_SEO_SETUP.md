# Google Search Console Setup Guide

## Step 1: Google Search Console mein Domain Add karein

1. **Google Search Console mein jayein:**
   - https://search.google.com/search-console par jayein
   - Google account se login karein

2. **Property Add karein:**
   - "Add Property" button par click karein
   - "URL prefix" select karein
   - Domain enter karein: `https://stratgenai.in`
   - "Continue" click karein

3. **Domain Verification:**
   - Google verification code milega
   - **Option 1: HTML Tag (Easiest)**
     - HTML tag copy karein
     - `app/layout.tsx` mein `<head>` section mein add karein
   - **Option 2: DNS Record (Recommended)**
     - GoDaddy DNS mein TXT record add karein
     - Google ka verification code add karein

## Step 2: Sitemap Submit karein

1. Google Search Console mein:
   - Left sidebar se "Sitemaps" select karein
   - "Add a new sitemap" par click karein
   - Enter karein: `https://stratgenai.in/sitemap.xml`
   - "Submit" click karein

## Step 3: URL Inspection (Indexing Request)

1. Google Search Console mein:
   - Top search bar mein "Inspect any URL" par click karein
   - Enter karein: `https://stratgenai.in`
   - "Request Indexing" button par click karein
   - Important pages ke liye repeat karein:
     - `https://stratgenai.in`
     - `https://stratgenai.in/services`
     - `https://stratgenai.in/contact`
     - `https://stratgenai.in/ai-maturity-model`

## Step 4: Google Analytics (Optional but Recommended)

1. **Google Analytics Setup:**
   - https://analytics.google.com par jayein
   - Property create karein
   - Measurement ID copy karein
   - `app/layout.tsx` mein Google Analytics script add karein

## Step 5: Wait for Indexing

- Google indexing mein 1-2 weeks lag sakte hain
- Regular check karein Google Search Console mein
- "Coverage" section mein indexing status dekhein

## Step 6: SEO Best Practices (Already Implemented)

✅ **Metadata:** Title, description, keywords already set  
✅ **Structured Data:** Organization schema already added  
✅ **Sitemap:** Created at `/sitemap.xml`  
✅ **Robots.txt:** Created at `/robots.txt`  
✅ **Open Graph:** Social media sharing tags  
✅ **Canonical URLs:** Set for all pages  

## Quick Checklist

- [ ] Google Search Console property add kiya
- [ ] Domain verify kiya
- [ ] Sitemap submit kiya (`/sitemap.xml`)
- [ ] Main pages ke liye indexing request kiya
- [ ] Google Analytics setup kiya (optional)
- [ ] 1-2 weeks wait kiya indexing ke liye

## Important URLs

- **Sitemap:** https://stratgenai.in/sitemap.xml
- **Robots.txt:** https://stratgenai.in/robots.txt
- **Google Search Console:** https://search.google.com/search-console

## Tips for Better Rankings

1. **Regular Content Updates:** Website content regularly update karein
2. **Backlinks:** Other websites se links build karein
3. **Social Media:** LinkedIn, Twitter par share karein
4. **Local SEO:** Google Business Profile create karein
5. **Page Speed:** Website fast rakhein (Vercel automatically handles this)

## Expected Timeline

- **Initial Indexing:** 1-2 weeks
- **First Rankings:** 2-4 weeks
- **Better Rankings:** 1-3 months (with regular updates)

