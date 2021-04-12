import React from 'react';
import { Field } from 'formik';
import { Footer, Submit } from 'components/ui/SubmitButton';
import { H1 } from 'components/ui/Headings';

const Form: React.FC = () => {
  const options = ['Kluai buat chi', 'Cheesecake', 'Babka', 'Gelato', 'Danish pastry', 'Baklava'];

  return (
    <div className="pt-10">
      <H1>Dessert</H1>
      {options.map((option) => (
        <div key={option} className="m-auto w-4/5 block my-2">
          <Field type="radio" className="mr-2" id={option} name="dessert" value={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
      <Footer>
        <Submit>Order</Submit>
      </Footer>
    </div>
  );
};

export default Form;
