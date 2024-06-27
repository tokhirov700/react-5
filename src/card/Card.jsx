import React from "./Card.css";
import Picture from "../images/BG.png";
import Pictures from "../images/bg (1).png";
import img from "../images/bg (2).png"
import Rasmpugp from "../images/bg (5).png"
import Rasmikkinchi from "../images/bg (6).png"
import Rasmuchinchi from "../images/bg (7).png"
import Yulduz from "../images/Star.png"
import Katta from "../images/img.png"
import Rasm from "../images/Admin.png"
import images from "../images/images.png"
import Rasmsakkiz from "../images/bg (8).png"
import Rasmtoqqiz from "../images/bg (9).png"
import Rasmon from "../images/bg (10).png"
import Rasmonbir from "../images/bg (11).png"
import Rasmonikki from "../images/bg (12).png"
import Rasmonuch from "../images/bg (13).png"

import icons from "../icons/Vector.svg"
import icon from "../icons/bell.svg"



function Card() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-content">
                    <div className="wrapper">
                        <button>Game</button>
                    </div>
                    <div className="card-text">     
                        <p>Live score</p>
                        <p>Statistics</p>
                        <p>Analitics</p>
                        <p>Forecasts</p>
                    </div>
                </div>
                <div className="card-image">
                    <h1>The Forbidden Kingdom Adventure War</h1>
                    <button>More Details</button>
                </div>
                <div className="card-item">
                    <h3>Most popular Game</h3>
                </div>
                    <div className="card-big-containers">
                        <div className="card-big-container">
                            <div className="card-big">
                                <div className="card-item-image">
                                    <p>Sniper 2</p>
                                    <div className="mini-card">
                                        <div className="star">
                                            <img src={icons} alt="" />
                                        </div>
                                        <div className="item">
                                            <span>8.6 / 10 Action-</span>
                                            <span>Rgb,</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-big-container">
                            <div className="card-big">
                            <div className="card-image-item">
                                <p>Motor Race</p>
                                <div className="card-mini">
                                    <div className="star">
                                        <img src={icons} alt="" />
                                    </div>
                                    <div className="title">
                                        <span>8.6 / 10 Action-</span>
                                        <span>Rgb,</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="card-big-container">
                            <div className="card-big">
                                <div className="card-image-item">
                                    <p>Motor Race</p>
                                    <div className="card-mini">
                                        <div className="star">
                                            <img src={icons} alt="" />
                                        </div>
                                        <div className="title">
                                            <span>8.6 / 10 Action-</span>
                                            <span>Rgb,</span>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <div className="card-big-container">
                            <div className="card-big">
                                <div className="card-image-item">
                                    <p>Motor Race</p>
                                    <div className="card-mini">
                                        <div className="star">
                                            <img src={icons} alt="" />
                                        </div>
                                        <div className="title">
                                            <span>8.6 / 10 Action-</span>
                                            <span>Rgb,</span>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <div className="card-big-container">
                            <div className="card-big">
                                <div className="card-image-item">
                                    <p>Motor Race</p>
                                    <div className="card-mini">
                                        <div className="star">
                                        <img src={icons} alt="" />
                                        </div>
                                        <div className="title">
                                        <span>8.6 / 10 Action-</span>
                                        <span>Rgb,</span>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                        <div className="card-list">
                            <h2>New Released Games</h2>
                        </div>
                        <div className="card-big-star">
                            <div className="card-star">
                                <div className="card-list-item">
                                    <img src={images} alt="" />
                                    <div className="card-list-text">
                                        <span className="card-list-span">Ghost of</span>
                                        <span className="card-list-span2">Tsushima</span>
                                        <div className="card-list-item2">
                                        <span className="card-list-span3">4.5
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-list-item">
                                    <img src={Rasmsakkiz} alt="" />
                                    <div className="card-list-text">
                                        <span className="card-list-span">Need for Speed</span>
                                        <span className="card-list-span2"></span>
                                        <div className="card-list-item2">
                                        <span className="card-list-span3">4.5
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-star2">
                                <div className="card-list-item">
                                        <img src={Rasmtoqqiz} alt="" />
                                        <div className="card-list-text">
                                            <span className="card-list-span">Need for Speed</span>
                                            <span className="card-list-span2"></span>
                                            <div className="card-list-item2">
                                            <span className="card-list-span3">4.5
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-list-item">
                                    <img src={images} alt="" />
                                    <div className="card-list-text">
                                        <span className="card-list-span">Ghost of</span>
                                        <span className="card-list-span2">Tsushima</span>
                                        <div className="card-list-item2">
                                        <span className="card-list-span3">4.5
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                            <img src={icons} alt="" />
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-star3">
                            <div className="card-star">
                                <div className="card-list-item">
                                        <img src={Rasmon} alt="" />
                                        <div className="card-list-text">
                                            <span className="card-list-span">The Witcher</span>
                                            <span className="card-list-span2">Hunt</span>
                                            <div className="card-list-item2">
                                            <span className="card-list-span3">4.5
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="card-star4">
                                <div className="card-list-item">
                                        <img src={Rasmonbir} alt="" />
                                        <div className="card-list-text">
                                            <span className="card-list-span">Ghost of</span>
                                            <span className="card-list-span2">Tsushima</span>
                                            <div className="card-list-item2">
                                            <span className="card-list-span3">4.5
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="card-star3">
                            <div className="card-star">
                                <div className="card-list-item">
                                        <img src={Rasmonikki} alt="" />
                                        <div className="card-list-text">
                                            <span className="card-list-span">Free Fire</span>
                                            <span className="card-list-span2"></span>
                                            <div className="card-list-item2">
                                            <span className="card-list-span3">4.5
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="card-star4">
                                <div className="card-list-item">
                                        <img src={Rasmonuch} alt="" />
                                        <div className="card-list-text">
                                            <span className="card-list-span">Ghost of</span>
                                            <span className="card-list-span2">Tsushima</span>
                                            <div className="card-list-item2">
                                            <span className="card-list-span3">4.5
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                                <img src={icons} alt="" />
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </div>    
            </div>

            <div className="sidebar">
                <div className="sidebar-item">
                    <div className="sidebar-big">
                        <div className="sidebar-img">
                            <img src={Rasm} alt="" />
                            <p>William jonson</p>
                            <div className="sidebar-bell">
                                <img src={icon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-h4">
                        <h4>Live Game</h4>
                    </div>
                    <div className="sidebar-div"></div>
                    <div className="sidebar-big-div">
                        <div className="sidebar-divs">
                            <div className="sidebar-image">
                                <img src={Rasmpugp} alt="" />
                            </div>
                            <div className="sidebar-p">
                                <span className="sidebar-text">Pubg war</span>
                                <p className="sidebar-text2">war Battle</p>
                            </div>
                        </div>
                        <div className="sidebar-divs">
                            <div className="sidebar-image">
                                <img src={Rasmikkinchi} alt="" />
                            </div>
                            <div className="sidebar-p">
                                <span className="sidebar-text">Gost of Tsushima</span>
                                <p className="sidebar-text2">war Battle</p>
                            </div>
                        </div>
                        <div className="sidebar-divs">
                            <div className="sidebar-image">
                                <img src={Rasmuchinchi} alt="" />
                            </div>
                            <div className="sidebar-p">
                                <span className="sidebar-text">FreeFire</span>
                                <p className="sidebar-text2">war Battle</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-ikkinchi">
                    <div className="sidebar-picture">
                        <img src={Katta} alt="" />
                        <div className="sidebar-h">
                            <p className="sidebar-p1">Need for Speed</p>
                            <p className="sidebar-p2">Racing</p>
                        </div>
                        <div>
                            <img src={Yulduz} alt="" />
                        </div>
                        <div className="sidebar-text-p">
                            <p>Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.</p>
                        </div>
                            <button className="btn">Download Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card