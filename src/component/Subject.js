import "../assets/fonts/font.css";
import "./Subject.css";

function Subject() {
  return (
    <>
      <section>
        <h1 id="subject_header">수강과목</h1>
        <hr />
      </section>

      <section className="subject">
        <div className="freshman">
          <h2>1학년</h2>
          <h3>1학기</h3>
          <ul className="first-semester">
            <li>프로그래밍기초1</li>
          </ul>
          <hr id="seperator" />
          <h3>2학기</h3>
          <ul className="second-semester">
            <li>프로그래밍기초2</li>
          </ul>
        </div>

        <div className="sophomore">
          <h2>2학년</h2>
          <h3>1학기</h3>
          <ul className="first-semester">
            <li>객체지향프로그래밍</li>
            <li>응용수학</li>
            <li>이산수학</li>
            <li>데이터통신</li>
            <li>기초전기전자회로</li>
            <li>논리회로</li>
            <li>인공지능입문</li>
            <li>인공지능수학</li>
            <li>웹프로그래밍</li>
          </ul>
          <hr id="seperator" />
          <h3>2학기</h3>
          <ul className="second-semester">
            <li>자료구조</li>
            <li>컴퓨터네트워크</li>
            <li>컴퓨터구조</li>
            <li>오픈소스소프트웨어</li>
            <li>논리회로실습</li>
            <li>시스템프로그래밍</li>
            <li>정보보호론</li>
            <li>기계학습</li>
          </ul>
        </div>

        <div className="junior">
          <h2>3학년</h2>
          <h3>1학기</h3>
          <ul className="first-semester">
            <li>데이터베이스</li>
            <li>운영체제</li>
            <li>알고리즘</li>
            <li>딥러닝1</li>
            <li>디지털신호처리</li>
            <li>프로그래밍언어론</li>
            <li>컴퓨터그래픽스</li>
            <li>교과논리및논술</li>
          </ul>
          <hr id="seperator" />
          <h3>2학기</h3>
          <ul className="second-semester">
            <li>소프트웨어공학</li>
            <li>모바일프로그래밍</li>
            <li>영상처리</li>
            <li>네트워크보안</li>
            <li>임베디드시스템프로그래밍1</li>
            <li>리눅스시스템프로그래밍</li>
          </ul>
        </div>

        <div className="senior">
          <h2>4학년</h2>
          <h3>1학기</h3>
          <ul className="first-semester">
            <li>캡스톤디자인1</li>
            <li>인터넷DB응용</li>
            <li>컴파일러</li>
            <li>사이버보안및포렌식</li>
            <li>임베디드시스템프로그래밍2</li>
            <li>교과교재연구및지도법</li>
          </ul>
          <hr id="seperator" />
          <h3>2학기</h3>
          <ul className="second-semester">
            <li>캡스톤디자인2</li>
            <li>지적재산권</li>
            <li>클라우드컴퓨팅</li>
            <li>멀티미디어응용</li>
            <li>스마트IoT</li>
            <li>시스템해킹및보안</li>
            <li>교과교육론</li>
            <li>현장인턴십</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Subject;
