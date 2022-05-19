import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from "./components/Header";
import BarChart from "./components/BarChart";

import { ToastContainer } from "react-toastify";

import { BarChartProvider } from './context/BarChartContext';



const App = () => {
  
  return (
    <BarChartProvider>
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Header/>} />
            <Route path='/barChart' element={<BarChart />} />
          </Routes>
          <ToastContainer/>
        </Router>
      </>
    </BarChartProvider>
  );
}

export default App;