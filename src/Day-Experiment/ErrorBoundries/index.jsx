import { useState } from "react";

const ErrorBoundExample = () => {
  const [profile, setProfile] = useState("");
  return profile.map((item) => {
    return (
      <div>
        <p>{item.name}</p>
      </div>
    );
  });
};

export default ErrorBoundExample;
