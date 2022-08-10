import PropDrillingC from "./C";

const PropDrillingB = (props) => {
  return (
    <>
      <p>I'm PropDrillingB</p>
      <PropDrillingC data={props.data} />
    </>
  );
};

export default PropDrillingB;
