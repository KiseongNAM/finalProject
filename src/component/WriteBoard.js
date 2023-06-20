import "../assets/fonts/font.css";
import "./WriteBoard.css";
import { useNavigate } from "react-router-dom";

const WriteBoard = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section>
        <h1 id="write_board_header">자유게시판</h1>
        <hr />
      </section>
      <article>
        <form className="write-board" action="/writefreeboard" method="post">
          <div className="board-title">
            <label htmlFor="title-board">제목 : </label>
            <input
              id="title-board"
              type="text"
              name="title-board"
              placeholder="여기에 제목을 입력하세요"
              required
            />
          </div>
          <textarea
            name="content-board"
            id="content-board"
            cols="85"
            rows="15"
            placeholder="여기에 글을 쓰세요"
            required
          ></textarea>
          <div className="button-write-board">
            <input type="submit" value="작 성" name="write-board" />
            <input
              type="button"
              value="취 소"
              name="cancel-wirte"
              onClick={goBack}
            />
          </div>
        </form>
      </article>
    </>
  );
};

export default WriteBoard;
