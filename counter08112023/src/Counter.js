import React, { useState } from 'react';
import './App.css';



function Counter() {
  const [count, setCount] = useState(0);

  function increment(){
    if(count==10){
        alert("Daha fazla artıramazsınız")
    }
    else{
    setCount(count+1);
  }
}
  function decrement(){
    if(count==0){
        alert("Daha fazla düşüremezsiniz")
    }
    else{
        setCount(count-1)
    }
  }

  return (
    <div className="App">
      <div className="counter">
        <p>Count: {count}</p>
        <button type="button" onClick={increment} class="btn btn-primary">Artır</button>
        <button className="azalt" onClick={decrement} class="btn btn-danger" >Azalt</button>
        
      </div>
    </div>
  );
}

export default Counter;
