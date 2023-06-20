import "../assets/fonts/font.css";
import "./JobNotice.css";
import axios from "axios";
import { load } from "cheerio";

function JobNotice() {
  const getHtml = async () => {
    try {
      return await axios.get("https://ce.pknu.ac.kr/ce/1813");
    } catch (error) {
      console.error(error);
    }
  };

  getHtml()
    .then((html) => {
      let trList = [];
      const $ = load(html.data);
      const $bodyList = $("tr").children("td.bdlTitle");
      $bodyList.each(function (i, elem) {
        trList[i] = {
          title: $(this).find("a").text(),
          url:
            "ce.pknu.ac.kr/ce/1813" +
            $(this).find("td.bdlTitle a").attr("href"),
        };
      });

      const data = trList.filter((n) => n.title);
      return data;
    })
    .then((res) => {
      /*const add_list = res.map((number, idx) => {
        const notice = document.getElementById("job_notice_title");
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        let text = document.createTextNode(number.title);
        let url_text = "https://".concat(number.url);

        anchor.setAttribute("href", url_text);
        anchor.append(text);
        li.append(anchor);
        notice.append(li);
      });*/

      for (let i = 0; i < res.length; i++) {
        const notice = document.getElementById("job_notice_title");
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
      <section className="job-notice-header">
        <h1 id="job_notice_header">취업공지</h1>
        <hr />
      </section>
      <article>
        <ol id="job_notice_title"></ol>
      </article>
    </>
  );
}

export default JobNotice;
