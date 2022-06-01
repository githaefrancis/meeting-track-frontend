import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Task";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div>
      <Menu />
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
