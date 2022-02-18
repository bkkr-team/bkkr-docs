import React, { useEffect, useRef, useCallback } from 'react';

import './index.scss';

const DocDemo = (props) => {
  const iframe = useRef(null);
  const iframeLoaded = useRef(false);
  const messageQueue = useRef([]);
  const newestMessage = useRef(null);

  useEffect(() => {
    window.addEventListener('demoMessage', handleMessage);

    () => window.removeEventListener('demoMessage', handleMessage);
  }, []);

  const handleMessage = useCallback(async (msg) => {
    iframeLoaded.current ? postMessage(msg) : messageQueue.current.push(msg);
  }, []);

  const postMessage = (msg) => {
    newestMessage.current = msg;
    try {
      if (iframe.current && iframe.current.contentWindow) {
        iframe.current.contentWindow.postMessage(msg.detail, '*');
      }
    } catch (e) {
      // ignore
    }
  };

  const onIframeLoad = () => {
    messageQueue.current.forEach((msg) => postMessage(msg));
    postMessage(newestMessage.current);
    messageQueue.current = [];
    iframeLoaded.current = true;
  };

  const sourceLink = (
    <a href={props.source} className="docs-demo-source" target="_blank" title="Demo Source">
      View Source
    </a>
  );

  const device = (
    <div className="docs-demo-device">
      <figure>
        <svg className="docs-demo-device__ios-notch" viewBox="0 0 219 31">
          <path
            d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z"
            fill-rule="evenodd"
          />
        </svg>
        <iframe
          loading="lazy"
          onLoad={onIframeLoad}
          src={`${props.url}`}
          ref={iframe}
        />
      </figure>
    </div>
  );

  return (
    <div className="doc-demo">
      {device}
      {props.source && sourceLink}
    </div>
  );
};

export default DocDemo;