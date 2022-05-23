import MainNav from "../components/Main-Chris/MainNav";
import MainScripts from "../components/Main-Chris/MainScripts";

const HomePage = () => {
  return (
    <div className="NavContainer">
      <div className="HomePage">
        <MainNav />
      </div>
      <MainScripts />
    </div>
  );
};

export default HomePage;
