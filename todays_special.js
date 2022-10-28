//Declare the object, menu
const menu = {
  _meal: "", //Initial value falsey
  _price: 0, //initial value falsey
  //set the _meal value
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },
  //set the _price value
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },
  //Get today's special
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today’s Special is ${this._meal} for ${this._price}`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

//Set the today's special
menu.meal = "Ribye Steak";
menu.price = 25.67;

//Log the special
console.log(menu.todaysSpecial);
