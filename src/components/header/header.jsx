import Navigation from './nav';
import {useState} from 'react'; //imported useState

const Header = () => {
    
    const [keywords, setKeywords] = useState(''); 
    //needs to be declared in the body of a function component
    
    const handleChange = (event) => {
        setKeywords(event.target.value)
    }
    //The handleChange function also needs to be moved inside the header component too 
    // as it uses setKeywords which is inside the Header function
    
    return(
        <header>
            <div className="logo">
                Logo
            </div>
            <input onChange={handleChange} />
            The Keywords are: {keywords}
            <Navigation/>
        </header>
)}

export default Header;