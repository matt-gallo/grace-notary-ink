# Grace Notary Ink Website - Phase 2

**Version:** 2.0
**Created:** January 2026
**Built by:** ZING.work

---

## Project Overview

This is a complete rebuild of the Grace Notary Ink website based on Phase 2 strategy planning. The website is designed to convert urgency into action quickly, reducing friction and automating repetitive tasks.

### Primary Goals:
1. Turn urgency into action in under 10 seconds
2. Remove manual steps through automation
3. Protect Grace's time with smart calendar buffers
4. Create a "get it done now" experience, not a brochure

---

## Website Structure

### Pages Included:

1. **index.html** - Homepage
   - Urgency-driven hero section
   - Direct booking calendar embed
   - Trust signals (Google reviews)
   - Clear emergency contact

2. **services.html** - Services Page
   - Urgency-based copy
   - Service-specific blocks:
     - Loan & Title Documents
     - Power of Attorney
     - Wills & Estate Documents
     - Vehicle & Business Paperwork
     - After-Hours & Emergency
   - Clear CTAs throughout

3. **reviews.html** - Reviews Page
   - Embedded Google Reviews widget
   - Social proof and trust building
   - Direct link to Google Business Profile

4. **contact.html** - Contact Page
   - Backup path for people who refuse calendars
   - Contact form
   - Emergency contact prominence
   - Service area display

---

## Key Features

### 1. Simplified Navigation
- Home, Services, Reviews, Contact
- Persistent emergency phone number in header
- Mobile-responsive design

### 2. Urgency-Focused Hero
- New headline: "Need a document notarized today? We come to you."
- Two primary CTAs: "Get Your Document Signed Today" + "Emergency? Call Now"
- Trust signals visible immediately (5-star rating)

### 3. Embedded Calendar
- Homepage has booking calendar embedded directly
- No separate booking page required
- Includes buffer time protection (set in calendar platform)

### 4. Trust Elements
- Google review integration
- Clear service hours
- Veteran-owned badge
- Professional, clean design

---

## Phase 2 Changes from Original Site

### What Changed:
✅ Headline simplified to urgency + action
✅ Calendar embedded on homepage (not separate page)
✅ Emergency phone labeled clearly throughout
✅ Services page reorganized by use case, not document type
✅ All CTAs say "Get It Signed Today" instead of generic "Book Now"
✅ Reviews page set up for live Google feed
✅ Contact page simplified with urgency message

### What Stayed:
✅ Service area coverage (all Idaho counties)
✅ Business hours
✅ Core brand values (on-time, veteran-owned, detail-oriented)
✅ Professional disclaimer
✅ ZING.work branding

---

## Setup Instructions

### 1. Calendar Integration
The homepage and services pages have placeholder sections for calendar embeds.

**To add your calendar:**
1. Sign up for Calendly, Acuity, Square Appointments, or similar
2. Configure your booking settings (see AUTOMATION-SETUP.md)
3. Copy the embed code
4. Replace the placeholder in `index.html` at line ~270
5. Update services page CTAs to link to `#calendar` on homepage

### 2. Google Reviews Widget
The reviews page has a placeholder for your Google Reviews feed.

**To add reviews:**
1. Use a service like EmbedSocial, Elfsight, or Taggbox
2. Connect your Google Business Profile
3. Generate the widget embed code
4. Replace placeholder in `reviews.html` at line ~235

**Alternative:** Link directly to your Google Business Profile for reviews

### 3. Contact Form Backend
The contact form in `contact.html` currently has a basic JavaScript handler.

**To make it functional:**
1. Option A: Use a form service like Formspree, Basin, or Netlify Forms
2. Option B: Connect to your own backend API
3. Update the form `action` attribute and submission handler

### 4. Payment Integration
Set up payment links for booking automation:
1. Create Stripe, Square, or PayPal payment links
2. Add these links to your calendar confirmation emails
3. See AUTOMATION-SETUP.md for complete instructions

---

## Deployment Options

### Option 1: Stay on ZING.work Platform
- Upload files to ZING.work hosting
- Use ZING.work's built-in tools for updates
- Maintain existing domain connection

### Option 2: Self-Host
- Upload to any web hosting (Netlify, Vercel, etc.)
- Point domain DNS to new host
- Set up SSL certificate

### Option 3: Hybrid
- Keep certain pages on ZING.work
- Host new pages separately
- Use subdomains or path routing

---

## File Structure

```
Grace Notary Ink/
│
├── index.html              # Homepage (hero, calendar, trust signals)
├── services.html           # Services page (urgency-focused service blocks)
├── reviews.html            # Reviews page (Google reviews embed)
├── contact.html            # Contact page (form + contact info)
│
├── AUTOMATION-SETUP.md     # Complete automation guide
├── README.md               # This file
│
└── (future additions)
    ├── assets/             # Images, logos, icons
    ├── css/                # Separate stylesheets (optional)
    └── js/                 # Separate JavaScript (optional)
```

---

## Automation System

See **AUTOMATION-SETUP.md** for complete details on:
- Calendar booking setup
- Required booking fields
- Email automation sequences
- Payment integration
- Email list management
- Implementation checklist

---

## Browser Support

This website is built with modern, clean HTML5 and CSS3.

**Supported Browsers:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Design Philosophy

### Typography
- **Primary Font:** Inter (clean, modern, professional)
- **Fallbacks:** System fonts for fast loading

### Color Scheme
- **Primary:** Deep Blue (#1a365d) - Trust, professionalism
- **Secondary:** Medium Blue (#2c5282) - Action, reliability
- **Accent:** Red (#c53030) - Urgency, emergency
- **Neutral:** Grays for text and backgrounds

### Mobile-First
- All pages are fully responsive
- Touch-friendly buttons and links
- Readable font sizes on all devices

---

## Performance Optimization

- Minimal external dependencies (only Google Fonts)
- Inline CSS for fast loading
- No heavy JavaScript frameworks
- Optimized for Google PageSpeed

---

## SEO Considerations

Each page includes:
- Proper meta descriptions
- Open Graph tags for social sharing
- Structured data (Schema.org)
- Semantic HTML
- Fast load times

---

## What Happens Next

### Immediate (Week 1):
1. Set up calendar platform
2. Create basic confirmation emails
3. Add payment link
4. Test booking flow
5. Go live

### Short Term (Month 1):
1. Embed calendar on homepage
2. Set up Google Reviews widget
3. Connect contact form to backend
4. Launch email automation

### Ongoing:
1. Monitor booking conversion
2. Adjust calendar availability
3. Refine email copy based on response
4. Add testimonials and case studies as needed

---

## Support & Maintenance

**Website Updates:**
Contact ZING.work for changes to design, structure, or content.

**Calendar/Automation:**
Managed through your chosen platform (Calendly, etc.)

**Domain/Hosting:**
Handled by ZING.work or your hosting provider

**Content Updates:**
HTML can be edited directly for simple text changes

---

## Version History

### Version 2.0 (January 2026)
- Complete rebuild based on Phase 2 strategy
- New homepage with urgency-focused messaging
- Embedded calendar functionality
- Simplified navigation
- Automation-ready structure
- Mobile-responsive design
- Google Reviews integration

### Version 1.0 (Previous)
- Original ZING.work website
- Traditional service showcase
- Separate booking page
- Standard business site structure

---

## Credits

**Strategy & Planning:** ZING.work + Grace Notary Ink
**Website Design & Development:** ZING.work
**Content Strategy:** Phase 2 planning sessions
**Owner:** Grace Notary Ink

---

## License & Usage

This website is proprietary to Grace Notary Ink. All rights reserved.

Do not copy, distribute, or reuse without permission.

---

**Questions?**

Contact ZING.work for website support or Grace Notary Ink for business inquiries.

**Grace Notary Ink**
Phone: (208) 870-8576
Email: gracenotary.ink@gmail.com
Website: https://www.gracenotary-ink.com
