import "./quote.css";

export default function Quote(props){
    return(
        <div className="quoteContainer">
            <p className="quote">
                {props.quote}
            </p>
            <p className="author">
                {props.author}
            </p>
        </div>
    );
}