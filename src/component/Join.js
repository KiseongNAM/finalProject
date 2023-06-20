import { useNavigate } from "react-router-dom";
import "./Join.css";

function Join() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section className="join">
        <h1 id="join_header">회원가입</h1>
        <hr />
      </section>
      <form action="/writejoin" method="post">
        <div className="input-id">
          <input
            id="input-id"
            type="text"
            name="input-id"
            placeholder="ID"
            required
          />
          <input
            id="button-check-id"
            type="button"
            name="check-id"
            value="ID 검사"
          />
          <span id="m_id-chek"></span>
        </div>
        <div className="input-password">
          <input
            id="input-password"
            type="password"
            name="input-password"
            placeholder="Password"
            required
          />
          <input
            id="input-check-password"
            type="password"
            name="check-password"
            placeholder="Password 확인"
            required
          />
        </div>
        <div className="input-student-number">
          <input
            id="input-student-number"
            type="text"
            name="student-number"
            placeholder="학번 입력"
            required
          />
          <input
            id="button-check-number"
            type="button"
            name="check-number"
            value="컴공 확인"
          />
        </div>
        <div className="input-nickname">
          <input
            id="input-nickname"
            type="text"
            name="nickname"
            placeholder="별명 입력"
            required
          />
          <input
            id="button-check-nickname"
            type="button"
            name="check-nickname"
            value="중복 확인"
          />
        </div>
        <div className="button-confirm">
          <input
            id="button-join"
            type="submit"
            name="button-join"
            value="회원가입"
          />

          <input
            id="button-cancel"
            type="button"
            name="button-cancel"
            value="취소"
            onClick={goBack}
          />
        </div>
      </form>
    </>
  );
}

export default Join;
