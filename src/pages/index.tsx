import * as React from 'react';
import Main from '../components/Main/Main';
import { useEffect, useState } from 'react';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const IndexPage: React.FC = () => {
  const [{ width, height }, setSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = (e) => {
      setSize({ width: e.target.innerWidth, height: e.target.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={pageStyles}>
      <Main width={width} height={height} />
    </main>
  );
};

export default IndexPage;
