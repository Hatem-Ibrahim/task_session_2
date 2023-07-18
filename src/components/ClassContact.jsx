import React, { Component } from 'react'

export default class Center extends Component {
    state = {
        nameCenter: "Senior Steps"
    }
    render() {
        return (
            <div>
                <h1>Center description</h1>
                <p>
                    {this.state.nameCenter}
                </p>
            </div>
        )
    }
}
