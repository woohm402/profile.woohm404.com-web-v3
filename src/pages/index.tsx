import * as React from 'react';
import Main from '../components/Main/Main';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const IndexPage: React.FC = () => {
  return (
    <main style={pageStyles}>
      <Main />
    </main>
  );
};

export default IndexPage;
