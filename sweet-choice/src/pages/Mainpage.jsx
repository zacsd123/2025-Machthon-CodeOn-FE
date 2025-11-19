import Header from "../components/Header"
import "../styles/Mainpage.css"

const abilityKeys = ["id1", "id2", "id3", "id4", "id5", "id6", "id7", "id8"]

const abilityItems = {
    "id1": "content1",
    "id2": "content2",
    "id3": "content3",
    "id4": "content4",
    "id5": "content5",
    "id6": "content6",
    "id7": "content7",
    "id8": "content8",
}

export default function Mainpage() {
    return (
        <div id="Mainpage">
            <div id="mainimgbody">
                <span id="backgroundIMG"/>
                
                <div className="scroll-indicator">
                    sdf
                </div>
            </div>
            <div id="contentbody">
                <div id="abilities">
                    <span id="abilityText">나에게 맞는 당 관리 시작</span>
                    <div id="abilityList">
                        {abilityKeys.map((item, index) => (
                            <div className="abilityItem" key={index}>
                                <span className="ItemText">{item}</span>
                                <span className="ItemContent">{abilityItems[item]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="report"></div>
            </div>
        </div>
    )
}