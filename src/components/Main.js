

export default function Main(props){

    return(
        <div id="home">
            <div className="hero">
                <h1>Welcome to Vaastroopers</h1>
                <br />
                <br />
                <h3>A community of memers, gamers and anime lovers who hope to form a billion dollars valuation DAO.</h3>
                <br />
                <br />
                <div className="frame">
                <input 
                type="email" 
                placeholder="Your ERC20 address." 
                value={props.address}
                onChange={(event) => props.setAddress(event.target.value)}
                >
                </input>
                <button onClick={props.handleSubmit}>Future airdrops</button>
                </div>
            </div>
            <div>
                <img className="metaverse" src="./assets/metaverse.png" />
            </div>

        </div>
    )

}