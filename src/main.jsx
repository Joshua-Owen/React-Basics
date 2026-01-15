
import { createRoot } from 'react-dom/client';  
import Header from './components/header'; //import the component in the header.jsx file

const App = () => (

    <>
        <Header/> 
        {/*creates the component called header, if we just wrote 'Header' then it would be a function.
        this component will display what is in the header.jsx files component we exported that file and imported it in the main.jsx file*/}
    </>
)

createRoot(document.getElementById('root')).render(<App/>);
