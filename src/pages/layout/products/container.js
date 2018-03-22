import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import ProductCard from "./product-card/component"
import './container.css'
import { addToCart } from '../../cart/actions'


export class Layout extends Component {
  handleAddToCart = (product) => {
    this.props.dispatch(addToCart(product))
  }

  render () {
    const products = this.props.products.map((product) => (
      <Col key={product.id}>
       <ProductCard onAddToCart={this.handleAddToCart} product={product}/>
      </Col>
    ))

    return (
      <div className="products-container">
        <Row>
         {products}
        </Row>
      </div>

    )
  }
}

  const mapStateToProps = (state) => ({
    products: state.products.data
  })

  export default connect(mapStateToProps)(Layout)