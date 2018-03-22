import React, { Component } from 'react'
// import store from '../../store'
import MainNavbar from './main-navbar/component'
import { connect } from 'react-redux'
import { replace, Fragment } from 'redux-little-router'
import ProductsList from "./products/container"
import Cart from "../cart/container"

export class Layout extends Component {
  componentWillMount () {
    if (this.props.currentPath === '/'){
      this.props.dispatch( replace({
        pathname: '/products'
      }))
    }
  }
  render () {
    return (
      <div className="layout-container">
        <MainNavbar cartCount={this.props.cartProducts.length}/>
        <Fragment forRoute="/">
          <div className="routable-container">
            <Fragment forRoute="/products">
              <ProductsList/>
            </Fragment>
            <Fragment forRoute="/cart">
              <Cart/>
            </Fragment>
          </div>
        </Fragment>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  currentPath: state.router.pathname,
  cartProducts: state.cart.products
})
export default connect(mapStateToProps)(Layout)