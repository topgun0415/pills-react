import React from "react";
import ProductItem from "./ProductItem";
import "./ViewProduct.css";

import MainNav from "../Main-Chris/MainNav/MainNav";

//export const ProductStateContext = React.createContext();

const pillyData = [
  {
    id: 1,
    itemTitle: "편안하고 상쾌한 하루를 위한",
    itemName: "발효효소 베이직",
    price: "18,500원",
    content1: "국제 특허 발효법 사용",
    content2: "10가지 효소를 한번에",
    content3: "감초추출물 등 다양한 원료 함유",
  },
  {
    id: 2,
    itemTitle: "높은 혈압 감소를 위한",
    itemName: "코엔자임Q10",
    price: "15,700원",
    content1: "향산화/높은 혈압 감소에 도움",
    content2: "인도산 코엔자임Q10 원료 사용",
    content3: "아사이베리 추출 분말 등 부원료 함유",
  },
  {
    id: 3,
    itemTitle: "피부 건강을 위한",
    itemName: "히알루론산 스피루리나",
    price: "19,500원",
    content1: "피부보습/피부건강/향산화에 도움",
    content2: "국내 최초 2종 기능성 제품",
    content3: "국내산 쌀겨추출분말 함유",
  },
  {
    id: 4,
    itemTitle: "면역력과 지구력을 위한",
    itemName: "홍삼 옥타코사놀",
    price: "21,000원",
    content1: "면역력 증진 및 향산화 효과",
    content2: "지구력 증진과 피로개선",
    content3: "국내산 6년근 홍삼",
  },
  {
    id: 5,
    itemTitle: "장과 원활한 배변활동을 위한",
    itemName: "프로바이오틱스",
    price: "13,800원",
    content1: "유산균 증신 및 유해균 억제",
    content2: "캐나다/미국 등 11종 유산균 사용",
    content3: "프리바이오틱스 부원료 함유",
  },
  {
    id: 6,
    itemTitle: "혈행개선/눈 건강을 위한",
    itemName: "오메가3",
    price: "13,500원",
    content1: "혈행 개선에 도움을 줄 수 있음",
    content2: "EPA와 DHA의 합 700mg",
    content3: "작은 어류를 사용한 rTG 오메가3",
  },
  {
    id: 7,
    itemTitle: "뼈/근육/신경을 위한",
    itemName: "칼슘 마그네슘 비타민D",
    price: "12,400원",
    content1: "뼈와 치아 형성에 필요",
    content2: "골다공증 발생 위험 감소에 도움",
    content3: "북대서양에서 수확한 해조류 사용",
  },
  {
    id: 8,
    itemTitle: "에너지 충전을 위한",
    itemName: "비타민B",
    price: "12,000원",
    content1: "체내 에너지 생성에 필요",
    content2: "각종 대사 활동에 필요",
    content3: "풍부한 7가지 비타민B 성분",
  },
];

const ProductList = () => {
  return (
    <>
      <header className="product-header">
        <nav className="HomePage">
          <MainNav />
        </nav>
        <div className="header-contents">
          <div className="wrapper">
            <h1>
              건강한 삻을 위한
              <br />
              필리의 연구와 도전은 계속됩니다.
            </h1>
            <div></div>
          </div>
        </div>
      </header>
      <section className="sticky-elem header-content">
        <div></div>
      </section>
      <div className="ProductList">
        <ProductItem pillyData={pillyData} />
      </div>
    </>
  );
};

export default ProductList;
