import React, {Component} from "react";

import './Footer.css';

import logoCodeArcs from "./codearcs-logo.png";
import BackgroundService from "../../services/BackgroundService";

class Footer extends Component {
    constructor() {
        super();
        this.state = {backgroundImage: BackgroundService.getBackgroundImageInfo()};
    }

    render() {
        return (
            <footer className="footer__bottom">
                <div className="footer__bottom_left">
                    <a href="https://github.com/SteKoe" target="_blank">
                        <i className="fa fa-github icon"></i>
                    </a>
                    <a href="https://twitter.com/s_koeninger" target="_blank">
                        <i className="fa fa-twitter icon"></i>
                    </a>
                    <a href="https://www.xing.com/profile/Stephan_Koeninger" target="_blank">
                        <i className="fa fa-xing icon"></i>
                    </a>
                    <a href="https://www.codearcs.de" target="_blank" className="separator logo-trans-75">
                        <img src={logoCodeArcs}/>
                    </a>
                </div>
                <div className="footer__bottom_center">
                    © by Stephan Köninger<br/>
                    <span id="bg-image-source">Background Image source:
                        <a target="_blank" href={this.state.backgroundImage.source.url}>{this.state.backgroundImage.source.name}</a>
                    </span>
                </div>
                <div className="footer__bottom_right">
                    &nbsp;
                </div>
            </footer>
        )
    }
}

export default Footer;