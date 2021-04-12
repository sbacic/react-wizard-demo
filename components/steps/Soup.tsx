import React from 'react';
import { Field } from 'formik';
import { Footer, Submit } from 'components/ui/SubmitButton';
import { H1 } from 'components/ui/Headings';

const Form: React.FC = () => {
  const options = [
    'Butternut Squash Soup',
    'Mulligatawny',
    'Bouillon Soup',
    'Cream of Artichoke Soup',
    'Ukha',
    'Beet Soup',
  ];

  return (
    <div className="pt-10">
      <H1>Soup</H1>
      {options.map((option) => (
        <div key={option} className="m-auto w-4/5 block my-2">
          <Field type="radio" className="mr-2" id={option} name="soup" value={option} />
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
