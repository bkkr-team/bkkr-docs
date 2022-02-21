import React from 'react';

// CUSTOM CODE
import DocsDemo from '../DocsDemo';

import './index.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  demoUrl?: string;
  demoSourceUrl?: string;
}

const DocsUsage = (props: Props) => {
  const isDemo = props.demoUrl.length > 0;
  return (
    <div className="docs-usage">
      <div className="row">
        {isDemo && (
          <div className="col col-auto">
            <DocsDemo url={props.demoUrl} source={props.demoSourceUrl} />
          </div>
        )}
        <div className="col">{props.children}</div>
      </div>
    </div>
  );
};

export default DocsUsage;
