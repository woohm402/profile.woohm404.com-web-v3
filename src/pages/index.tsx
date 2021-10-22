import * as React from 'react';
import Main from '../components/Main/Main';
import { useState } from 'react';
import { throttle } from 'lodash';

import '../styles/reset.css';

// markup
const IndexPage: React.FC = () => {
  const [, setScroll] = useState<number>(0);

  const handleScroll = throttle(() => {
    setScroll(Math.random());
  }, 1000);

  return (
    <main onScroll={handleScroll}>
      <Main />
    </main>
  );
};

export default IndexPage;
