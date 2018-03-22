const initialState = {
  data: [
    {
      id: 1,
      name: 'Shoes Prada',
      description: 'Red',
      size: '6'
    },
    {
      id: 2,
      name: 'Shoes Gucci',
      description: 'Blue',
      size: '7'
    },
    {
      id: 3,
      name: 'Shoes Guess',
      description: 'Black',
      size: '8'
    },
    {
      id: 4,
      name: 'Shoes Franco Sarto',
      description: 'Yellow',
      size: '9'
    }
  ]
}



export default (state = initialState, action) => {
  return state
}