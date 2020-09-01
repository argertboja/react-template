import React from 'react'
import PageLayout from 'components/PageLayout';
import Table from "components/Table";
import TableInput from "components/TableInput";
import Map from "components/Map";

class Page1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        data: [{
            id: 1,
            long: 33.56,
            lat: 44.22
        }],
        longtitude: 0,
        latitude: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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
                <Table data={this.state.data} handleDelete={this.handleDelete}/>
                <TableInput 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    longtitude={this.state.longtitude}
                    latitude={this.state.latitude}/>
                <Map data={this.state.data}/>
            </PageLayout>
        )
    }
}

export default Page1