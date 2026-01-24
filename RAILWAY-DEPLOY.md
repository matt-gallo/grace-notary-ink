# Railway Deployment Guide - Grace Notary Ink

Quick guide to deploy this website to Railway.

---

## Prerequisites

- Railway account (free tier works fine)
- GitHub account (or GitLab/Bitbucket)
- This repository pushed to GitHub

---

## Option 1: Deploy from GitHub (Recommended)

### Step 1: Push to GitHub

If you haven't already:

```bash
# Create a new repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/grace-notary-ink.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Choose your `grace-notary-ink` repository
6. Railway will auto-detect the configuration and deploy

### Step 3: Configure Domain

1. In your Railway project, click **"Settings"**
2. Under **"Domains"**, click **"Generate Domain"** for a free Railway domain
3. OR click **"Custom Domain"** to add your own domain:
   - Enter: `gracenotary-ink.com` or `www.gracenotary-ink.com`
   - Railway will show you DNS records to add at your domain registrar
   - Add the CNAME record to your DNS
   - Wait 5-10 minutes for SSL to activate

---

## Option 2: Deploy via Railway CLI

### Step 1: Install Railway CLI

```bash
npm install -g @railway/cli
```

### Step 2: Login

```bash
railway login
```

### Step 3: Initialize and Deploy

```bash
cd /path/to/grace-notary-ink
railway init
railway up
```

### Step 4: Open Deployment

```bash
railway open
```

---

## What's Configured

The following files handle Railway deployment:

- **`package.json`** - Defines the Node.js project and start command
- **`railway.json`** - Railway-specific configuration
- **`nixpacks.toml`** - Build configuration (uses Node 20)
- **`.gitignore`** - Excludes node_modules from deployment

Railway will:
1. Detect this is a Node.js project
2. Run `npm install` to install the `serve` package
3. Run `npm start` which serves static files on port 3000
4. Provide a public URL

---

## Environment Variables

None required for this static site deployment.

If you add backend functionality later, you can add env vars in:
- Railway Dashboard → Your Project → Variables

---

## Custom Domain Setup (Detailed)

### If you own gracenotary-ink.com:

1. **In Railway:**
   - Project → Settings → Domains
   - Click "Custom Domain"
   - Enter: `www.gracenotary-ink.com` (or without www)

2. **In your Domain Registrar (GoDaddy, Namecheap, etc.):**
   - Add a CNAME record:
     - **Host:** `www` (or `@` for root domain)
     - **Points to:** `[your-project].up.railway.app` (Railway provides this)
     - **TTL:** Automatic or 3600

3. **Wait for DNS propagation** (5-30 minutes)

4. **SSL Certificate:** Railway auto-generates via Let's Encrypt

---

## Post-Deployment Checklist

After deploying:

- [ ] Test the live URL
- [ ] Verify calendar selector shows/hides calendars correctly
- [ ] Test booking flow on 30-min calendar
- [ ] Test booking flow on 60-min calendar
- [ ] Verify GHL receives bookings
- [ ] Check mobile responsiveness
- [ ] Confirm custom domain SSL works (https://)
- [ ] Update Google Business Profile with new site URL if changed

---

## Updating the Site

Whenever you make changes:

```bash
git add .
git commit -m "Your update message"
git push
```

Railway automatically redeploys when you push to the connected branch.

---

## Troubleshooting

### Deployment fails:
- Check Railway build logs in the dashboard
- Verify `package.json` is valid JSON
- Ensure all HTML files are committed to Git

### Site shows 404:
- Railway should serve `index.html` by default
- Check that files are in the root directory, not a subfolder

### Calendars not loading:
- Check browser console for errors
- Verify GHL iframe URLs are correct
- Ensure GHL script `form_embed.js` loads (check Network tab)

### Domain not working:
- Verify DNS CNAME record is correct
- Wait up to 48 hours for DNS propagation (usually much faster)
- Check Railway dashboard for domain verification status

---

## Support

**Railway Issues:**
- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway

**Website Issues:**
- Contact ZING.work (your dev team)

**GHL Calendar Issues:**
- Check GHL dashboard → Calendars
- Verify calendars are published/active
- Test embed codes directly in a blank HTML file

---

## Cost

**Railway Free Tier:**
- $5 free credit per month
- 500 hours of usage
- This static site uses minimal resources

**Expected cost:** $0-5/month for a low-traffic notary site.

If traffic increases significantly, Railway will email you before charging.

---

**Last Updated:** January 2026
**Prepared by:** ZING.work
