import React from 'react';

// CUSTOM CODE
import DocsDemo from '../DocsDemo';

import './index.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  demoUrl?: string;
  demoSourceUrl?: string;
}

const DocsUsage = (props: Props) => {
  const section = (
    <div className="row">
      {props.demoUrl && (
        <div className="col col-auto">
          <DocsDemo url={props.demoUrl} source={props.demoSourceUrl} />
        </div>
      )}
      <div className="col">{props.children}</div>
    </div>
  );

  return <div className="docs-usage">{section}</div>;
};

export default DocsUsage;
