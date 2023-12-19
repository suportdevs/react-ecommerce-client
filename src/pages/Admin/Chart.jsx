import "./Chart.css";
import { XAxis, ResponsiveContainer, LineChart, Line, Tooltip, CartesianGrid } from 'recharts';
export default function Chart({title, data, dataKey, grid}){
    
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data} >
                {grid && <CartesianGrid strokeDasharray="5 5" />}
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey={dataKey}></Line>
                <Tooltip />
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
}