import React from 'react'

function Home({state}) {

	if(state.name !== ''){
		return (
			<h1>Hello, {state.name}</h1>
	)
	} else {
		return <h2>Nothing to see here</h2>
	}
	
}

export default Home