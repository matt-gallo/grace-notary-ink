# Grace Notary Ink - Automation Setup Guide

This document outlines the booking automation system needed for Phase 2 of the Grace Notary Ink website.

## Overview

The automation system removes manual steps and creates a professional, hands-off booking experience. This allows Grace to focus on service delivery while the system handles communication and payment reminders.

---

## 1. Calendar System Setup

### Recommended Platforms
- **Calendly** (easiest, most popular)
- **Acuity Scheduling** (more features)
- **Square Appointments** (integrated payments)
- **SimplyBook.me** (budget option)

### Calendar Configuration

#### Required Settings:
1. **Fixed Appointment Length**
   - Set standard appointment duration (e.g., 60 minutes)
   - Prevents overbooking

2. **Buffer Time Protection**
   - Add 15-30 minutes BEFORE each appointment (travel buffer)
   - Add 15 minutes AFTER each appointment (completion buffer)
   - Protects against back-to-back scheduling stress

3. **Service Area Note**
   - Display clear message: "Serving Boise and surrounding Idaho counties"
   - Link to service areas page if needed

4. **Time Zone**
   - Set to Mountain Time (Idaho)

5. **Availability Windows**
   - Monday - Saturday: 6:00 AM - 11:00 PM
   - Sunday: 2:00 PM - 11:00 PM

---

## 2. Required Booking Fields

### Client Information (All Required):
- **Full Legal Name**
- **Email Address**
- **Phone Number**
- **Service Address** (where notary should go)
- **Preferred Time Window**
- **Service Type** (dropdown):
  - Mortgage/Loan Signing
  - Power of Attorney
  - Wills/Estate Documents
  - Vehicle Transfer
  - Business Documents
  - Other

### Optional but Helpful:
- **Urgency Level**: Emergency, Urgent (2-3 days), Flexible
- **Additional Notes**: Let client explain their situation

---

## 3. Email & SMS Automation

### A. Instant Confirmation (Sent Immediately After Booking)

**Subject:** Your Grace Notary Ink Appointment is Confirmed

**Body:**
```
Hi [Client Name],

Your notary appointment is confirmed!

APPOINTMENT DETAILS:
Date: [Date]
Time: [Time]
Location: [Address]
Service: [Service Type]

Grace will arrive on time and prepared to notarize your documents.

IMPORTANT - Payment Required Before Signing:
Payment is required prior to document signing. Please complete payment before your appointment time.

[PAYMENT LINK]

Questions? Call or text: (208) 870-8576
Email: gracenotary.ink@gmail.com

Thank you for choosing Grace Notary Ink.

- Grace Notary Ink Team
```

---

### B. Reminder Message (Sent 24 Hours Before Appointment)

**Subject:** Reminder: Your Notary Appointment Tomorrow

**Body:**
```
Hi [Client Name],

This is a friendly reminder about your appointment with Grace Notary Ink.

TOMORROW:
Date: [Date]
Time: [Time]
Location: [Address]

PAYMENT REMINDER:
Payment is required prior to document signing. If you haven't already, please complete payment before your appointment.

[PAYMENT LINK]

Need to reschedule? Click here: [Reschedule Link]

Questions? Call/Text: (208) 870-8576

See you tomorrow!

- Grace Notary Ink
```

---

### C. Payment Reminder (Sent 2 Hours Before Appointment - ONLY IF UNPAID)

**Subject:** Payment Required - Appointment in 2 Hours

**Body:**
```
Hi [Client Name],

Your Grace Notary Ink appointment is in 2 hours.

Our records show payment has not been completed yet. Payment is required before document signing can begin.

Please complete payment now: [PAYMENT LINK]

Appointment Details:
Time: [Time]
Location: [Address]

Questions? Call: (208) 870-8576

Thank you,
Grace Notary Ink
```

---

### D. Follow-Up Message (Sent 1 Day After Appointment)

**Subject:** Thank You from Grace Notary Ink

**Body:**
```
Hi [Client Name],

Thank you for choosing Grace Notary Ink for your notarization needs.

We hope everything went smoothly!

If you were satisfied with our service, would you mind leaving a quick review? It helps other people in stressful situations find us.

[GOOGLE REVIEW LINK]

Need notary services again? Book anytime: [BOOKING LINK]

Thanks again,
Grace Notary Ink
(208) 870-8576
gracenotary.ink@gmail.com
```

---

## 4. Payment Integration

### Recommended Payment Systems:
1. **Stripe** (most flexible, good for custom setups)
2. **Square** (integrated with Square Appointments)
3. **PayPal** (widely recognized, easy setup)
4. **Venmo/Zelle** (backup option, less automated)

### Payment Flow:
1. Client books appointment
2. Receives confirmation email with payment link
3. Completes payment BEFORE appointment
4. Grace arrives and completes notarization

### Benefits:
- Removes awkward money conversations
- "It's not me, it's the system"
- Reduces no-shows
- Professional image

---

## 5. Email List Management

### Purpose:
Stay top-of-mind without manual effort.

### Setup:
- Every contact (booked or inquiry) goes into ONE email list
- Use platform like:
  - **Mailchimp** (free for small lists)
  - **ConvertKit** (for creators)
  - **Flodesk** (beautiful templates)

### Email Types (Send Sparingly):

**1. Occasional Availability Update:**
```
Subject: Weekend Availability - Grace Notary Ink

Hi [Name],

Just a quick note that we have availability this weekend for any urgent notary needs.

Book now: [LINK]
Call: (208) 870-8576

Thanks,
Grace Notary Ink
```

**2. Seasonal/Reminder (2-3x per year max):**
```
Subject: Still here when you need us

Hi [Name],

You used Grace Notary Ink for notary services in the past, and we wanted to let you know we're still here if you need us again.

Same reliable service. Same mobile convenience.

Book anytime: [LINK]
(208) 870-8576

- Grace Notary Ink
```

### Rules:
- NO WEEKLY NEWSLETTERS
- NO MARKETING FLUFF
- Only send when genuinely useful
- 1-2 emails per quarter MAX

---

## 6. Google Business & Social Integration

### Google Business Profile:
- Keep updated with:
  - New photos
  - Posts about availability
  - Special hours (holidays, etc.)
  - Respond to all reviews

### Social Media (Optional):
- Facebook/Instagram posts feed back to website
- Cross-promote booking link on all platforms
- Simple posts: availability, service reminders, local relevance

### Goal:
Everything feels connected. No dead ends.

---

## 7. Implementation Checklist

### Phase 1: Calendar Setup
- [ ] Choose calendar platform
- [ ] Set appointment lengths
- [ ] Add buffer times
- [ ] Configure availability hours
- [ ] Set up required booking fields
- [ ] Test booking flow

### Phase 2: Automation Setup
- [ ] Create confirmation email template
- [ ] Create reminder email (24 hrs before)
- [ ] Create payment reminder email (2 hrs before)
- [ ] Create follow-up email (1 day after)
- [ ] Set up SMS notifications (optional)
- [ ] Test all automations

### Phase 3: Payment Integration
- [ ] Choose payment platform
- [ ] Create payment links
- [ ] Add payment link to confirmation email
- [ ] Add payment link to reminder emails
- [ ] Test payment flow

### Phase 4: Email List Setup
- [ ] Choose email platform
- [ ] Create single master list
- [ ] Connect booking system to email list
- [ ] Draft occasional email templates
- [ ] Schedule quarterly check-in

### Phase 5: Integration Testing
- [ ] Test full booking flow
- [ ] Test payment flow
- [ ] Test email sequence
- [ ] Test SMS notifications
- [ ] Test calendar sync
- [ ] Make live

---

## 8. What This Solves

From the Phase 2 calls, this system addresses:

✅ **Less Tech Frustration**
- Automated systems handle repetitive tasks
- No manual email sending
- No payment awkwardness

✅ **Fewer Manual Steps**
- Booking → Confirmation → Reminder → Payment → Follow-up (all automatic)

✅ **Better Time Protection**
- Buffer times prevent burnout
- Automated reminders reduce no-shows

✅ **Professional Image**
- Consistent communication
- Clear payment expectations
- Systematic follow-up

✅ **Ability to Take Time Off**
- System runs while you're away
- Email list keeps you present without effort
- Can close calendar without losing visibility

---

## 9. Next Steps

1. **Choose your calendar platform** (Calendly recommended for simplicity)
2. **Set up basic booking page** with required fields
3. **Create confirmation email** (start simple, improve later)
4. **Add payment link** (even if it's just PayPal/Venmo initially)
5. **Test the full flow** yourself before going live
6. **Embed calendar on homepage** (replace placeholder)

---

## Support

For technical help setting up these systems:
- **Calendly Help:** https://help.calendly.com
- **Stripe Help:** https://support.stripe.com
- **Mailchimp Help:** https://mailchimp.com/help

For website updates or questions:
- Contact ZING.work (your website team)

---

**Last Updated:** January 2026
**Document Owner:** ZING.work for Grace Notary Ink
