import React from 'react'
import { Button} from 'reactstrap'

export default ({ product, onRemoveCart }) => (
  <tr>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td>{product.description}</td>
    <td><Button color="dander" onClick={() => onRemoveCart(product)}>x</Button></td>
  </tr>
)