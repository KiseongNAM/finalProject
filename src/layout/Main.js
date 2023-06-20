import "./Main.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { load } from "cheerio";

function Main() {
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
  useEffect(() => {
    const getHtml = async () => {
      try {
        const response = await axios.get("https://ce.pknu.ac.kr/ce/1814");
        const htmlData = response.data;
        let trList = [];
        const $ = load(htmlData);
        const $bodyList = $("tr.noti").children("td.bdlTitle");
        $bodyList.each(function (i, elem) {
          trList[i] = {
            title: $(this).find("b a").text(),
            url:
              "ce.pknu.ac.kr/ce/1814" +
              $(this).find("td.bdlTitle b a").attr("href"),
          };
        });

        const data = trList.filter((n) => n.title);
        return data;
      } catch (error) {
        console.error(error);
      }
    };

    getHtml().then((res) => {
      const notice = document.getElementById("main-notice-title");
      for (let i = 0; i < 5; i++) {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        let text = document.createTextNode(res[i].title);
        let url_text = "https://".concat(res[i].url);

        anchor.setAttribute("href", url_text);
        anchor.append(text);
        li.append(anchor);
        notice.append(li);
      }
    });
  }, []);
  const close_ads = () => {
    document.getElementById("sidebar_right").style.display = "none";
  };

  return (
    <>
      <div className="container">
        <section id="sidebar_left">
          <aside>사이드바</aside>
        </section>
        <section id="notice">
          <div className="wrap">
            <h4>공지사황</h4>
            <span id="more">
              <a href="/notice">더보기</a>
            </span>
          </div>
          <div id="main-notice-title">
            <ul></ul>
          </div>
        </section>
        {/* <section id="subject">
          <div className="wrap">
            <h4>수강과목</h4>
            <span id="more">
              <a href="/subject">더보기</a>
            </span>
          </div>
        </section> */}

        <section id="free_board">
          <div className="wrap">
            <h4>자유게시판</h4>
            <span id="more">
              <a href="/freeboard">더보기</a>
            </span>
          </div>
          <div
            className="main-board-list"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </section>
        {/* <section id="job_notice">
          <div className="wrap">
            <h4>취업공지</h4>
            <span id="more">
              <a href="/jobnotice">더보기</a>
            </span>
          </div>
        </section> */}
      </div>
      <section>
        <aside id="sidebar_right">
          <input id="ads-close" type="button" value="X" onClick={close_ads} />
          <p>
            원지혜
            <br />
            교수님 <br />
            연구실 <br />
            학부연구생,
            <br />
            대학원생 <br />
            모집 중
          </p>
        </aside>
      </section>
    </>
  );
}

export default Main;
