import { Link, useLocation } from "react-router-dom";
import "./Product.css";
import Chart from "./Chart";
import { Publish } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useGetIncomeQuery } from "../../services/orderApi";
import { useEffect, useMemo, useState } from "react";

export default function AdminProduct() {
    const location = useLocation()
    const productId = location.pathname.split("/")[4];
    const [incoemStats, setIncomeStats] = useState([]);
    const product = useSelector(state => state.products.products.find((product) => product._id === productId));    
    
    const {data: incomes, isLoading, isSuccess} = useGetIncomeQuery(productId);
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
        isSuccess && incomes.map((item) => 
            setIncomeStats((prev) => [
            ...prev,
            {name: MONTHS[item._id - 1], "Sales": item.total},
        ])
        )
    }, [MONTHS, isSuccess]);
    console.log(incomes)

    const productData = [
        {
          name: "Jan",
          "Sales": 4000,
        },
        {
          name: "Feb",
          "Sales": 3000,
        },
        {
          name: "Mar",
          "Sales": 5000,
        },
      ];
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={incoemStats} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.image} alt="" className="productInfoImg" />
                  <span className="productName">{product.name}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id: </span>
                      <span className="productInfoValue"> {product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Rate: </span>
                      <span className="productInfoValue">{product.rate}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock: </span>
                      <span className="productInfoValue">{product.isStock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" value={product.name} placeholder="Apple AirPod" />
                  <label>Product Description</label>
                  <input type="text" value={product.description} placeholder="Description" />
                  <label>Product Rate</label>
                  <input type="text" value={product.rate} placeholder="Rate" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.image} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}