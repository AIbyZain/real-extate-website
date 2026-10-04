/* =========================================================
   CONFIG: every editable value lives here.
   Values marked PLACEHOLDER are made up. Replace them with your own.
   ========================================================= */
const CONFIG = {
  // The company
  COMPANY: {
    name: "Gatehouse Properties",                                  // PLACEHOLDER
    short: "Gatehouse",                                            // PLACEHOLDER
    tagline: "Homes in Hillcrest, sold by people who live here.",  // PLACEHOLDER
    city: "Hillcrest",                                             // PLACEHOLDER
    areas: ["Hillcrest", "Oakridge", "Old Town", "Riverside"],     // PLACEHOLDER
    services: ["Buy", "Sell", "Rent", "Plots", "New projects"],    // PLACEHOLDER
    whatsapp: "15550101234",              // PLACEHOLDER, digits only, with country code
    phone: "+1 555 010 1234",             // PLACEHOLDER
    email: "hello@gatehouseproperties.com", // PLACEHOLDER
    address: "Office 4, 22 Market Street, Hillcrest",            // PLACEHOLDER
    hours: "Monday to Saturday, 9:00 to 18:00",                  // PLACEHOLDER
    mapLink: "https://maps.google.com/?q=22+Market+Street+Hillcrest", // PLACEHOLDER
    licence: "Registered agency, licence no. 000000.",           // PLACEHOLDER
    founded: "2011",                      // PLACEHOLDER
    stats: {                              // PLACEHOLDER numbers, used in "Why people choose us"
      years: "15",
      homesSold: "640",
      clients: "1,200",
      daysToOffer: "38"
    }
  },

  hero: {
    headline: "Open the gate. We\u2019ll show you around.",
    sub: "Buying, selling and renting homes across Hillcrest, Oakridge and the Old Town since 2011."
  },

  // The featured home shown in the walkthrough
  LISTING: {
    kicker: "Featured home",
    name: "Walnut House",                 // PLACEHOLDER
    area: "Hillcrest",                    // PLACEHOLDER
    price: "$2,450,000",                  // PLACEHOLDER
    priceNote: "Freehold, vacant on completion.",
    size: "340 m²",                       // PLACEHOLDER
    sizeNote: "Single storey, on a 1,200 m² plot behind a walled garden and a walnut gate.",
    bedrooms: "4",                        // PLACEHOLDER
    bedroomsNote: "Main suite with a walk-in wardrobe and its own bathroom.",
    location: "14 Hillcrest Road",        // PLACEHOLDER
    locationNote: "Quiet cul-de-sac, 12 minutes from the city centre.",
    planNote: "Everything on one level. Living room and kitchen at the front, bedrooms along the hallway, terrace off the main suite."
  },

  propertiesIntro: "We work in four neighbourhoods and know most streets in them by name. These are the deals we handle every week.",
  PROPERTIES: [                           // PLACEHOLDER rows
    { type: "Family houses", areas: "Hillcrest, Oakridge", range: "$600k to $3M", help: "Buy, sell, rent" },
    { type: "Apartments", areas: "Old Town, Riverside", range: "$180k to $900k", help: "Buy, sell, rent" },
    { type: "Residential plots", areas: "Oakridge, Hillcrest East", range: "$120k to $750k", help: "Buy, sell" },
    { type: "Shops and offices", areas: "Market Street, Riverside", range: "From $2,500 a month", help: "Rent, sell" },
    { type: "New projects", areas: "Riverside, Oakridge", range: "Off-plan, payment plans", help: "Buy" }
  ],

  servicesIntro: "One agent stays with you from the first call to the day you get the keys.",
  SERVICES: [
    { name: "Buying", text: "We shortlist homes that fit your budget and brief, then come to every viewing with you." },
    { name: "Selling", text: "A written valuation within 48 hours, professional photos and a walkthrough like the one above." },
    { name: "Rentals", text: "Tenant checks, agreements and handover inspections for landlords. Shortlists and viewings for tenants." },
    { name: "Legal paperwork", text: "Title checks, transfer documents and registration, handled with our partner lawyers." },
    { name: "Site visits", text: "Plots and projects shown on site by the agent who sells them, at a time that suits you." }
  ],

  // {years}, {homesSold}, {clients}, {daysToOffer} are filled from COMPANY.stats
  REASONS: [
    { figure: "{years} years", text: "in Hillcrest. Most of our agents grew up within a few streets of the office." },
    { figure: "{homesSold}", text: "homes sold since 2011, from first flats to family villas." },
    { figure: "{daysToOffer} days", text: "on average from listing to a signed offer last year." },
    { figure: "{clients}", text: "clients so far, and close to half came to us through a friend." }
  ],

  ABOUT: [                                // PLACEHOLDER story
    "Gatehouse started in 2011 with two people and a desk on Market Street. There are twelve of us now, and the desk is still there.",
    "We only work where we know the ground. When we show you a house we can tell you which rooms get the morning sun, how the road floods in a storm and what the last house on the street sold for."
  ],

  // Contact form
  ctaMessage: "Hello Gatehouse, I'd like to book a visit.",
  visitIntro: "Tell us what you are looking for, or book a visit to Walnut House. We reply on WhatsApp, usually within the hour.",
  visitTimes: ["Weekday morning", "Weekday afternoon", "Weekday evening", "Saturday", "Sunday"],

  // Walkthrough frames (total and clip ends come from META_PATH, written by scripts/prepare-assets.mjs)
  META_PATH: "/frames/meta.json",
  FRAME_PATH: "/frames/f_{n}.webp",
  FRAME_PAD: 4,
  FALLBACK_META: { total: 504, clipEnds: [72, 144, 216, 288, 360, 432, 504] }, // used only if meta.json is missing
  MOBILE_BREAKPOINT: 768,
  MOBILE_FRAME_STEP: 2,        // every 2nd frame under the breakpoint
  PRELOAD_FRAMES: 72,          // counted in the loader percentage (about the gate clip)
  LOAD_CONCURRENCY: 8,
  SCROLL_VH: 800,              // scroll distance of the walkthrough
  HOLD_VH: 40,                 // extra pinned scroll on the last frame before release
  INTRO_FADE_END: 0.05,        // hero text fades out between progress 0 and this
  ROOM_FADE_BEFORE: 0.04,      // card starts to appear this far before arrival
  ROOM_FADE_AFTER: 0.07,       // and is gone this far after
  ROOM_FADE_LENGTH: 0.025,

  // Loader
  LOADER_HOLD_MS: 450,         // pause at 100% before the fade
  LOADER_FADE_S: 0.9,
  SKIP_AFTER_MS: 1500,

  // Rooms. clip = index in WALKTHROUGH_FILES; arrival = clipEnds[clip] / total.
  // Clip 0 is the gate and clip 3 is the hallway: no card, no dot.
  ROOMS: [
    { clip: 1, room: "Living room", label: "Featured home: Walnut House, Hillcrest", headline: "Living room, 38 m²", spec: "Glass from floor to ceiling on the garden side, oak floors" },
    { clip: 2, room: "Kitchen", label: "Walnut House", headline: "Kitchen, 24 m²", spec: "Marble island seating three, under three brass pendants" },
    { clip: 4, room: "Bedroom", label: "Walnut House", headline: "Main bedroom, 30 m²", spec: "Walk-in wardrobe, garden views on two sides" },
    { clip: 5, room: "Bathroom", label: "Walnut House", headline: "Main bathroom, 14 m²", spec: "Freestanding tub, double basin, glass door to the terrace" },
    { clip: 6, room: "Terrace", label: "Walnut House", headline: "Terrace, 26 m²", spec: "Faces west over the valley, open to the sunset" }
  ]
};

/* ========================================================= */

(() => {
  "use strict";

  // Safe to run twice: tear down any previous instance first.
  if (window.WalnutHouse && typeof window.WalnutHouse.destroy === "function") window.WalnutHouse.destroy();

  const $ = (s, r = document) => r.querySelector(s);
  const root = document.documentElement;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = innerWidth < CONFIG.MOBILE_BREAKPOINT;
  const clamp01 = (v) => Math.min(1, Math.max(0, v));

  // Everything registered here is removed by destroy().
  const ac = new AbortController();
  const on = (el, ev, fn, opts = {}) => el.addEventListener(ev, fn, { ...opts, signal: ac.signal });
  const timers = new Set();
  const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };
  const cancel = (id) => { clearTimeout(id); timers.delete(id); };
  const rafs = new Set();
  const frame = (fn) => { const id = requestAnimationFrame((t) => { rafs.delete(id); fn(t); }); rafs.add(id); return id; };
  let destroyed = false;
  const cleanups = [];

  /* ---------- Content from CONFIG ---------- */
  const getPath = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  const waUrl = (text) => `https://wa.me/${String(CONFIG.COMPANY.whatsapp).replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function bindContent() {
    const C = CONFIG.COMPANY;
    document.querySelectorAll("[data-cfg]").forEach((node) => {
      const v = getPath(CONFIG, node.dataset.cfg);
      if (v != null) node.textContent = v;
    });
    document.title = `${C.name} | Homes to buy, sell and rent in ${C.city}`;

    $("#waCta").href = waUrl(CONFIG.ctaMessage);
    $("#mapLink").href = C.mapLink;
    const phone = $("#phoneLink");
    phone.href = `tel:${C.phone.replace(/[^\d+]/g, "")}`;
    phone.textContent = C.phone;
    const mail = $("#emailLink");
    mail.href = `mailto:${C.email}`;
    mail.textContent = C.email;
    $("#year").textContent = new Date().getFullYear();

    const rows = $("#propRows");
    rows.textContent = "";
    CONFIG.PROPERTIES.forEach((p) => {
      const tr = el("tr");
      [["type", "Property type"], ["areas", "Areas"], ["range", "Typical range"], ["help", "We can help you"]].forEach(([k, label]) => {
        const td = el("td", null, p[k]);
        td.dataset.label = label;
        tr.append(td);
      });
      rows.append(tr);
    });

    const svc = $("#svcList");
    svc.textContent = "";
    CONFIG.SERVICES.forEach((x) => {
      const item = el("div", "svc__item");
      item.append(el("h3", null, x.name), el("p", null, x.text));
      svc.append(item);
    });

    const why = $("#whyList");
    why.textContent = "";
    const fill = (t) => t.replace(/\{(\w+)\}/g, (_, k) => (C.stats[k] != null ? C.stats[k] : ""));
    CONFIG.REASONS.forEach((r) => {
      const li = el("li", "why__item");
      li.append(el("p", "why__fig", fill(r.figure)), el("p", "why__text", fill(r.text)));
      why.append(li);
    });

    const about = $("#aboutText");
    about.textContent = "";
    CONFIG.ABOUT.forEach((t) => about.append(el("p", null, t)));

    const sel = $("#fTime");
    sel.textContent = "";
    const ph = new Option("Choose a time", "", true, true); ph.disabled = true; sel.append(ph);
    CONFIG.visitTimes.forEach((t) => sel.append(new Option(t, t)));
  }

  /* ---------- Form ---------- */
  function initForm() {
    const form = $("#visitForm");
    const status = $("#formStatus");
    const setErr = (input, msg) => {
      input.closest(".field").classList.toggle("has-error", !!msg);
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      $("#" + input.getAttribute("aria-describedby")).textContent = msg || "";
    };

    on(form, "submit", (e) => {
      e.preventDefault();
      const fName = $("#fName"), fPhone = $("#fPhone"), fTime = $("#fTime");
      const name = fName.value.trim();
      const phone = fPhone.value.trim();
      const time = fTime.value;
      let firstBad = null;

      if (name.length < 2) { setErr(fName, "Add your name so we know who to expect."); firstBad = firstBad || fName; } else setErr(fName);
      if (phone.replace(/\D/g, "").length < 7) { setErr(fPhone, "Add a phone number with at least 7 digits."); firstBad = firstBad || fPhone; } else setErr(fPhone);
      if (!time) { setErr(fTime, "Pick a time that suits you."); firstBad = firstBad || fTime; } else setErr(fTime);

      if (firstBad) { firstBad.focus(); status.textContent = ""; return; }

      const msg = `${CONFIG.ctaMessage}\n\nName: ${name}\nPhone: ${phone}\nPreferred time: ${time}`;
      window.open(waUrl(msg), "_blank", "noopener");
      status.textContent = "WhatsApp opened with your details. Press send there to confirm.";
    });
  }

  /* ---------- Lazy floor plan fade ---------- */
  function initFades() {
    const els = document.querySelectorAll(".fade");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -12% 0px" });
    els.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());
  }

  bindContent();
  initForm();
  initFades();

  const loader = $("#loader");
  const cta = $("#waCta");
  const intro = $("#intro");
  const roomsBox = $("#rooms");
  const dotsBox = $("#dots");

  // If a CDN failed, show a usable static page.
  if (!window.gsap || !window.ScrollTrigger || !window.Lenis) {
    root.classList.remove("is-loading");
    loader && loader.remove();
    cta.classList.add("is-visible");
    console.warn("GSAP, ScrollTrigger or Lenis did not load.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  /* ---------- Lenis ---------- */
  const lenis = new Lenis({
    lerp: reduceMotion ? 1 : 0.085,
    smoothWheel: !reduceMotion,
    wheelMultiplier: 0.9
  });
  lenis.on("scroll", ScrollTrigger.update);
  const lenisTick = (t) => lenis.raf(t * 1000);
  gsap.ticker.add(lenisTick);
  gsap.ticker.lagSmoothing(0);
  lenis.stop();

  /* ---------- Frame store (filled once meta.json arrives) ---------- */
  let frameNums = [];
  let count = 0;
  let images = [];
  let loaded = new Uint8Array(0);
  let requested = new Uint8Array(0);
  let promises = [];
  const pending = new Set(); // Image objects in flight, cancelled on destroy

  const canvas = $("#walkCanvas");
  const ctx = canvas.getContext("2d", { alpha: false });
  let targetIndex = 0;   // nearest whole frame, used for load priority
  let targetPos = 0;     // exact position between frames, used for drawing
  let drawnKey = "";
  let drawQueued = false;
  let preloadDone = false;
  let inFlight = 0;

  const frameSrc = (n) => CONFIG.FRAME_PATH.replace("{n}", String(n).padStart(CONFIG.FRAME_PAD, "0"));

  function setupFrames(total) {
    const step = isMobile ? CONFIG.MOBILE_FRAME_STEP : 1;
    frameNums = [];
    for (let n = 1; n <= total; n += step) frameNums.push(n); // always starts at frame 1
    if (frameNums[frameNums.length - 1] !== total) frameNums.push(total); // and ends on the last frame
    count = frameNums.length;
    images = new Array(count);
    loaded = new Uint8Array(count);
    requested = new Uint8Array(count);
    promises = new Array(count);
  }

  function loadFrame(i) {
    if (requested[i]) return promises[i];
    requested[i] = 1;
    promises[i] = new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";
      pending.add(img);
      img.onload = () => {
        const done = () => {
          pending.delete(img);
          if (destroyed) return resolve(false);
          images[i] = img; loaded[i] = 1;
          requestDraw();
          resolve(true);
        };
        img.decode ? img.decode().then(done, done) : done();
      };
      img.onerror = () => { pending.delete(img); resolve(false); };
      img.src = frameSrc(frameNums[i]);
    });
    return promises[i];
  }

  function nearestLoaded(i) {
    if (loaded[i]) return i;
    for (let d = 1; d < count; d++) {
      if (i - d >= 0 && loaded[i - d]) return i - d;
      if (i + d < count && loaded[i + d]) return i + d;
    }
    return -1;
  }

  function paint(img, alpha) {
    const cw = canvas.width, ch = canvas.height;
    const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * s, dh = img.naturalHeight * s;
    ctx.globalAlpha = alpha;
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    ctx.globalAlpha = 1;
  }

  // Draws the exact scroll position: the frame before it, with the next frame
  // blended on top by the fraction in between. This hides the step between frames.
  function draw() {
    drawQueued = false;
    if (!count) return;
    const i0 = Math.max(0, Math.min(count - 1, Math.floor(targetPos)));
    const i1 = Math.min(count - 1, i0 + 1);
    const t = Math.round((targetPos - i0) * 20) / 20; // 5% steps, enough to look smooth

    if (loaded[i0] && loaded[i1] && t > 0 && i1 !== i0) {
      const key = `${i0}:${t}`;
      if (key === drawnKey) return;
      paint(images[i0], 1);
      paint(images[i1], t);
      drawnKey = key;
      return;
    }

    const i = nearestLoaded(t >= 0.5 ? i1 : i0);
    if (i < 0) return;
    const key = `${i}:0`;
    if (key === drawnKey) return;
    paint(images[i], 1);
    drawnKey = key;
  }
  function requestDraw() {
    if (drawQueued || destroyed) return;
    drawQueued = true;
    frame(draw);
  }

  function sizeCanvas() {
    // Frames are 1280 px wide, so a 2x canvas costs four times the pixels for no extra detail.
    const dpr = 1;
    const w = Math.round(canvas.clientWidth * dpr);
    const h = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w; canvas.height = h;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      drawnKey = "";
      requestDraw();
    }
  }
  let resizeRaf = 0;
  on(window, "resize", () => {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(sizeCanvas);
  });
  sizeCanvas();

  // Background loading: always fetch the unrequested frame closest to where the viewer is.
  function nextToLoad() {
    for (let d = 0; d < count; d++) {
      const a = targetIndex + d;
      if (a < count && !requested[a]) return a;
      const b = targetIndex - d;
      if (d && b >= 0 && !requested[b]) return b;
    }
    return -1;
  }
  function pump() {
    while (!destroyed && inFlight < CONFIG.LOAD_CONCURRENCY) {
      const i = nextToLoad();
      if (i < 0) return;
      inFlight++;
      loadFrame(i).then(() => { inFlight--; pump(); });
    }
  }

  /* ---------- Rooms and dots ---------- */
  let rooms = [];
  const roomEls = [];
  const dotEls = [];

  function buildRooms(meta) {
    const last = CONFIG.ROOMS.length - 1;
    rooms = CONFIG.ROOMS.map((r, k) => {
      const end = meta.clipEnds[Math.min(r.clip, meta.clipEnds.length - 1)];
      const arrive = clamp01(end / meta.total);
      return {
        ...r,
        arrive,
        show: Math.max(0, arrive - CONFIG.ROOM_FADE_BEFORE),
        hide: k === last ? 1 : Math.min(1, arrive + CONFIG.ROOM_FADE_AFTER)
      };
    });

    roomsBox.textContent = "";
    dotsBox.textContent = "";
    roomEls.length = 0;
    dotEls.length = 0;

    rooms.forEach((r, k) => {
      const card = document.createElement("article");
      card.className = "room";
      card.setAttribute("aria-hidden", "true");
      const l = document.createElement("p"); l.className = "room__label"; l.textContent = r.label;
      const h = document.createElement("h3"); h.className = "room__title"; h.textContent = r.headline;
      const s = document.createElement("p"); s.className = "room__spec"; s.textContent = r.spec;
      card.append(l, h, s);
      roomsBox.append(card); roomEls.push(card);

      const dot = document.createElement("button");
      dot.type = "button"; dot.className = "dot";
      dot.setAttribute("aria-label", `Go to the ${r.room.toLowerCase()}`);
      const dl = document.createElement("span"); dl.className = "dot__label"; dl.textContent = r.room;
      dot.append(dl);
      on(dot, "click", () => goToRoom(k));
      dotsBox.append(dot); dotEls.push(dot);
    });
  }

  let activeRoom = -2;
  function updateRooms(p) {
    const last = rooms.length - 1;
    const F = CONFIG.ROOM_FADE_LENGTH;
    let active = -1;

    rooms.forEach((r, k) => {
      let o = 0, y = 0;
      if (p >= r.show && p <= r.hide + 1e-6) {
        const tin = clamp01((p - r.show) / F);
        const tout = k === last ? 1 : clamp01((r.hide - p) / F);
        o = Math.min(tin, tout);
        y = tin < 1 ? (1 - tin) * 26 : -(1 - tout) * 18;
      }
      const el = roomEls[k];
      el.style.opacity = o.toFixed(3);
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      el.style.visibility = o > 0.002 ? "visible" : "hidden";
      el.setAttribute("aria-hidden", o > 0.5 ? "false" : "true");
      if (p >= r.show - 0.001) active = k;
    });

    if (active !== activeRoom) {
      activeRoom = active;
      dotEls.forEach((d, k) => {
        d.classList.toggle("is-active", k === active);
        if (k === active) d.setAttribute("aria-current", "step"); else d.removeAttribute("aria-current");
      });
    }
  }

  function updateIntro(p) {
    const o = 1 - clamp01(p / CONFIG.INTRO_FADE_END);
    intro.style.opacity = o.toFixed(3);
    intro.style.visibility = o > 0.002 ? "visible" : "hidden";
    intro.setAttribute("aria-hidden", o > 0.5 ? "false" : "true");
  }

  /* ---------- Walkthrough scroll (pinned from scroll 0) ---------- */
  const walkEl = $("#walk");
  const state = { p: 0 };
  const totalVh = CONFIG.SCROLL_VH + CONFIG.HOLD_VH;
  let walkTl = null;

  function onProgress() {
    targetPos = state.p * (count - 1);
    requestDraw();
    const idx = Math.round(targetPos);
    if (idx !== targetIndex) {
      targetIndex = idx;
      if (preloadDone && inFlight < CONFIG.LOAD_CONCURRENCY) pump();
    }
    updateIntro(state.p);
    updateRooms(state.p);
  }

  function setupScroll() {
    walkTl = gsap.timeline({
      scrollTrigger: {
        trigger: walkEl,
        start: "top top",
        end: () => "+=" + Math.round(innerHeight * totalVh / 100),
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });
    walkTl
      .to(state, { p: 1, ease: "none", duration: CONFIG.SCROLL_VH, onUpdate: onProgress })
      .to({}, { duration: CONFIG.HOLD_VH }); // hold the last frame before the pin releases
  }

  function walkScrollFor(progress) {
    const st = walkTl.scrollTrigger;
    return st.start + progress * (st.end - st.start) * (CONFIG.SCROLL_VH / totalVh);
  }
  function goToRoom(k) {
    if (!walkTl) return;
    const y = walkScrollFor(rooms[k].arrive);
    const dist = Math.abs(y - lenis.scroll) / innerHeight;
    lenis.scrollTo(y, { duration: reduceMotion ? 0 : Math.min(3.2, 1.2 + dist * 0.25) });
  }

  on($("#scrollCue"), "click", (e) => {
    e.preventDefault();
    if (!walkTl || !rooms.length) return;
    goToRoom(0);
  });

  /* ---------- Top bar: menu and anchor links ---------- */
  const menuBtn = $("#menuBtn");
  const topnav = $("#topnav");
  const setMenu = (open) => {
    topnav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.textContent = open ? "Close" : "Menu";
  };
  on(menuBtn, "click", () => setMenu(!topnav.classList.contains("is-open")));
  on(document, "keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  document.querySelectorAll('.topbar a[href^="#"], .foot a[href^="#"]').forEach((a) => {
    on(a, "click", (e) => {
      const id = a.getAttribute("href");
      const target = id === "#top" ? 0 : $(id);
      if (target == null) return;
      e.preventDefault();
      setMenu(false);
      lenis.scrollTo(target, { offset: target === 0 ? 0 : -60, duration: reduceMotion ? 0 : 1.6 });
    });
  });

  /* ---------- Loader ---------- */
  const countEl = $("#loaderCount");
  const fillEl = $("#loaderFill");
  const barEl = $("#loaderBar");
  const skipEl = $("#loaderSkip");

  let preloadCount = CONFIG.PRELOAD_FRAMES;
  let framesDone = 0;
  let metaReady = false;
  let revealed = false;

  const real = () => (metaReady ? Math.min(1, framesDone / preloadCount) : 0);

  later(() => { if (!revealed) skipEl.classList.add("is-visible"); }, CONFIG.SKIP_AFTER_MS);
  on(skipEl, "click", () => reveal(0.5));

  let shown = 0;
  let lastPct = -1;
  function tick() {
    if (revealed || destroyed) return;
    const target = real();
    shown += (target - shown) * 0.16;
    if (target - shown < 0.003) shown = target;
    const pct = Math.round(shown * 100);
    if (pct !== lastPct) {
      lastPct = pct;
      countEl.textContent = pct;
      barEl.setAttribute("aria-valuenow", pct);
    }
    fillEl.style.transform = `scaleX(${shown.toFixed(4)})`;

    if (preloadDone && shown >= 1) {
      later(() => reveal(CONFIG.LOADER_FADE_S), reduceMotion ? 0 : CONFIG.LOADER_HOLD_MS);
      return;
    }
    frame(tick);
  }
  frame(tick);

  function reveal(duration) {
    if (revealed || destroyed) return;
    revealed = true;
    loader.classList.add("is-done");

    // The canvas underneath already shows frame 1, the closed gate.
    targetIndex = 0;
    targetPos = 0;
    drawnKey = "";
    sizeCanvas();
    requestDraw();

    if (!reduceMotion) {
      gsap.from("#intro .hero__copy > *", { y: 18, opacity: 0, duration: 1.1, stagger: 0.1, ease: "power3.out", delay: duration * 0.45 });
    }

    gsap.to(loader, {
      autoAlpha: 0,
      duration: reduceMotion ? 0.3 : duration,
      ease: "power2.out",
      onComplete: () => loader.remove()
    });

    root.classList.remove("is-loading");
    lenis.start();
    ScrollTrigger.refresh();
    if (metaReady) pump();

    later(() => {
      cta.classList.add("is-visible");
      if (!reduceMotion) {
        later(() => cta.classList.add("is-pulsing"), 600);
        on(cta, "animationend", () => cta.classList.remove("is-pulsing"), { once: true });
      }
    }, duration * 1000);
  }

  /* ---------- Boot: read meta.json, then build everything ---------- */
  async function loadMeta() {
    try {
      const res = await fetch(CONFIG.META_PATH, { cache: "no-cache", signal: ac.signal });
      if (!res.ok) throw new Error(res.status);
      const m = await res.json();
      if (!m || !m.total || !Array.isArray(m.clipEnds) || !m.clipEnds.length) throw new Error("bad meta.json");
      return m;
    } catch (e) {
      if (destroyed) throw e;
      console.warn(`Could not read ${CONFIG.META_PATH}, using FALLBACK_META. Run scripts/prepare-assets.mjs.`, e);
      return CONFIG.FALLBACK_META;
    }
  }

  loadMeta().then((meta) => {
    if (destroyed) return;
    setupFrames(meta.total);
    buildRooms(meta);
    setupScroll();
    onProgress();
    updateIntro(0);
    updateRooms(0);

    preloadCount = Math.min(CONFIG.PRELOAD_FRAMES, count);
    metaReady = true;

    // Frame 1 first, so the canvas is painted as early as possible.
    const jobs = [];
    for (let i = 0; i < preloadCount; i++) jobs.push(loadFrame(i).then(() => { framesDone++; }));
    Promise.all(jobs).then(() => {
      if (destroyed) return;
      preloadDone = true;
      pump(); // the rest keeps loading in the background
    });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!destroyed) ScrollTrigger.refresh(); });
  }).catch(() => { /* aborted by destroy */ });

  on(window, "load", () => { if (walkTl) ScrollTrigger.refresh(); });

  /* ---------- Teardown ---------- */
  function destroy() {
    if (destroyed) return;
    destroyed = true;
    ac.abort();
    timers.forEach(clearTimeout); timers.clear();
    rafs.forEach(cancelAnimationFrame); rafs.clear();
    cancelAnimationFrame(resizeRaf);
    cleanups.forEach((fn) => fn());

    if (walkTl) {
      if (walkTl.scrollTrigger) walkTl.scrollTrigger.kill(true);
      walkTl.kill();
      walkTl = null;
    }
    gsap.killTweensOf([loader, "#intro .hero__copy > *"]);
    gsap.ticker.remove(lenisTick);
    lenis.destroy();

    pending.forEach((img) => { img.onload = img.onerror = null; img.src = ""; });
    pending.clear();
    images = [];

    roomsBox.textContent = "";
    dotsBox.textContent = "";
    if (window.WalnutHouse && window.WalnutHouse.destroy === destroy) delete window.WalnutHouse;
  }

  window.WalnutHouse = { destroy };
})();
