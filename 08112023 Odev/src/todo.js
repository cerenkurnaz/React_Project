import React, { useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [goster, setGoster] = useState([]);

  const handleDelete = (index) => {
    const updatedList = [...goster];
    updatedList.splice(index, 1);
    setGoster(updatedList);
  };



  const handleUpdate = (index) => {
    const selectedItem = goster[index];
  
    const updatedName = prompt(`Enter updated name for ${selectedItem.name}`);
    const updatedAciklama = prompt(`Enter updated açıklama for ${selectedItem.name}`);
  
    if (updatedName !== null && updatedAciklama !== null) {
      const updatedListItem = { ...goster[index], name: updatedName, aciklama: updatedAciklama };
  
      const updatedList = [...goster];
      updatedList[index] = updatedListItem;
      setGoster(updatedList);
    }
  };

  return (
    <div>
      {goster.map(([name, aciklama], j) => {
        return (
          <span className="d-flex flex-direction-column" key={j}>
            {[name, "  Açıklama:", aciklama]}
            <button className="btn btn-primary"onClick={() => handleUpdate(j)}>Update</button>
            <button className="btn btn-danger" onClick={() => handleDelete(j)}>Delete</button>
          </span>
        );
      })}

      <label        >
        Görev:
        <input
          className="form-control"
          placeholder="Görev giriniz."
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Açıklama:
        <input
         className="form-control"
         placeholder="Görev açıklaması giriniz."
          type="text"
          name="name"
          onChange={(e) => setAciklama(e.target.value)}
        />
      </label>
      <input
        type="submit" className="btn btn-success"
        onClick={() => setGoster([...goster, [name, aciklama]])}
        value="Ekle"
      />
    </div>
  );
}

export default Todo;
