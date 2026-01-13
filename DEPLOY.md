# Deployment Guide for $checkprice Landing Page

## Quick Deploy Options

### 🚀 Vercel (Fastest - Recommended)

1. **Via Vercel CLI:**
   ```bash
   cd ~/checkprice-website
   npx vercel --prod
   ```
   
2. **Via GitHub:**
   - Push to GitHub repo
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repo
   - Deploy!

3. **Result:**
   - Auto HTTPS
   - Global CDN
   - Custom domain support
   - Free tier available

### 🌐 Netlify

1. **Via Netlify CLI:**
   ```bash
   cd ~/checkprice-website
   npx netlify-cli deploy --prod
   ```

2. **Via Drag & Drop:**
   - Visit [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the entire folder
   - Done!

### 📦 Cloudflare Pages

1. **Via Wrangler:**
   ```bash
   cd ~/checkprice-website
   npx wrangler pages publish .
   ```

2. **Via Dashboard:**
   - Visit Cloudflare Pages
   - Connect GitHub repo
   - Deploy

### 🐙 GitHub Pages

1. **Setup:**
   ```bash
   cd ~/checkprice-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: main / (root)
   - Save

3. **Access:**
   - `https://YOUR_USERNAME.github.io/REPO_NAME/`

### ☁️ AWS S3 + CloudFront

1. **Upload to S3:**
   ```bash
   aws s3 sync ~/checkprice-website s3://YOUR_BUCKET_NAME/
   ```

2. **Configure S3:**
   - Enable static website hosting
   - Set index.html as index document

3. **Setup CloudFront:**
   - Create distribution
   - Point to S3 bucket
   - Enable HTTPS

## Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add your domain: `checkprice.com`
3. Add DNS records as shown:
   - Type: `A` → Value: Vercel IP
   - Type: `CNAME` → Value: `cname.vercel-dns.com`

### Netlify

1. Go to Domain Settings → Custom domains
2. Add domain
3. Update DNS:
   - Type: `CNAME` → Value: `YOUR_SITE.netlify.app`

## Pre-Deployment Checklist

- [ ] Test locally (open index.html in browser)
- [ ] Verify contract address is correct
- [ ] Check all links work (social media, trading)
- [ ] Test copy-to-clipboard functionality
- [ ] Verify mobile responsiveness
- [ ] Check image loads correctly
- [ ] Confirm no console errors
- [ ] Review all text for typos

## Post-Deployment Checklist

- [ ] Visit live site and test all features
- [ ] Test on mobile device
- [ ] Verify all external links work
- [ ] Test contract copy button
- [ ] Check page load speed
- [ ] Share link with team for review
- [ ] Update @checkprice Twitter with link
- [ ] Monitor analytics (if enabled)

## SEO Optimization (Optional)

### Add to index.html `<head>`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://checkprice.com/">
<meta property="og:title" content="$checkprice - The Future of Market Data">
<meta property="og:description" content="By @mert - Building a CoinMarketCap replacement with all markets in one place.">
<meta property="og:image" content="https://checkprice.com/public/checkprice-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://checkprice.com/">
<meta property="twitter:title" content="$checkprice - The Future of Market Data">
<meta property="twitter:description" content="By @mert - Building a CoinMarketCap replacement with all markets in one place.">
<meta property="twitter:image" content="https://checkprice.com/public/checkprice-image.jpg">
```

## Performance Tips

1. **Enable Compression:**
   - Vercel/Netlify do this automatically
   - For custom hosting, enable gzip/brotli

2. **Image Optimization:**
   - The provided image is already optimized
   - For additional images, use WebP format

3. **Caching:**
   - Static assets cached via CDN
   - Configured in vercel.json

## Troubleshooting

### Issue: Links don't work
- **Solution:** Check external links use `https://`
- Verify contract address in DexScreener/Jupiter URLs

### Issue: Copy button doesn't work
- **Solution:** Test in different browsers
- Check browser console for errors
- Ensure HTTPS (clipboard API requires secure context)

### Issue: Mobile layout broken
- **Solution:** Clear cache and reload
- Test in responsive mode in browser DevTools
- Verify Tailwind CSS CDN is loading

### Issue: Images don't load
- **Solution:** Check file path is correct
- Verify image uploaded to hosting
- Check file permissions

## Monitoring

After deployment, monitor:
- Page load speed (use Lighthouse)
- Broken links (use broken link checker)
- Mobile compatibility (use Google Mobile-Friendly Test)
- SSL certificate (ensure HTTPS works)

## Updating the Site

1. Make changes locally
2. Test in browser
3. Deploy:
   ```bash
   # Vercel
   npx vercel --prod
   
   # Netlify
   npx netlify-cli deploy --prod
   
   # GitHub Pages (commit & push)
   git add .
   git commit -m "Update content"
   git push
   ```

## Support

For issues or questions:
- Check README.md for project details
- Review Vercel/Netlify documentation
- Contact @mert for platform-related questions

---

**Note:** This is a static site with no backend or database. All updates require redeployment.
