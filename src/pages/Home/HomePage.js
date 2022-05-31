import "./HomePage.css";

import MainNav from "../../components/Main-Chris/MainNav/MainNav";
import HeaderScripts from "../../components/Main-Chris/HeaderScripts/HeaderScripts";

const HomePage = () => {
  return (
    <div className="NavContainer">
      <div className="inner">
        <div>
          <MainNav />
        </div>
        <HeaderScripts />
      </div>
    </div>
  );
};

export default HomePage;
