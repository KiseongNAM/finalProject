import "./Header.css";
import header_icon from "./Header.png";

const Header = ({ onOpen }) => {
  return (
    <header>
      <div className="header_wrap">
        <a href="/">
          <img src={header_icon} alt="백경이" id="header_img" />
          <h1 id="header">백경이네 컴공이</h1>
        </a>
      </div>
      <nav id="login">
        <input type="button" name="login" value="로그인" onClick={onOpen} />

        <a href="/join">
          <input type="button" name="join" value="회원가입" />
        </a>
      </nav>
      <nav className="nav_bar">
        <ul id="nav_list">
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="/notice">공지사항</a>
          </li>
          <li>
            <a href="/subject">수강과목</a>
          </li>
          <li>
            <a href="/freeboard">자유게시판</a>
          </li>
          <li>
            <a href="/jobnotice">취업공지</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
