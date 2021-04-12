import React from 'react';
import Head from 'next/head';
import { Wizard, Steps, Optional } from '@sbacic/react-wizard';
import FormikWrapper from 'components/FormikWrapper';
import Appetizer from 'components/steps/Appetizer';
import Soup from 'components/steps/Soup';
import Main from 'components/steps/Main';
import Dessert from 'components/steps/Dessert';
import Summary from 'components/steps/Summary';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Head>
        <title>React-Wizard Demo</title>
      </Head>
      <Wizard wrapInSteps={false}>
        <div className="container w-2/5 m-auto max-w-3xl h-1/2 border-blue-400 border-2 p-5 rounded-xl relative">
          <FormikWrapper>
            <Steps>
              <Appetizer />
              <Soup />
              <Main />
              <Summary />
            </Steps>
            <Optional>
              <Dessert />
            </Optional>
          </FormikWrapper>
        </div>
      </Wizard>
    </div>
  );
};

export default Home;
