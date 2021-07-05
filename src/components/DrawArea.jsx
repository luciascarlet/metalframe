import React, { Component } from "react"

class DrawArea extends Component {
	render() {
		return (
			<canvas
				width={this.props.width}
				height={this.props.height}>
			</canvas>
		)
	}
}

export default DrawArea