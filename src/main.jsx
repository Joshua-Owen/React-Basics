
import { createRoot } from 'react-dom/client';  
import Header from './components/header';
import './styles/styles.css'; //importing to main.jsx allow it to be used throughout the project

const App = () => (

    <>
        <Header/> 
    </>
)

createRoot(document.getElementById('root')).render(<App/>);
