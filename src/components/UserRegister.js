import { useRef, useState } from "react";

import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const UserRegister = () => {
  const [producer, setProducer] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          console.log("비밀번호 6자리 이상")
          break;
        case "auth/invalid-email":
          console.log("잘못된 이메일 주소입니다");
          break;
        case "auth/email-already-in-use":
          console.log("이미 가입되어 있는 계정입니다");
          break;
      }
    }
  };

  return (
    <div>
      <p>{"<"}</p>
      <h2>회원가입</h2>
      <form onSubmit={submitHandler}>
        <div>
          <span> 글자입니다</span>
          <input
            type="radio"
            name="membership"
            value="시청자"
            onChange={() => {
              setProducer("시청자");
            }}
            style={{ backgroundColor: "red" }}
          />
          <label>시청자</label>
          <input
            type="radio"
            name="membership"
            value="제작자"
            onChange={() => {
              setProducer("제직자");
            }}
            style={{ backgroundColor: "red" }}
          />
          <label>제직자</label>
        </div>
        <div>
          <label>이메일</label>
          <input
            style={{ color: "black" }}
            ref={emailRef}
            type="email"
            placeholder="이메일을 입력하세요"
          />
          <button style={{ backgroundColor: "red" }}>중복확인</button>
        </div>
        <div>
          <label>비밀번호</label>
          <input
            style={{ color: "black" }}
            ref={passwordRef}
            type="password"
            autoComplete="off"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input
            style={{ color: "black" }}
            ref={rePasswordRef}
            type="password"
            autoComplete="off"
            placeholder="비밀번호를 재입력하세요"
          />
        </div>
        <button type="submit" style={{ backgroundColor: "red" }}>
          확인
        </button>
      </form>
    </div>
  );
};

export default UserRegister;