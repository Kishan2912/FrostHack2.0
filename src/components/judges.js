import React from 'react'

export default function judges() {
    return (
        <div>
        <meta name="keywords" content="tech,event,hack,hackathon,2020,frosthack,iit,mandi,fest,latest,trending" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
        <title>FrostHack | IIT Mandi</title>
        {/* favicon */}
        <link rel="icon" href="./img/logos/favi.png" type="image/x-icon" />
        <link rel="shortcut icon" href="./img/logos/favi.png" type="image/x-icon" />
        {/* Google font */}
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700,900" rel="stylesheet" />
        {/* Bootstrap */}
        <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
        {/* Owl Carousel */}
        <link type="text/css" rel="stylesheet" href="css/owl.carousel.css" />
        <link type="text/css" rel="stylesheet" href="css/owl.theme.default.css" />
        {/* Font Awesome Icon */}
        <link rel="stylesheet" href="fontAwesome/css/all.min.css" />
        {/* <link rel="stylesheet" href="css/font-awesome.min.css"> */}
        {/* Custom stlylesheet */}
        <link type="text/css" rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/index.css" />
        <style dangerouslySetInnerHTML={{__html: "\n\t\t.centered {\n\t\t\ttext-align: center;\n\t\t\tmargin : 5rem auto;\n\t\t}\n\t\t.centered h2 {\n\t\t\tfont-size: 2rem;\n\t\t}\n\t\t.centered img {\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\t.centered .fab{\n\t\t\tmargin-right: 20px;\n\t\t}\n\t\t\n\t" }} />
        {/* Header */}
        <header id="header" className="transparent-navbar navTop">
          <marquee id="timeline" className="changecolor" onmouseover="this.stop();" onmouseout="this.start();">
          </marquee>
          {/* container */}
          <div className="container">
            {/* navbar header */}
            <div className="navbar-header">
              {/* Logo */}
              <div className="navbar-brand">
                <a className="logo" href="#home">
                  <img className="logo-img" src="./img/logos/wide-small-white.png" alt="logo" />
                  <img className="logo-alt-img" src="./img/logos/wide-small.png" alt="logo" />
                </a>
              </div>
              {/* /Logo */}
              {/* Mobile toggle */}
              <button className="navbar-toggle">
                <i className="fas fa-bars" />
              </button>
              {/* /Mobile toggle */}
            </div>
            {/* /navbar header */}
            {/* Navigation */}
            <nav id="nav">
              <ul className="main-nav nav navbar-nav navbar-right">
                {/* <li><a href="#home">Top</a></li> */}
                <li><a href="/index.html#about">about</a></li>
                <li><a href="/index.html#schedule">schedule</a></li>
                {/* <li><a href="#themes">Themes</a></li> */}
                <li><a href="/index.html#sponsors">sponsors</a></li>
                <li><a href="/index.html#faq">faq</a></li>
                <li><a href="judges.html">Judges</a></li>
                <li><a href="mentors.html">Mentors</a></li>
                <li><a href="team.html">team</a></li>
              </ul>
            </nav>
            {/* /Navigation */}
          </div>
          {/* /container */}
        </header>
        {/* /Header */}
        {/* team */}
        <div id="team" className="section" style={{marginTop: '10vh'}}>
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* section title */}
              <div className="section-title">
                <h3 className="title"><span>meet the</span> <span style={{color: '#dd0a37'}}>Judges</span></h3>
              </div>
              {/* /section title */}
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/tag.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Timothy A. Gonsalves</b></h2>
                <p>Computer Scientist, Professor</p>
                <p>Former Director, IIT Mandi</p>
                <a href="https://www.facebook.com/timothy.gonsalves.71" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="email:tag@iitmandi.ac.in" target="_blank">
                  <i className="fas fa-envelope-open-text" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/manas.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Manas Thakur</b></h2>
                <p>Computer Scientist, Assistant Professor IIT Mandi</p>
                <a href="https://www.facebook.com/manasthakur17" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="email:manas@iitmandi.ac.in" target="_blank">
                  <i className="fas fa-envelope-open-text" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/sreelakshmi.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Sreelakshmi Manjunath</b></h2>
                <p>Computer Scientist, Assistant Professor IIT Mandi</p>
                <a href="https://scholar.google.com/citations?user=P66Q9xUAAAAJ&hl=en" target="_blank">
                  <i className="fab fa-google" />
                </a>
                <a href="email:sreelakshmi@iitmandi.ac.in" target="_blank">
                  <i className="fas fa-envelope-open-text" />
                </a>
              </div>
              {/* /team-member */}
            </div>
            {/* row */}
            <div className="row">
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/priyansh.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Priyansh Saxena</b></h2>
                <p>Analyst at Goldman Sachs</p>
                <p>Alumnus, IIT Mandi</p>
                <a href="https://www.facebook.com/PCGAYLE" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/sahil.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Sahil Arora</b></h2>
                <p>Software Engineer at Google</p>
                <p>Alumnus, IIT Mandi</p>
                <a href="https://www.facebook.com/profile.php?id=100001976391752" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/shikhar.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Shikhar Gupta</b></h2>
                <p>Associate at Goldman Sachs</p>
                <p>Alumnus, IIT Mandi</p>
                <a href="https://www.facebook.com/shikhar.in" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
              </div>
              {/* /team-member */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /team */}
        {/* Contact */}
        <div id="contact" className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* section title */}
              <div className="section-title">
                <h3 className="title"><span>Contact</span> <span style={{color: '#dd0a37'}}>Us</span></h3>
              </div>
              {/* /section title */}
              {/* contact */}
              <div className="col-sm-3">
                <div className="contact">
                  <i className="fas fa-map-marked-alt fa-4x" />
                  <h3 className="mt-3">Address</h3>
                  <a className="changecolor" href="https://goo.gl/maps/6kq6iLFDopCikWVH7">
                    IIT Mandi,
                    Kamand,
                    Himachal Pradesh
                  </a>
                </div>
              </div>
              {/* /contact */}
              {/* contact */}
              <div className="col-sm-3">
                <div className="contact">
                  <i className="fas fa-phone fa-4x" />
                  <h3 className="mt-3">Phone</h3>
                  <p><a href="tel:+919654855054" className="changecolor">Nehal : +919654855054</a></p>
                  <p><a href="tel:+917987590764" className="changecolor">Shubhanshu : +917987590764</a></p>
                </div>
              </div>
              {/* /contact */}
              {/* contact */}
              <div className="col-sm-3">
                <div className="contact">
                  <i className="fas fa-envelope fa-4x" />
                  <h3 className="mt-3">Email</h3>
                  <a href="mailto:teamfrosthack@gmail.com" className="changecolor">teamfrosthack@gmail.com</a>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="contact">
                  <i className="fab fa-discord fa-4x" />
                  <h3 className="mt-3">Discord Server</h3>
                  <a href="https://discord.com/invite/YsV3MJ7ke2" className="changecolor">Invite Link</a>
                </div>
              </div>
              <img id="theme-toggle" src="img/sun.svg" onclick="themechange()" />
              {/* /contact */}
              {/* contact */}
              {/* <div class="col-sm-3">
					<div class="contact">
						<img src="img/zulip.svg" alt="zulipchat">
						<h3 class="mt-3">Zulip</h3>
						<a href="https://frosthack.zulipchat.com/">frosthack.zulipchat.com</a>
					</div>
				</div> */}
              {/* /contact */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /Contact */}
        {/* Footer */}
        <footer id="footer">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* footer logo */}
              <div className="col-md-4 col-md-push-4">
                <div className="footer-brand">
                  <a className="logo" href="#home">
                    <img className="logo-img" src="./img/logos/wide.png" alt="logo" />
                  </a>
                </div>
                <div className="contact-social">
                  <a target="_blank" href="https://www.facebook.com/frosthackiitmandi/"><i className="fab fa-facebook fa-2x" /></a>
                  <a target="_blank" href="https://www.instagram.com/frosthack_iitmandi/"><i className="fab fa-instagram fa-2x" /></a>
                  <a target="_blank" href="https://discord.com/invite/68fcSaXA">
                    <i className="fab fa-discord fa-2x" /></a>
                </div>
                <div className="centered-code">
                  <a href="code.html">Code of Conduct</a>
                </div>
              </div>
              {/* /footer logo */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </footer>
        {/* /Footer */}
        {/* jQuery Plugins */}
      </div>

    )
}
