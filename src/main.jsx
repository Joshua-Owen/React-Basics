import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => ( //creates a component
<div>
    <h1>Hello World</h1>
</div>
)

const root = ReactDOM.createRoot(document.getElementById('root')); //creates an instance of react
root.render(<App/>); //return a instance of the component '</>' means that it is a component and not a function