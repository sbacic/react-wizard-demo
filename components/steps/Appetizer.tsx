import React from 'react';
import { Field } from 'formik';
import { Footer, Submit } from 'components/ui/SubmitButton';
import { H1 } from 'components/ui/Headings';

const Form: React.FC = () => {
  const options = [
    'Pinto Bean Nachos',
    'Vegetable Samosas with Mint Chutney',
    'Seared Beef Tenderloin Mini Sandwiches',
    'Simple Caprese Skewers with Balsamic Dipping Sauce',
    'Sun Dried Tomato, Pesto & Garlic Bites',
    'Beer Bacon & Cheese Dip',
  ];

  return (
    <div className="pt-10">
      <H1>Appetizers</H1>
      {options.map((option) => (
        <div key={option} className="m-auto w-4/5 block my-2">
          <Field type="radio" className="mr-2" id={option} name="appetizer" value={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
      <Footer>
        <Submit />
      </Footer>
    </div>
  );
};

export default Form;
