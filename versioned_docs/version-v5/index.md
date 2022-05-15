---
title: Getting started
hide_title: true
sidebar_label: Overview
slug: /
image: /img/meta/open-graph.png
hide_table_of_contents: true
custom_edit_url: null
---

<head>
  <title>BKKR Documentation</title>
  <meta
    name="description"
    content="A UI toolkit for building performant, high-quality mobile and desktop apps using web technologies - HTML, CSS, and JavaScript."
  />
  <link rel="canonical" href="https://bkkr-team.github.io/bkkr-docs/" />
  <link rel="alternate" href="https://bkkr-team.github.io/bkkr-docs/" hreflang="x-default" />
  <link rel="alternate" href="https://bkkr-team.github.io/bkkr-docs/" hreflang="en" />
  <meta property="og:url" content="https://bkkr-team.github.io/bkkr-docs/" />
  <meta property="og:image" content="/docs/img/bkkr-preview.png" />
  <meta property="og:image:alt" content="BKKR preview image" />
</head>

<header>
  <div className="landing-hero">
    <h1 className="landing-title">Design. Create. Build.</h1>
    <div className="landing-title-black">
      <svg viewBox="0 0 67 14">
        <defs>
          <linearGradient id="gradient" x1="0" x2="100%" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#23c7b8" offset="0%" />
            <stop stopColor="#23a6d5" offset="100%" />
          </linearGradient>
        </defs>
        <text x="-2" y="14" fill="url(#gradient)">
          BKKR
        </text>
      </svg>
    </div>
  </div>
</header>

<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="landing-icon"><path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z" />
</svg>
</div>
<div className="landing-section row">
<div className="col col-5 mb-3">
    <h2 className="landing-title">Getting started</h2>
</div>
<div className="col">
  <div className="mb-5">
    <h2 className="text-bolder">CDN</h2>
    <p>
      It's recommended to use jsdelivr to access the Framework from a CDN. To get the latest version, add the following
      inside the head element in an HTML file, or where external assets are included in the online code editor:
    </p>

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@bkkr/core/dist/bkkr/bkkr.esm.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@bkkr/core/dist/bkkr/bkkr.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@bkkr/core/css/bkkr.css" />
```

  </div>
  <div className="mb-5">
    <h2 className="text-bolder">BKKR + Angular</h2>
    <p>
      When using BKKR Framework in an Angular project, install the latest @bkkr/angular package from npm. This comes
      with all of the BKKR Framework components and Angular specific services and features.
    </p>

```bash
npm install @bkkr/angular@latest --save
```

  </div>
  <div className="landing-disabled">
    <h2 className="text-bolder">BKKR + React</h2>
    <p>
      To add BKKR Framework to an already existing React project, install the @bkkr/react and @bkkr/react-router
      package.
    </p>

```bash
npm install @bkkr/react@latest @bkkr/react-router@latest --save
```

  </div>
</div>
</div>

<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="landing-icon"><path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"/></svg>
</div>
<div className="landing-section row">
    <div className="col col-5 mb-3">
        <h2 className="landing-title">Usage</h2>
    </div>
    <div className="col">
    <div className="mb-5">
    <h2 className="text-bolder">UI Components</h2>
    <p>Use just like the HTML tags. You can choose from 50+ components which making it easy to build modern, high quality UIs that perform great everywhere.</p>

```html
<bkkr-card>
  <bkkr-img src="/assets/myImg.png" alt="myImg"></bkkr-img>
  <bkkr-card-header>
    <p className="text-small text-uppercase">Card Subtitle</p>
    <h2 className="text-bold">Card Title</h2>
  </bkkr-card-header>
  <bkkr-card-content>
    <p>Here’s a small text description for the card component. Nothing more, nothing less.</p>
    <bkkr-button size="block" color="primary">Learn more</bkkr-button>
  </bkkr-card-content>
</bkkr-card>
```

</div>
</div>
</div>

<p className="text-end text-small mb-0">Code licensed MIT, docs CC BY 3.0.</p>
