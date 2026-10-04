# Gatehouse Properties

Plain HTML, CSS and JavaScript. GSAP, ScrollTrigger and Lenis load from a CDN, so you need an internet connection.

## Run

    npm install
    npm run dev

Open http://localhost:3000. The terminal also prints a link for your phone on the same Wi-Fi.

## Edit

- Company details: CONFIG.COMPANY at the top of js/main.js
- Featured home, properties, services, reasons, about text and room cards: the rest of CONFIG in js/main.js
- Page title and meta tags: the <head> of index.html
- Logo and floor plan: replace img/logo.svg and img/floorplan.jpg

## Rebuild the walkthrough from new clips (optional, needs ffmpeg)

Put loader.mp4 (the gate), video-02.mp4, video-03.mp4, video-4.mp4, video-05.mp4, video-06.mp4 and video-07.mp4 in media/, then run:

    npm run assets

This rewrites frames/*.webp and frames/meta.json. The gate clip is the first part of the walkthrough.
Room timings follow meta.json automatically.

## Publish

Upload the folder to any static host (Netlify, Vercel, cPanel) at the domain root.
The .mp4 files in media/ are not used by the site and can be left out.
server.js and package.json are only for local use.
