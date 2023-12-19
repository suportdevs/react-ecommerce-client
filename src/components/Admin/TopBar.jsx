import "./TopBar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function TopBar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <h2 className="logo">Dashboard</h2>
                </div>
                <div className="topbarRight">
                    <div className="topbarRightIconWrapper">
                        <NotificationsNone />
                        <span className="iconBadge">2</span>
                    </div>
                    <div className="topbarRightIconWrapper">
                        <Language className="topRightIcon" />
                    </div>
                    <div className="topbarRightIconWrapper">
                        <Settings className="topRightIcon" />
                    </div>
                    <img src="https://media.istockphoto.com/id/1320653933/photo/handsome-middle-aged-man-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=zxgREH3D9siF9lgH3_s2LUsRYxFDv68TCVds4sv20Gc=" alt="" className="topRightAvatar" />
                </div>
            </div>
        </div>
    )
}