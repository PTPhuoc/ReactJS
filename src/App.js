import PageMain from "./PageMain/PageMain";
import Login from "./Login/SignIn";
import Footer from "./footer";
import "./App.css";
import { createContext } from "react";

export const StatusContext = createContext();

function App() {
  const IPDatabase = "http://192.168.1.57:5000";
  return (
    <StatusContext.Provider value={IPDatabase}>
      <div className="App">
        {window.location.pathname === "/Login" ? <Login /> : <PageMain />}
        <footer>
          <Footer />
        </footer>
      </div>
    </StatusContext.Provider>
  );
}

export default App;
