import React from "react";
import { Link } from "react-router-dom";
import "./ViewProduct.css";

const ProductItem = ({ pillyData }) => {
  return (
    <div className="container">
      {pillyData.map((data) => (
        <div className="item">
          <div className="header">
            <h2>
              <em>{data.itemTitle}</em>
              {data.itemName}
            </h2>
            <ul></ul>
          </div>
          <div className="content">
            <ul>
              <li>{data.content1}</li>
              <li>{data.content2}</li>
              <li>{data.content3}</li>
            </ul>
            <div>
              <span>30일분</span>
              <strike></strike>
              <p>{data.price}</p>
            </div>
          </div>
          <div className="footer">
            <p>
              <em>더보기</em>
            </p>
          </div>
          <div className="section-btn">
            <button className="btn btn-big btn-radius btn-shadow btn-put-bucket">
              + 장바구니
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
{
  /* <Link to={"/ProductDetail"}>제품 상세정보</Link> */
}
export default ProductItem;
