// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Input from './components/Input';
import Container from './components/Container';

function App() {
  const [arrdata,setArrdata]=useState([])
  function addHabitData(data){
    setArrdata([...arrdata,data])
    // console.log(arrdata)
  }
  function deleteHabit(index){
    var temp=[...arrdata];
    temp.splice(index,1);
    setArrdata([...temp])
  }
  return (
    <div className="App">
      <Container>
      <Input addHabitData={addHabitData}></Input>
      <Display arr={arrdata} deleted={deleteHabit}></Display>
      </Container>
    </div>
  );
}

export default App;
