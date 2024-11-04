import { AppRouter } from "./router/routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <AppRouter></AppRouter>
    </Router>
  );
}

export default App;
