import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import MainScripts from "./MainScripts";

import Test1 from "./Test1";
import Test2 from "./Test2";

const MainNav = () => {
  //이미지 클릭시 새로고침 임시 이벤트
  const imgClick = () => {};

  return (
    <div className="MainNav">
      <div>
        <nav>
          <Link to={"/"}>
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} />
          </Link>
          <ul>
            <li>
              <Link to={"/test1"}>제품보기</Link>
            </li>
            <li>
              <Link to={"/test2"}>고객후기</Link>
            </li>
            <li>
              <Link to={"/test3"}>장바구니</Link>
            </li>
            <li>
              <Link to={"/test4"}>고객센터</Link>
            </li>
            <li>
              <Link to={"/test5"}>기업복지</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
