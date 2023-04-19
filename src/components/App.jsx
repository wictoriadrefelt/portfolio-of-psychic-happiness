import "./App.css";
import Footer from "./Footer";
import StarryNight from "./Stars";
import Draggable from "react-draggable";
import { icons } from "@react95/icons";

function App() {
  return (
    <div>
      <IconContainer key={earth}>72 83 </IconContainer>
      {/* <StarryNight /> */}
      <Footer />
      <Draggable>
        <img
          className="windowsFolder"
          src="src\assets\folder2.gif"
          alt="icon"
        />
      </Draggable>
      <Draggable>
        <img className="windowsFolder" src="src\assets\ring.png" alt="icon" />
      </Draggable>
      <Draggable>
        <img
          className="windowsFolder"
          src="src\assets\folder2.gif"
          alt="icon"
        />
      </Draggable>
    </div>
  );
}

export default App;
