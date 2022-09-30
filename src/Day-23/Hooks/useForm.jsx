import { useState } from "react";

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log({ name, value });

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitDetails = (data) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  };

  return { formData, handleInputChange, submitDetails };
};

export default useForm;
