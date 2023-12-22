import { useGetIncomeQuery } from "../../services/orderApi";
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo(){
    const {data: incomes, isLoading, isSuccess} = useGetIncomeQuery();
    console.log(incomes);
    const incomePercent = (isSuccess && incomes) ? (((incomes[1]?.total ?? 0) * 100) / ((incomes[0]?.total ?? 0) - 100)) : 0;
    return (
        <div className="featuredInfo">
            <div className="featuredInfoItem">
                <h2 className="featuredInfoTitle">Income</h2>
                <div className="featuredInfoMoney">
                    <h2 className="featuredInfoMoneyTitle">${incomes[1]?.total ?? 0}</h2>
                    <span className="featuredInfoText">${Math.floor(incomePercent)}
                    {incomePercent < 0 ? (
                    <ArrowDownward className="featuredIcon negative" />
                    ) : (
                    <ArrowUpward className="featuredIcon" />
                    )}
            </span>
                </div>
                <p>Compare to last month</p>
            </div>
            <div className="featuredInfoItem">
                <h2 className="featuredInfoTitle">Sales</h2>
                <div className="featuredInfoMoney">
                    <h2 className="featuredInfoMoneyTitle">$2,415</h2>
                    <span className="featuredInfoText">-11.4 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <p>Compare to last month</p>
            </div>
            <div className="featuredInfoItem">
                <h2 className="featuredInfoTitle">Cost</h2>
                <div className="featuredInfoMoney">
                    <h2 className="featuredInfoMoneyTitle">$2,415</h2>
                    <span className="featuredInfoText">-11.4 <ArrowUpward className="featuredIcon" /></span>
                </div>
                <p>Compare to last month</p>
            </div>
        </div>
    )
}