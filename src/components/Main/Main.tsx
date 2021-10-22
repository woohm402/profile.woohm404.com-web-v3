import * as React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import { cPurple1, cWhite } from '../../styles/colors';

const Main: React.FC = () => {
  return (
    <>
      <PageWrapper backgroundColor={cWhite}>
        <h1>asdf</h1>
      </PageWrapper>
      <PageWrapper backgroundColor={cPurple1}>
        <h2>asdf</h2>
      </PageWrapper>
      <PageWrapper backgroundColor={cWhite}>
        <h3>qwer</h3>
      </PageWrapper>
    </>
  );
};

export default Main;
