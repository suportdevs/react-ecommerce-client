import { useGetOrdersQuery } from "../../services/orderApi";
import "./WidgetLg.css";

export default function WidgetLg(){
    const {data: orders, isLoading} = useGetOrdersQuery();
    const Button = ({type}) => {
        return <button className={"btn " + type}>{type}</button>
    }
    console.log(isLoading);
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <div className="widgetLgList">
                <table className="widgetLgTable">
                    <tr>
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amout</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    {
                        (isLoading) && <tr>
                                <th>Loading...</th>
                            </tr>
                    }
                    {
                        orders && orders.map((order) => (
                            <tr>
                                <td className="widgetLgTd widgetLgCustomer">
                                    <img src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetLgImg"/>
                                    <span className="widgetLgTdTitle">{order.userId}</span>
                                </td>
                                <td className="widgetLgTd widgetLgTdGray">{order.createdAt}</td>
                                <td className="widgetLgTd widgetLgTdGray">{order.amount}</td>
                                <td className="widgetLgTd">
                                <Button type={order.status} />
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}