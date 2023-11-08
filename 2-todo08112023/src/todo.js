import React, { useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [goster, setGoster] = useState([]);

//    function gorevgir(){
//         setName(e.target.value)
//     }
  return (
    <div>

        {goster.map(([name,aciklama],j)=>{
            return <span className="d-flex flex-direction-column" key={j}>{[name,"  Açıklama:",aciklama]}</span>
        })}

        <label>
          Görev:
          <input type="text" name="name" onChange={e=>setName(e.target.value)}/>
    
        </label>
        <label>
          Açıklama:
          <input type="text" name="name" onChange={e=>setAciklama(e.target.value)}/>
       
        </label>
        <input type="submit" onClick={()=>setGoster([...goster,[name,aciklama]])} value="Ekle" />

    </div>
  );
}

export default Todo;
