import React, { Component } from 'react'
import Center from './ClassContact'
import Details from './ClassAbout'

export default class Course extends Component {
    state = {
        name: "React course",
        count: 56789,
        level: "Advanced"
    }
    render() {
        return (
            <div>
                <h1>Course</h1>

                <p>
                    {this.state.name}
                </p>

                <p>
                    {this.state.count}
                </p>

                <p>
                    {this.state.level}
                </p>

                <hr />

                <Center />

                <hr />

                <Details />
            </div>
        )
    }
}
