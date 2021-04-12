import React from 'react';
import { useFormikContext } from 'formik';
import { H1 } from 'components/ui/Headings';
import { Submit, Footer } from 'components/ui/SubmitButton';
import { useWizard } from '@sbacic/react-wizard';

const Form: React.FC = () => {
  const { values, resetForm } = useFormikContext();
  const { go, step, optional } = useWizard();
  const { appetizer, soup, main, dessert } = values as any;
  const reset = (e) => {
    e.preventDefault();
    go(0);
    resetForm();
    console.log('test');
  };
  console.log(step, optional);

  return (
    <div className="pt-10">
      <H1>You ordered</H1>
      <div className="w-4/5 m-auto mt-10">
        <div className="pb-4">
          <h4 className="text-2xl">Appetizer</h4>
          <span>{appetizer}</span>
        </div>
        <div className="pb-4">
          <h4 className="text-2xl">Soup</h4>
          <span>{soup}</span>
        </div>
        <div className="pb-4">
          <h4 className="text-2xl">Main</h4>
          <span>{main}</span>
        </div>
        <div className="pb-4">
          <h4 className="text-2xl">Dessert</h4>
          <span>{dessert || 'None'}</span>
        </div>
      </div>
      <Footer>
        <Submit type="button" onClick={reset}>
          Reset
        </Submit>
      </Footer>
    </div>
  );
};

export default Form;
