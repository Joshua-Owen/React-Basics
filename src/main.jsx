
import { createRoot } from 'react-dom/client';  

/*const App = () => { //creates a component
return React.createElement('h1', {className: "title"}, React.createElement('div'))
}*/

const App = () => (
    /*
    <h1>Hello World</h1> // cant return multiple elements, it must be enclosed into a single element such as a <div>...</div>
    <h1>Hello World</h1>
    */

    /*<div>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
    </div>*/
    //the issue with this is that we are still creating additional elements we can use fragment which dont need a tag

    //fragments where introduced in react 16 and are written like <>...</>
    /*<> 
        <h1>Hello World</h1>
        <h1>Hello World</h1>
    </>*/
    //using <React.Fragment>...</React.Fragment> is the long way of using <>...</>

    <div /*class*/ className = "hey"> 
        <h1>Hello World</h1>
        <h1>Hello World</h1>
    </div>
    //className should be used instead of class in .jsx as although it may work, it will throw up an error
    //this is because the class keyword is reserved so it could be confused when you use it

)
/*const root = ReactDOM.createRoot(document.getElementById('root')); //creates an instance of react
root.render(<App/>); //return a instance of the component '</>' means that it is a component and not a function
*/

createRoot(document.getElementById('root')).render(<App/>);
//a simplified version of the previous method of running using the create root import