
import Greet from "./components/Greet";
import "./index.css";
function App() {
  return (
    <>
     <Greet isLoggedin={true} name="kiran" count={89} />
    </>
  );
}

export default App;
