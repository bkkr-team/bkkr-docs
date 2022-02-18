import React from 'react';

// CUSTOM CODE
import DocDemo from '../DocDemo';

import './index.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  demoUrl?: string;
  demoSourceUrl?: string;
}

const DocUsage = (props: Props) => {
  const section = (
    <div className="row">
      {props.demoUrl && (
        <div className="col">
          <div className="doc-demo-wrapper">
            <DocDemo url={props.demoUrl} source={props.demoSourceUrl} />
          </div>
        </div>
      )}
      <div className="col">{props.children}</div>
    </div>
  );

  return <div className="doc-usage">{section}</div>;
};

export default DocUsage;
