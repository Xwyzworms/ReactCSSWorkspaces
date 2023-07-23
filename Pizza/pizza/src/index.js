import React from 'react';
import  ReactDOM  from 'react-dom/client';
import "./index.css"
const pizzaData = [
  {
      name : "Focaccia",
      ingredients : "Bread with italian olive oil and rosemary",
      price : 6,
      photoName : "pizzas/foccia.jpg",
      soldOut : false
  },

  {
      name : "Pizza Margherita",
      ingredients : "Tomato and mozarella",
      price : 10,
      photoName : "pizzas/margherita.jpg",
      soldOut : false
  },

  {
      name : "Pizza Spinaci=",
      ingredients : "Tomato, mozarella, spinach, and ricotta cheese",
      price : 12,
      photoName : "pizzas/spinaci.jpg",
      soldOut : false
  },

  {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
];

function App() {
  
    return ( 
    <div className='container'>
      <Header />
      <Menu />
      <Footer/>
    </div>
    );
}

function Header() 
{
  return (
    <header className="header">
        <h1> This is My Pizza </h1>
    </header>
  );  
} 

function Menu() 
{ 
  return ( 
    <menu className='menu'>
      <h2>Menu</h2>
      <Pizza 
        name="Pizza Prosciutto"
        ingredients = "Tomato, mozarella, ham, aragula, and burrata cheese"
        price = {18}
        photoName = "pizzas/prosciutto.jpg"
        soldOut = {false}
      />
  </menu> 
  );
}

function Pizza(props) {

  return <div>
    <img src= { props.photoName }  alt={props.name}></img>
    <div>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
    </div>
  </div>
}


function Footer () 
{
  return (
      <footer className='footer'>
          <span>Hi there</span>
      </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< React.StrictMode> 
              <App/>
            </React.StrictMode>);
