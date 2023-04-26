import "./App.css";
import Footer from "./Footer";
import Draggable from "react-draggable";
import { MenuList, MenuListItem, Separator, styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Datepicker from "./DatePicker";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

/* Pick a theme of your choice */
import original from "react95/dist/themes/original";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Footer />
        <Draggable>
          <img
            className="windowsFolder"
            src="src\assets\folder2.gif"
            alt="icon"
          />
        </Draggable>
        <p>🌿</p>{" "}
        <Draggable>
          <img
            className="windowsFolder"
            src="src\assets\All\Phone (all diodes off).ico"
            alt="icon"
          />
        </Draggable>
        <Draggable>
          <img
            className="windowsFolder"
            src="src\assets\All/Agent.ico"
            alt="icon"
          />
        </Draggable>
      </ThemeProvider>
    </div>
  );
}

export default App;
