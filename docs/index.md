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
            <stop stop-color="#23c7b8" offset="0%" />
            <stop stop-color="#23a6d5" offset="100%" />
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
    <img src="/docs/img/code-solid.svg" alt="code" class="landing-icon" />
</div>
<div class="landing-section row">
<div  class="col col-5 mb-3">
    <h2 class="landing-title">Getting started</h2>
</div>
<div class="col">
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
    <img src="/docs/img/pen-solid.svg" alt="code" class="landing-icon" />
</div>
<div class="landing-section row">
    <div class="col col-5 mb-3">
        <h2 class="landing-title">Usage</h2>
    </div>
    <div class="col">
    <div class="mb-5">
    <h2 class="text-bolder">UI Components</h2>
    <p>Use just like the HTML tags. You can choose from 50+ components which making it easy to build modern, high quality UIs that perform great everywhere.</p>

```html
<bkkr-card>
  <bkkr-img src="/assets/myImg.png" alt="myImg"></bkkr-img>
  <bkkr-card-header>
    <p class="text-small text-uppercase">Card Subtitle</p>
    <h2 class="text-bold">Card Title</h2>
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

<p class="text-end text-small mb-0">
    Code licensed MIT, docs CC BY 3.0.
</p>