import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import craftablesService from "./services/craftables";
import "./App.css";

const App = () => {
  const ahData = useSelector((state) => state);

  useEffect(() => {
    craftablesService.getAll().then((res) => {
      console.log(res.data);
    });
  }, []);

  return <div>Ah data: {ahData}</div>;
};

export default App;
