import { createContext, useState } from "react";

const BarChartContext = createContext();

const datas = [
    [10, 30, 40, 20, 50, 20, 10, 55],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30],
    [30, 20, 15, 35, 70, 55, 30]
]
  
let i = 0;

export const BarChartProvider = ({children}) =>{
    const [data, setData] = useState([]);
    
    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }    

    return (
        <BarChartContext.Provider value={{
            data,
            changeData
        }}
        >
            {children}
        </BarChartContext.Provider>
    )
}

export default BarChartContext;