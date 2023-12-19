import "./Dashboard.css";
import FeaturedInfo from "./FeaturedInfo";
import WidgetSm from "./WidgetSm";
import WidgetLg from "./WidgetLg";
import Chart from "./Chart";
import { userData } from "./userData";

const Dashboard = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title="User Analytices" data={userData} dataKey="Active User" grid/>
            <div className="widget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Dashboard;