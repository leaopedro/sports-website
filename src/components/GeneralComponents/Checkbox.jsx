import React, { PropTypes } from 'react';

import './checkbox.less';

class Checkbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.clicked = this.clicked.bind(this);
        this.clickedLink = this.clickedLink.bind(this);
    }
    clicked() {
        this.props.onValueChange(!this.props.checked, this.props.data);
    }

    clickedLink(e) {
        e.stopPropagation();
    }

    render(){
        return (
            <div className={(this.props.error)? "checkbox-container error" : "checkbox-container"} onClick={this.clicked}>
                <div className={(this.props.checked)? "checkbox checked" : "checkbox unchecked"} >
                    <i className="fa fa-check" />
                </div>
                <div className="checkbox-label"><p>{this.props.label} <a className={(this.props.linkUrl)? '':'hidden'} href={this.props.linkUrl} target="_blank" onClick={this.clickedLink}>{this.props.linkText}</a></p></div>
            </div>
        );
    }
}


Checkbox.propTypes = {
    error: PropTypes.bool.isRequired,
    onValueChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    data: PropTypes.object,
    linkUrl: PropTypes.string,
    linkText: PropTypes.string,
};


export default Checkbox;
