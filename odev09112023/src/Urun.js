import React, { useState } from "react";

const Urun = () => {
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
    <div className="row">
      <div className="col-6">
        <br></br>
        <div className="box">
          <h2>Ürün Girişi</h2>

          <h4>Ürün Kategorisi:</h4>
          <label>
            {/* ürün kategorisi girmek için bir input alanı oluşturduk */}
            <input
              value={kategori}
              placeholder="Ürün kategori giriniz"
              onChange={(e) => setKategori(e.target.value)}
            />
          </label>
          <h4>Ürün Alt Kategorisi:</h4>
          <label>
            {/* ürün alt kategori girmek için bir input alanı oluşturduk */}
            <input
              value={altkategori}
              placeholder="Ürün alt kategorisini giriniz"
              onChange={(e) => setAltkategori(e.target.value)}
            />
          </label>

          <h4>Ürün Adı:</h4>
          <label>
            {/* ürün adı girmek için bir input alanı oluşturduk */}
            <input
              value={urunName}
              placeholder="Ürün adı giriniz"
              onChange={(e) => setUrunName(e.target.value)}
            />
          </label>

          <h4>Ürünün Kodu:</h4>
          <label>
            {/* ürün kodunu girmek için bir input alanı oluşturduk */}
            <input
              value={urunkodu}
              placeholder="Ürün kodu giriniz"
              onChange={(e) => setUrunkodu(e.target.value)}
            />
          </label>

          <h4>Ürün Açıklaması:</h4>
          <label>
            {/* ürün açıklaması girmek için bir input alanı oluşturduk */}
            <input
              value={aciklama}
              placeholder="Ürün açıklaması giriniz"
              onChange={(e) => setAciklama(e.target.value)}
            />
          </label>
          <h4>Ürün Rengi:</h4>
          <label>
            {/* ürün rengi girmek için bir input alanı oluşturduk */}
            <input
              value={renk}
              placeholder="Ürün rengi giriniz"
              onChange={(e) => setRenk(e.target.value)}
            />
          </label>
          <h4>Ürün Bedeni:</h4>
          <label>
            {/* ürün bedeni girmek için bir input alanı oluşturduk */}
            <input
              value={beden}
              placeholder="Ürün bedeni giriniz"
              onChange={(e) => setBeden(e.target.value)}
            />
          </label>
          <h4>Ürün Kumaşı:</h4>
          <label>
            {/* ürün kumaşı girmek için bir input alanı oluşturduk */}
            <input
              value={kumas}
              placeholder="Ürün kumaşı giriniz"
              onChange={(e) => setKumas(e.target.value)}
            />
          </label>

          <h4>Ürün Kalıbı:</h4>
          <label>
            {/* ürün kalıbı girmek için bir input alanı oluşturduk */}
            <input
              value={kalıp}
              placeholder="Ürün kalıbı giriniz"
              onChange={(e) => setKalıp(e.target.value)}
            />
          </label>

          <h4>Ürün Fiyatı:</h4>
          <label>
            {/* ürün fiyatı girmek için bir input alanı oluşturduk */}
            <input
              value={fiyat}
              placeholder="Ürün fiyatı giriniz"
              onChange={(e) => setFiyat(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          {/* ürün ekleme butonu oluşturuyoruz. onClick ile error function kullanıyoruz. Butona tıkladığımızda önceden girilen verilerin dışında
        inputa yeni girilen verileride eklemek isteriz.  */}
          {editMode === true ? (
            <button class="btn btn-outline-primary" onClick={updateUrun}>
              Ürün Guncelle
            </button>
          ) : (
            <button class="btn btn-outline-success" onClick={addUrun}>
              Ürün Ekle
            </button>
          )}
        </div>
      </div>
      <div className="col-6">
        <br></br>
        <div className="box">
          <h2>Ürün Listesi</h2>
          {/* map ile ekrana yazdırmaıyı sağlıyoruz. Burada span içerisindekiler ekrana yazdırılır. j yi index olarak tanımladığımız için key kullandık.
        mapin içerisinde almak istediğimiz değerler yer alıyor*/}
          {list.map((i, j) => {
            return (
              // girilen ürünlerin default olarak yan yana girilir alt alta olması için spana class veririz.
              <span className="d-flex flex-direction-column" key={j}>
                {[
                  "Ürün Kategorisi: ",
                  i.kategori,
                  <br></br>,
                  "Ürün Alt Kategorisi: ",
                  i.altkategori,
                  <br></br>,
                  "Ürün Adı: ",
                  i.urunName,
                  <br></br>,
                  "Ürün Kodu: ",
                  i.urunkodu,
                  <br></br>,
                  "Ürün Açıklaması: ",
                  i.aciklama,
                  <br></br>,
                  "Ürün Rengi: ",
                  i.renk,
                  <br></br>,
                  "Ürün Bedeni: ",
                  i.beden,
                  <br></br>,
                  "Ürün Kumaşı: ",
                  i.kumas,
                  <br></br>,
                  "Ürün Kalıbı: ",
                  i.kalıp,
                  <br></br>,
                  "Ürün Fiyatı: ",
                  i.fiyat,
                ]}
                {/* ürünlerin yanına delete ve update butonları ekleyeceğimiz için bu butonlarda span içerisine yazılır 
              butonların işlevleri için returnun dışında bir fonksiyon tanımlanır. onClick={()=>foksiyonadi(j)} olarak fonksiyon ilgili butona eklenir*/}
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleChange(i)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(i.id)}
                >
                  Delete
                </button>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Urun;
