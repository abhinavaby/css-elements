<<<<<<< HEAD
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
=======
# CSS Mastery Playground

This repository serves as a playground and reference for learning and mastering CSS. It contains a collection of HTML and CSS files that demonstrate various styling concepts, layouts, and animations.

## Overview

The project is designed to explore different aspects of CSS, from the basics of the box model to more advanced topics like positioning and animations. It's a collection of experiments and examples to understand how different properties affect the rendering of web pages.

## Features & Concepts Covered

*   **Box Model Implementation**: Examples showing how margins, padding, and borders interact.
*   **Positioning**: Demonstrations of `static`, `relative`, `absolute`, `fixed`, and `sticky` positioning.
*   **Flexbox Layout**: Practical examples of using Flexible Box Layout for aligning elements.
*   **CSS Animations**: Keyframe animations and transitions to create dynamic effects.
*   **Display & Visibility**: Differences between `display: none` and `visibility: hidden`, as well as `inline` vs `block` level elements.
*   **z-index Stacking**: Examples of controlling the stacking order of elements.
*   **Navigation Components**: Dedicated examples for building navigation bars (`og navbar.html`, `nav.html`).

## Project Structure

*   `index.html`: The main entry point containing a variety of examples in one place.
*   `styles.css`: The primary stylesheet linked to `index.html`.
*   `og navbar.html`: A comprehensive navigation bar example with sample content.
*   `flex.html`, `animation.html`, `transform.html`: Isolated examples for specific CSS properties.
*   `*.css`: Various stylesheets experimenting with different designs and selectors.

## How to Use

1.  **Clone or Download** the repository to your local machine.
2.  **Open** the folder in your file explorer.
3.  **Double-click** on any `.html` file (e.g., `index.html`) to open it in your default web browser.

No build tools, servers, or dependencies are required—just pure HTML and CSS!

## Technologies Used

*   **HTML5**: Structure and semantic markup.
*   **CSS3**: Styling, layout, and animations.
>>>>>>> 6859f6f6b6bbd0d09af4389c9b0331cff13673cd
