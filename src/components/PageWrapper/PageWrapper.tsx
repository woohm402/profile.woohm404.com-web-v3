import * as React from 'react';

import './PageWrapper.css';
import { useRef } from 'react';

interface IProps {
  backgroundColor?: string;
}

const PageWrapper: React.FC<IProps> = ({ children, backgroundColor = '#ffffff' }) => {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={pageRef} className="wrapper" style={{ backgroundColor }}>
      <div className={'inner'}>{children}</div>
    </div>
  );
};

export default PageWrapper;
