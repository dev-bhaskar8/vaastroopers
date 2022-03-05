
export default function Nav(props){
    return(
        <nav>
            <img src="./assets/trooperlogo.png"/>
            <svg fill="#fff6f6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg>
            <div>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.2875 23.75C17.1008 23.7506 16.9162 23.7094 16.7475 23.6294C16.5788 23.5493 16.4301 23.4325 16.3125 23.2875L10.275 15.7875C10.0911 15.5638 9.99064 15.2833 9.99064 14.9938C9.99064 14.7042 10.0911 14.4237 10.275 14.2L16.525 6.7C16.7372 6.44473 17.0421 6.2842 17.3726 6.25373C17.7031 6.22325 18.0322 6.32533 18.2875 6.5375C18.5428 6.74967 18.7033 7.05456 18.7338 7.3851C18.7642 7.71563 18.6622 8.04473 18.45 8.3L12.8625 15L18.2625 21.7C18.4154 21.8835 18.5124 22.1069 18.5423 22.3438C18.5721 22.5808 18.5335 22.8213 18.4309 23.037C18.3284 23.2526 18.1662 23.4344 17.9635 23.5608C17.7609 23.6871 17.5263 23.7528 17.2875 23.75Z" fill="#fff6f6"/>
            </svg>

                <h2>Contact Us</h2>
                <h2>About</h2>
                <h2>Discord</h2>
                <button onClick={props.address ? props.handleDisconnect : props.handleConnect}>
                    {props.address ? "Disconnect your Metamask" :"Connect your Metamask" }
                </button>
            </div>       
        </nav>


    )


}