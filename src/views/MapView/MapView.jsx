import React from 'react'
import PageLayout from 'components/PageLayout';
import Table from "components/Table";
import TableInput from "components/TableInput";
import Map from "components/Map";
import {connect} from "react-redux";
import {fetchLocations, addLocation, deleteLocation} from "../../redux/actions/locationActions"
import PropTypes from "prop-types";

class MapView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        longtitude: 0,
        latitude: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    }

    componentWillMount() {
        this.props.fetchLocations()
    }

    handleSubmit() {
        var oldLocations = {...this.props.locations}
        var lastId = 1
        if (oldLocations.length > 0) {
            lastId = oldLocations[oldLocations.length - 1].id + 1
        }

        var newLocation = {
            long: this.state.longtitude,
            lat: this.state.latitude
        }
                
        this.props.addLocation(newLocation)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: parseFloat(evt.target.value)
        })
    }

    handleDelete(id) {
        this.props.deleteLocation(id)
    }

    render() {
        return (
            <PageLayout>
                <Table data={this.props.locations} handleDelete={this.handleDelete}/>
                <TableInput 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    longtitude={this.state.longtitude}
                    latitude={this.state.latitude}/>
                <Map data={this.props.locations}/>
            </PageLayout>
        )
    }
}

MapView.propTypes = {
    fetchLocations: PropTypes.func.isRequired,
    locations: PropTypes.array.isRequired,
    addLocation: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    locations: state.locations.locations
})

export default connect(mapStateToProps, {fetchLocations, addLocation, deleteLocation})(MapView)