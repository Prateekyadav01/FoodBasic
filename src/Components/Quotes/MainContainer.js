import "./main.css";
import data from "./data.json";
import Quote from "./Quote";

export default function MainContainer(){
    return(
        <main>
            {
                data.map((e)=> <Quote quote={e.quote} author={e.author} />)
            }
        </main>
        
    );
}