const Card = ({ sugarNameKR, content, kcal, characteristic, bloodSugar, sweet }) => (
    <div className="card-item">
        <h3 className="card-title">{sugarNameKR}</h3>
        <p className="card-content">{content}</p>
        <div className="card-details">
            <p><strong>칼로리:</strong> {kcal} kcal</p>
            <p><strong>상대 당도:</strong> {sweet}%</p>
            <p><strong>혈당 영향:</strong> {bloodSugar}</p>
        </div>
        <p className="card-characteristic">{characteristic}</p>
    </div>
);

export default Card