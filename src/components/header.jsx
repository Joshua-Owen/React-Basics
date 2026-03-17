
const getTheYear = () => { 
    const newDate = new Date();
    return newDate.getFullYear();
}

/*
makes classes for the styles that we add inline 
as this is javascript we dont get auto-fill
let styles = {
    header:{
        background: '#03a9f4'
    },
    logo:{
        color: '#ffffff',
        fontFamily: 'Anton',
        textAlign: 'center'
    }
}
*/
const Header = () => {
    return(
    <header>
        <div className="logo">
            Logo
        </div>
        <input/>
    </header>
)}

export default Header;