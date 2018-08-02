import React, {Component} from 'react';

import logo from './logo.svg';

import './VCard.css';
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

class VCard extends Component {
    render() {
        return (
            <div className="vcard">
                <div className="vcard_flipper">
                    <div className="front">
                        <img src={logo} className="vcard__logo" alt=""/>
                        <div className="inline-code animated">
                            <Typist>
                                Stephan Köninger.
                            </Typist>
                        </div>
                        <div className="text-center bio">
                            <small>
                                <span className="job-title">Software Crafter</span>
                            </small>
                        </div>
                    </div>
                </div>
                <p className="text-center">
                    <a href="http://blog.stekoe.de">Blog</a> | <a href="http://ocl.stekoe.de">OCL.js</a>
                </p>
            </div>
        )
    }
}

export default VCard;