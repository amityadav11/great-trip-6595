import React from "react";
import axios from "axios";
import { useState } from "react";

let allSizes = ["Regular", "Medium", "Large"];
let allCrusts = [
  "New Hand Tossed",
  "Cheese Burst",
  "Fresh Pan Pizza",
  "Classic Hand Tossed",
  "Wheat Thin Crust",
];
let cheesePricing = {
  Regular: 50,
  Medium: 75,
  Large: 95,
};
let allVegToppings = [
  "Onion",
  "Fresh Tomato",
  "Grilled Mushroom",
  "Golden Corn",
  "Crisp Capsicum",
  "Black Olive",
];
let allNonVegToppings = [
  "Pepper Barbecue Chicken",
  "Peri-Peri Chicken",
  "Grilled Chicken Rasher",
  "Chicken Sausage",
  "Chicken Tikka",
  "Chicken Pepperoni",
];
let vegToppingsPricing = {
  Regular: 35,
  Medium: 60,
  Large: 80,
};
let nonVegToppingsPricing = {
  Regular: 50,
  Medium: 75,
  Large: 95,
};

// let data = {
//   pizzas: pizzas,
//   allSizes: allSizes,
//   allCrusts: allCrusts,
//   allVegToppings: allVegToppings,
//   allNonVegToppings: allNonVegToppings,
//   cheesePricing: cheesePricing,
//   vegToppingsPricing: vegToppingsPricing,
//   nonVegToppingsPricing: nonVegToppingsPricing
// };

const Menu = () => {
  const [pizzas, setPizzas] = useState();
  const [state, setState] = useState({
    data: [],
    cart: [],
    allSizes: [],
    allCrusts: [],
    showModal: false,
    modalId: 0,
    allVegToppings: [],
    allNonVegToppings: [],
    cheesePricing: {},
    vegToppingsPricing: {},
    nonVegToppingsPricing: {},
  });

  const getData = () => {
    return axios.get(`http://localhost:8080/pizzas`).then((res) => {
      setPizzas(res.data);
      //console.log(pizzas)
      setState({
        data: pizzas,
        allSizes: data.allSizes,
        allCrusts: data.allCrusts,
        allVegToppings: data.allVegToppings,
        allNonVegToppings: data.allNonVegToppings,
        cheesePricing: data.cheesePricing,
        vegToppingsPricing: data.vegToppingsPricing,
        nonVegToppingsPricing: data.nonVegToppingsPricing,
      });
    });
  };
  getData();

  let data = {
    pizzas: pizzas,
    allSizes: allSizes,
    allCrusts: allCrusts,
    allVegToppings: allVegToppings,
    allNonVegToppings: allNonVegToppings,
    cheesePricing: cheesePricing,
    vegToppingsPricing: vegToppingsPricing,
    nonVegToppingsPricing: nonVegToppingsPricing,
  };

  //console.log(state)

  return <div>Menu</div>;
};

export default Menu;
