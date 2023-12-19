import { AttachMoneyOutlined, BarChartOutlined, ChatBubbleOutlineOutlined, Home, MailOutlined, ManageAccountsOutlined, PersonOutline, RecyclingOutlined, Settings, Storefront, Timeline, TrendingUp } from "@mui/icons-material";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Dashboard</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link className="siderListLink" to="/">
                            <Home className="listItemIcon" /> Home
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="listItemIcon" /> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="listItemIcon" /> Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Quick Menu</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link className="siderListLink" to="/users">
                                <PersonOutline className="listItemIcon" /> Users
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="siderListLink" to="products">
                            <Storefront className="listItemIcon" /> Products
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyOutlined className="listItemIcon" /> Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlined className="listItemIcon" /> Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Notifications</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlined className="listItemIcon" /> Mail
                        </li>
                        <li className="sidebarListItem">
                            <RecyclingOutlined className="listItemIcon" /> Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlined className="listItemIcon" /> Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Staff</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ManageAccountsOutlined className="listItemIcon" /> Manage
                        </li>
                        <li className="sidebarListItem">
                            <Settings className="listItemIcon" /> Settings
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}