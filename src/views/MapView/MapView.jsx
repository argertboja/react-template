import React from 'react'
import PageLayout from 'components/PageLayout';
import Table from "components/Table";
import TableInput from "components/TableInput";
import Map from "components/Map";
import {connect} from "react-redux";
import {fetchLocations} from "../../redux/actions/locationActions"

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
        var oldState = {...this.state}
        var oldData = oldState.data
        var lastId = 1
        if (oldData.length > 0) {
            lastId = oldData[oldData.length - 1].id + 1
        }
        var newData = oldData.concat({
            id: lastId,
            long: this.state.longtitude,
            lat: this.state.latitude
        }) 
        this.setState({data: newData})
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleDelete(id) {
        var oldState = {...this.state}
        var oldData = oldState.data
        var newData = oldData.filter(data => data.id !== id)
        this.setState({data: newData})
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

const mapStateToProps = state => ({
    locations: state.locations.locations
})

export default connect(mapStateToProps, {fetchLocations})(MapView)