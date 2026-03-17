
const getTheYear = () => { 
    const newDate = new Date();
    return newDate.getFullYear();
}

const handleChange = (event) => {
    console.log(event.target.value)
}
const Header = () => {
    return(
    <header>
        <div className="logo">
            Logo
        </div>
        <input
            //onChange={e => console.log(e.target.value)} both ways work the same for simple events
            onChange={handleChange} //there are many event and they are the almost identical to javaScript, are known as synthetic events
        />
    </header>
)}

export default Header;