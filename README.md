Caffined — Website

A responsive five-page website for a fictional artisan coffee shop based in Cape Town.

Student:PHENYO LAKA
Student Number:ST10469904
Subject:Web Development (Introduction)
Module Code:WEDE5020POE

contents

- `index.html`
- `about.html`
- `services.html`
- `enquiry.html`
- `contact.html`
- `style.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `images/` (Site images)
- `screenshots/` 

## Design
**Colour scheme:** Coffee-themed palette using CSS named colours — `saddlebrown`, `peru`, `beige`, `white`, `black` — stored as CSS variables in `:root`.
**Typography:** `Georgia` (serif) for headings, `Arial` (sans-serif) for body text.
**Layout:** Centered content column (`max-width: 900px`) using CSS Flexbox for navigation and CSS Grid for the feature windows. Soft shadows on section cards.
**Hover Effects:** Added smooth CSS transitions and transform effects on buttons, navigation links, form inputs, and feature cards to improve user interaction.

## Responsive Design
| Breakpoint | Target | Changes |
|---|---|---|
| `max-width: 768px` | Tablet | Smaller headings, tighter padding |
| `max-width: 480px` | Mobile | Stacked navigation (Flexbox column), single-column layout, smaller font |

Images use `srcset` and `sizes` attributes, plus `object-fit: cover` to ensure images in the feature windows maintain their aspect ratio without stretching.

## Changelog — Part 2 Feedback Fixes
- **Layout Structure:** Implemented CSS Flexbox on the `body`, `nav`, and `main` elements to fix the alignment and spacing issues noted in the feedback.
- **Responsive Navigation:** Fixed the mobile navigation menu. It now stacks vertically and spans 100% width on screens smaller than 480px for better tap targets.
- **Responsive Images:** Added `max-width: 100%`, `height: auto`, and `object-fit: cover` to images to prevent horizontal scrolling and stretching on mobile devices.
- **References:** Updated the reference list below to follow correct Harvard referencing formatting.

## Changelog — Part 3 Updates
- **JavaScript Enhancements:** Created an external `script.js` file linked to all HTML pages using the `defer` attribute.
- **Interactive Elements:** Added a JavaScript-powered FAQ Accordion on the Home page and a Lightbox image gallery for the feature windows.
- **Dynamic Content:** Added a real-time JavaScript search filter in the header. Users can search the menu from any page, and it will redirect to the Services page with the results filtered.
- **Form Validation:** Added custom client-side JavaScript validation to `enquiry.html` and `contact.html` to check for empty fields, valid email formats, and correct phone number lengths without reloading the page.
- **SEO On-Page:** Added specific `<title>` tags, meta descriptions, and meta keywords to the `<head>` of all pages. Ensured correct heading hierarchy (`h1` to `h3`). Removed navigation links from the footer to improve site structure.
- **SEO Additional:** Created `robots.txt` and `sitemap.xml` to instruct search engine crawlers.
- **Deployment:** Website deployed to GitHub Pages.

Screenshots

Laptop
![image alt](https://github.com/phenyolaka30-source/My-Website/blob/b227bb2d2c2fe79be67ef0ff1cd8b8dc059ba2aa/images/laptop.png)
mobile
![image alt](https://github.com/phenyolaka30-source/My-Website/blob/d6316953de1072ead6934ba5e303050904a4fe2b/images/mobile.png)
tablet
![image alt](https://github.com/phenyolaka30-source/My-Website/blob/36921e3e5bb187809de0d92667cebf170fdaefd2/images/tablet.png)

References

Mozilla Developer Network (MDN) (2026) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 10 October 2026).

Mozilla Developer Network (MDN) (2026) *Responsive Images*. Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images (Accessed: 10 October 2026).

Mozilla Developer Network (MDN) (2026) *CSS Variables*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties (Accessed: 10 October 2026).

Mozilla Developer Network (MDN) (2026) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation (Accessed: 10 October 2026).

W3Schools (2026) *CSS Media Queries*. Available at: https://www.w3schools.com/css/css3_mediaqueries.asp (Accessed: 10 October 2026).

W3Schools (2026) *CSS Colour Names*. Available at: https://www.w3schools.com/cssref/css_colors.asp (Accessed: 10 October 2026).

W3Schools (2026) *JavaScript HTML DOM Events*. Available at: https://www.w3schools.com/js/js_htmldom_events.asp (Accessed: 10 October 2026).