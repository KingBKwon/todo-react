import './App.css'
import React from 'react'
import ToDo from './ToDo'

class App extends React.Component {
  constructor(props){
    
    super(props)
    //this.state.item={item:{id:0,"title":"Hello React","done":"true"}
    //App.js에 this.state.item이라는 이름으로 데이터 생성
    //ToDo에게 item이라는 이름으로 데이터를 전달
    this.state={
      items:[
    {id:0,title:"react",done:true},
    {id:1,title:"vue",done:false},
    {id:2,title:"angular",done:false}]
              }
  }
  render(){
    //배열을 순회하면서 출력할 내용을 생성
    //item은 배열을 순회할 떄 각각의 데이터이고 idx은 인덱스
    //배열을 순회하면서 출력물을 만들 때는 key를 설정해주어야합니다.
    //key를 설정하지 않으면 출력에는 문제가 없지만 콘솔에 에러가 출력됩니다.
    let display= this.state.items.map((item,idx)=>(
      <ToDo item={item} key={item.id}/>
    ));
    return(
      <div className="App">
        {display}
      </div>
      
    )
  }
}

export default App;
