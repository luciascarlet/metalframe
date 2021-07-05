import React, { Component, useState } from "react"

class Editor extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.props.onChange(e.target.value)
	}

	render() {
		return (
			<div>{this.props.for}</div>
			
		)
	}
}

export default Editor