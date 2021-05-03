import reactDom from "react-dom";


reactDom.render(
    <table className="tab">
        <tr>
            <td width="200" valign="top">
                <LeftSideBarMenu />
            </td>
            <td width="700">
                <>
                <Address />
                <Syllabus />
                </>
            </td>
            <td width="300" valign="top">
                <>
                <SocialNetwork />
                <hr />
                <Schedule />
                </>
            </td>
        </tr>
    </table>,
    document.getElementById('root')
)
function LeftSideBarMenu(){
    return <ul>
			 	<li><a href="https://intocode.ru/#">Главная</a></li>
			 	<li><a href="https://intocode.ru/#">О нас</a></li>
			 	<li><a href="https://intocode.ru/#">Контакты</a></li>
		    </ul>
}
function Address() {
    return <>
    <h1>Курсы программирования</h1>
			<b>intocode</b> "- это курсы программирования, расположенные по адресу г.Грозный, ул.Трошева,7."<br/>
			<br/>"Обучение проходит в аудитории.Для записи пишите в директ"<a href="https://www.instagram.com/direct/t/340282366841710300949128312061485543480"> @intocode</a></>

}
function Syllabus(){
    return <>
			<h2>Программа обучения</h2>
			
			<table border="1">
				<tr>
					<td><b>Курс</b></td>
					<td><b>Длительность</b></td>
					<td><b>Стоимость</b></td>
				</tr>
				
				<tr>	
					<td>HTML/CSS</td>
					<td>10 уроков</td>
					<td>5000₽</td>
				</tr>

				<tr>
                    <td>HTML/CSS - дополнение</td>
					<td>6 уроков</td>
					<td>5000₽</td>
				</tr>

				<tr>
					<td>Основы JavaScript</td>
				    <td>10 уроков</td>
                    <td>5000₽</td>
				</tr>

				<tr>
					<td>Angular</td>
                    <td>6 уроков</td>
					<td>5000₽</td>
				</tr>

				<tr>
					<td>React (+Redux)</td>
					<td>6 уроков</td>
					<td>5000₽</td>
				</tr>

				<tr>
					<td>Базовый Git</td>
					<td>6 уроков</td>
					<td>3000₽</td>
				</tr>

				<tr>
					<td>WordPress + фриланс</td>
					<td>9 уроков</td>
					<td>5000₽</td>
				</tr>

			</table><br/>
    </>
       
}
function SocialNetwork(){
    return<>
    <h3>Наши страницы</h3>
			<a href="https://www.instagram.com/intocode/">instagram</a><br />
			<a href="https://vk.com/intocode">vkontakte</a><br />
			<a href="https://intocode.ru/">наш сайт</a><br /><br />
    </>
}
function Schedule(){
    return<>
    <h3>График работы</h3>
			"Пн-Пт c 09:00 до 20:00"<br />
			"Сб-Вс с 10:00 до 18:00"
    </>
}