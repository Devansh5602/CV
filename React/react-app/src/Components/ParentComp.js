import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "DEV"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "DEV"
            })
        }, 3000)
    }
    render() {
        console.log("Parent component render")
        return (
            <div>
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp