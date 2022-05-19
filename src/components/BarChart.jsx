import React, {useContext, useEffect, useRef} from 'react'
import * as d3 from 'd3'
import { Link } from 'react-router-dom'

import BarChartContext from '../context/BarChartContext';

const BarChart = () => {
  const {data, changeData} = useContext(BarChartContext);

  const ref = useRef();

  const width = 400;
  const height = 400;

  useEffect(() => {
    changeData();
  }, []);

  useEffect(() => {
    const svg = d3.select(ref.current)
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid black")
  }, []);

  useEffect(() => {
    draw();
  }, [data]);

  const draw = () => {
        
    const svg = d3.select(ref.current);
    var selection = svg.selectAll("rect").data(data);
    var yScale = d3.scaleLinear()
                    .domain([0, d3.max(data)])
                    .range([0, height-100]);
    
    selection
        .transition().duration(300)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => height - yScale(d))

            selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "rgba(0, 162, 255, 0.726)")
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))
        
        selection
            .exit()
            .transition().duration(300)
            .attr("y", (d) => height)
            .attr("height", 0)
            .remove()
}

  return (
      <>
        <div className="chart">
            <svg
                ref={ref}
            ></svg>
            <div className="chart__link">
                <Link to={'/'} className='btn'>Back Home</Link>
                <button className='btn' onClick={changeData}>Generate</button>
            </div>
        </div>
        
      </>
  );
}

export default BarChart;