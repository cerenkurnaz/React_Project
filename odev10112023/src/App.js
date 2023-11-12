import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Kategori from "./Kategori";
import Urun from "./Urun";

function App() {
  const [kategori, setKategori] = useState("");
  const [altkategori, setAltkategori] = useState("");
  const [urunName, setUrunName] = useState("");
  const [urunkodu, setUrunkodu] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [renk, setRenk] = useState("");
  const [beden, setBeden] = useState("");
  const [kumas, setKumas] = useState("");
  const [kalıp, setKalıp] = useState("");
  const [fiyat, setFiyat] = useState("");
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const [editId, setEditUrun] = useState();
  const [editMode, setMode] = useState(false);

  //   delete butonunun fonksiyonu için ilk olarak error function olatrak başlatırız. Daha sonra updatedList olarak bir değer oluştururuz ve bu
  // listin geçmiş verilerini getirir. Sonra splice ile delete butonuna tıkladığımız indexte bir ürünü siliceğini belirtiriz.
  // son olarak ise updated listi setList olarak ekrana alırız.

  const addUrun = () => {
    if (urunName && aciklama && fiyat) {
      setId(id + 1);
      setList([
        ...list,
        {
          id,
          kategori,
          altkategori,
          urunName,
          urunkodu,
          aciklama,
          renk,
          beden,
          kumas,
          kalıp,
          fiyat,
        },
      ]);
      setKategori("");
      setAltkategori("");
      setUrunName("");
      setUrunkodu("");
      setAciklama("");
      setRenk("");
      setBeden("");
      setKumas("");
      setKalıp("");
      setFiyat("");
    }
  };
  const handleDelete = (id) => {
    // const updatedList = [...list];
    // updatedList.splice(index, 1);
    // setList(updatedList);
    setList(list.filter((i) => i.id !== id));
  };

  //   update butonu için bir fonksiyon oluşturur.
  const handleChange = (item) => {
    setKategori(item.kategori);
    setAltkategori(item.altkategori);
    setUrunName(item.urunName);
    setUrunkodu(item.urunkodu);
    setAciklama(item.aciklama);
    setRenk(item.renk);
    setBeden(item.beden);
    setKumas(item.kumas);
    setKalıp(item.kalıp);
    setFiyat(item.fiyat);
    setEditUrun(item.id);
    setMode(true);
  };
  const updateUrun = () => {
    const newUrunList = list.map((u) => {
      console.log(u.id, editId);
      return u.id === editId
        ? {
            id: editId,
            kategori,
            altkategori,
            urunName,
            urunkodu,
            aciklama,
            renk,
            beden,
            kumas,
            kalıp,
            fiyat,
          }
        : u;
    });
    setList(newUrunList);
    setKategori("");
    setAltkategori("");
    setUrunName("");
    setUrunkodu("");
    setAciklama("");
    setRenk("");
    setBeden("");
    setKumas("");
    setKalıp("");
    setFiyat("");
    setMode(false);
  };

  return (
    <div className="App">
      <Nav />
      <div className="d-flex flex-direction-column">
        <Kategori />
        <Urun name="Çanta" description="Siyah çapraz çanta" price={100.0} />
        <Urun name="Kaban" description="Antrasit Kaşe Kaban" price={200.0} />
        <Urun name="Ayakkabı" description="Beyaz Sneakers" price={250.0} />
        <Urun name="Pantolon" description="Palazzo" price={100.0} />
      </div>
    </div>
  );
}

export default App;
