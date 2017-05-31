import React, { PropTypes } from 'react';

import Checkbox from './../GeneralComponents/Checkbox.jsx';

import './style.less'

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

//        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const filterItems = [];
        for (let item in this.props.filter.filterList) {
            if (this.props.filter.filterList.hasOwnProperty(item)) {
                const i = this.props.filter.filterList[item];
                filterItems.push(
                    <div key={i.id} className="filter-item-container">
                        <Checkbox  data={i} checked={this.props.filter.activeFilters.indexOf(item) !== -1} error={false} label={i.title} onValueChange={this.props.toggleFilter} />
                    </div>
                );
            }
        }
        return (
            <section className="filter">
                <div className="container">
                    <p className="filter-title">{this.props.filter.filterTitle}</p>
                    {filterItems}
                    <button className="btn btn-default reset-btn" onClick={this.props.resetFilter}>
                        Todos os produtos
                    </button>
                </div>
            </section>
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.object.isRequired,
};


export default Filter;
