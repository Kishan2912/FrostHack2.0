import React from 'react'

export const Team = (props) =>  {
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
                <h3 className="title"><span className="changecolor">meet the</span> <span style={{color: '#dd0a37'}}>Organizing Team</span></h3>
              </div>
              {/* /section title */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/saransh.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Saransh Jain</b></h2>
                <p className="changecolor">Overall Head</p>
                <a href="https://www.facebook.com/saransh.jain.921677" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+917300067222" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/kartik.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Kartik Kathuria</b></h2>
                <p className="changecolor">Overall Head</p>
                <a href="https://www.facebook.com/kartik.kathuria.146" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+917982453395" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/subhash.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Subhash Suman</b></h2>
                <p className="changecolor">Overall Head</p>
                <a href="https://www.facebook.com/subhash.suman.186" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+917703813759" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/vyom.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Vyom Goel</b></h2>
                <p className="changecolor">Overall Head</p>
                <a href="https://www.facebook.com/vyom.goel.12" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+919816790032" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/vasu.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Vasu Gupta</b></h2>
                <p className="changecolor">Finance Head</p>
                <a href="https://www.facebook.com/vgzelda123" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+917009300207" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/vipul.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Vipul Sharma</b></h2>
                <p className="changecolor">Finance</p>
                <a href="https://www.facebook.com/vsvipul555" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+919418322955" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/abhijeet.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Abhijeet Manhas</b></h2>
                <p className="changecolor">Technical</p>
                <a href="https://www.facebook.com/astromanahas" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+918628963924" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/saksham.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Saksham Barara</b></h2>
                <p className="changecolor">Branding</p>
                <a href="https://www.facebook.com/profile.php?id=100011143120838" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+919877757063" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/Shobhit_Rajput.jpeg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Shobhit Rajput</b></h2>
                <p className="changecolor">Branding</p>
                <a href="https://www.facebook.com/shobhit.rajput.391" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+918126588271" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/Priyam.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Priyam Seth</b></h2>
                <p className="changecolor">Branding</p>
                <a href="https://m.facebook.com/priyam.seth.336" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+919811417932" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/Vineet_Ahuja.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Vineet Ahuja</b></h2>
                <p className="changecolor">Branding</p>
                <a href="https://www.facebook.com/vineet.ahuja.378" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+919911473244" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/Shubhanshu.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Shubhanshu Agrawal</b></h2>
                <p className="changecolor">Branding</p>
                <a href="https://m.facebook.com/profile.php?id=100014538347418&ref=content_filter" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+917987590764" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/Shubham.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Shubham Saurav</b></h2>
                <p className="changecolor">Branding</p>
                <a href="https://www.facebook.com/shubham.saurav.980967" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+919304902560" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/Priyanshu.jpeg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Priyanshu Shubham</b></h2>
                <p className="changecolor">Branding</p>
                <a href="https://www.facebook.com/priyanshu.shubham3" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+918340437870" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/Pratiksha.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Pratiksha Jain</b></h2>
                <p className="changecolor">Branding</p>
                <a href="https://www.facebook.com/profile.php?id=100006780016974" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+918130476897" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/divyasheel.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Divyasheel</b></h2>
                <p className="changecolor">Technical</p>
                <a href="https://www.facebook.com/divyasheel.kumar/" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+918437151118" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/pranshuk.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Pranshu Kharkwal</b></h2>
                <p className="changecolor">Branding</p>
                <a href="https://www.facebook.com/kharkwalpranshu" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+917876219654" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/deepaliSingh.jpeg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Deepali Singh</b></h2>
                <p className="changecolor">Branding</p>
                <a href="https://www.facebook.com/deepali.s11/" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+918058041116" target="_blank">
                  <i className="fas fa-phone fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-3 col-md-6 centered">
                <img className="img img-circle" src="img/adityas.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b className="changecolor">Aditya Sarkar</b></h2>
                <p className="changecolor">Technical</p>
                <a href target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="tel:+917042728328" target="_blank">
                  <i className="fas fa-phone fa-lg" />
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
        <img id="theme-toggle" src="img/sun.svg" onclick="themechange()" />
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
                    <img className="logo-img" src="./img/logos/1.png" alt="logo" />
                  </a>
                </div>
                <div className="contact-social">
                  <a target="_blank" href="https://www.facebook.com/frosthackiitmandi/"><i className="fab fa-facebook fa-2x" /></a>
                  <a target="_blank" href="https://www.instagram.com/frosthack_iitmandi/"><i className="fab fa-instagram fa-2x" /></a>
                  <a target="_blank" href="https://discord.com/invite/68fcSaXA">
                    <i className="fab fa-discord fa-2x" /></a>
                </div>
                <div className="centered-code">
                  <a href="code.html" className="changecolor">Code of Conduct</a>
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
