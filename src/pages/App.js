import React from "react";
import { Router } from "@reach/router";
import TeamsPage from "../components/teamDetails/TeamDetails";

const App = () => (
  <Router>
  
    <TeamsPage path="/:[appGroup.name]" />
    {/* <TeamsPage path="/members/:members" /> */}
  </Router>
);

export default App;
