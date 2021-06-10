import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const players = ['Sakib', 'Tamim', 'Musfiq', 'Mahmudullah', 'Mashrafe'];
  const product = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$3.44' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            players.map(players => <li>{players}</li>)
          }
          {
            product.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Person name="Mohammad Imran" job="Software Enginner"></Person>
        <Person name="Imran Mahmud" job="Web Developer"></Person>
        <Product product={product[0]}></Product>
        <Product product={product[1]}></Product>
        <Product product={product[2]}></Product>
      </header>
    </div >
  );
}

const buttonStyle = {
  padding: '15px 20px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: 'tomato',
  color: 'white',
  boxShasow: '2px 2px 2px 10px gray',
  fontSize: '20px',
  margin: '20px'
}

function Product(props) {
  const { name, price } = props.product;
  const productStyle = {
    border: '1px solid gray',
    borderRadius: "5px",
    backgroundColor: "teal",
    height: '300px',
    width: "600px",
    float: "left",
    marginTop: "30px",
    padding: '50px'
  }

  return (
    <div style={productStyle}>
      <h2>Name : {name}</h2>
      <h1>Price : {price}</h1>
      <button style={buttonStyle}>Buy now</button>
    </div>
  )
}

function Person(props) {
  const { name, job } = props;
  return (
    <div style={{ border: "2px solid gold", width: "400px", padding: "20px" }}>
      <h3>My Name : {name}</h3>
      <p>My Profession : {job} </p>
    </div>
  )


}

function Counter() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>Increase</button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>

  )
}


export default App;
