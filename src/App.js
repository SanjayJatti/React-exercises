import "./styles.css";
import CharCounter from "./charCounter";
import Passwordmatch from "./PasswordMatch";
import DisableSubmit from "./DisableSubmit";
import DesignerTool from "./DesignerTool";
export default function App() {
  return (
    <div className="App">
      <h1>React Exercises</h1>
      <CharCounter />
      <Passwordmatch />
      <DisableSubmit />
      <DesignerTool />
    </div>
  );
}
