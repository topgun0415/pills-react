import "./HomePage.css";

import MainNav from "../../components/Main-Chris/MainNav/MainNav";
import MainScripts from "../../components/Main-Chris/MainScripts/MainScripts";

const HomePage = () => {
  return (
    <div className="NavContainer">
      <div className="inner">
        <div className="HomePage">
          <MainNav />
        </div>
        <MainScripts />
      </div>
    </div>
  );
};

export default HomePage;
