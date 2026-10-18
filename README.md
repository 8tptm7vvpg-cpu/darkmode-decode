# DARKMODE DECODE — Version 6

Open index.html in a modern browser. No install or build is required. All assets are local and the search works offline.

To publish on a static host (including GitHub Pages), upload index.html, styles.css, app.js, and terms.js together to the publishing root. Shared entry links use #term=entry-id and require a hosted URL accessible to the recipient.

Features: blue/green cinematic reveal with fullscreen control; fixed top and bottom toolbars; responsive center workspace; 201 starter terms in 10 disciplines; multi-category records; instant keyword/acronym search; category filters; sorting; definition dialogs with examples and related entries; shareable links; keyboard search shortcut (/); reduced-motion support.

Data is maintained separately in terms.js. The record schema includes id, term, expansion, categories, definition, keywords, example, related, and confusion. IDs must be unique; category numbers reference the categories array. Related terms reference display names. Starter definitions are general educational summaries and should be reviewed before becoming an internal authority.

Version tracking uses whole numbers: Version 1, Version 2, Version 3. Update the footer, intro, page title, data version, README, and ZIP suffix together. Package names: DARKMODE-DECODE-Version-1.zip, DARKMODE-DECODE-Version-2.zip, and so on.

Phase 2: authenticated editing, approved editor permissions, revision history, and review workflow. Version 2 does not store edits or include a sign-in system.

Version 2 changes: mobile overflow repaired; vertical discipline modal; alphabetical default; animated gradients and card strokes; scroll reveals and ambient parallax; native fullscreen toggles with browser capability feedback. Fullscreen availability depends on the browser.
Version 3 changes: the fullscreen help tip appears directly below the clicked fullscreen button, stays within the viewport on resize, uses an animated orange/yellow gradient with bold black text, and fades out after 10 seconds. Repeated clicks restart the timer. Fullscreen controls and the help message are unchanged.

Version 4: cinematic intro runs once per tab/app session. Reloads and cached page restoration skip it; a new tab/session may play it again. Uses sessionStorage with a same-document fallback when storage is unavailable. No timed refresh or idle replay is configured.
Version 5: supplied Decode artwork added as browser favicon (ICO plus PNG sizes) and 180px Apple touch icon. Upload favicon.ico and the entire icons folder alongside the existing files. Existing iPhone Home Screen shortcuts may need to be removed and added again to pick up the new icon. No application behavior changes.
Version 6: bottom toolbar has a centered version label, right-aligned Refresh button, and Top button that scrolls the center workspace. Refresh reloads the page on demand while preserving the existing session intro guard. Narrow screens use two compact toolbar rows. Diagonal arrows use vector masks: black arrows on blue/green gradient tiles for dark cards, and gradient arrows on black tiles within gradient buttons. All favicon files remain included.
