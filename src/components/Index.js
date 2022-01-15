export const Footer = (props) => {
    return (    
        // <!-- Header -->
	<header id="header" class="transparent-navbar navTop">
		<marquee
			id="timeline" 
			class="changecolor"
			onmouseover="this.stop();" 
			onmouseout="this.start();">
		</marquee>
		{/* <!-- container --> */}
		<div class="container">
			{/* <!-- navbar header --> */}
			<div class="navbar-header">
				{/* <!-- Logo --> */}
				<div class="navbar-brand">
					<a class="logo" href="#home">
						<img class="logo-img" src="./img/logos/wide-small-white.png" alt="logo">
						<img class="logo-alt-img" src="./img/logos/wide-small.png" alt="logo">
					</a>
				</div>
				{/* <!-- /Logo --> */}

				{/* <!-- Mobile toggle --> */}
				<button class="navbar-toggle">
					<i class="fas fa-bars"></i>
				</button>
				{/* <!-- /Mobile toggle --> */}
			</div>
			{/* <!-- /navbar header --> */}

			{/* <!-- Navigation --> */}
			<nav id="nav">
				<ul class="main-nav nav navbar-nav navbar-right">
					{/* <!-- <li><a href="#home">Top</a></li> --> */}
					<li><a href="#about">about</a></li>
					<li><a href="#schedule">schedule</a></li>
					{/* <!-- <li><a href="#themes">Themes</a></li> --> */}
					<li><a href="#sponsors">sponsors</a></li>
					<li><a href="#faq">faq</a></li>
					<li><a href="judges.html">Judges</a></li>
					<li><a href="mentors.html">Mentors</a></li>
					<li><a href="team.html">team</a></li>
				</ul>
			</nav>
			{/* <!-- /Navigation --> */}
		</div>
		{/* <!-- /container --> */}
	</header>
	{/* <!-- /Header --> */}

	{/* <!-- Home --> */}
	<div id="home">
		{/* <!-- background image --> */}
		<div class="section-bg hero" data-stellar-background-ratio="0.5"></div>
		{/* <!-- /background image --> */}

		{/* <!-- home wrapper --> */}
		<div class="home-wrapper">
			{/* <!-- container --> */}
			<div class="container">
				{/* <!-- row --> */}
				<div class="row">
					{/* <!-- home content --> */}
					<div class="col-md-8 col-md-offset-2">
						<div class="home-content">
							<h1>
								{/* <!-- frosthack --> */}
								<img id="frosthacklogo" src="./img/logos/wide-white.png" alt="">
							</h1>
							<h4 class="lead">
								<i class="fas fa-map-marker-alt"> IIT Mandi</i>
								<i class="fas fa-calendar-day"> 7th May - 9th May 2021</i>
							</h4>
							<a href="https://discord.com/invite/Vq9FwuCnmb" class="cta-button-hero"><img src="./img/discord.png"></a>
							<div> <br> </div>
							<div> <br> </div>
							<div 
								class="apply-button" 
								data-hackathon-slug="frosthack2021" 
								data-button-theme="light"
								style="height: 44px; width: 312px"
							></div>
						</div>

					</div>
					{/* <!-- /home content --> */}
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /home wrapper --> */}
	</div>
	{/* <!-- /Home --> */}

	{/* <!-- About --> */}
	<div id="about" class="section">
		{/* <!-- container --> */}
		<div class="container">
			{/* <!-- row --> */}
			<div class="row">
				{/* <!-- section title --> */}
				<div class="section-title">
					<h3 class="title"><span>About</span> <span style="color: #dd0a37;">Event</span></h3>
				</div>
				{/* <!-- /section title --> */}

				<div class="col-md-8 col-md-offset-2 text-center">
					{/* <!-- about content --> */}
					<div class="about-content">
						<p class="changecolor">
							FrostHack is an Open Hackathon organized by the student community of IIT Mandi with the goal of solving societal problems by collective collaboration among the students using tech.
						</p>
					</div>
					{/* <!-- /about content --> */}

				</div>
			</div>
			{/* <!-- row --> */}
		</div>
		{/* <!-- /container --> */}

		{/* <!-- container --> */}
		<div class="container" style="padding-top: 4em;">
			{/* <!-- row --> */}
			<div class="row tracks">
				{/* <!-- section title --> */}
				<div class="section-title">
					<h5 class="title"><span>Tracks</span> </h5>
				</div>
				{/* <!-- /section title --> */}

				{/* <!-- track --> */}
				<div class="col-sm-4">
					<div class="track">
						<img src="img/ai.svg" alt="">
						<h3 class="mt-3">AI</h3>
					</div>
				</div>
				{/* <!-- /track --> */}

				{/* <!-- track --> */}
				<div class="col-sm-4">
					<div class="track">
						<img src="img/blockchain.svg" alt="">
						<h3 class="mt-3">Blockchain</h3>
					</div>
				</div>
				{/* <!-- /track --> */}

				{/* <!-- track --> */}
				<div class="col-sm-4">
					<div class="track">
						<img src="img/innovation.svg" alt="">
						<h3 class="mt-3">General</h3>
					</div>
				</div>
				{/* <!-- /track --> */}

				{/* <!-- track --> */}
				<div class="col-sm-4">
					<div class="track">
						<img src="img/iot.svg" alt="">
						<h3 class="mt-3">Internet of things</h3>
					</div>
				</div>
				{/* <!-- /track --> */}

				{/* <!-- track --> */}
				<div class="col-sm-4">
					<div class="track">
						<img src="img/web.svg" alt="">
						<h3 class="mt-3">Web</h3>
					</div>
				</div>
				{/* <!-- /track --> */}

				{/* <!-- track --> */}
				<div class="col-sm-4">
					<div class="track">
						<img src="img/ar-glasses.svg" alt="">
						<h3 class="mt-3">AR/VR</h3>
					</div>
				</div>
				{/* <!-- /track --> */}

			</div>
			{/* <!-- /row --> */}
		</div>
		{/* <!-- /container --> */}
		
		{/* <!-- container --> */}
		<div class="container" style="padding-top: 4em;">
			{/* <!-- row --> */}
			<div class="row tracks">
				{/* <!-- section title --> */}
				<div class="section-title">
					<h5 class="title"><span>Prizes</span> </h5>
				</div>

				

				<div class="col-md-8 col-md-offset-2 text-center">
					{/* <!-- about content --> */}
					<div class="about-content">
						<p class="changecolor">
							₹1,50,000 Cash Prize and goodies worth 25k to be won!
						</p>
					</div>
					{/* <!-- /about content --> */}

				</div>
				

				{/* <!-- Prize Cards --> */}
				<div id="cards_landscape_wrap-2">
					<div class="container">
						<div class="row">
							{/* <!--Prize--> */}
							<div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
								<div class="card-flyer">
									<div class="text-box">
										<div class="image-box">
											<img src="img/gold.jpg" alt="" />
										</div>
										<div class="text-container">
											<h3 class="changecolor">1st Prize</h3>
											<h5 class="changecolor">₹30,000</h5>
											<p></p>
										</div>
									</div>
								</div>		
							</div>
							{/* <!--/Prize--> */}

							{/* <!--Prize--> */}
							<div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
								<div class="card-flyer">
									<div class="text-box">
										<div class="image-box">
											<img src="img/silver.jpg" alt="" />
										</div>
										<div class="text-container">
											<h3 class="changecolor">2nd Prize</h3>
											<h5 class="changecolor">₹22,000</h5>
											<p></p>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/Prize--> */}

							{/* <!--Prize--> */}
							<div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
								<div class="card-flyer">
									<div class="text-box">
										<div class="image-box">
											<img src="img/bronze.jpg" alt="" />
										</div>
										<div class="text-container">
											<h3 class="changecolor">3rd Prize</h3>
											<h5 class="changecolor">₹15,000</h5>
											<p></p>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/Prize--> */}

							{/* <!--Prize--> */}
							<div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
								<div class="card-flyer">
									<div class="text-box">
										<div class="image-box">
											<img src="img/girl.png" alt="" />
										</div>
										<div class="text-container">
											<h3 class="changecolor">Best Girls Team</h3>
											<h5 class="changecolor">₹7,000</h5>
											<p></p>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/Prize--> */}

							{/* <!-- Prize--> */}
							{/* <!-- <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1"> */}
							</div> -->
							{/* <!--/Prize --> */}

							{/* <!--Prize--> */}
							<div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
								<div class="card-flyer">
									<div class="text-box">
										<div class="image-box">
											<img src="img/covid.jpg" alt="" />
										</div>
										<div class="text-container">
											<h3 class="changecolor">Best-Covid Hack</h3>
											<h5 class="changecolor">₹6,000</h5>
											<p></p>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/Prize--> */}

							{/* <!--Prize--> */}
							<div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
								<a href="https://www.notion.so/Celo-Devfolio-Hackathon-Season-Prize-8b98dac17f134abeae863d5d98c01ff0">
									<div class="card-flyer">
										<div class="text-box">
											<div class="image-box-noncash">
												<img src="img/spons/Celo.png" alt="" />
											</div>
											<div class="text-container">
												<p class="changecolor"><b>₹20,000</b> for best Dapp built on Celo.</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							{/* <!--/Prize--> */}

							{/* <!--Prize--> */}
							<div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
								<a href="https://www.notion.so/Portis-by-Shapeshift-Devfolio-Hackathon-Season-Prize-e198dfd094a9411b8cd0f80d76a04a90">
									<div class="card-flyer">
										<div class="text-box">
											<div class="image-box-noncash">
												<img src="img/spons/portis.jpg" alt="" />
											</div>
											<div class="text-container">
												<p class="changecolor"><b>₹15,000</b> for best Dapp built on Portis</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							{/* <!--/Prize--> */}

							{/* <!--Prize--> */}
							<div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
								<a href="https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c">
									<div class="card-flyer">
										<div class="text-box">
											<div class="image-box-noncash">
												<img src="img/spons/Polygon2.png" alt="" />
											</div>
											<div class="text-container">
												<p class="changecolor"><b>₹10,000</b> for the best hack built on Ethereum,<br> or <b>₹15,000</b> for the best hack built on Ethereum + Matic</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							{/* <!--/Prize--> */}

							{/* <!--Prize--> */}
							<div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
								<a href="https://www.notion.so/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff">
									<div class="card-flyer">
										<div class="text-box">
											<div class="image-box-noncash">
												<img src="img/spons/tezos.jpg" alt="" />
											</div>
											<div class="text-container">
												<p class="changecolor"><b>₹20,000</b> for best Dapp built on Tezos <br> Continuity Grant opportunity for exceptional builders</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							{/* <!--/Prize--> */}

							{/* <!--Prize--> */}
							<div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
								<a href="https://tesseract.rezzlon.com/">
									<div class="card-flyer">
										<div class="text-box">
											<div class="image-box-noncash">
												<img src="img/spons/tesseract.png" alt="" />
											</div>
											<div class="text-container">
												<p class="changecolor">1st prize - 1 Tesseract Light <br> 2nd prize - 30% discount coupon <br> 3rd prize - 15% Discount coupon</p>
											</div>
										</div>
									</div>
								</a>
							</div>
							{/* <!--/Prize--> */}

							{/* <!--Prize--> */}
							<div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
								<a href="https://hoverrobotix.com/">
									<div class="card-flyer">
										<div class="text-box">
											<div class="image-box-noncash">
												<img src="img/spons/hoverRobotix.png" alt="" />
											</div>
											<div class="text-container">
												<p class="changecolor"><b>₹10,000</b> worth voucher to: <br>Top 3<br>Best All Female Team<br>Best Covid Hack</b></p>
											</div>
										</div>
									</div>
								</a>
							</div>
							{/* <!--/Prize--> */}

						</div>
					</div>
				</div>
				{/* <!-- /Prize Cards --> */}
								

			{/* <!-- /row --> */}
		</div>
		{/* <!-- /container --> */}
	</div>
	{/* <!-- /Themes --> */}
	{/* <!-- <div id="themes" class="section"> --> */}
		{/* <!-- container --> */}
		{/* <!-- <div class="container"> --> */}
			{/* <!-- row --> */}
			{/* <!-- <div class="row"> */}
		<div class="section-title">
			<h3 class="title"><span></span>Frosthack <span style="color: #dd0a37;">Themes</span></h3>
		</div>
			<div class="container-theme">
				<div class="card">
				<h3 class="title-theme">Healthcare and Medicine</h3>
				<div class="bar">
					<div class="emptybar"></div>
					<div class="filledbar"></div>
				</div>
				</div>
				<div class="card">
				<h3 class="title-theme">Finance and Technology</h3>
				<div class="bar">
					<div class="emptybar"></div>
					<div class="filledbar"></div>
				</div>
				</div>
				<div class="card">
				<h3 class="title-theme">Education</h3>
				<div class="bar">
					<div class="emptybar"></div>
					<div class="filledbar"></div>
				</div>
				</div>
				<div class="card">
				<h3 class="title-theme">Trading and E-commerce</h3>
				<div class="bar">
					<div class="emptybar"></div>
					<div class="filledbar"></div>
				</div>
				</div>
				<div class="card">
				<h3 class="title-theme">Event Management</h3>
				<div class="bar">
					<div class="emptybar"></div>
					<div class="filledbar"></div>
				</div>
				</div>
				<div class="card">
				<h3 class="title-theme">Mental Health Awareness</h3>
				<div class="bar">
					<div class="emptybar"></div>
					<div class="filledbar"></div>
				</div>
				</div>
				<div class="card">
				<h3 class="title-theme">Blockchain Technology</h3>
				<div class="bar">
					<div class="emptybar"></div>
					<div class="filledbar"></div>
				</div>
			</div>
			</div>
			<div class="col-md-8 col-md-offset-2 text-center"> -->
				{/* <!-- about content --> */}
				{/* <!-- <div id="theme_details" class="about-content"> */}
					<p class="changecolor">
						<h3><a href="https://drive.google.com/file/d/1KgGfG7DoovpXUXjqb-hQEa4kHonQ0tBh/view" style="color: #dd0a37;"><span style="color: #dd0a37;">Click here </span><span class="changecolor">to get detailed list of themes</span></a></h3>
					</p>
				</div> -->
				{/* <!-- /about content --> */}

			{/* <!-- </div> */}
		</div>
	</div>
	</div> -->
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">

	<div id="themes" class="section">
		{/* <!-- container --> */}
		<div class="container">
			{/* <!-- row --> */}
			<div class="row">
		<div class="section-title">
			<h3 class="title"><span></span>Frosthack <span style="color: #dd0a37;">Winners</span></h3>
		</div>
	<section class="hero-section">
	  <div class="card-grid">
		<a class="winners_card" href="https://devfolio.co/submissions/gofit-f48b">
		  <div class="card__background" style="background-image: url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/458f2c96a2194c4ea726db09de2c530d/854dda8a-d2b5-4eb7-88fe-78803bdcb6ad.png)"></div>
		  <div class="card__content changecolor">
			<p class="card__category changecolor">1st prize</p>
			<h3 class="card__heading changecolor">Project GoFit</h3>
		  </div>
		</a>
		<a class="winners_card" href="https://devfolio.co/submissions/covicoin-74c9">
		  <div class="card__background" style="background-image: url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/c793422146584da2a9509d9c0f39a4a5/aedef7f2-04ea-4915-a898-2f8300fe5dd4.png)"></div>
		  <div class="card__content">
			<p class="card__category changecolor">2nd Prize</p>
			<h3 class="card__heading changecolor">Project Covicoin</h3>
		  </div>
		</a>
		<a class="winners_card" href="http://frosthacksubmission.pythonanywhere.com/details/46?">
		  <div class="card__background" style="background-image: url(img/ponder.png)"></div>
		  <div class="card__content">
			<p class="card__category changecolor">3rd Prize</p>
			<h3 class="card__heading changecolor">Project Ponder</h3>
		  </div>
		</li>
		<a class="winners_card" href="https://devfolio.co/submissions/digiq-06b4">
		  <div class="card__background" style="background-image: url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/c212b8e42495443b80dde754bdd55869/b6244c4d-d11e-4138-82c5-038c33cc6aed.jpeg)"></div>
		  <div class="card__content">
			<p class="card__category changecolor">Best Covid Hack</p>
			<h3 class="card__heading changecolor">Project DigiQ</h3>
		  </div>
		</a>
		<a class="winners_card" href="https://devfolio.co/submissions/uvc-vehicle-sanitizer-2cb9">
			<div class="card__background" style="background-image: url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/d616200e2a804afd8764360824726aa1/c7d7eb79-1cac-4372-97f8-9a84ba790727.jpeg)"></div>
			<div class="card__content">
			  <p class="card__category changecolor">Outstanding Female Submission</p>
			  <h3 class="card__heading changecolor">Project Vehicle Sanitizer</h3>
			</div>
		</a>
		<a class="winners_card" href="https://devfolio.co/submissions/hriday-ad19">
			<div class="card__background" style="background-image: url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/6606bee2d20b46b0a18b57ad7fb3bc63/863bc909-ccae-486a-ba1a-9c30de6a9489.jpeg)"></div>
			<div class="card__content">
			  <p class="card__category changecolor">Special Mention</p>
			  <h3 class="card__heading changecolor">Project Hriday</h3>
			</div>
		</a>
		<a class="winners_card" href="https://devfolio.co/submissions/edulocity-bb7c">
			<div class="card__background" style="background-image: url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/c0e049c6237a463b89c3b98b125eb68f/5908a983-8d40-4012-b879-27f18c4a3a39.jpeg)"></div>
			<div class="card__content">
			  <p class="card__category changecolor">Special Mention</p>
			  <h3 class="card__heading changecolor">Project Edulocity</h3>
			</div>
		</a>
		<a class="winners_card" href="https://devfolio.co/submissions/guitar-a8b8">
			<div class="card__background" style="background-image: url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/78e29ee92e834576906e12459c78a4da/1c4a203b-6d52-41de-b037-aba6c0eb6f14.png)"></div>
			<div class="card__content">
			  <p class="card__category changecolor">Special Mention</p>
			  <h3 class="card__heading changecolor">Project GuitAR</h3>
			</div>
		</a>
	  <div>
	</section>
</div>
</div>
</div>
	
	{/* <!-- Sponsors --> */}
	<div id="sponsors" class="section">
		<div class="container">
			<div class="row sponbox">
			{/* <!-- section title --> */}
			<div class="section-title">
				<h3 class="title"><span>Our</span> <span style="color: #dd0a37;">Sponsors</span></h3>
			</div>
			{/* <!-- /section title --> */}
		</div>

		<h3 class="text-center changecolor">Diamond Sponsors</h3>

		
		<div class="spon-diamond">
			<div class="track sponsor">
				<a href="https://motwanijadejafoundation.com/" target="_blank">
					<div class="img">
						<img src="img/spons/MJFlogo.png" alt="">
					</div>
				</a>
			</div>

			<div class="track sponsor">
				<a href="https://devfolio.co/" target="_blank">
					<div class="img">
						<img src="img/spons/Devfolio2x.png" alt="">
					</div>
				</a>
			</div>
		</div>
		
		<h3 class="text-center changecolor" style="margin-top: 30px;">Platinum Sponsors</h3>

		<div class="spon-platinum">
			<div class="track sponsor">
			<a href="https://polygon.technology/" target="_blank">
				<div class="img">
				<img src="img/spons/Polygon2.png" alt="" />
				</div>
			</a>
			</div>
			<div class="track sponsor">
			<a href="https://tezos.com/" target="_blank">
				<div class="img">
				<img src="img/spons/tezos.png" alt="" />
				</div>
			</a>
			</div>
			<div class="track sponsor">
			<a href="https://celo.org/" target="_blank">
				<div class="img">
				<img src="img/spons/Celo.png" alt="not found" />
				</div>
			</a>
			</div>
			<div class="track sponsor">
			<a href="https://www.portis.io" target="_blank">
				<div class="img">
				<img src="img/spons/portis.png" alt="" class="spon-logo" />
				</div>
			</a>
			</div>
			<div class="track sponsor">
				<a href="https://ieee.iitmandi.ac.in/" target="_blank">
					<div class="img">
					<img src="img/spons/IEEE_logo.png" alt="" class="spon-logo" />
					</div>
				</a>
				</div>
		</div>
		
	</div>

	<h3 class="text-center changecolor" style="margin-top: 30px;">Gold Sponsor</h3>

	
	 
	<div class="spon-diamond">
		<div class="track sponsor">
			<a href="https://hoverrobotix.com/" target="_blank">
				<div class="img-fluid">
					<img src="img/spons/hoverRobotix.png" alt="">
				</div>
			</a>
		</div>
	</div>


	<h3 class="text-center changecolor" style="margin-top: 30px;">Silver Sponsor</h3>

	<div class="spon-diamond">
		<div class="track sponsor">
			<a href="https://tesseract.rezzlon.com/" target="_blank">
				<div class="img">
					<img src="img/spons/tesseract.png" alt="" width="50" height="60">
				</div>
			</a>
		</div>
	</div>

	<h3 class="text-center changecolor" style="margin-top: 30px;">Media Partners</h3>

	<div class="spon-diamond">
		<div class="track sponsor">
			<a href="https://www.linkedin.com/company/hackoverflow/?originalSubdomain=in" target="_blank">
				<div class="img">
					<img src="img/spons/hackoverflow_logo.png" alt="" width="50" height="60">
				</div>
			</a>
		</div>
	</div>


		{/* <!-- container --> */}
		<div class="container">
			
			{/* <!-- track --> */}
			
			{/* <!-- /track --> */}
			
			
			{/* <!-- track --> */}
			
			{/* <!-- /track --> */}

			{/* <!-- track --> */}
			
			{/* <!-- /track --> */}

			{/* <!-- track --> */}
			
			{/* <!-- /track --> */}

			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://www.edtimes.in/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img class="img-adjust" src="img/spons/edtimes_logo.png" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}


		</div>
		{/* <!-- /container --> */}

		{/* <!-- container --> */}
		<div class="container">
			
			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://www.gatsbyjs.org/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img src="img/spons/gatsby.svg" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}

			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://tezos.com/" target="_blank">
					<div class="track">
						<div class="img-adjust" style="width: 100%;">
							<img src="img/spons/tezos.svg" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}
			
			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://www.axure.com/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img class="extra-wide-adjust" src="img/spons/axure.svg" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}

			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://codingblocks.com/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img class="img-adjust" src="img/spons/Logo_DarkGrey_ NoShadow.png" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}

		</div>
		{/* <!-- container --> */}

		{/* <!-- container --> */}
		<div class="container">
			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://doist.com/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img class="extra-wide-adjust" src="img/spons/doist-logo.svg" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}
			
			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://www.wolfram.com/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img class="img-adjust" src="img/spons/WolframCorporateLogo.png" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}
			
			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://fold.money/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img class="img-adjust" src="img/spons/fold.png" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}
			
		</div>
		{/* <!-- container --> */}

		{/* <!-- container --> */}
		<div class="container">

			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://zulipchat.com/" target="_blank">
					<div class="track">
						<div class="img">
							<img class="img-adjust" src="img/spons/zulip.png" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}


			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://www.creative-tim.com/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img class="img-adjust" src="img/spons/creativeTim.png" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}

			

			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://www.bugsee.com/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img class="img-adjust" src="img/spons/bugsee.png" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}
		</div>
		{/* <!-- /container --> */}
		
		{/* <!-- container --> */}
		<div class="container" >

			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://www.producthunt.com/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img class="img-adjust" src="img/spons/productHunt.png" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}

			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://stickerapp.com/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img class="img-adjust" src="img/spons/stickerapp.jpg" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}

			{/* <!-- track --> */}
			{/* <!-- <div class="col-md-4"> */}
				<a href="https://xyz.xyz/" target="_blank">
					<div class="track">
						<div class="img" style="width: 100%;">
							<img class="img-adjust" src="img/spons/XYZ-logo-tagline.png" alt="">
						</div>
					</div>
				</a>
			</div> -->
			{/* <!-- /track --> */}

		</div>
		{/* <!-- container --> */}

		{/* <!-- container --> */}
		<div class="container">

			<div class="download-btn">
				<a href="./files/spon.pdf" class="main-btn">Sponsor Us</a>
			</div>

		</div>
		{/* <!-- /container --> */}


		
	</div>
	{/* <!-- /Sponsors --> */}

	{/* <!-- FAQ --> */}
	<div id="faq" class="section">
		{/* <!-- container --> */}
		<div class="container">
			{/* <!-- row --> */}
			<div class="row">
				{/* <!-- section title --> */}
				<div class="section-title">
					<h3 class="title"><span>Frequent </span> <span style="color: #dd0a37;">Questions</span></h3>
				</div>
				{/* <!-- /section title --> */}

				{/* <!-- Questions --> */}
				<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
					<div class="faq">
						<div class="panel-group" id="accordion-left" role="tablist" aria-multiselectable="true">
							<div class="panel panel-default">
								<div class="panel-heading" role="tab">
									<h3 class="panel-title">
										<a class="collapsed changecolor" data-toggle="collapse" data-parent="#accordion-left"
											href="#collapse1st" aria-expanded="false" aria-controls="collapse1st">
											Should team members be of the same college or people of different colleges forming a team would also do ?
										</a>
									</h3>
								</div>
								<div id="collapse1st" class="panel-collapse collapse" role="tabpanel"
									aria-labelledby="headingOne">
									<div class="panel-body">
										<p class="changecolor">
											Yes, team members can be from different colleges
										</p>
									</div>
								</div>
							</div>
							
							<div class="panel panel-default">
								<div class="panel-heading" role="tab">
									<h3 class="panel-title">
										<a class="collapsed changecolor" data-toggle="collapse" data-parent="#accordion-left"
											href="#collapse6th" aria-expanded="false" aria-controls="collapse6th">
											Can I start working on my hack before the event?
										</a>
									</h3>
								</div>
								<div id="collapse6th" class="panel-collapse collapse" role="tabpanel"
									aria-labelledby="headingOne">
									<div class="panel-body">
										<p class="changecolor">
											No. In the interest of fairness, students should not be working on their
											projects before FROSTHACK begins and we do not allow participants to work on
											pre-existing projects. However, you can familiarize yourself with all the
											tools and technologies you intend to use beforehand!
										</p>
									</div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading" role="tab">
									<h3 class="panel-title">
										<a class="collapsed changecolor" data-toggle="collapse" data-parent="#accordion-left"
											href="#collapse2nd" aria-expanded="false" aria-controls="collapse2nd">
											Is this hackathon an online event or offline?
										</a>
									</h3>
								</div>
								<div id="collapse2nd" class="panel-collapse collapse" role="tabpanel"
									aria-labelledby="headingTwo">
									<div class="panel-body">
										<p class="changecolor">
											The event will be online.
										</p>
									</div>
								</div>
							</div>
							{/* <!--  */}
								<div class="panel panel-default">
								<div class="panel-heading" role="tab">
									<h3 class="panel-title">
										<a class="collapsed" data-toggle="collapse" data-parent="#accordion-left"
											href="#collapse3rd" aria-expanded="false" aria-controls="collapse3rd">
											Will travel reimbursement be provided to participants?
										</a>
									</h3>
								</div>
								<div id="collapse3rd" class="panel-collapse collapse" role="tabpanel"
									aria-labelledby="headingTwo">
									<div class="panel-body">
										<p>
											No, unfortunately we cannot provide any travel reimbursement to participants.
										</p>
									</div>
								</div>
							</div>
							-->

							{/* <!-- <div class="panel panel-default"> */}
								<div class="panel-heading" role="tab">
									<h3 class="panel-title">
										<a class="collapsed" data-toggle="collapse" data-parent="#accordion-left"
											href="#collapse7th" aria-expanded="false" aria-controls="collapse7th">
											What are the food and accomodation arrangements?
										</a>
									</h3>
								</div>
								<div id="collapse7th" class="panel-collapse collapse" role="tabpanel"
									aria-labelledby="headingOne">
									<div class="panel-body">
										<p>
											We will be providing accomodation from Friday (27th March) night onwards, for the duration of the hackathon. 
											Food (Breakfast, Lunch, Dinner) will also be provided.
										</p>
									</div>
								</div>
							</div> -->
						</div>
					</div>
				</div>
				{/* <!-- /Questions --> */}

				{/* <!-- Questions --> */}
				<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
					<div class="faq">
						<div class="panel-group" id="accordion-right" role="tablist" aria-multiselectable="true">
							<div class="panel panel-default">
								<div class="panel-heading" role="tab">
									<h3 class="panel-title">
										<a class="collapsed changecolor" data-toggle="collapse" data-parent="#accordion-right"
											href="#collapse4th" aria-expanded="false" aria-controls="collapse4th">
											Who will own the IP (Intellectual Property) Rights to the product that I
											have built?
										</a>
									</h3>
								</div>
								<div id="collapse4th" class="panel-collapse collapse" role="tabpanel"
									aria-labelledby="headingOne">
									<div class="panel-body">
										<p class="changecolor">
											The developer/developers of the application will have all rights and own the
											IP of the product. However, all code needs to be in public domain (open
											source) so that it can be evaluated by the judges.
										</p>
									</div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading" role="tab">
									<h3 class="panel-title">
										<a class="collapsed changecolor" data-toggle="collapse" data-parent="#accordion-right"
											href="#collapse5th" aria-expanded="false" aria-controls="collapse5th">
											What is the team size ?
										</a>
									</h3>
								</div>
								<div id="collapse5th" class="panel-collapse collapse" role="tabpanel"
									aria-labelledby="headingTwo">
									<div class="panel-body">
										<p class="changecolor">
											Every team can have min 2 and max 3 members.
									</div>
								</div>
							</div>
							{/* <!-- <div class="panel panel-default"> */}
								<div class="panel-heading" role="tab">
									<h3 class="panel-title">
										<a class="collapsed" data-toggle="collapse" data-parent="#accordion-right"
											href="#collapse6th" aria-expanded="false" aria-controls="collapse6th">
											How and when to reach IIT Mandi?
										</a>
									</h3>
								</div>
								<div id="collapse6th" class="panel-collapse collapse" role="tabpanel"
									aria-labelledby="headingTwo">
									<div class="panel-body">
										<p>
											You should reach IIT Mandi preferably by Friday (27th March) night and latest by 
											Saturday (28th March), early morning. 
											Please visit <a style="display: inline;" href="http://www.iitmandi.ac.in/institute/campus/how_to_reach.php">http://www.iitmandi.ac.in/institute/campus/how_to_reach.php</a>
											to know how to reach IIT Mandi.  
										</p>
									</div>
								</div>
							</div> -->
							<div class="panel panel-default">
								<div class="panel-heading" role="tab">
									<h3 class="panel-title">
										<a class="collapsed changecolor" data-toggle="collapse" data-parent="#accordion-right"
											href="#collapse8th" aria-expanded="false" aria-controls="collapse8th" c>
											I have a question related to hackathon which is not listed above. What
											should I do?
										</a>
									</h3>
								</div>
								<div id="collapse8th" class="panel-collapse collapse" role="tabpanel"
									aria-labelledby="headingTwo">
									<div class="panel-body">
										<p class="changecolor">
											Feel free to contact us. Just drop us a mail at team@frosthack.com
											You can also contact one of our organizers.
										</p>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Questions --> */}

			</div>
			{/* <!-- /row --> */}
		</div>
		{/* <!-- /container --> */}
	</div>
	{/* <!-- /FAQ --> */}

	{/* <!-- Contact --> */}
	<div id="contact" class="section">
		{/* <!-- container --> */}
		<div class="container">
			{/* <!-- row --> */}
			<div class="row">
				{/* <!-- section title --> */}
				<div class="section-title">
					<h3 class="title"><span>Contact</span> <span style="color: #dd0a37;">Us</span></h3>
				</div>
				{/* <!-- /section title --> */}

				{/* <!-- contact --> */}
				<div class="col-sm-3">
					<div class="contact">
						<i class="fas fa-map-marked-alt fa-4x"></i>
						<h3 class="mt-3">Address</h3>
						<a class="changecolor" href="https://goo.gl/maps/6kq6iLFDopCikWVH7">
							IIT Mandi,
							Kamand,
							Himachal Pradesh
						</a>
					</div>
				</div>
				{/* <!-- /contact --> */}

				{/* <!-- contact --> */}
				<div class="col-sm-3">
					<div class="contact">
						<i class="fas fa-phone fa-4x"></i>
						<h3 class="mt-3">Phone</h3>
						<p><a href="tel:+919654855054" class="changecolor">Nehal : +919654855054</a></p>
						<p><a href="tel:+917987590764" class="changecolor">Shubhanshu : +917987590764</a></p>
					</div>
				</div>
				{/* <!-- /contact --> */}

				{/* <!-- contact --> */}
				<div class="col-sm-3">
					<div class="contact">
						<i class="fas fa-envelope fa-4x"></i>
						<h3 class="mt-3">Email</h3>
						<a href="mailto:teamfrosthack@gmail.com" class="changecolor">teamfrosthack@gmail.com</a>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="contact">
						<i class="fab fa-discord fa-4x"></i>
						<h3 class="mt-3">Discord Server</h3>
						<a href="https://discord.com/invite/YsV3MJ7ke2" class="changecolor">Invite Link</a>
					</div>
				</div>
				<img id="theme-toggle" src="img/sun.svg" onclick="themechange()">

				
				{/* <!-- /contact --> */}

				{/* <!-- contact --> */}
				{/* <!-- <div class="col-sm-3"> */}
					<div class="contact">
						<img src="img/zulip.svg" alt="zulipchat">
						<h3 class="mt-3">Zulip</h3>
						<a href="https://frosthack.zulipchat.com/">frosthack.zulipchat.com</a>
					</div>
				</div> -->
				{/* <!-- /contact --> */}

			</div>
			{/* <!-- /row --> */}
		</div>
		{/* <!-- /container --> */}
	</div>
	{/* <!-- /Contact --> */}

	{/* <!-- Footer --> */}
	<footer id="footer">
		{/* <!-- container --> */}
		<div class="container">
			{/* <!-- row --> */}
			<div class="row">

				{/* <!-- footer logo --> */}
				<div class="col-md-4 col-md-push-4">
					<div class="footer-brand">
						<a class="logo" href="#home">
							<img class="logo-img" src="./img/logos/wide.png" alt="logo">
						</a>
					</div>
					<div class="contact-social">
						<a target="_blank" href="https://www.facebook.com/frosthackiitmandi/"><i
								class="fab fa-facebook fa-2x"></i></a>
						<a target="_blank" href="https://www.instagram.com/frosthack_iitmandi/"><i
								class="fab fa-instagram fa-2x"></i></a>
						<a target="_blank" href="https://discord.com/invite/YsV3MJ7ke2">
							<i class="fab fa-discord fa-2x" ></i></a>
						</a>
					</div>
					<div class="centered-code">
						<a id="code_of_conduct" href="code.html">Code of Conduct</a>
					</div>
				</div>
				{/* <!-- /footer logo --> */}

			</div>
			{/* <!-- /row --> */}
		</div>
		{/* <!-- /container --> */}
	</footer>
	{/* <!-- /Footer --> */}

    );
}