import React from 'react'

import { Card, CardBody, CardHeader, CardFooter, Button } from 'reactstrap'


export default ({ product, onAddToCart }) => (
  <Card>
    <CardHeader>{product.name}</CardHeader>
    <CardBody>{product.description}</CardBody>
    <CardFooter>
      <Button color="success" onClick={() => onAddToCart(product)}>Add To Cart</Button>
    </CardFooter>
  </Card>

)