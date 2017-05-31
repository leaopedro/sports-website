import React, { PropTypes } from 'react';
import './style.less';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
//        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src="img/nike-logo.png" />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Masculino</a></li>
                            <li><a href="#">Feminino</a></li>
                            <li><a href="#">Menino</a></li>
                            <li><a href="#">Menina</a></li>
                        </ul>
                        <div className="navbar-right">
                            <a className="cart" href="#">
                                <img src="img/cart.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}

Navbar.propTypes = {
//    onAddSubreddit: PropTypes.func.isRequired,
};


export default Navbar;
