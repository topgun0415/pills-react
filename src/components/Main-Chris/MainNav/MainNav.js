import "./MainNav.css";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="MainNav">
      <nav>
        <Link to={"/"}>
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="알트는 필수사항"
          />
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
  );
};

export default MainNav;
