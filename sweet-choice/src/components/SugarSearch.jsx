import "../styles/sugarSearch.css"

const SugarSearch = ({sugarList, SelectedSugar, onSugarSelect}) => {
    return (<div id="SugerSearchGrid">
      {sugarList.map((sugar, index) => (
        <div 
          key={index} 
          onClick={() => onSugarSelect(sugar.KR)}
          className={`SugerItemBox ${SelectedSugar === sugar.KR ? 'selected' : ''}`}
        >
          <div className="sugar-name-display">
            {sugar.KR} 
          </div>
        </div>
      ))}
    </div>
    )
}

export default SugarSearch