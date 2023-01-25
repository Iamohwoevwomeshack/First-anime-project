function Anima1(){
    return(
        <div className="anima1-container">
            <svg viewBox="0 0 1000 150" className="anima1-svg">
                <text id="mytext" x="50%" y="30%" textAnchor="middle" fill="none">Meshack</text>
                <use xlinkHref="#mytext" className="copy copy1" />
                <use xlinkHref="#mytext" className="copy copy2" />
                <use xlinkHref="#mytext" className="copy copy3" />
                <use xlinkHref="#mytext" className="copy copy4" />
                <use xlinkHref="#mytext" className="copy copy5" />
            </svg>

            <svg viewBox="0 0 1000 200" className="anima1-svg">
                <text id="mytext1" x="50%" y="30%" textAnchor="middle" fill="none">Family'sHome</text>
                <use xlinkHref="#mytext1" className="copy copy1" />
                <use xlinkHref="#mytext1" className="copy copy2" />
                <use xlinkHref="#mytext1" className="copy copy3" />
                <use xlinkHref="#mytext1" className="copy copy4" />
                <use xlinkHref="#mytext1" className="copy copy5" />
            </svg>
        </div>
    )
};

export default Anima1;