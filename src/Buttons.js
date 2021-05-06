function Buttons(){
    return<div className="Buttons">
        <Increase />
        <Reduse />
        <Reset />
    </div>
}
function Increase() {
    return<div className="Increase">
        Увеличить
    </div>
}
function Reduse() {
    return<div className="Reduse">
        Уменьшить
    </div>
}
function Reset() {
    return<div className="Resent">
        Сбросить
    </div>
}

export default Buttons