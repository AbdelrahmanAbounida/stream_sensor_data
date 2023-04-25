import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const DataPlotter = () => {
  const [data, setData] = useState([{x:0,y:0}]);

  const d = [
    { x: 'Jan', y: 10 },
    { x: 'Feb', y: 20 },
    { x: 'Mar', y: 15 },
    { x: 'Apr', y: 30 },
    { x: 'May', y: 25 },
    { x: 'Jun', y: 35 },
  ];
  useEffect(()=>{
    
    const eventSource = new EventSource('http://127.0.0.1:5000/stream');

    eventSource.onmessage = (event) => {
        let last_x = data[data.length-1]?.x
        console.log(data)
        setData([...data,{x:last_x+1, y: event.data }]);
    };

    return () => {
      eventSource.close();
    };


  },[data])

  return (
    <LineChart width={800} height={400} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <Tooltip />
        <Legend />
  </LineChart>
  );
};

export default DataPlotter;