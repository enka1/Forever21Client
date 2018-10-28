import _ from 'lodash'
import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'

const faker = [
    {
        "title": "Schinner - Cummings",
        "description": "Operative stable benchmark",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/vonachoo/128.jpg",
        "price": "$31.27"
    },
    {
        "title": "Legros and Sons",
        "description": "Business-focused 4th generation artificial intelligence",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/marosholly/128.jpg",
        "price": "$27.14"
    },
    {
        "title": "Kuhlman and Sons",
        "description": "Reactive mobile customer loyalty",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/larrygerard/128.jpg",
        "price": "$36.91"
    },
    {
        "title": "Tillman - Kutch",
        "description": "Assimilated neutral structure",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/jonathansimmons/128.jpg",
        "price": "$98.67"
    },
    {
        "title": "Harris, Bosco and Davis",
        "description": "Stand-alone bottom-line knowledge user",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/bennyjien/128.jpg",
        "price": "$26.02"
    }
]


export default class SearchExampleStandard extends Component {
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()
            this.setState({
                isLoading: false,
                results: faker
            })
        }, 300)
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                results={results}
                value={value}
                {...this.props}
            />
        )
    }
}