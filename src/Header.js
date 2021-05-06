import logo from "./images/Logo.svg"
function Header() {
    return <div className="Header">
    <Logo />
    <Menu />
    </div>
}
function Logo() {
    return<div className="Logo">
        <img src={logo} alt="" />
    </div>
}
function Menu() {
    return<div className="Menu">
        <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
    </div>
}


export default Header