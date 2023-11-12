import React from "react";

export default function Nav() {
  return (
    <div className="col-12">
      <img
        className="logo"
        src="data:image/png;base64,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"
      ></img>



      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" href="#">
            Anasayfa
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Kategoriler
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Sepetim
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Ürün Adı - Ürün Fiyatı-{" "}
              </a>
            </li>
            <li>
              <hr></hr> Toplam Tutar:
            </li>
            <li>
              <a class="dropdown-item" href="#">
                ...{" "}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
    