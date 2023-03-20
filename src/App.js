/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fake, setFake] = useState([])
  console.log(fake);
  useEffect(() => {
    fakestore();
  }, [])
  const fakestore = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    const jsonData=await response.json();
    // console.log(jsonData);
    setFake(jsonData);
  }

  // fakestore();
  return (
    <>
    <h2>Fake   API Store </h2>
    <div className="container">
    {fake.map((products)=>{
      return (
        <>
        <div className="box">
        <div className="content">
          <h5>{products.title}</h5>
          <p>{products.description}</p>
        </div>  
        <img src={products.image} alt="product image" />
      </div>
        </>
      )
    })}
      
    </div>
    </>
  );
}

export default App;
