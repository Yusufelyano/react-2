import footerLogo from "./images/FooterLogo.svg"

function Footer(){
    return<div className="Footer">
        <FooterLogo />
        <FooterMenu />
        <Copyright />
    </div>
}
function FooterLogo() {
    return <div className="FooterLogo">
        <img src={footerLogo} alt="FooterLogo"/>
    </div>
}
function FooterMenu() {
    return <div className="FooterMenu">
        <ul>
            <li><a href="#">Партнерам</a></li>
            <li><a href="#">Разработчикам</a></li>
            <li><a href="#">Вакансии</a></li>
        </ul>
    </div>
}
function Copyright() {
    return <div className="Copyright">
        ООО “интукод”, 2020г.
    </div>
}
export default Footer