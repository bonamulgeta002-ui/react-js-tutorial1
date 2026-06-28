import "./App.css";
import Dashboard from "./pages/Dashboard";
import Productscards from "./pages/productscards";
import StateExample from "./pages/stateexample";
import SignInForm from "./pages/SignInForm";
function App() {
  return (
    <div className="App">
      <h1>My React App</h1>

      <Dashboard />

      <StateExample />

      <Productscards />

      {/* 👇 SIGN IN FORM HERE */}
      <SignInForm />
    </div>
  );
}

export default App;