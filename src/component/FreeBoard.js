import "./FreeBoard.css";
import "../assets/fonts/font.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function FreeBoard() {
  const navigate = useNavigate();
  const write_board = () => {
    navigate("../writeboard");
  };

  const [html, setHtml] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/freeboardtitle");
      const result = await response.text();
      setHtml(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section>
        <h1 id="free_board_header">자유게시판</h1>
        <hr />
      </section>
      <article id="free-board-body">
        <div
          className="board-list"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </article>
      <section className="button-regist">
        <input
          type="button"
          value="글쓰기"
          name="regist"
          onClick={write_board}
        />
      </section>
    </>
  );
}

export default FreeBoard;
