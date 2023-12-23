import "./Dashboard.css";
import FeaturedInfo from "./FeaturedInfo";
import WidgetSm from "./WidgetSm";
import WidgetLg from "./WidgetLg";
import Chart from "./Chart";
import { useGetUserStatsQuery } from "../../services/userApi";
import { useEffect, useMemo, useState } from "react";

const Dashboard = () => {
    const {data: stats, isSuccess} = useGetUserStatsQuery();
    const [userStats, setUserStats] = useState([]);
    const MONTHS = useMemo(() => [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Sep',
        'Oct',
        'Agu',
        'Nov',
        'Dec'
    ], []);

    useEffect(() => {
        isSuccess && stats.map((item) => 
            setUserStats((prev) => [
            ...prev,
            {name: MONTHS[item._id - 1], "Active User": item.total},
        ])
        )
    }, [MONTHS, isSuccess]);

    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title="User Analytices" data={userStats} dataKey="Active User" grid/>
            <div className="widget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Dashboard;