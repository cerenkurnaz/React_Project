import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardGroup,
  CardTitle,
  Button,
  Col,
} from "reactstrap";

export default class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <h2>{this.props.currentCategory}</h2>
        <CardGroup>
          {products.map((product) => (
            <Col xs="3">
              <Card
                style={{ marginLeft: "10px", marginRight: "10px" }}
                key={product.id}
              >
                <CardImg
                  top
                  width="100%"
                  src={product.image}
                  alt={product.productName}
                />
                <CardBody>
                  <CardTitle>{product.productName}</CardTitle>
                  <CardText>{product.desc}</CardText>
                    <CardText>
                        <small className="text-muted">{product.price} okuma</small>
                    </CardText>
                  <Button style={{ backgroundColor: "mediumorchid", color: "blue" }} onClick={() => this.props.addToCart(product)} > 
                    Kütüphaneye Ekle
                  </Button>
                 
                  <Button style={{ backgroundColor: "darkslateblue", color: "lightblue" }} > 
                    Pdf İndir
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    );
  }

}
