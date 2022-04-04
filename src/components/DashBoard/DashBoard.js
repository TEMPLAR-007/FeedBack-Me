import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {

    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        axios.get('data.json')
            .then(data => setChartData(data.data)
            )
    }, [])
    return (
        <div className='container'>
            <h1 className='mt-5 mb-5 text-danger'>Our Achievements Details</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <LineChart
                        width={600}
                        height={400}
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="revenue" stroke="#ffc658" />
                    </LineChart>
                </div>

                <div className='col-md-6'>
                    <AreaChart
                        width={600}
                        height={400}
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <BarChart
                        width={600}
                        height={450}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sell" stackId="a" fill="#8884d8" />
                        <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="revenue" fill="#ffc658" />
                    </BarChart>
                </div>

                <div className='col-md-6'>
                    <PieChart width={500} height={500}>
                        <Pie data={chartData} dataKey="sell" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" />
                        <Pie data={chartData} dataKey="investment" cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="#82ca9d" label />
                        <Pie data={chartData} dataKey="revenue" cx="50%" cy="50%" innerRadius={90} outerRadius={110} fill="#ffc658" label />
                    </PieChart>
                </div>
            </div>
        </div>

    );
};

export default DashBoard;