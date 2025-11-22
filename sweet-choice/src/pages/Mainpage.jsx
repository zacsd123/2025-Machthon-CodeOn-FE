import { useRef, useState } from "react";
import "../styles/Mainpage.css"

const abilityKeys = ["foodSearch", "sugarSearch", "customReport", "dietTip"]

const abilityItems = {
    "foodSearch": {
        title: "음식 이름 검색",
        content: "먹었던, 먹고 싶었던 음식을 검색해 영양 정보를 알아보세요!",
    },
    "sugarSearch": {
        title: "당 검색",
        content: "궁금했던 영양소를 검색해 관련 지식을 얻어보세요!",
    },
    "customReport": {
        title: "맞춤 레포트",
        content: "나에게 맞는 레포트를 받아 건강을 관리해보세요!",
    },
    "dietTip": {
        title: "다이어트 팁",
        content: "검증받은, 믿을만한 지식을 제공합니다.",
    }
}

export default function Mainpage() {

    const listRef = useRef(null); 
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // 3. 마우스 이벤트 핸들러 함수 정의
    const handleMouseDown = (e) => {
        if (!listRef.current) return;
        
        setIsDragging(true);
        setStartX(e.pageX - listRef.current.offsetLeft);
        setScrollLeft(listRef.current.scrollLeft); 
        
        listRef.current.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
        if (!listRef.current) return;
        
        setIsDragging(false);
        listRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !listRef.current) return;
        
        e.preventDefault(); 
        
        const x = e.pageX - listRef.current.offsetLeft;
        const walk = x - startX;
        
        listRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div id="Mainpage">
            
            <div id="mainimgbody">
                <span id="backgroundIMG"/>
                <div id="mainTextContainer">
                    <h1 id="mainTitle">Smarter Sweet Choices</h1>
                    <p id="mainSubtitle">오늘의 선택이 내일의 건강이 되도록</p>
                </div>
            </div>

            <div id="contentbody">
                
                <div id="abilities">
                    <h2 id="abilityText">나에게 맞는 당 관리의 시작</h2>
                    <div 
                        id="abilityList"
                        ref={listRef} 
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp} 
                        onMouseMove={handleMouseMove}
                    >
                        {abilityKeys.map((key) => (
                            <div className="abilityItem" key={key}>
                                <div className="ItemTitle">
                                    {abilityItems[key].title}
                                </div>
                                <span className="ItemContent">
                                    {abilityItems[key].content}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="reportSection">
                    <h2 id="reportTitle">맞춤형 리포트 제공</h2>
                    <div id="reportContainer">
                        
                        <div id="reportSummary">
                            <div className="reportVisual">
                                picture
                            </div>
                            <p className="reportDescription">
                                - 단순한 영양 정보가 아닌, 나에게 필요한 선택을 돕는 플랫폼입니다.
                                <br/>오늘의 단당 관리가 내일의 건강으로, 당탄한 단맛을 경험하게 해드립니다.
                            </p>
                        </div>
                        
                        <div id="aiFeedback">
                            <div id="aiIconContainer">
                                <span id="aiIcon"></span> 
                                <p id="aiText">
                                    **AI 분석**으로 나에게 꼭 맞는<br/>
                                    **당 섭취 코멘트와 피드백**을<br/>
                                    받아보세요.
                                </p>
                            </div>
                            <p id="dailyHealthText">
                                매일의 선택이 더 건강해집니다.
                            </p>
                        </div>
                        
                    </div>
                </div>
                
                <div id="footer">
                    <p>About Us</p>
                    FE 신채영 - 동덕여자대학교 멋쟁이사자처럼 프론트엔드
                    <br />
                    FE 이예원 - 삼육대학교 멋쟁이사자처럼 프론트엔드
                    <br />
                    FE 조승완 - 명지대학교 멋쟁이사자처럼 프론트엔드
                    <br />
                    BE 김소연 - 강남대학교 멋쟁이사자처럼 백엔드
                    <br />
                    BE 임제영 - 서울여자대학교 멋쟁이사자처럼 백엔드
                </div>
                
            </div>
        </div>
    )
}