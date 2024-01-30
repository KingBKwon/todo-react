import React from "react"

//react 에서 컴포넌트 클래스를 만들기 위해 Component로부터 상속받기

class Sample extends React.Component {
  //화면에 출력할 내용을 리턴하는 메서드
  render(){
    return(
      <div className="Sample">
        <p>안녕하세여 환영합니다</p>
      </div>
    )
  }
}

export default Sample;