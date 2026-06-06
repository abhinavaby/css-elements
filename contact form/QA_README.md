# QA README - Contact Form

## Overview
This project is a simple contact form built with HTML, CSS, and JavaScript.
It uses EmailJS to send form data to an email template.

## Sanitization
Sensitive EmailJS configuration values have been removed from the source code.
Replace the placeholder values with your own EmailJS account settings before running the form:

- `YOUR_EMAILJS_PUBLIC_KEY` in `index.html`
- `YOUR_EMAILJS_SERVICE_ID` in `index.js`
- `YOUR_EMAILJS_TEMPLATE_ID` in `index.js`

## Files
- `index.html` — contact form markup and EmailJS init.
- `index.js` — sendMail function, form data capture, and EmailJS send call.
- `style.css` — styling for the contact form.
- `QA_README.md` — this file.

## QA Checklist
1. Open `index.html` in a browser.
2. Verify the page loads without console errors.
3. Confirm the form fields are visible:
   - Name
   - Email Address
   - Subject
   - Message
4. Enter valid values in the required fields.
5. Click the "Send Message" button.
6. Confirm the browser does not immediately reload the page before the send action completes.
7. If EmailJS is configured, verify the success alert appears.
8. Verify the form fields are cleared after the send succeeds.

## EmailJS Validation
To make the contact form work in QA or production, confirm these values are correct in your EmailJS dashboard:
- Service ID
- Template ID
- Public Key

## Notes
- Do not commit actual private keys or service/template IDs to source control.
- If the form still fails after replacing placeholders, check the browser console for the exact EmailJS error.
- The current JavaScript sends only `name`, `email`, and `message`.

## Recommended Fixes
If you want to prevent form submission from reloading the page, update the button or form behavior:

- Change the button to `type="button"`:
  ```html
  <button id="sent" type="button" onclick="sendMail()">Send Message</button>
  ```

- Or prevent default submit behavior on the form:
  ```html
  <form onsubmit="event.preventDefault(); sendMail();">
  ```
