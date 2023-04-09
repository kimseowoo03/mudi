import  useStore  from "../store/useStore";

const UserRegister = () => {
  const {setSidebarActive} = useStore()
  return (
    <div>
      <p onClick={() => {setSidebarActive()}} >사이드바 열기</p>
      <h2>회원가입</h2>
      {/**producer: boolean(false), email: string, password: string */}
      <from>
        <div>
          <button style={{backgroundColor: "red"}} >시청자</button>
          <button style={{backgroundColor: "red"}} >제작자</button>
        </div>
        <div>
          <label>이메일</label>
          <input placeholder="이메일을 입력하세요" />
          <button style={{backgroundColor: "red"}}>중복확인</button>
        </div>
        <div>
          <label>비밀번호</label>
          <input placeholder="비밀번호를 입력하세요"/>
          </div>
          <div>
          <label>비밀번호 확인</label>
          <input placeholder="비밀번호를 재입력하세요"/>
          {/**일치하는 경우 아래에 문구 노출*/}
          </div>
      </from>
    </div>
  )
}

export default UserRegister;