function Header({title, sub, isLoggedIn}){

    return(
        <> 
            <h1>{title}</h1>
           {isLoggedIn ? <p>Logout</p> : <p>Login</p>}
        </>
    )
}
export default Header;