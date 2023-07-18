import React, { Component } from 'react'

export default class Details extends Component {
    state = {
        skill_1: "React",
        skill_2: "Redux",
        skill_3: "Next"
    }
    render() {
        return (
            <div>
                <h2>Details</h2>
                <ul>
                    <li>
                        <p>
                            {this.state.skill_2}
                        </p>
                    </li>
                    <li>
                        <p>
                            {this.state.skill_1}
                        </p>
                    </li>
                    <li>
                        <p>
                            {this.state.skill_3}
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}
