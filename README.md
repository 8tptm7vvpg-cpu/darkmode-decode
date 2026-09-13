# DARKMODE DECODE — Version 1

Open index.html in a modern browser. No install or build is required. All assets are local and the search works offline.

To publish on a static host (including GitHub Pages), upload index.html, styles.css, app.js, and terms.js together to the publishing root. Shared entry links use #term=entry-id and require a hosted URL accessible to the recipient.

Features: blue/green cinematic reveal with skip and replay; fixed top and bottom toolbars; responsive center workspace; 201 starter terms in 10 disciplines; multi-category records; instant keyword/acronym search; category filters; sorting; definition dialogs with examples and related entries; shareable links; keyboard search shortcut (/); reduced-motion support.

Data is maintained separately in terms.js. The record schema includes id, term, expansion, categories, definition, keywords, example, related, and confusion. IDs must be unique; category numbers reference the categories array. Related terms reference display names. Starter definitions are general educational summaries and should be reviewed before becoming an internal authority.

Version tracking uses whole numbers: Version 1, Version 2, Version 3. Update the footer, intro, page title, data version, README, and ZIP suffix together. Package names: DARKMODE-DECODE-Version-1.zip, DARKMODE-DECODE-Version-2.zip, and so on.

Phase 2: authenticated editing, approved editor permissions, revision history, and review workflow. Version 1 does not store edits or include a sign-in system.
