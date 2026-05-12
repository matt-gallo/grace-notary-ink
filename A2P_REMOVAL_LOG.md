# A2P Removal Log

This document tracks every change made to remove competing SMS opt-in
mechanisms from the site for A2P 10DLC registration approval.

The reviewer flagged that the LeadConnector chat widget and our other
phone-collection forms (booking iframes, contact form, file-upload form,
emergency triage form) constitute **multiple opt-in sources**, which
will trigger rejection. To get approved as fast as possible we hid all
forms that collect phone numbers and route everyone through the chat
widget instead.

## How to revert (after A2P approval)

Every removed block is **commented out, not deleted**. Two sentinels
mark each change so they're easy to find:

- `<!-- A2P-REMOVED-START ... A2P-REMOVED-END -->` — original code,
  commented out.
- `<!-- A2P-PLACEHOLDER-START ... A2P-PLACEHOLDER-END -->` — temporary
  chat-only CTA shown while the original is hidden.

To restore a page (or the whole site):

1. Find each `A2P-REMOVED-START` block and uncomment it.
2. Delete the matching `A2P-PLACEHOLDER-START` block.
3. On `emergency-triage.html` only, also revert the JS changes flagged
   below in the per-file notes.

Or do the whole site at once: revert the PR that introduced this log
(`gh pr revert <PR#>`).

## Per-file changes

### `index.html`
- Removed: two LeadConnector booking iframes (Standard 30-min,
  Loan 60-min) inside the `#booking` section, plus the "Need a different
  service?" switcher between them.
- Replaced with: chat-only CTA card with phone and email buttons.

### `booking.html`
- Unchanged. This page is just a service picker that links to
  `booking-standard.html` and `booking-loan.html` — no phone collection
  here, so nothing to remove.

### `booking-standard.html`
- Removed: LeadConnector booking iframe (Standard 30-min) in the
  `.calendar-container`.
- Replaced with: chat-only CTA.
- **Kept:** the "SMS Communication Notice" disclosure block above the
  iframe. This is REQUIRED by A2P for the chat-based opt-in flow and
  should remain visible regardless of which collection mechanism is
  active.

### `booking-loan.html`
- Removed: LeadConnector booking iframe (Loan 60-min).
- Replaced with: chat-only CTA.
- **Kept:** the SMS Communication Notice block.

### `contact.html`
- Removed: full contact form (name, email, **phone**, service type,
  urgency, message).
- Replaced with: chat-only CTA card with phone and email buttons.

### `file-upload.html`
- Removed: LeadConnector form iframe (`widget/form/JIn06sf1BG5HANf2EDsp`)
  used for collecting print files (form collects phone).
- Replaced with: chat-only CTA directing users to email files or chat
  to send them.

### `emergency-triage.html`
- Removed: the "Step 0" contact-collection step (name, phone, email)
  that posts to the GHL webhook
  `https://services.leadconnectorhq.com/hooks/AyR7m7UYV1tdR7ZBJ7M6/webhook-trigger/122404b1-8b4d-41ef-861a-c89a8cb73113`.
- **No placeholder added** — users now drop straight into the existing
  "When do you need service?" question (step 1), which is the original
  pre-PR-#1 behavior.
- **JS changes (must also be reverted to restore step 0):**
  - `let currentStep = 0` → `let currentStep = 1`
  - `totalSteps = 4` → `totalSteps = 3`
  - `updateProgress(4)` (next-week and selectAvailability) → `updateProgress(3)`
  - `resetTriage()` now points to `step1` / `currentStep = 1` /
    `updateProgress(1)` instead of `stepContact` / `0` / `0`.
  - Initial `updateProgress(0)` at script bottom → `updateProgress(1)`.
  - Back link on `step1` changed from `onclick="resetTriage()"` back to
    `href="index.html"`.
- **Kept:** `WEBHOOK_URL` constant and `submitContact()` function — they
  are no longer reachable (no form references them) but kept in place so
  re-enabling the hidden step works without re-adding code.

### Chat widget (`<script src="https://widgets.leadconnectorhq.com/loader.js" ...>`)
- **Kept on all 11 pages.** This is now the sole SMS opt-in mechanism
  and is what the A2P reviewer indicated would lead to fastest approval.

## Why these changes are reversible (and why we did it this way)

Comment-out + placeholder gives you three levels of revert:

1. **Quick global revert:** `gh pr revert <PR#>` puts everything back in
   one commit.
2. **Per-page revert:** uncomment one block, delete one placeholder.
3. **Selective revert:** bring back only the booking iframes (for
   example) while leaving the contact form removed — useful if A2P
   approval doesn't require ALL forms to stay gone forever.

No content is lost. No GHL form IDs, calendar IDs, or webhook URLs are
deleted. Restoration is mechanical.
