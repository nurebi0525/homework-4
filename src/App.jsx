import React from 'react'
import Card from './components/card';
import "./App.css"


const App = () => {
  const products = [
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/efa574fa6ae17190f902321cdaa46443417c7a8c",
      price: "11 999 som"
  },
  {
      title: "Мужские Кроссовки Nike Air Max 270",
      image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/e5c0d5db31b6ef07e37fc8d4649d4e87e6e30d6c",
      price: "12 999 som"
  },
  {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/d2998c77eb845b69a598e0023201c645623f00ef",
      price: "9 999 som"
  },
  {
      title: "Кроссовки Puma X Aka Boku Future Rider",
      image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/b935b82f21d95295bc3491e65768e4bd92b8bb8f",
      price: "10 499 som"
  },
  {
      title: "Мужские Кроссовки Under Armour Curry 8",
      image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/cbdb3f4c6eeef4da6645fb6cf68483f97a8fe36e",
      price: "8 499 som"
  },
  {
      title: "Мужские Кроссовки Nike Kyrie 7",
      image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/15693cfa26ca5c81377299a98e793993702b2fab",
      price: "11 999 som"
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/cbdb3f4c6eeef4da6645fb6cf68483f97a8fe36e",
    price: "8 499 som"
},
{
    title: "Мужские Кроссовки Nike Kyrie 7",
    image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/15693cfa26ca5c81377299a98e793993702b2fab",
    price: "11 999 som"
},
{
  title: "Мужские Кроссовки Under Armour Curry 8",
  image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/cbdb3f4c6eeef4da6645fb6cf68483f97a8fe36e",
  price: "8 499 som"
},
{
  title: "Мужские Кроссовки Nike Kyrie 7",
  image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/15693cfa26ca5c81377299a98e793993702b2fab",
  price: "11 999 som"
},
{
  title: "Мужские Кроссовки Under Armour Curry 8",
  image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/cbdb3f4c6eeef4da6645fb6cf68483f97a8fe36e",
  price: "8 499 som"
},
{
  title: "Мужские Кроссовки Nike Kyrie 7",
  image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/15693cfa26ca5c81377299a98e793993702b2fab",
  price: "11 999 som"
},
{
  title: "Мужские Кроссовки Nike Blazer Mid Suede",
  image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/efa574fa6ae17190f902321cdaa46443417c7a8c",
  price: "11 999 som"
},
{
  title: "Мужские Кроссовки Nike Air Max 270",
  image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/e5c0d5db31b6ef07e37fc8d4649d4e87e6e30d6c",
  price: "12 999 som"
},
{
  title: "Мужские Кроссовки Nike Blazer Mid Suede",
  image: "https://www.figma.com/file/qIQH5OZ4cKwctct0Id9mY3/image/d2998c77eb845b69a598e0023201c645623f00ef",
  price: "9 999 som"
}
      ];
  return (
    <div className='sect'>
      <h1>Все кроссовки</h1>
     <div className='container'>
     {products.map((product) => (
        <Card  key={product} 
        title={product.title} 
        image={product.image} 
        price={product.price}
          />
      ))}
     </div>
    </div>
  );
};

export default App
 