import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './index.scss';

function HomepageHeader() {
  return (
    <header>
      <div className="container">
        <div className="landing-title">
          Design. Create. Build. 
        </div>
        <div className="landing-title-black">
          <svg viewBox="0 0 62 18">
            <text x="0" y="15">FASTER</text>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
<div id="#install" className="py-5">
    <div>
        <div className="mb-3">
            <div className="landing-icon"></div>
        </div>
        <div className="mb-3">
            <h1 className="text-bolder">Getting started</h1>
        </div>
        <div>
            <div className="mb-5">
                <h2 className="text-bold">CDN</h2>
                <p>
                    It's recommended to use jsdelivr to access the Framework from a CDN. To get the latest version, add
                    the following inside the head element in an HTML file, or where external assets are included in the
                    online code editor:
                </p>
                {/* <code>
                  <pre>
                    <script type="module" src="https://cdn.jsdelivr.net/npm/@bkkr/core/dist/bkkr/bkkr.esm.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/@bkkr/core/dist/bkkr/bkkr.js"></script>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@bkkr/core/css/bkkr.css" />
                  </pre>
                </code> */}
            </div>
            <div className="mb-5">
                <h2 className="text-bold">BKKR + Angular</h2>
                <p>When using BKKR Framework in an Angular project, install the latest @bkkr/angular package from npm.
                    This comes with all of the BKKR Framework components and Angular specific services and features.</p>
                    <code>
                      npm install @bkkr/angular@latest --save
                    </code>
            </div>
            <div className="disabled">
                <h2 className="text-bold">BKKR + React</h2>
                <p>To add BKKR Framework to an already existing React project, install the @bkkr/react and
                    @bkkr/react-router package.</p>
                  <code>
                    npm install @bkkr/react@latest @bkkr/react-router@latest --save
                  </code>
            </div>
        </div>
    </div>
</div>
      </main>
    </Layout>
  );
}
