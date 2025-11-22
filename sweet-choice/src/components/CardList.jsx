import "../styles/CardList.css"
import Card from "./Card"

export const CardList = ({ data, isLoading, selectedChosung }) => (
    <div className="card-grid-container">
        {isLoading ? (
            <p className="loading-indicator">
                데이터를 불러오는 중입니다...
            </p>
        ) : data && data.length > 0 ? (
            data.map((item) => (
                <Card 
                    key={item.postId}
                    sugarNameKR={item.sugarNameKR}
                    content={item.content}
                    kcal={item.kcal}
                    characteristic={item.characteristic}
                    bloodSugar={item.bloodSugar}
                    sweet={item.sweet}
                />
            ))
        ) : selectedChosung === null ? (
            <p className="no-result">초성을 선택해 주세요!</p>
        ) : (
            <p className="no-result">해당 초성으로 시작하는 정보가 없습니다.</p>
        )}
    </div>
);