import React from "react"
import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox
} from "@material-ui/core"

//react 에서 컴포넌트 클래스를 만들기 위해 Component로부터 상속받기

class ToDo extends React.Component {
  //생성자
  constructor(props){
    super(props); //상위 클래스에서 넘겨준 모든 props를 현재클래스에 저장
    //state 생성
    //item 이라는 이름으로 props 중에서 item 이라는 값을 state로 저장
    //props은 상위 component 에서 전달한 data라 읽기만 가능
    //수정이나 삭제를 하고자 하는 경우는 state 로 변환해야함.
    this.state={item:props.item}
  }
  //화면에 출력할 내용을 리턴하는 메서드
  //props는 수정이 안되서 state로 변환
  render(){
    //자주 사용하는 데이터를 짧게 사용하기 위해서 다른 변수에 대입
    const item=this.state.item;
    return(
      <ListItem>
        <Checkbox checked={item.done}/>
        <ListItemText>
          <InputBase
            inputProps={{"aria-label":"naked"}}
            type="text" 
            id={item.id}
            name={item.id}
            value={item.title}
            multiline={true}
            fullWidth={true}
          />
        </ListItemText>

      </ListItem>
    )
  }
}

export default ToDo;