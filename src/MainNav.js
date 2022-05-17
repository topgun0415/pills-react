import pilly from "./pilly.png";

const Main = () => {
  return (
    <div className="Main">
      <img src={pilly} />
      <nav>
        <a className="MainA" href="">
          제품보기
        </a>
        <a className="MainA" href="">
          고객후기
        </a>
        <a className="MainA" href="">
          장바구니
        </a>
        <a className="MainA" href="">
          고객센터
        </a>
        <a className="MainA" href="">
          기업복지
        </a>
      </nav>
      <br />
    </div>
  );
};

export default Main;
