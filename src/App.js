
import React ,{useState,useEffect} from 'react';
import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(false);
  var [classShow, setClassShow] = useState(false);
  return (
    <div className="App">
      <div className='container'>
       <h1>Hello World!!</h1>
       <input type="button" value="func"  onClick={
        function(){
          console.log(funcShow);
          setFuncShow(true);
          console.log(funcShow);
       }}></input>
       <input type="button" value="class"></input>
       {funcShow ? <FuncComp ininNumber={2}></FuncComp> : null }
       {classShow ? <ClassComp ininNumber={2}></ClassComp> : null }
      </div>
     
    </div>
  );
}
var funcStyle = 'color:blue';
var funcId = 0;
function FuncComp(props){
  var numberState = useState(props.ininNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  // var dateState = useState(new Date().toString());
  // var date = dateState[0];
  // var setDate = dateState[1];

  var [date,setDate] = useState(new Date().toString());
  

  useEffect(function(){
    console.log('%cfunc = > useEffect  (componentDidMount & componentDidUpdate) '+(++funcId),funcStyle);
    document.title =  date;
    return function(){
      console.log('%cfunc = > useEffect  return (componentDidMount & componentDidUpdate) '+(++funcId),funcStyle);
    }
  },[]);

  //side effect
  useEffect(function(){
    console.log('%cfunc = > useEffect date (componentDidMount & componentDidUpdate) '+(++funcId),funcStyle);
    document.title =  date;
    return function(){
      console.log('%cfunc = > useEffect date return (componentDidMount & componentDidUpdate) '+(++funcId),funcStyle);
    }
  },[date]);

  useEffect(function(){
    console.log('%cfunc = > useEffect number (componentDidMount & componentDidUpdate) '+(++funcId),funcStyle);
    document.title =  number;
    return function(){
      console.log('%cfunc = > useEffect number return (componentDidMount & componentDidUpdate) '+(++funcId),funcStyle);
    }
  },[number]);
  console.log('%cfunc = > render '+(++funcId),funcStyle);
  return (
    <div className='container'>
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input type="button" value="random" onClick={
        function(){
         setNumber(Math.random());
       }}>
       </input>
       <input type="button" value="date" onClick={
        function(){
          setDate(new Date().toString());
       }}>
       </input>
    </div>
  )
}

var classStyle = "color:red";
class ClassComp extends React.Component{
  state = {
    number : this.props.ininNumber,
    date : new Date().toString()
  }

  componentWillMount(){
    console.log('%cclass => componentWillUnmount',classStyle);
  }
  componentDidMount(){
    console.log('%cclass => componentWillDidMount',classStyle);
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('%cclass => shouldComponentUpdate',classStyle);
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log('%cclass => componentWillUpdate',classStyle);
  }
  componentDidUpdate(nextProps,nextState){
    console.log('%cclass => componentDidUpdate',classStyle);
  }
  render(){
    
    console.log('%cclass => render',classStyle);
    return(
      <div className='container'>
       <h2>class style component</h2>
       {/* <p>Number : {this.props.ininNumber}</p> */}
       <p>Number : {this.state.number}</p>
       <p>Date : {this.state.date}</p>
       <input type="button" value="random" onClick={
         function(){
         this.setState({number:Math.random()})
       }.bind(this)}>
       </input>

       <input type="button" value="date" onClick={
         function(){
         this.setState({date:new Date().toString()})
       }.bind(this)}>
       </input>
      </div>

    )
  }
}

export default App;
