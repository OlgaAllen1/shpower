import React from 'react'
import '../container.css'
import { Navbar, NavbarBrand, Nav } from 'reactstrap'
import {Link} from 'redux-little-router'


export default ({ cartCount }) => (
  <Navbar dark={true} className="bg-dark">
    <NavbarBrand>Shopping Cart</NavbarBrand>
    <Nav>
      <Link href="/products" className="nav-link">Products</Link>
      <Link href="/cart" className="nav-link">Cart ({cartCount}) </Link>
    </Nav>
  </Navbar>
)

