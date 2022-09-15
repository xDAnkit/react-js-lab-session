import { useState } from "react";

const DayRevisionV4 = () => {
  const [profile, setProfile] = useState({ name: "", city: "", state: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Case 1 - Copy & update
    /*  const profileCopy = { ...profile };
    profileCopy[name] = value;
    setProfile(profileCopy); */

    // Case 2 - Update the getter & override
    profile[name] = value;
    // Incorrect way
    //setProfile(profile);

    // Correct way
    //setProfile({ ...profile });

    // Case 3 - Previous State copy
    setProfile((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div>
        <button disabled={false}>Hello</button>
        <label>Name: {profile.name}</label>
        <input
          placeholder="Enter name"
          value={profile.name}
          name="name"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>City: {profile.city}</label>
        <input
          placeholder="Enter city"
          value={profile.city}
          name="city"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>State: {profile.state}</label>
        <input
          placeholder="Enter State"
          value={profile.state}
          name="state"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default DayRevisionV4;
