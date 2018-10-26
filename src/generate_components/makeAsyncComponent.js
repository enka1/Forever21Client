import React, { Component } from 'react'

export default (imporFunction, LoadingComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            this.setState({
                component: await imporFunction()
            })
        }
        
        render() {
            const Component = this.state.component || LoadingComponent
            return <Component {...this.props} />
        }
    }
}