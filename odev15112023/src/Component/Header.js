import { Component } from "react";
import Topbar from "./Topbar";
import Categories from "./Categories";

class Header extends Component {
  state = {
    kategorilerData: [],
    selectedCategoryId: null,
  };

  componentDidMount() {
    fetch("http://localhost:3000/kategoriler")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ kategorilerData: data });
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }

  render() {
    return (
    //   <div>
    //     <Topbar />
    //     <div className="container-header">
    //       <img
    //         src="https://mir-s3-cdn-cf.behance.net/projects/404/aa2651175413101.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png"
    //         alt="img"
    //       />
    //       <div className="nav-kategori">
    //         <Categories
    //           className="col-9"
    //           Kategoriler={this.state.kategorilerData}
    //           onCategorySelect={this.props.onCategorySelect}
    //         />
    //       </div>
    //     </div>
    //   </div>
    <div>
  <Topbar />
  <div className="container-header">
    <div className="row">
      <div className="col-2">
        <img
          src="data:image/jpeg;base64,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"
          alt="img"
          className="fh5co_logo_width"
        />
      </div>
      <div className="col-10 nav-kategori">
        <Categories
          Kategoriler={this.state.kategorilerData}
          onCategorySelect={this.props.onCategorySelect}
        />
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default Header;
