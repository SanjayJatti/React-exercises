import "./styles.css";
import CharCounter from "./charCounter";
import Passwordmatch from "./PasswordMatch";
import DisableSubmit from "./DisableSubmit";
import DesignerTool from "./DesignerTool";
import ShowPassword from "./ShowPassword";
import Todo from "./Todo-App/todo";

export default function App() {
  return (
    <div className="App">
      <h1>React Exercises</h1>
      <CharCounter />
      <Passwordmatch />
      <DisableSubmit />
      <DesignerTool />
      <Todo />
      <ShowPassword />
    </div>
  );
}
