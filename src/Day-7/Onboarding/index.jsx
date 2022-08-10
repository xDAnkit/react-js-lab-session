import { useState } from "react";
import { Button } from "reactstrap";
import FormFour from "./FormFour";
import FormOne from "./FormOne";
import FormThree from "./FormThree";
import FormTwo from "./FormTwo";

const Onboarding = () => {
  const [currentView, setCurrentView] = useState(1);

  const _renderCurrentView = () => {
    if (currentView === 1) {
      return <FormOne />;
    }

    if (currentView === 2) {
      return <FormTwo />;
    }

    if (currentView === 3) {
      return <FormThree />;
    }

    if (currentView === 4) {
      return <FormFour />;
    }

    return null;
  };
  return (
    <>
      <p>Welcome to the Zoom Meeting</p>
      {_renderCurrentView()}
      <br />
      <Button onClick={() => setCurrentView(currentView + 1)}>
        Change View
      </Button>
    </>
  );
};

export default Onboarding;
