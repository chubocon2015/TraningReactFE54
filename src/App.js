import logo from './logo.svg';
import './App.css';
import DemoFunctionComponents from './Components/DemoFunctionComponents';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import Databinding from './DataBinding/Databinding';
import DataBinDingClassComponent from './DataBinding/DataBinDingClassComponent';
import HandelEvent from './HandelEvent/HandelEvent';
import DemoState from './DemoState/DemoState';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout></BaiTapLayout> */}
      {/* <Databinding/> */}
      {/* <DataBinDingClassComponent/> */}
      {/* <HandelEvent/>
      <DemoState/> */}
      {/* <BaiTapChonXe/> */}
      <RenderWithMap/>
    </div>
  );
}

export default App;
