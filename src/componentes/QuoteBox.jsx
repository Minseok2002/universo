import "./styles/ronal.css"
const QuoteBox = ({ quote, handleChangeQuote }) => {
    const { phrase, author } = quote;

    console.log(quote);
    return (
        <article className="quotebox">
            <h1 className="quotebox__title">INFOGALAX</h1>
            <div className="quotebox__box">
                <p>{phrase}</p>
            </div>
            <button className="quotebox__btn" onClick={handleChangeQuote}>
                <img src="/images/boton.svg" alt="" />
            </button>
            <span className="quotebox__author">{author}</span>
        </article>
    );
};

export default QuoteBox;