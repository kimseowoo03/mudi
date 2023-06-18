import { useRef } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const UserLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          console.log("일치하는 사용자를 찾을 수 없음");
          break;
        case "auth/wrong-password":
          console.log("일치하지 않는 비밀번호");
          break;
      }
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={submitHandler}>
        <input type="email" ref={emailRef} />
        <input type="password" ref={passwordRef} autoComplete="off"/>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default UserLogin;
