import React, { useState, useRef, forwardRef } from "React";

const Input = forwardRef((props, ref) => {
  return (
    <>
      <input ref={ref} {...props} />
    </>
  );
});

const ForwardRefExample = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const onInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const focus = () => {
    inputRef.current.style.backgroundColor = "red";

    inputRef.current.focus();
  };

  return (
    <>
      <Input value={value} onChange={onInputChange} ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default ForwardRefExample;
