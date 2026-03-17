import Navigation from './nav';
const handleChange = (event) => {
    console.log(event.target.value)
}
const Header = () => {
    return(
    <header>
        <div className="logo">
            Logo
        </div>
        <input onChange={handleChange} />
        <Navigation/>
    </header>
)}

export default Header;