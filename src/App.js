import React, { useState } from "react";
import BasicDetails from "./components/BasicDetails";
import PersonalDetails from "./components/PersonalDetails";
import QualificationDetails from "./components/QualificationDetails";

import "./App.css";
function App() {
  const [activePage, setActivePage] = useState(1);

  function nextForm() {
    setActivePage((prevState) => prevState + 1);
  }
  function ActivePage() {
    switch (activePage) {
      case 1:
        return <BasicDetails activePage={activePage} nextForm={nextForm} />;
      case 2:
        return <PersonalDetails activePage={activePage} nextForm={nextForm} />;
      case 3:
        return (
          <QualificationDetails activePage={activePage} nextForm={nextForm} />
        );
      default:
        break;
    }
  }
  return (
    <div>
      <ActivePage />
    </div>
  );
}

export default App;
