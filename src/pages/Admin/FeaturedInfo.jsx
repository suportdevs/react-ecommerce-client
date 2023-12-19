import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo(){
    return (
        <div className="featuredInfo">
            <div className="featuredInfoItem">
                <h2 className="featuredInfoTitle">Revenue</h2>
                <div className="featuredInfoMoney">
                    <h2 className="featuredInfoMoneyTitle">$2,415</h2>
                    <span className="featuredInfoText">-11.4 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <p>Compare to last month</p>
            </div>
            <div className="featuredInfoItem">
                <h2 className="featuredInfoTitle">Revenue</h2>
                <div className="featuredInfoMoney">
                    <h2 className="featuredInfoMoneyTitle">$2,415</h2>
                    <span className="featuredInfoText">-11.4 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <p>Compare to last month</p>
            </div>
            <div className="featuredInfoItem">
                <h2 className="featuredInfoTitle">Revenue</h2>
                <div className="featuredInfoMoney">
                    <h2 className="featuredInfoMoneyTitle">$2,415</h2>
                    <span className="featuredInfoText">-11.4 <ArrowUpward className="featuredIcon" /></span>
                </div>
                <p>Compare to last month</p>
            </div>
        </div>
    )
}