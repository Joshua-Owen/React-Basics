
const getTheYear = () => { //creates a funtion that will create a instance of the date class and then return the full year. This is the same as 
                        //{const newDate = new Date(); return newDate.getFullYear(); but its done outside the component to return a single expression
    const newDate = new Date();
    return newDate.getFullYear();
}


//const Header = () => (
   // <>
      // The date is {Date.now()} {/*this is an single expression as its returning 1 thing*/}
        {/* The year is {const newDate = new Date(); return newDate.getFullYear();} this is all valid however this is not a single expression it is 2 
                                                                                    1, the creation of the variable and 2, the return of said vairable
                                                                                    this is why it is causing a in line error*/}

      //    The year is {getTheYear()}  
          {/*we can create a function that can do multiple calcs and then call the funstions instead to get past the multiple expressions issue*/}   
     //     what is 5 + 5? {5+5}                                                                         
   // </>
//)

const Header = () => {
    return( /*we must return with () when using {} for the component */
    <header>
        <div>
            Logo
        </div>
        <input/> {/* allows users to input strings*/}
    </header>
)}

export default Header;