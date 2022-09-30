import { useState } from "react";
import useForm from "./Hooks/useForm";
import NormalComp from "./NormalComponent";
import PureComp from "./PureComp";

const CustomHookExample = () => {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const { formData, handleInputChange } = useForm({
    name: "",
    email: "",
  });

  return (
    <>
      <p>
        {formData.name}
        {formData.email}
      </p>
      <input
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <button>Submt</button>
      <NormalComp name={formData.name} />
      <PureComp name={formData.name} />
    </>
  );
};

export default CustomHookExample;
