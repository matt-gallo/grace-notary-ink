# GHL Review Request Automation Setup

Complete guide to automate Google review requests in GoHighLevel.

---

## Brenda's Google Review Link

**Direct Review Link:**
```
https://g.page/r/CeZ-T5d_sTrwEAI/review
```

**View Reviews Link (public profile):**
```
https://g.page/r/CeZ-T5d_sTrwEAI
```

**Current Stats:**
- ⭐ 5.0 stars
- 267 reviews
- 718 monthly views

---

## 1. Email Template for GHL Workflow

### Post-Service Follow-Up Email (Send 1 Day After Appointment)

**Subject Line:** Thank you from Grace Notary Ink

**Email Body:**

```
Hi {{contact.first_name}},

Thank you for choosing Grace Notary Ink for your notarization needs.

We hope everything went smoothly!

If you were satisfied with our service, would you mind leaving a quick review? It helps other people in stressful situations find trustworthy notary services.

👉 Leave a Review: https://g.page/r/CeZ-T5d_sTrwEAI/review

Need notary services again? You can book anytime at:
https://www.gracenotary-ink.com

Thanks again,
Grace Notary Ink
(208) 870-8576
gracenotary.ink@gmail.com
```

---

## 2. SMS Template for GHL Workflow

### Text Message Version (Send 1 Day After Appointment)

```
Hi {{contact.first_name}}, thanks for choosing Grace Notary Ink! If you had a good experience, we'd really appreciate a quick review: https://g.page/r/CeZ-T5d_sTrwEAI/review

Need us again? Book at gracenotary-ink.com or call (208) 870-8576
```

**Character count:** ~240 characters (within SMS limits)

---

## 3. GHL Workflow Setup

### Workflow Name: "Post-Service Review Request"

**Trigger:**
- Contact completes appointment (calendar event ends)
- OR Tag added: "appointment-completed"
- OR Opportunity stage changed to: "Completed"

**Wait Step:**
- Wait 24 hours after trigger

**Action 1: Send Email**
- Template: "Post-Service Follow-Up"
- Use the email template above

**Wait Step (Optional):**
- Wait 3 days
- Only continue if no review received (manual check or tag-based)

**Action 2: Send SMS Reminder (Optional)**
- Template: "Review Request Reminder"
- Only if they didn't leave a review yet

---

## 4. Alternative: Manual Review Link Sharing

If you want to manually share the link occasionally:

**For Exceptional Service:**
Send via SMS right after completing the appointment:

```
Hi {{contact.first_name}}, so glad we could help you today! If you have a moment, we'd love a quick Google review: https://g.page/r/CeZ-T5d_sTrwEAI/review

Thanks again! - Brenda
```

---

## 5. QR Code for In-Person Review Requests

You can generate a QR code that links to the review page.

**Steps:**
1. Go to a QR code generator (qr-code-generator.com, qrcode-monkey.com, etc.)
2. Paste the review link: `https://g.page/r/CeZ-T5d_sTrwEAI/review`
3. Download the QR code image
4. Print it on business cards or show it on your phone after appointments

**Use case:**
- "If you're happy with the service, scan this for a quick review!"
- Add to printed receipts or thank-you cards

---

## 6. Tracking Review Success

### In GHL, Create Custom Fields:

**Field 1:** `review_requested`
- Type: Checkbox
- Auto-check when workflow sends review request

**Field 2:** `review_received`
- Type: Checkbox
- Manually check when you see a new review come in

**Field 3:** `review_date`
- Type: Date
- Track when the review was left

### Why track this?
- Know which clients left reviews
- Follow up with thank-you messages to reviewers
- Measure conversion rate (appointments → reviews)

---

## 7. Google Business Profile Optimization Checklist

To maximize the impact of reviews, ensure her GBP is fully optimized:

### **Basic Info:**
- ✅ Business Name: Grace Notary INK
- ✅ Phone: (208) 870-8576
- ⚠️ Website: Update to new Railway URL when deployed
- ✅ Category: Notary Public (primary)
- ➕ Add: Mobile Notary Service (secondary category)

### **Hours:**
Update to match calendar availability:
- Monday: 6:00 AM – 11:00 PM
- Tuesday: 6:00 AM – 8:00 AM, 5:30 PM – 11:00 PM
- Wednesday: 6:00 AM – 11:00 PM
- Thursday: 6:00 AM – 11:00 PM
- Friday: 6:00 AM – 11:00 PM
- Saturday: 6:00 AM – 11:00 PM
- Sunday: 2:00 PM – 11:00 PM

### **Service Area:**
List ALL Idaho counties served:
- Ada County
- Canyon County
- Elmore County
- Gem County
- Owyhee County
- Payette County
- Boise County
- Valley County
- Washington County
- (Add others as needed)

### **Services:**
Explicitly list these as individual services in GBP:
- Loan Signing Services
- Mortgage Notarization
- Power of Attorney
- Wills & Estate Documents
- Vehicle Title Transfer
- Business Documents
- Mobile Notary Service
- After-Hours Notary
- Emergency Notary Service

### **Description:**
Optimize with keywords:

**Suggested Description:**
```
Grace Notary Ink provides trusted mobile notary services throughout Idaho. We come to your home, office, hospital, or care facility for loan signings, power of attorney, wills, estate documents, vehicle transfers, and more. Available 7 days a week including after-hours and emergency appointments. Veteran-owned, licensed, and bonded. Serving Ada County, Canyon County, and surrounding Idaho areas since 2021.
```

### **Photos:**
Add:
- Professional headshot of Brenda
- Action shots (notarizing documents, meeting clients)
- Logo/branding images
- Vehicle with business branding (if applicable)
- Office setup (if applicable)

**Goal:** At least 10-15 high-quality photos

### **Posts:**
Post monthly updates:
- Weekend availability
- After-hours service reminders
- Holiday hours
- New service offerings
- Community involvement

---

## 8. Review Response Strategy

**Respond to EVERY review** (even just a quick thank you):

### For Positive Reviews:
```
Thank you so much, [Name]! We're glad we could help you with your [service type]. We're here anytime you need notary services. - Grace Notary Ink
```

### For Negative Reviews (if any):
```
Hi [Name], thank you for your feedback. We're sorry your experience didn't meet expectations. Please reach out to us at (208) 870-8576 or gracenotary.ink@gmail.com so we can make this right. - Grace Notary Ink
```

**Why respond?**
- Shows you care about customer experience
- Improves SEO ranking
- Builds trust with potential clients reading reviews

---

## 9. Integration with Website

The website now includes:

### Homepage (index.html):
- ⭐ 5.0 star rating linked to Google reviews
- Click takes users to her Google Business Profile
- Shows "267+ satisfied clients"

### Reviews Page (reviews.html):
- Prominent "Leave a Google Review" CTA button
- Direct link to review form
- Link to view all reviews on Google
- Clean, professional design

### All Links Updated:
- Review link: `https://g.page/r/CeZ-T5d_sTrwEAI/review`
- Profile link: `https://g.page/r/CeZ-T5d_sTrwEAI`

---

## 10. Best Practices

### Timing:
- **Best time to ask:** 24 hours after successful appointment
- **Don't ask too soon:** Client needs time to reflect
- **Don't wait too long:** After 3-4 days, they forget details

### Frequency:
- Ask once per client per service
- If they use you multiple times, you can ask again after 6+ months

### Tone:
- Keep it friendly and casual
- Don't pressure or guilt-trip
- Make it optional ("if you're satisfied...")

### Incentives:
- **Don't offer discounts for reviews** (violates Google's policy)
- Instead: "Your review helps others in need find us"

### Follow-Up:
- If they leave a review, send a personal thank-you message
- Consider adding them to a "VIP client" tag in GHL

---

## 11. Review Volume Goals

**Current:** 267 reviews (excellent!)

**Goal:** Maintain 5.0 rating + steady growth

**Target:** Add 10-15 reviews per month

**How to achieve:**
- Automated follow-up emails (50% response rate = ~10 reviews/month if doing 20 appointments)
- Exceptional service (leads to unsolicited reviews)
- Consistent ask after every appointment

---

## 12. Monitoring & Maintenance

### Weekly:
- Check for new reviews in Google Business Profile
- Respond to all new reviews
- Update GHL custom fields for review tracking

### Monthly:
- Review automation performance (email open rates, click rates)
- Adjust timing or messaging if needed
- Post an update to Google Business Profile

### Quarterly:
- Audit GBP for accuracy (hours, services, photos)
- Refresh photos with new content
- Check competitor reviews for positioning

---

## 13. Common Issues & Solutions

### "Client says they left a review but I don't see it"
- Google can take 24-48 hours to publish reviews
- Check spam/flagged reviews in GBP dashboard
- Reviews from brand-new Google accounts may be delayed

### "Client clicks link but says they can't leave a review"
- They need to be signed into a Google account
- Account must have some activity history (Google filters spam)
- Link works on mobile and desktop

### "Workflow isn't sending review requests"
- Check workflow is active/published
- Verify trigger conditions are met
- Test with a sample contact

### "Review request email goes to spam"
- Use GHL's verified sending domain
- Keep email text simple (avoid too many links)
- Test with different email providers

---

## Quick Setup Checklist

- [ ] Copy review link: `https://g.page/r/CeZ-T5d_sTrwEAI/review`
- [ ] Create email template in GHL
- [ ] Create SMS template in GHL (optional)
- [ ] Build "Post-Service Review Request" workflow
- [ ] Set workflow trigger (24 hours after appointment)
- [ ] Test workflow with sample contact
- [ ] Update GBP hours to match calendar availability
- [ ] Add secondary category "Mobile Notary Service" to GBP
- [ ] List all service types in GBP services section
- [ ] Add 10+ photos to GBP
- [ ] Respond to recent reviews (if not already done)
- [ ] Deploy updated website with review links
- [ ] Monitor first week of review requests
- [ ] Adjust timing/messaging based on results

---

**Last Updated:** January 2026
**Document Owner:** ZING.work for Grace Notary Ink
