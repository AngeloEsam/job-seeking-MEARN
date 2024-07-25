import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createContext, useState } from "react";
export const Context = createContext({ isAuthorized: false });
const AppWrapper = () => {
  const [user, setUser] = useState({});
  const [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <Context.Provider value={{ user, setUser, isAuthorized, setIsAuthorized }}>
      <App />
    </Context.Provider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
