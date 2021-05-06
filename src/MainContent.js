import Buttons from "./Buttons.js" 

function MainContent() {
    return<div>
        <Number />
        <Buttons />
    </div>
}
function Number(){
    return<div className="Number">
        0
    </div>
}

export default MainContent