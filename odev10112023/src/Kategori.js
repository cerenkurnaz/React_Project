import React, { useState } from "react";

export default function Kategori(props) {
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
    <div className="col-2">
        <div class="sidebar">
      <div className="Kategori">
        <h3>Kategoriler</h3>
        <ul className="kategori-list">
          <li>Çanta</li>
          <li>Ayakkabı</li>
          <li>Pantolon</li>
          <li>Kaban</li>
          <li>Saat</li>
          <li>Aksesuar</li>
          <li>Sweat</li>
        </ul>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="Input">
        <h2>Ürün Girişi</h2>

        <h4>Ürün Adı</h4>
        <label>
          {/* ürün kategorisi girmek için bir input alanı oluşturduk */}
          <input
            value={kategori}
            placeholder="Ürün kategori giriniz"
            onChange={(e) => setKategori(e.target.value)}
          />
        </label>
        <h4>ÜrünAçıklaması</h4>
        <label>
          {/* ürün alt kategori girmek için bir input alanı oluşturduk */}
          <input
            value={altkategori}
            placeholder="Ürün alt kategorisini giriniz"
            onChange={(e) => setAltkategori(e.target.value)}
          />
        </label>

        <h4>Ürün Fiyatı:</h4>
        <label>
          {/* ürün adı girmek için bir input alanı oluşturduk */}
          <input
            value={urunName}
            placeholder="Ürün adı giriniz"
            onChange={(e) => setUrunName(e.target.value)}
          />
        </label>

            <button class="btn btn-outline-success" onClick={addUrun}>
              Ürün Ekle
            </button>

            </div>
      </div>
    </div>
  );
}
