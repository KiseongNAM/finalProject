import "../assets/fonts/font.css";
import "./Notice.css";
import React from "react";
import axios from "axios";
import { load } from "cheerio";

function Notice() {
  const getHtml = async () => {
    try {
      return await axios.get("https://ce.pknu.ac.kr/ce/1814");
    } catch (error) {
      console.error(error);
    }
  };

  getHtml()
    .then((html) => {
      let trList = [];
      const $ = load(html.data);
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
    })
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        const notice = document.getElementById("notice_title");
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
  return (
    <>
      <section className="notice-header">
        <h1 id="notice_header">공지사항</h1>
        <hr />
      </section>
      <article>
        <ol id="notice_title"></ol>
      </article>
    </>
  );
}

export default Notice;
