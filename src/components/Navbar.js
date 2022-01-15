export const Navbar = (props) => {
    return (
        <header id="header" className="transparent-navbar navTop">
            <marquee id="timeline" className="changecolor" onmouseover="this.stop();"  onmouseout="this.start();"> Coming Soon! Stay tuned for updates. </marquee>
            <div className="container">
                {/*navbar header */}
                <div className="navbar-header">
                    {/* <!-- Logo --> */}
                    <div className="navbar-brand">
                        <a className="logo" href="#home">
                            <img className="logo-img" src="./img/logos/wide-small-white.png" alt="logo"/>
                            <img className="logo-alt-img" src="./img/logos/wide-small.png" alt="logo"/>
                        </a>
                    </div>
                            {/* <!-- /Logo --> */}

                            {/* <!-- Mobile toggle --> */}
                            <button className="navbar-toggle">
                                <i className="fas fa-bars"></i>
                            </button>
                            {/* <!-- /Mobile toggle --> */}
                </div>
                    {/* <!-- /navbar header --> */}

                    {/* <!-- Navigation --> */}
                    <nav id="nav">
                        <ul className="main-nav nav navbar-nav navbar-right">
                            {/* <!-- <li><a href="#home">Top</a></li> --> */}
                            <li><a href="#about">about</a></li>
                            <li><a href="#schedule">schedule</a></li>
                            {/* <!-- <li><a href="#themes">Themes</a></li> --> */}
                            <li><a href="#sponsors">sponsors</a></li>
                            <li><a href="#faq">faq</a></li>
                            <li><a href="judges.html">Judges</a></li>
                            <li><a href="mentors.html">Mentors</a></li>
                            <li><a href="teams">team</a></li>
                        </ul>
                    </nav>
                    {/* <!-- /Navigation --> */}
            </div>
                {/* <!-- /container --> */}
        </header>
    )
}
