import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";

import Test1 from "./Test1";
import Test2 from "./Test2";

const MainNav = () => {
  //이미지 클릭시 새로고침 임시 이벤트
  const imgClick = () => {};

  return (
    <div className="MainNav">
      <div>
        <BrowserRouter>
          <nav>
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              onClick={() => imgClick()}
            />
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
          <Routes>
            <Route path="/" />
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/test3" />
            <Route path="/test4" />
            <Route path="/test5" />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default MainNav;
