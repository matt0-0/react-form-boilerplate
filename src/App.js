import "./App.css";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [view, setView] = useState("login");
  return (
    <div className="App">
      {view === "login" ? <Login /> : <Register />}
      <div className="fixed bottom-0 left-0 w-full bg-gray-200 p-4 text-center">
        {view === "login" ? (
          <p>
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setView("register")}
            >
              Create one
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setView("login")}
            >
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
