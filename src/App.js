import logo from './logo.svg';
import './App.css';
import DemoFunctionComponents from './Components/DemoFunctionComponents';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import Databinding from './DataBinding/Databinding';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout></BaiTapLayout> */}
      <Databinding/>
    </div>
  );
}

export default App;
