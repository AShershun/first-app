import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/MainContainer";

function App() {
  return (
   <>
    <Header/>
       <div className="main">
           <Sidebar/>
           <Main/>
       </div>
   </>
  );
}

export default App;
