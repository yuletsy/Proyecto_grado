import { useEffect, useState } from "react";

const useForm = (initialState: any, fn: any) => {
  const [values, saveValues] = useState(initialState);
  const [submitForm, saveSubmitForm] = useState(false);

/* istanbul ignore next */
  useEffect(() => {
    if (submitForm) {
      fn();
      return;
    } 
      saveSubmitForm(false);
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitForm]);

  const handleChange = (e: any) => {
    saveValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  /* istanbul ignore next */
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    saveSubmitForm(true);
  };
  
  return {
    values,
    handleChange,
    handleSubmit,
    saveSubmitForm, 
    submitForm, 
    saveValues
  };
};

export default useForm;
