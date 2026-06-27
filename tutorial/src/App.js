




import "./App.css";
import MyButton from "./clickmebutton";
import { Welcome } from "./welcom";
import { Profile } from "./profile";
function App() {
  return (
    <div className="App">
      <Welcome />
   <Profile />
      <MyButton />
      
    </div>
  );
}

export default App;