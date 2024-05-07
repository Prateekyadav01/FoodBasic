import "./hero.css";

function Hero(){
    return(
        <div className="hero">
            <div className="heroContent">
                <h1 className="heroHead">
                Let us find your <br/> <span className="redHead">Forever Food.</span>
                </h1>
                <p className="heroPara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className="buttons">
                    <button className="heroSearch">Search Now</button>
                    <button className="heroKnow">Know More</button>
                </div>
            </div>
        </div>        
    );
};

export default Hero;
