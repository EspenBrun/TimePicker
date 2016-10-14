var React = require('react');
var ReactDOM = require('react-dom');

/////////////////////////////////////////
// BASICS ///////////////////////////////
/////////////////////////////////////////

// Declare a variable:
var name = 'Gerdo';

// Access your variable 
// from inside of a JSX expression:
var greeting = <p>Hello, {name}!</p>;

 // Every JSX element is secretly a call to React.createElement().
 // The compiler transforms the JSX element into the following method 

 var h1 = <h1>Hello world</h1>; // is transformed to

var h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);

//////////////////////////////////////////
// THE TERNARY OPERATOR //////////////////
//////////////////////////////////////////


// I can not inject an if into a JSX expression
// So do the if first, then inject the result

return x ? y : z;
return Math.random() < 0.5 ? 'heads' : 'tails';



///////////////////////////////////////////////
//OBJECTS - VARIABLES WITH NAMED PROPERTIES ///
///////////////////////////////////////////////

//Properties are the values associated with a JavaScript object.
//A JavaScript object is a collection of unordered properties.
//Properties can usually be changed, added, and deleted, but some are read only.

//In real life, a car is an object.
//A car has properties like weight and color, and methods like start and stop:
//All cars have the same properties, but the property values differ from car to car.
//All cars have the same methods, but the methods are performed at different times.

//JavaScript variables are containers for data values.
//This code assigns a simple value (Fiat) to a variable named car:

var car = "Fiat"; // car == var, car != obj. "Fiat"==value. No name for the value

//Objects are variables too. But objects can contain many values.
//This code assigns many values (Fiat, 500, white) to a variable named car:

var car = {type:"Fiat", model:"500", color:"white"}; 
// car == var, car == obj. ["Fiat","500","white"] == values. [type,model,colro] == names.
// a name:value pair is called a property! Objects are containers for named values.

//
//property=name:value
//

// Use a variable to set the `height` and `width` attributes:
// Use Object Properties e.g. pics.panda to set attributes.

var sideLength = "200px";

var pics = {
  panda: "http://bit.ly/1Tqltv5", //
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

var panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda"
    height={sideLength}
    width={sideLength} />
);

//////////////////////////////////
// COMPONENTS ////////////////////
//////////////////////////////////
	
// A component is not a component class
// Calling React.createClass() creates a component class
// A component class is like a factory that produces components.
// To create a component instance, the component class must be called

//React is an object. createClass() is a method.

React.createClass()

// React.createClass() takes one argument: an object {}
// This object will act as a set of intstructions, an instructions object

var instructions = {
	render: function(){
		return <h1>Hello World</h1>;
	}
};

React.createClass(instructions);

// These instructions tell my component class how to build a React component

// The instructions object only needs one (mandatory) property
// This property's name is render.
// The render property's value is a function
// The render function must have a return statement
// The return statement is usually a JSX expression

var instructions = {
	render: function(){

	}
};

// Creating a componentclass

var MyComponentClass = React.createClass({
	render: function(){
		return <h1>Hello peeps</h1>;
	}
});

// Creating a component instance
// Every component instance inherits the properties from the corresponding component class

<MyComponentClass/>;

// Rendering the component
// To render the component, we have to call the components render function
// We call the components render function by passing it to ReactDOM.render
// ReactDOM.render tells the component to call its render function

ReactDOM.render(<MyComponentClass/>, document.getElementById('elementIdGoesHere'));

// When passed, MyComponentClass wil call it's render function
// and return <h1>Hello peeps</h1>
// ReactDOM.render takes that <h1>Hello peeps</h1> and adds it to the virtual DOM
// <h1>Hello peeps</h1> is eventually visible on the screen



///////////////////////////////
// THIS ///////////////////////
///////////////////////////////

// this refers to the instructions object passed to createClass()
// here, this has two properties: food and render

var IceCreamGuy = React.createClass({
  food: "ice cream",

  render: function () {
    return <h1>I like {this.food}.</h1>;
  }
});



////////////////////////
// EVENT LISTENERS /////
////////////////////////

// Create an event listener by giving the JSX element a special attribute
// The "event listener attribute" has a name
// This name should be something like onClick, onMouseOver. onEvent.
// The event listeners value should be a function.

<button onClick={myFunc}>Click me</button>

//Note: HTML has onclick, JSX has onClick.

// The onClick attribute passes an event listener, lest call it e
// console.log(e) gives [object Object]

//////////////////////
// EVENT HANDLER /////
//////////////////////

// An event handler is a function
// We define the event handler as a property value of instructions object

// So, if I want something to happen when I click a button
// I make a component class that has a render property with the JSX for the button
// On this button I add an onCLick attribute
// I then make another property above the render property
// I make the value of this the event handler function
// Then I can call {this.eventHandler} as the button onClick attribute's value

var MyButton = React.createClass({
	scream: function(){
		alert('AAAAH');
	}

	render: function(){
		return <button onClick={this.scream}>Click</button>
	}
});


