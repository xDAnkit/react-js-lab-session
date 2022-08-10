import PropDrillingB from "./B";

const PropDrillingA = (props) => {
  return (
    <>
      <p>I'm PropDrillingA</p>
      <PropDrillingB data={props.data} />
    </>
  );
};

export default PropDrillingA;
