import React from "react";

export default function Urun(props) {
  const { name, description, price } = props;
  return (
    <div className="col-2">
      {/* 
        <div className='urun'>
            <h2>Önerilenler</h2>
            <div className='urun-list'>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJxO8Xx9-YoFftgLqNG5Y8jKOJm51XKxeHw&usqp=CAU" alt="Çanta "></img>
                Çanta
                </div>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJxO8Xx9-YoFftgLqNG5Y8jKOJm51XKxeHw&usqp=CAU"></img>
                Çanta
                </div>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJxO8Xx9-YoFftgLqNG5Y8jKOJm51XKxeHw&usqp=CAU"></img>
                Çanta
                </div>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJxO8Xx9-YoFftgLqNG5Y8jKOJm51XKxeHw&usqp=CAU"></img>
                Çanta
                </div>
            </div>
        </div> */}
<div className="urunler">
      <div className="urun-props">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJxO8Xx9-YoFftgLqNG5Y8jKOJm51XKxeHw&usqp=CAU"></img>
        <h2>{props.name}</h2>
        <i>{props.description}</i>
        <strong> {props.price} TL</strong>
      </div>
      {/* <div className='urun-props'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJxO8Xx9-YoFftgLqNG5Y8jKOJm51XKxeHw&usqp=CAU"></img>
            <h2>{props.name}</h2>
            <i>{props.description}</i>
            <strong> {props.price} TL</strong>

        </div> */}
        
        </div>
    </div>
  );
}
