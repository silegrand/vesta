/*!
 * vesta.js — Shared nav & footer for Vesta IT Services Ltd
 * Modelled on the proven Fyrfly pattern.
 * Edit this file only to update nav/footer across every page.
 */
(function () {

  /* ── CONFIG ─────────────────────────────────────────────── */
  var BLUE_LOGO = 'logo-blue.webp';
  var WHITE_LOGO = 'logo-white.webp';
  var EMAIL   = 'info@vestait.co.uk';
  var PHONE   = '+44 (0)1634 000 000';
  var ADDRESS = 'King Arthurs Court Maidstone Road, Charing, Ashford, Kent, England, TN27 0JS';

  /* ── CSS ────────────────────────────────────────────────── */
  var CSS = `
    :root {
      --vn:#1E2163; --vndk:#141548; --vndp:#0D0E30;
      --va:#E8740C; --valt:#F4974A;
      --vs:#4A5568; --vm:#F4F6FB; --vb:#DDE2EE; --vt:#2D3748;
      --vfb:'DM Sans',system-ui,sans-serif;
      --vfd:'DM Serif Display',Georgia,serif;
      --nh:72px;
    }

    /* ════ HEADER ════ */
    #vesta-nav {
      position: sticky;
      top: 0;
      z-index: 1000;
      height: var(--nh);
      background: rgba(255,255,255,0.97);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-bottom: 1px solid var(--vb);
      transition: box-shadow .3s;
      font-family: var(--vfb);
    }
    #vesta-nav.v-scrolled { box-shadow: 0 2px 28px rgba(30,33,99,.12); }

    .v-inner {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 2rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    /* Logo — left */
    .v-logo { display: flex; align-items: center; flex-shrink: 0; }
    .v-logo img { height: 42px; width: auto; max-width: 180px; display: block; object-fit: contain; }

    /* Centre links */
    .v-links {
      display: flex;
      align-items: center;
      gap: 4px;
      list-style: none;
      flex: 1;
      justify-content: center;
    }

    /* Plain link */
    .v-lnk {
      font-size: .875rem;
      font-weight: 500;
      color: var(--vs);
      padding: .48rem .9rem;
      border-radius: 7px;
      transition: color .2s, background .2s;
      white-space: nowrap;
      display: inline-block;
    }
    .v-lnk:hover, .v-lnk.v-on { color: var(--vn); background: var(--vm); }

    /* Dropdown trigger */
    .v-dd { position: relative; }
    .v-dd-a {
      display: flex;
      align-items: center;
      gap: .3rem;
      font-size: .875rem;
      font-weight: 500;
      color: var(--vs);
      padding: .48rem .9rem;
      border-radius: 7px;
      cursor: pointer;
      transition: color .2s, background .2s;
      white-space: nowrap;
      text-decoration: none;
    }
    .v-dd-a svg {
      width: 10px; height: 10px;
      stroke: currentColor; fill: none;
      stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;
      transition: transform .2s;
      flex-shrink: 0;
    }
    .v-dd:hover .v-dd-a { color: var(--vn); background: var(--vm); }
    .v-dd:hover .v-dd-a svg { transform: rotate(180deg); }
    .v-dd-a.v-on { color: var(--vn); background: var(--vm); }

    /* Dropdown panel */
    .v-drop {
      position: absolute;
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%) translateY(4px);
      background: #fff;
      border: 1px solid var(--vb);
      border-radius: 12px;
      box-shadow: 0 16px 48px rgba(30,33,99,.13);
      padding: .5rem;
      min-width: 230px;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity .18s, transform .18s, visibility 0s linear .18s;
      z-index: 500;
    }
    /* Invisible bridge so mouse can reach the panel */
    .v-drop::after {
      content: '';
      position: absolute;
      top: -14px; left: 0; right: 0;
      height: 14px;
    }
    /* Arrow */
    .v-drop::before {
      content: '';
      position: absolute;
      top: -6px; left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 11px; height: 11px;
      background: #fff;
      border-left: 1px solid var(--vb);
      border-top: 1px solid var(--vb);
    }
    .v-dd:hover .v-drop {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transform: translateX(-50%) translateY(0);
      transition: opacity .18s, transform .18s, visibility 0s linear 0s;
    }

    /* Drop items */
    .v-di {
      display: flex;
      align-items: center;
      gap: .7rem;
      padding: .6rem .85rem;
      border-radius: 8px;
      font-size: .845rem;
      font-weight: 500;
      color: var(--vt);
      transition: background .15s, color .15s;
      text-decoration: none;
    }
    .v-di:hover { background: var(--vm); color: var(--vn); }
    .v-di.v-on  { background: var(--vm); color: var(--vn); font-weight: 600; }
    .v-di-ico {
      width: 28px; height: 28px;
      border-radius: 6px;
      background: #EEEEFF;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .v-di-ico svg {
      width: 14px; height: 14px;
      stroke: var(--vn); fill: none;
      stroke-width: 1.75; stroke-linecap: round; stroke-linejoin: round;
    }
    .v-di-txt { font-size: .84rem; font-weight: 500; color: var(--vt); }
    .v-di:hover .v-di-txt, .v-di.v-on .v-di-txt { color: var(--vn); }

    /* CTA — right */
    .v-cta {
      display: inline-flex;
      align-items: center;
      gap: .4rem;
      padding: .58rem 1.3rem;
      background: var(--vn);
      color: #fff;
      font-size: .875rem;
      font-weight: 600;
      font-family: var(--vfb);
      border-radius: 7px;
      white-space: nowrap;
      flex-shrink: 0;
      text-decoration: none;
      transition: background .2s, transform .2s;
    }
    .v-cta:hover { background: var(--va); transform: translateY(-1px); }

    /* Hamburger */
    .v-ham {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      width: 40px; height: 40px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      flex-shrink: 0;
      border-radius: 7px;
      -webkit-appearance: none;
      appearance: none;
    }
    .v-ham span {
      display: block;
      width: 22px; height: 2px;
      background: var(--vn);
      border-radius: 2px;
      flex-shrink: 0;
    }

    /* Mobile overlay */
    .v-mob {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 2000;
      background: rgba(13,14,48,.97);
      flex-direction: column;
      align-items: stretch;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity .25s;
      font-family: var(--vfb);
    }
    .v-mob.v-open { display: flex !important; visibility: visible; pointer-events: all; opacity: 1; }
    .v-mob-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid rgba(255,255,255,.07);
      flex-shrink: 0;
    }
    .v-mob-bar img { height: 34px; width: auto; opacity: .9; }
    .v-mob-close {
      display: flex;
      align-items: center;
      gap: .4rem;
      background: rgba(255,255,255,.07);
      border: 1px solid rgba(255,255,255,.1);
      border-radius: 7px;
      color: rgba(255,255,255,.6);
      font-size: .8rem;
      font-weight: 500;
      font-family: var(--vfb);
      padding: .45rem .9rem;
      cursor: pointer;
      transition: background .15s, color .15s;
      -webkit-appearance: none;
      appearance: none;
    }
    .v-mob-close:hover { background: rgba(255,255,255,.12); color: #fff; }
    .v-mob-close svg { width: 14px; height: 14px; stroke: currentColor; fill: none; stroke-width: 2.5; stroke-linecap: round; }
    .v-mob-scroll { flex: 1; overflow-y: auto; -webkit-overflow-scrolling: touch; padding: 1rem 1.75rem 3rem; }
    .v-mob-sec {
      font-size: .68rem;
      font-weight: 700;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: rgba(255,255,255,.28);
      display: block;
      padding: 1.1rem 0 .4rem;
    }
    .v-mob-sec:first-child { padding-top: .2rem; }
    .v-mob-scroll a {
      font-size: 1.05rem;
      font-weight: 500;
      color: rgba(255,255,255,.78);
      padding: .65rem 0;
      border-bottom: 1px solid rgba(255,255,255,.06);
      width: 100%;
      display: flex;
      align-items: center;
      gap: .75rem;
      text-decoration: none;
      transition: color .2s;
    }
    .v-mob-scroll a:hover { color: #fff; }
    .v-mob-scroll a i { color: var(--va); font-size: .9rem; width: 18px; text-align: center; flex-shrink: 0; }
    .v-mob-cta {
      margin-top: 1.5rem;
      display: inline-flex !important;
      align-items: center;
      gap: .45rem;
      padding: .88rem 1.5rem !important;
      background: var(--va) !important;
      color: #fff !important;
      font-size: 1rem !important;
      font-weight: 600 !important;
      border-radius: 8px;
      border-bottom: none !important;
      width: auto !important;
      text-decoration: none;
    }
    .v-mob-cta:hover { background: var(--valt) !important; }

    /* ════ FOOTER ════ */
    #vesta-footer {
      background: var(--vndp);
      font-family: var(--vfb);
      padding: 4rem 0 0;
    }
    .vf-inner {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 2rem 3rem;
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      gap: 3rem;
      border-bottom: 1px solid rgba(255,255,255,.07);
    }
    .vf-logo { margin-bottom: .9rem; }
    .vf-logo img { height: 42px; width: auto; max-width: 185px; opacity: .9; }
    .vf-tag { font-size: .875rem; color: rgba(255,255,255,.65); line-height: 1.65; max-width: 22ch; margin-bottom: 1.5rem; }
    .vf-socs { display: flex; gap: .55rem; }
    .vf-soc {
      width: 33px; height: 33px;
      background: rgba(255,255,255,.07);
      border: 1px solid rgba(255,255,255,.1);
      border-radius: 7px;
      display: flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,.5);
      font-size: .85rem;
      text-decoration: none;
      transition: background .2s, color .2s, border-color .2s;
    }
    .vf-soc:hover { background: var(--va); color: #fff; border-color: var(--va); }
    .vf-col-h { font-size: .7rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.55); margin-bottom: 1rem; }
    .vf-col ul { display: flex; flex-direction: column; gap: .5rem; }
    .vf-col ul a { font-size: .855rem; color: rgba(255,255,255,.7); text-decoration: none; transition: color .2s; }
    .vf-col ul a:hover { color: #fff; }
    .vf-col-gap { margin-top: 1.5rem; }
    .vf-ci { display: flex; align-items: flex-start; gap: .6rem; margin-bottom: .7rem; }
    .vf-ci i { color: var(--va); font-size: .82rem; margin-top: .18rem; width: 13px; flex-shrink: 0; }
    .vf-ci span, .vf-ci a { font-size: .82rem; color: rgba(255,255,255,.68); line-height: 1.5; text-decoration: none; transition: color .2s; }
    .vf-ci a:hover { color: var(--va); }
    .vf-bot {
      max-width: 1240px; margin: 0 auto; padding: 1.1rem 2rem;
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 1rem;
    }
    .vf-copy { font-size: .77rem; color: rgba(255,255,255,.45); }
    .vf-legal { display: flex; gap: 1.25rem; }
    .vf-legal a { font-size: .77rem; color: rgba(255,255,255,.45); text-decoration: none; transition: color .2s; }
    .vf-legal a:hover { color: rgba(255,255,255,.55); }

    /* ════ RESPONSIVE ════ */
    @media (max-width: 860px) {
      .v-links { display: none; }
      .v-cta   { display: none; }
      .v-ham   { display: flex; }
    }
    @media (max-width: 1024px) {
      .vf-inner { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
      .vf-inner > div:first-child { grid-column: span 2; }
    }
    @media (max-width: 600px) {
      .v-inner  { padding: 0 1.25rem; }
      .vf-inner { grid-template-columns: 1fr; padding: 0 1.5rem 2.5rem; }
      .vf-inner > div:first-child { grid-column: span 1; }
      .vf-bot   { flex-direction: column; text-align: center; padding: 1rem 1.5rem; }
    }
  `;

  /* ── ACTIVE PAGE ─────────────────────────────────────────── */
  var page = window.location.pathname.split('/').pop() || 'index.html';

  function lnkClass(href) {
    return page === href ? ' class="v-lnk v-on"' : ' class="v-lnk"';
  }
  function ddClass(href) {
    return page === href ? ' class="v-di v-on"' : ' class="v-di"';
  }
  function ddBtnClass(pages) {
    var active = pages.some(function(h){ return page === h; });
    return active ? ' class="v-dd-a v-on"' : ' class="v-dd-a"';
  }

  var SVC_PAGES  = ['networks.html','cctv.html','ai-analytics.html','monitoring.html'];
  var TOOL_PAGES = ['cctv-site-tool.html','wireless-planner.html'];

  /* ── NAV HTML ────────────────────────────────────────────── */
  var MOBILE_NAV =
    '<div class="v-mob" id="vMob" style="display:none">' +
      '<div class="v-mob-bar">' +
        '<img src="' + BLUE_LOGO + '" alt="Vesta IT Services Ltd"/>' +
        '<button class="v-mob-close" id="vMobClose" aria-label="Close menu">' +
          '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Close' +
        '</button>' +
      '</div>' +
      '<div class="v-mob-scroll">' +
        '<span class="v-mob-sec">Company</span>' +
        '<a href="index.html#about"><i class="fa-solid fa-building-columns" aria-hidden="true"></i>About Vesta IT</a>' +
        '<a href="index.html#director"><i class="fa-solid fa-user-tie" aria-hidden="true"></i>Leadership</a>' +
        '<span class="v-mob-sec">Services</span>' +
        '<a href="networks.html"><i class="fa-solid fa-network-wired" aria-hidden="true"></i>Wireless &amp; Fixed Networks</a>' +
        '<a href="cctv.html"><i class="fa-solid fa-video" aria-hidden="true"></i>CCTV Systems</a>' +
        '<a href="ai-analytics.html"><i class="fa-solid fa-brain" aria-hidden="true"></i>AI &amp; Analytics</a>' +
        '<a href="monitoring.html"><i class="fa-solid fa-satellite-dish" aria-hidden="true"></i>24/7 Monitoring</a>' +
        '<span class="v-mob-sec">Tools</span>' +
        '<a href="cctv-site-tool.html"><i class="fa-solid fa-crosshairs" aria-hidden="true"></i>CCTV Site Tool</a>' +
        '<a href="wireless-planner.html"><i class="fa-solid fa-wifi" aria-hidden="true"></i>Wireless Planner</a>' +
        '<span class="v-mob-sec">Contact</span>' +
        '<a href="index.html#contact"><i class="fa-solid fa-envelope" aria-hidden="true"></i>Contact Us</a>' +
        '<a href="index.html#contact" class="v-mob-cta">Get In Touch &rarr;</a>' +
      '</div>' +
    '</div>';

  var DESKTOP_NAV =
    '<nav id="vesta-nav">' +
      '<div class="v-inner">' +

        // Logo — left
        '<a href="index.html" class="v-logo" aria-label="Vesta IT Services home">' +
          '<img src="' + BLUE_LOGO + '" alt="Vesta IT Services Ltd"/>' +
        '</a>' +

        // Links — centre (flex:1 + justify-content:center)
        '<ul class="v-links" role="list">' +

          // About
          '<li><a href="index.html#about"' + lnkClass('index.html') + '>About</a></li>' +

          // Services ▾
          '<li class="v-dd">' +
            '<a href="index.html#services"' + ddBtnClass(SVC_PAGES) + '>' +
              'Services <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>' +
            '</a>' +
            '<div class="v-drop" role="menu">' +
              '<a href="networks.html"' + ddClass('networks.html') + '>' +
                '<div class="v-di-ico"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4a2 2 0 002 2h10a2 2 0 002-2V8"/><line x1="12" y1="14" x2="12" y2="16"/></svg></div>' +
                '<span class="v-di-txt">Wireless &amp; Fixed Networks</span>' +
              '</a>' +
              '<a href="cctv.html"' + ddClass('cctv.html') + '>' +
                '<div class="v-di-ico"><svg viewBox="0 0 24 24"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div>' +
                '<span class="v-di-txt">CCTV Systems</span>' +
              '</a>' +
              '<a href="ai-analytics.html"' + ddClass('ai-analytics.html') + '>' +
                '<div class="v-di-ico"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 110 20A10 10 0 0112 2z"/><path d="M8 12l2 2 4-4"/></svg></div>' +
                '<span class="v-di-txt">AI &amp; Analytics</span>' +
              '</a>' +
              '<a href="monitoring.html"' + ddClass('monitoring.html') + '>' +
                '<div class="v-di-ico"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>' +
                '<span class="v-di-txt">24/7 Monitoring</span>' +
              '</a>' +
            '</div>' +
          '</li>' +

          // Leadership
          '<li><a href="index.html#director"' + lnkClass('#director') + '>Leadership</a></li>' +

          // Tools ▾
          '<li class="v-dd">' +
            '<a href="#"' + ddBtnClass(TOOL_PAGES) + '>' +
              'Tools <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>' +
            '</a>' +
            '<div class="v-drop" role="menu">' +
              '<a href="cctv-site-tool.html"' + ddClass('cctv-site-tool.html') + '>' +
                '<div class="v-di-ico"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>' +
                '<span class="v-di-txt">CCTV Site Tool</span>' +
              '</a>' +
              '<a href="wireless-planner.html"' + ddClass('wireless-planner.html') + '>' +
                '<div class="v-di-ico"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/></svg></div>' +
                '<span class="v-di-txt">Wireless Planner</span>' +
              '</a>' +
            '</div>' +
          '</li>' +

          // Contact
          '<li><a href="index.html#contact"' + lnkClass('#contact') + '>Contact</a></li>' +

        '</ul>' +

        // CTA — right
        '<a href="index.html#contact" class="v-cta">Get In Touch &rarr;</a>' +

        // Hamburger
        '<button class="v-ham" id="vHam" aria-label="Open menu" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +

      '</div>' +
    '</nav>';

  /* ── FOOTER HTML ─────────────────────────────────────────── */
  var year = new Date().getFullYear();
  var FOOTER_HTML =
    '<div class="vf-inner">' +
      '<div>' +
        '<div class="vf-logo"><img src="' + WHITE_LOGO + '" alt="Vesta IT Services Ltd"/></div>' +
        '<p class="vf-tag">Enterprise-grade IT infrastructure, delivered with the expertise it deserves.</p>' +
        '<div class="vf-socs">' +
          '<a href="#" class="vf-soc" aria-label="Vesta IT on LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>' +
          '<a href="#" class="vf-soc" aria-label="Vesta IT on X / Twitter"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>' +
        '</div>' +
      '</div>' +
      '<div class="vf-col">' +
        '<h3 class="vf-col-h">Services</h3>' +
        '<ul>' +
          '<li><a href="networks.html">Wireless &amp; Fixed Networks</a></li>' +
          '<li><a href="cctv.html">CCTV Systems</a></li>' +
          '<li><a href="ai-analytics.html">AI &amp; Analytics</a></li>' +
          '<li><a href="monitoring.html">24/7 Monitoring</a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="vf-col">' +
        '<h3 class="vf-col-h">Tools</h3>' +
        '<ul>' +
          '<li><a href="cctv-site-tool.html">CCTV Site Tool</a></li>' +
          '<li><a href="wireless-planner.html">Wireless Planner</a></li>' +
        '</ul>' +
        '<div class="vf-col-gap">' +
          '<h3 class="vf-col-h">Company</h3>' +
          '<ul>' +
            '<li><a href="index.html#about">About Vesta IT</a></li>' +
            '<li><a href="index.html#director">Leadership</a></li>' +
            '<li><a href="index.html#contact">Contact Us</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="vf-col">' +
        '<h3 class="vf-col-h">Contact</h3>' +
        '<div class="vf-ci"><i class="fa-solid fa-location-dot" aria-hidden="true"></i><span>' + ADDRESS + '</span></div>' +
        '<div class="vf-ci"><i class="fa-solid fa-phone" aria-hidden="true"></i><a href="tel:+441634000000">' + PHONE + '</a></div>' +
        '<div class="vf-ci"><i class="fa-solid fa-envelope" aria-hidden="true"></i><a href="mailto:' + EMAIL + '">' + EMAIL + '</a></div>' +
        '<div class="vf-ci"><i class="fa-solid fa-clock" aria-hidden="true"></i><span>Mon&ndash;Fri, 08:00&ndash;18:00</span></div>' +
      '</div>' +
    '</div>' +
    '<div class="vf-bot">' +
      '<p class="vf-copy">&copy; ' + year + ' Vesta IT Services Ltd. All rights reserved. Registered in England &amp; Wales.</p>' +
       <a href="https://www.marketingformymates.com" rel="dofollow" target="_blank" style="color: inherit; text-decoration: none;">Built by marketingformymates.com</a>  +    
      '<div class="vf-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>' +
    '</div>';

  /* ── INJECT CSS ──────────────────────────────────────────── */
  var style = document.createElement('style');
  style.id = 'vesta-styles';
  style.textContent = CSS;
  document.head.appendChild(style);

  /* ── INJECT NAV ──────────────────────────────────────────── */
  var hdrEl = document.getElementById('vesta-header');
  if (hdrEl) {
    // Replace the placeholder div entirely (Fyrfly pattern — outerHTML swap)
    hdrEl.outerHTML = MOBILE_NAV + DESKTOP_NAV;
  }

  /* ── INJECT FOOTER ───────────────────────────────────────── */
  var ftrEl = document.getElementById('vesta-footer');
  if (ftrEl) { ftrEl.innerHTML = FOOTER_HTML; }

  /* ── SCROLL SHADOW ───────────────────────────────────────── */
  var navEl = document.getElementById('vesta-nav');
  if (navEl) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          navEl.classList.toggle('v-scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── MOBILE MENU ─────────────────────────────────────────── */
  var ham    = document.getElementById('vHam');
  var mob    = document.getElementById('vMob');
  var cls    = document.getElementById('vMobClose');

  function openMob() {
    mob.style.display = 'flex';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { mob.classList.add('v-open'); });
    });
    if (ham) ham.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMob() {
    if (mob) mob.classList.remove('v-open');
    if (ham) ham.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(function () { if (mob) mob.style.display = 'none'; }, 260);
  }

  if (ham) ham.addEventListener('click', openMob);
  if (cls) cls.addEventListener('click', closeMob);
  if (mob) {
    mob.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMob); });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mob && mob.classList.contains('v-open')) closeMob();
  });

  /* ── SMOOTH SCROLL ───────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var tgt = document.querySelector(a.getAttribute('href'));
    if (tgt) {
      e.preventDefault();
      window.scrollTo({ top: tgt.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    }
  });

  /* ── SCROLL REVEAL ───────────────────────────────────────── */
  var revEls = document.querySelectorAll('.reveal');
  if (revEls.length) {
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.1 });
      revEls.forEach(function (el) { obs.observe(el); });
    } else {
      revEls.forEach(function (el) { el.classList.add('visible'); });
    }
  }

})();
