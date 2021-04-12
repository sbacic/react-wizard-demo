import React from 'react';
import { Formik, Form } from 'formik';
import { useWizard } from '@sbacic/react-wizard';
const Navigation: React.FC = () => {
  const { isFirst, step, back } = useWizard();

  return (
    <div className="flex flex-row justify-between">
      <button
        type="button"
        disabled={isFirst}
        onClick={back}
        className="bg-blue-400 h-10 w-32 text-white p-2 px-4 rounded-lg hover:bg-blue-100 transition duration-150 disabled:opacity-20 disabled:bg-blue-400"
      >
        Back
      </button>
      <div className="w-32 h-10 rounded-full border-blue-400 border-2 p-1">
        <div className={`bg-blue-300 h-full rounded-full duration-200`} style={{ width: `${(step + 1) * 25}%` }}></div>
      </div>
    </div>
  );
};

const FormikWrapper: React.FC = ({ children }) => {
  const { isLast, next } = useWizard();
  const initialValues = {};
  const onSubmit = () => {
    console.log('test');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={isLast ? onSubmit : next}>
      <Form className="w-full">
        <Navigation />
        {children}
      </Form>
    </Formik>
  );
};

export default FormikWrapper;
