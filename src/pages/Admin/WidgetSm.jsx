import { useGetUsersQuery } from "../../services/userApi";
import "./WidgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm(){
    const {data:users, isLoading} = useGetUsersQuery(true);
    return (
        <div className="widgetSm">
            <h3 className="widgetSmTitle">New Join Members</h3>
            <ul className="widgetSmList">
                {
                    (isLoading) ? 'Loading...' : (
                        users.map((user) => (
                        <li className="widgetSmListItem" key={user._id}>
                            <img src="https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetSmImg" />
                            <div className="widgetSmUserText">
                                <span className="widgetSmUserName">{user.username}</span>
                                {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
                            </div>
                            <div className="widgetSmButton">
                            <button className="widgetSmBtn"><Visibility className="widgetSmBtnIcon" /> Display</button>
                            </div>
                        </li>
                    ))
                    )
                }
            </ul>
        </div>
    )
}