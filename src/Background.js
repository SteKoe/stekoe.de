import React, {Component} from 'react';
import './Background.css'

class Background extends Component {
    render() {
        return (
            <div className="background">
                <div className="background__mask"></div>
                <div className="background__image"
                     style="background-color: rgb(140, 106, 86); background-image: url(&quot;img/bg/1.jpg&quot;);"></div>
            </div>
        )
    }
}

export default Background;