import "./Header.css";

function Header(){
    return (
    // En vez de  "class", como es una palabra reservada de JS, usamos "className".
    <header className="header">
    <img src="/img/header.png" alt="Org" />
    </header>);
}

export default Header;