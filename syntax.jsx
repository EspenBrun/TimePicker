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
// 		and return <h1>Hello peeps</h1>
// ReactDOM.render takes that <h1>Hello peeps</h1> and adds it to the virtual DOM
// <h1>Hello peeps</h1> is eventually visible on the screen


///////////////////////////////
// THIS ///////////////////////
///////////////////////////////

// this refers to the instructions object passed to createClass()
// So basically, this refers to the component it is in!
// Here, this has two properties: food and render

var IceCreamGuy = React.createClass({
  food: "ice cream",

  render: function () {
    return <h1>I like {this.food}.</h1>;
  }
});


////////////////////////////////
// PROPS ///////////////////////
////////////////////////////////

// If I want a component to do something 
//		(display, handle event, conditional, ...)
// 		with a prop that it gets
// 		from a different component, then I send it via props

// props != properties!!
// Every component has props
// A components props is an object
// The props hold information about the component
// To access a components props object, use this.props
// I can also add properties to a instance of a component
// (unclear why I woud tho)
// I can then also change the already defined props
// I can do that via a different component
// In this way, a component can pass information to another component
// (or strictly speaking, the information is passed to the components props object)

<MyComponentClass myProp={["hello","world","nice"]}/>

// If a want to display a prop that I pass MyComponentClass
//		then I need to prepare for that inside MyComponentClass
// I need to choose two names
// A props name, and a 

var MyComponentClass = React.createClass({
  render: function () {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
});

<MyComponentClass firstName="Batman"/>

// Pass an event handler function to another component
// Two names are chosen, both in the parent
// Names for the event listener and the handeler
// Convention: onEvent, handleEvent
// e.g. onClick={this.handleClick}
// Then later <button onClick={this.onClick} :)
// That looks like it makes sense!
// Could be talk={this.talk}
// <button onClick={this.talk}, but not as intuitive
// But remember, the onEvent name on the component is CHOSEN
// On the HTML it is a predefined attribute.

var Button = require('./Button');

var Talker = React.createClass({
  handleClick: function () {
    for (var speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },
  
  render: function () {
    return <Button onClick={this.handleClick}/>;
  }
});


// The Button has an onClick prop. (!=button)
// I pass an object to that prop. 
// That object is an event handler function, 
//		defined earlier in Talker 
// I pass the object as {this.handleClick.}
// this refers to Talker, which is remembered when it is passed.
// Then Button will access that as this.props.handleClick

// Every components props object has a property named children
// this.props.children will return everything in between a
//		components opening and closing JSX tags

<BigButton>
  I am a child of BigButton.
</BigButton>

// I can set default props.
// Useful if no props is passed to the component
// If this button doesn't recieve a prop named text,
// 		it will just display "I am a button"

var Button = React.createClass({
  getDefaultProps: function(){
    return {text: 'I am a button'};
  },
  
  render: function () {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
});

// Set default props
getDefaultProps: function(){
  return {
    size: 50,
    radius: 100
  };
},

///////////////////////////////
// STATE //////////////////////
///////////////////////////////

// props and state are the only parts of a component that change
// props are passed from the outside, state from the inside
// But still, I can use a child to change a parents props,
//    and then use the props to change the state
//    therby implicitly changing the state form outside
// To give a component state I need an getInitialState function
// getInitialState returns an object, just like the props
// Here, <Example /> has a state of {mood: 'dcent'}
// To use the state, this.state.stateName

var Example = React.createClass({
  getInitialState: function () {
    return { mood: 'decent' };
  },

  render: function () {
    return <h1>I'm feeling {this.state.mood}</h1>;
  }
});

// A component can also change it's state
// this.setState
// Can now have a default state, and can change that depending on input
//    like a conditional
var Example = React.createClass({
  
  getInitialState: function () {
    return { mood: 'decent' };
  },

  makeHappy: function(){
    this.setState({mood: 'happy'});
  },

  render: function () {
    return <h1>I'm feeling {this.state.mood}</h1>;
  }
});

// I can not call this.setState from inside render
// this.setState automatically calls render
// So we can see changes made by calling this.setState immediately
// this.setState inside render would create an infinite loop




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
// 		(make properties for event handlers)

// So, if I want something to happen when I click a button
// I make a component class that has a render property with the JSX for the button
// On this button I add an onCLick attribute
// I then make another property above the render property
// I make the value of this the event handler function
// Then I can call {this.eventHandler} as the button onClick attribute's value

// easier
// I make my componentclass, like a button
// I put all my eventhandlers related to the button
// 		in the component class

var MyButton = React.createClass({
	scream: function(){
		alert('AAAAH');
	}

	render: function(){
		return <button onClick={this.scream}>Click</button>
	}
});

////////////////////////
// STUFF ///////////////
////////////////////////

// Just some insight. This is (ofc) a way to do print something

console.log(require('./Manifestos').futurist);

////////////////////////////////
// LIFECYCLE ///////////////////
////////////////////////////////

// BEFORE ANYTHING

// displayName is a sting that is used during debugging
// JSX sets this value automatically
displayName: '',

// statics object, I can run these before 
//     any component instances are created
// statics do not have explicit access to the props and state
statics: {},

// validate props: so maybe not something I need right now
propTypes: {},

// BEFORE MOUNTING

// invoked once, before the initial rendering
// both on client and server side
componentWillMount: function(){},


// AFTER MOUNTING

// invoked once, right after the initial rendering
// only on client side
componentDidMount: function(){},

// UPDATING

// Not invoked on the initial render
// Invoked when a component is receiving new props,
//    like if the end user changes the time on the clock
// This is used to respond to a prop transition
//    before render is called, by updating this.setState()
// The old props can be accessed via this.props
// Calling this.setState() within componentWillRecieveProps
//    dos not trigger an additional render
// Not sure if it has to have nextProps as an argument
componentWillRecieveProps: function(nextProps){
  this.setState({
    likesIncreasing: nextProps.likeCount > this.props.likeCount
  });
},

// Invoked immediately when new peops or state are being recieved
// Not called on initial render
// Use to do preparations before an update occurs
componentWillUpdate: function(){},

// invoked once before the component is mounted
getInitialState: function(){
  return {};
},
getDefaultProps: function(){
  return {};
},

// Invoked immediately after the component's updates are flushed to the DOM
// Not invoked on initial render
// Use as an oppurtunity to operate on the DOM when the component has been updated

// render: is a lifecycle method
// render should be pure
// it should not modify component state
// modifying should be done in other lifecycle components
// for example in componentDidMount 
render: function(){},

/////////////////////////////////////////
// PARENTS STATE IS UPDATED BY A CHILD //
/////////////////////////////////////////

// Ideally, a child should be stateless
// The parent has the states, it is statefull
// The states are passed as props to the child
// The child can use it's props to display, make decisions etc
// If necessary, the parent also passes methods as props to the child,
//    methods that can change the parents state
// If the child uses such a method, the parent state will change,
//    which will change the props that are passed to the child
//    which will change what the child displays, the decisions it makes etc
// A parent can also choose to let a child change a state
//    that is passed as a prop to a different child, which then updates.
// In this way, a child can update a sibling.

// Ideal React: An instance of a stateful parent is rendered.
// One stateless component displays the state of the parent
// A different stateless child displays a way to change the parents state, like a button

// Example below of child updating a parent. Code not ready, but almost I think.
// Initally the button will display 'oldName'
// when it is clicked, it will display 'newName'
// and this happens via updating the parents state

var Parent =React.createClass({

  getInitialState: function(){
    return {
      name: 'oldName'
    };
  }

  handleChange: function(newName){
    this.setState({name: newName});
  },

  render: function(){
    return <Child onChange={this.handleChange} name={this.state.name}/>
  }

});

var Child = React.createClass({
  handleChange: function(newName){
    this.props.onChange(newName);
  },

  render: function(){
    return (
      <button onClick={this.handleChange("newName")}>{this.props.name}</button>
      );
  }

});

// React 0.13 introduced the possibility to define components using plain JavaScript ES6 classes.
// But differently from the traditional React.createClass, 
//    user defined methods in a ES6 class are not automatically bound!
// SUPER IMPORTANT CHANGE



/////////////////////
// DEBUGGING ////////
////////////////////

// Are your fukn variables etc consistently named???? ARE YOU SURE??



