import React from "react";
import useState from "react";
import useEffect from "react";
import CountUp from "react-countup";

export const Previous = (props) => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setCounter(counter + 1);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [counter]);

  return (
    <>
      {/* <h1>Previous Page</h1> */}
      <div
        className="container"
        style={{ paddingTop: "4em", marginTop: "22vh" }}
      >
        {/* row */}
        <div className="row tracks">
          {/* section title */}
          <div className="section-title">
            <h5 className="title" style={{ color: "rgb(255,255,255)" }}>
              <span>Prizes</span>{" "}
            </h5>
          </div>
          <div className="col-md-8 col-md-offset-2 text-center">
            {/* about content */}
            <div className="about-content">
              <p className="changecolor" style={{ color: "white" }}>
                ₹1,50,000 Cash Prize and goodies worth 25k to be won!
              </p>
            </div>
            {/* /about content */}
          </div>
          {/* Prize Cards */}
          <div
            id="cards_landscape_wrap-2"
            style={{ backgroundColor: "rgb(15,19,28)" }}
          >
            <div className="container">
              <div className="row">
                {/*Prize*/}
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
                  id="cash-prize-r1"
                >
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <img src="img/gold.jpg" alt="" />
                      </div>
                      <div className="text-container">
                        <h3 className="changecolor" style={{ color: "white" }}>
                          1st Prize
                        </h3>
                        <h5 className="changecolor" style={{ color: "white" }}>
                          ₹30,000
                        </h5>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/Prize*/}
                {/*Prize*/}
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
                  id="cash-prize-r1"
                >
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <img src="img/silver.jpg" alt="" />
                      </div>
                      <div className="text-container">
                        <h3 className="changecolor">2nd Prize</h3>
                        <h5 className="changecolor">₹22,000</h5>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/Prize*/}
                {/*Prize*/}
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
                  id="cash-prize-r1"
                >
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <img src="img/bronze.jpg" alt="" />
                      </div>
                      <div className="text-container">
                        <h3 className="changecolor">3rd Prize</h3>
                        <h5 className="changecolor">₹15,000</h5>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/Prize*/}
                {/*Prize*/}
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
                  id="cash-prize-r1"
                >
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <img src="img/girl.png" alt="" />
                      </div>
                      <div className="text-container">
                        <h3 className="changecolor">Best Girls Team</h3>
                        <h5 className="changecolor">₹7,000</h5>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/Prize*/}
                {/* Prize*/}
                {/* <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4" id = "cash-prize-r1">
                              </div> */}
                {/*/Prize */}
                {/*Prize*/}
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
                  id="cash-prize-r1"
                >
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <img src="img/covid.jpg" alt="" />
                      </div>
                      <div className="text-container">
                        <h3 className="changecolor">Best-Covid Hack</h3>
                        <h5 className="changecolor">₹6,000</h5>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/Prize*/}
                {/*Prize*/}
                {/* <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-4"
                  id="cash-prize-r1"
                >
                  <a
                    rel="noreferrer"
                    href="https://www.notion.so/Celo-Devfolio-Hackathon-Season-Prize-8b98dac17f134abeae863d5d98c01ff0"
                  >
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box-noncash">
                          <img src="img/spons/Celo.png" alt="" />
                        </div>
                        <div className="text-container">
                          <p className="changecolor">
                            <b>₹20,000</b> for best Dapp built on Celo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div> */}
                {/*/Prize*/}
                {/*Prize*/}
                {/* <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-4"
                  id="cash-prize-r1"
                >
                  <a
                    rel="noreferrer"
                    href="https://www.notion.so/Portis-by-Shapeshift-Devfolio-Hackathon-Season-Prize-e198dfd094a9411b8cd0f80d76a04a90"
                  >
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box-noncash">
                          <img src="img/spons/portis.jpg" alt="" />
                        </div>
                        <div className="text-container">
                          <p className="changecolor">
                            <b>₹15,000</b> for best Dapp built on Portis
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div> */}
                {/*/Prize*/}
                {/*Prize*/}
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
                  id="cash-prize-r1"
                >
                  <a
                    rel="noreferrer"
                    href="https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c"
                  >
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box-noncash">
                          <img src="img/spons/Polygon2.png" alt="" />
                        </div>
                        <div className="text-container">
                          <p className="changecolor">
                            <b>₹10,000</b> for the best hack built on Ethereum,
                            <br /> or <b>₹15,000</b> for the best hack built on
                            Ethereum + Matic
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/*/Prize*/}
                {/*Prize*/}
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
                  id="cash-prize-r1"
                >
                  <a
                    rel="noreferrer"
                    href="https://www.notion.so/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff"
                  >
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box-noncash">
                          <img src="img/spons/tezos.jpg" alt="" />
                        </div>
                        <div className="text-container">
                          <p className="changecolor">
                            <b>₹20,000</b> for best Dapp built on Tezos <br />{" "}
                            Continuity Grant opportunity for exceptional
                            builders
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/*/Prize*/}
                {/*Prize*/}
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
                  id="cash-prize-r1"
                >
                  <a rel="noreferrer" href="https://tesseract.rezzlon.com/">
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box-noncash">
                          <img src="img/spons/tesseract.png" alt="" />
                        </div>
                        <div className="text-container">
                          <p className="changecolor">
                            1st prize - 1 Tesseract Light <br /> 2nd prize - 30%
                            discount coupon <br /> 3rd prize - 15% Discount
                            coupon
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/*/Prize*/}
                {/*Prize*/}
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
                  id="cash-prize-r1"
                >
                  <a rel="noreferrer" href="https://hoverrobotix.com/">
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box-noncash">
                          <img src="img/spons/hoverRobotix.png" alt="" />
                        </div>
                        <div className="text-container">
                          <p className="changecolor">
                            <b>₹10,000</b> worth voucher to: <br />
                            Top 3<br />
                            Best All Female Team
                            <br />
                            Best Covid Hack
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/*/Prize*/}
              </div>
            </div>
          </div>
          {/* Prize Cards */}
          <div
            id="cards_landscape_wrap-2"
            style={{ backgroundColor: "rgb(15,19,28)" }}
          >
            <div className="container">
              <div className="row">
                {/*Prize*/}
                <div className="section-title">
                  <h5 className="title" style={{ color: "white" }}>
                    <span>Previous Year Stats</span>{" "}
                  </h5>
                </div>
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-4"
                  id="cash-prize-r1"
                >
                  <div className="card-flyer">
                    <div className="text-box">
                      {/* <div className="image-box">
                        <img src="img/gold.jpg" alt="" />
                      </div> */}
                      <div className="text-container">
                        <h5 className="changecolor" style={{ color: "white" }}>
                          <CountUp start={0} end={1000} /> +
                        </h5>
                        <hr
                          style={{
                            borderTop: "6px solid white",
                            marginLeft: "10%",
                            marginRight: "10%",
                          }}
                        />
                        <h3 style={{ color: "red" }}>Participants</h3>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/Prize*/}
                {/*Prize*/}
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-4"
                  id="cash-prize-r1"
                >
                  <div className="card-flyer">
                    <div className="text-box">
                      {/* <div className="image-box">
                        <img src="img/silver.jpg" alt="" />
                      </div> */}
                      <div className="text-container">
                        <h5 className="changecolor" style={{ color: "white" }}>
                          <CountUp start={0} end={400} /> +
                        </h5>
                        <hr
                          style={{
                            borderTop: "6px solid white",
                            marginLeft: "10%",
                            marginRight: "10%",
                          }}
                        />
                        <h3 style={{ color: "red" }}>Projects</h3>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/Prize*/}
                {/*Prize*/}
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-4"
                  id="cash-prize-r1"
                >
                  <div className="card-flyer">
                    <div className="text-box">
                      {/* <div className="image-box">
                        <img src="img/bronze.jpg" alt="" />
                      </div> */}
                      <div className="text-container">
                        <h5 className="changecolor" style={{ color: "white" }}>
                          <CountUp start={0} end={300} /> +
                        </h5>
                        <hr
                          style={{
                            borderTop: "6px solid white",
                            marginLeft: "10%",
                            marginRight: "10%",
                          }}
                        />
                        <h3 style={{ color: "Red" }}>Colleges</h3>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/Prize*/}
                {/*Prize*/}
                {/*/Prize*/}
              </div>
            </div>
          </div>
          {/* /Prize Cards */}
          {/* /row */}
        </div>
        {/* /container */}
      </div>
    </>
  );
};
