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
  <link rel="canonical" href="https://ionicframework.com/docs" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="x-default" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="en" />
  <meta property="og:url" content="https://ionicframework.com/docs" />
</head>

<header>
  <div className="container">
    <h1 className="landing-title">Design. Create. Build.</h1>
    <div className="landing-title-black">
      <svg viewBox="0 0 62 18">
        <text x="0" y="15">
          FASTER
        </text>
      </svg>
    </div>
  </div>
</header>

<div>
<div size="12" size-lg="5" class="mb-3">
    <h2 class="text-bolder">Getting started</h2>
</div>
<div>
  <div className="mb-5">
    <h2 className="text-bold">CDN</h2>
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
    <h2 className="text-bold">BKKR + Angular</h2>
    <p>
      When using BKKR Framework in an Angular project, install the latest @bkkr/angular package from npm. This comes
      with all of the BKKR Framework components and Angular specific services and features.
    </p>

```bash
npm install @bkkr/angular@latest --save
```

  </div>
  <div className="disabled">
    <h2 className="text-bold">BKKR + React</h2>
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
    <div class="mb-3">
        <h2 class="text-bolder">Usage</h2>
    </div>
    <div class="mb-5">
    <h2 class="text-bold">UI Components</h2>
    <p>Use just like the HTML tags. You can choose from 50+ components which making it easy to build modern, high quality UIs that perform great everywhere.</p>

```html
<bkkr-card>
    <bkkr-img src="/assets/myImg.png" alt="myImg"></bkkr-img>
    <bkkr-card-header>
        <p class="text-small text-uppercase">Card Subtitle</p>
        <h2 class="text-bold">Card Title</h2>
    </bkkr-card-header>
    <bkkr-card-content>
        <p>
            Here’s a small text description for the card component. 
            Nothing more, nothing less.
        </p>
        <bkkr-button size="block" color="primary">Learn more</bkkr-button>
    </bkkr-card-content>
</bkkr-card>
```

</div>
</div>
