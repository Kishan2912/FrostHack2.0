export const Navbar = (props) => {
    function stop() {
        document.getElementById("timeline").stop();
    }
    function strt() {
        document.getElementById("timeline").start();
    }

    return (
        <header id="header" className="transparent-navbar navTop">
            <marquee id="timeline" className="changecolor" onMouseOver={stop}  onMouseOut={strt}> Coming Soon! Stay tuned for updates. </marquee>
            <div className="container">
                {/*navbar header */}
                <div className="navbar-header">
                    {/* <!-- Logo --> */}
                    <div className="navbar-brand">
                        <a className="logo" href="#home">
                            <img id="image2" className="logo-img" src="./img/logos/wide-small-white.png" alt="logo"/>
                            <img id="image1" className="logo-alt-img" src="./img/logos/wide-small.png" alt="logo"/>
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
                            <li><a id="1" href="index#about">about</a></li>
                            <li><a id="2" href="index#schedule">schedule</a></li>
                            <li><a id="3" href="index#sponsors">sponsors</a></li>
                            <li><a id="4" href="index#faq">faq</a></li>
                            <li><a id="5" href="/judges">Judges</a></li>
                            <li><a id="6" href="/mentors">Mentors</a></li>
                            <li><a id="7" href="/teams">team</a></li>
                            <li><a id="8" href="/archive">Archives</a></li>
                        </ul>
                    </nav>
                    {/* <!-- /Navigation --> */}
            </div>
                {/* <!-- /container --> */}
        </header>
    )
}
