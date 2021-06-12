<<<<<<< HEAD
import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../context.js';
import {Container, Col, Row, Card} from 'react-bootstrap';
import CarouselComponent from './CarouselComponent.jsx';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';


function ProductOverview() {
  const {currentProduct, updateStyles,
    styles, updateCurrentStyle, defaultStyle, setModalShow} =
    useContext(ProductContext);

  const getStyles = () => {
    axios.get(`/products/${currentProduct.id}/styles`)
        .then((response) => {
          updateStyles(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };


  useEffect(() => {
    if (currentProduct.id === undefined) {
      return;
    } else {
      getStyles();
    }
  }, [currentProduct]);

  if (styles.length === 0) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    if (defaultStyle) {
      styles.results.forEach((result) => {
        if (result['default?']) {
          updateCurrentStyle(result);
        }
      });
    }
    return (
      <Container style={{background: '#f3f7f0', padding: '2rem'}}>
        <Row className="mb-3">
          <Col style={{height: 'auto'}}>
            <Card style={{height: '30rem'}}>
              <Card.Body>
                <CarouselComponent />
                <Card.ImgOverlay style={{textAlign: 'right',
                  marginRight: '4rem'}}>
                  <span style={{color: 'green'}} onClick={(e) => {
                    e.preventDefault();
                    setModalShow(true);
                  }}><i className="fas fa-expand fa-2x"></i></span>
                </Card.ImgOverlay>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <ProductInfo />
          </Col>
        </Row>
        <Card style={{height: '10rem', width: '100%'}}><Card.Body>
          <h3>{currentProduct.slogan}</h3>
          <p>{currentProduct.description}</p>
        </Card.Body></Card>
      </Container>
    );
  }
=======
import React from 'react';
import ProductDetails from './ProductDetails.jsx';
import {Container} from 'react-bootstrap';


function ProductOverview() {
  return (
    <Container style={{background: '#ecf5eb', padding: '2rem'}}>
      <ProductDetails />
    </Container>
  );
>>>>>>> 8dc56896038f8e69381ac328facd1e3eb78e4825
}

export default ProductOverview;
