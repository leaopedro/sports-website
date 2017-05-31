import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { toggleFilter, setActiveFilters, refreshItems } from '../actions';


function mapStateToProps(state) {
    return {
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleFilter: (value, filter) => {
            dispatch(toggleFilter(value, filter));
        },
        resetFilter: () => {
            dispatch(setActiveFilters());
            dispatch(refreshItems());
        },
    }
}

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default FilterContainer
