/* eslint-disable */
//warning message 안보이게

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "블로그 글 제목",
    "블로그 글 제목2",
    "블로그 글 제목3",
  ]);

  let [like, setLike] = useState([0, 0, 0]);

  //모달창 현재 상태
  let [modal, setModal] = useState(false);

  let [title_state, setTitle_state] = useState(0);
  let [input, setInput] = useState("");

  function update_title() {
    let title_copy = [...title];
    title_copy[0] = "블로그 글 제목1";
    setTitle(title_copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>nomeleonBlog</h4>
      </div>

      {title.map(function (t, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle_state(i);
              }}
            >
              {t}
              <span
                onClick={(e) => {
                  e.stopPropagation(); //상위 html로 이벤트 버블링 stop!
                  let copy = [...like];
                  copy[i] += 1;
                  setLike(copy);
                }}
              >
                ❤️
              </span>{" "}
              {like[i]}{" "}
            </h4>
            <p>2022.07.14</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1); //원하는 항목 삭제
                //splice(0,1) : 0번째 항목 1개 삭제
                setTitle(copy);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
      />
      {/* 1. 버튼 누르면 새로운 글 추가 
      2. 삭제 버튼 만들어서 누르면 글 삭제 기능*/}
      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(input); //맨 앞에 넣기
          setTitle(copy);
        }}
      >
        add
      </button>

      {modal ? (
        <Modal title={title} update={update_title} title_state={title_state} />
      ) : null}
    </div>
  );
}

//모달창 컴포넌트
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.title_state]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={props.update}>글수정</button>
    </div>
  );
}

//class
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return (
      <>
        <div>hi {this.state.name}</div>
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          change
        </button>
      </>
    );
  }
}

export default App;

{
  /* <button onClick={ ()=>{ 
      let copy = [...title];
      copy.sort();
      setTitle(copy)
    } }> 정렬 </button> */
}

{
  /* <button
          onClick={() => {
            let title_copy = [...title];
            title_copy[0] = "블로그 글 제목1";
            setTitle(title_copy);
          }}
        >
          글제목 변경
        </button> */
}
