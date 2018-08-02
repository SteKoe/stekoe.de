import React, {Component} from 'react';
import './Background.css'
import BackgroundService from "../../services/BackgroundService";

class Background extends Component {
    constructor() {
        super();
        this.state = {backgroundImage: BackgroundService.getBackgroundImageInfo()};
    }

    render() {
        return (
            <div className="background">
                {this.state.backgroundImage.url}
                <div className="background__mask"></div>
                <div className="background__image" style={{backgroundImage: `url('bg/${this.state.backgroundImage.url}')`}}></div>
            </div>
        )
    }
}

export default Background;