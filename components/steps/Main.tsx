import React from 'react';
import { Field } from 'formik';
import { useWizard } from '@sbacic/react-wizard';
import { Submit } from 'components/ui/SubmitButton';
import { H1 } from 'components/ui/Headings';

const Form: React.FC = () => {
  const { go } = useWizard();

  const goToDessert = () => {
    go(0, true);
  };
  const options = [
    'Pepper and rhubarb bread',
    'Avocado and egg bagel',
    'Squash and apple crumble',
    'Lobster and nutritional yeast salad',
    'Tuna and celeriac soup',
    'Chicken and sweetcorn fusilli',
    'Grapefruit and anchovy salad',
    'Goat and crab curry',
  ];

  return (
    <div className="pt-10">
      <H1>Main</H1>
      {options.map((option) => (
        <div key={option} className="m-auto w-4/5 block my-2">
          <Field type="radio" className="mr-2" id={option} name="main" value={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
      <div className="absolute w-full bottom-5 flex flex-row justify-evenly">
        <button
          type="button"
          onClick={goToDessert}
          className="block bg-indigo-400 h-10 w-32 text-white px-4 rounded-lg hover:bg-blue-100 transition duration-150 disabled:opacity-20 disabled:bg-indigo-400"
        >
          Dessert?
        </button>
        <Submit>Order</Submit>
      </div>
    </div>
  );
};

export default Form;
