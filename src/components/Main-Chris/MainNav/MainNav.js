import "./MainNav.css";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="Header">
      <div>
        <nav className="MainNav">
          <Link to={"/"}>
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="알트는 필수사항"
            />
          </Link>
          <div className="MainNavList">
            <span>
              <Link to={"/test1"}>제품보기</Link>
            </span>
            <span>
              <Link to={"/test2"}>고객후기</Link>
            </span>
            <span>
              <Link to={"/test3"}>장바구니</Link>
            </span>
            <span>
              <Link to={"/test4"}>고객센터</Link>
            </span>
            <span>
              <Link to={"/test5"}>기업복지</Link>
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
