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
            </section>
        );
    }

}

Banner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};


export default Banner;
