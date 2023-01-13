1) JSX

JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).

JSX provides syntactic sugar for React.createElement( ) function.


# Component
# Props
Data in react is unidirectional Dad> Son> grandSon>goesOn (one way)Props Drilling 
Props Read only(we can not reassign value)

+ We can send object,primitive type, funciton as props
+ We can sent state as props
  
# Event

we will use annonymous funciton while we add eventLisner a funciton which has  parameter. if we do not put the funciton inside annonymous function, it will get invoke before user ckilied it.

# useState()
The useState hook allows us to create state variables in a React function component.

When we create a state variable, we must provide it a default value (which can be any data type).

+ Update State Variables

useState also gives us a setter function to update the state after it is created.

To update our state variable, we pass the setter function the new value we want our state to be.

# useEffect()
side effect/ Manage External resources / it will load only once if no dependency is given. if there is any dependency, whenever dependant variable will change this function will get call again 