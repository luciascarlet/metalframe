import React, { Component, useState } from "react"
import DrawArea from "./components/DrawArea"
import Editor from "./components/Editor"
import Button from "./components/Button"

class App extends Component {
	constructor() {
		super()
		this.state = {
			generators: []
		}
	}

	addGenerator(t) {
		let ng = this.state.generators
		ng.push({type: t, id: Math.random(), params: {}})
		this.setState({generators: ng})
	}

	render() {
		return (
			<div className="App">
				<DrawArea width={500} height={500}/>
				<div className="flex">
					<Button onClick={() => {this.addGenerator("penis")}}>
						Add crosshair
					</Button>
				</div>
				{this.state.generators.map((gen) =>
					<Editor key={gen.id} for={gen.type}/>
				)}
			</div>
		)
	}
}

export default App
