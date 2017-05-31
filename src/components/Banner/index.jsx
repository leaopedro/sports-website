import React, { PropTypes } from 'react';
import './style.less';

class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
//        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <section className="banner">
                <img src={this.props.imageUrl} />
                <div className="banner-content">
                    <h1 className={(this.props.title)? 'banner-title':'hidden'}>{this.props.title}</h1>
                    <a href={this.props.buttonLink||'#'} className={(this.props.button)? "btn btn-default banner-btn" : "hidden"}>{this.props.buttonTitle}</a>
                </div>
            </section>
        );
    }

}

Banner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};


export default Banner;
