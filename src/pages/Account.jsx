import React from 'react'

function Account({state}) {
	if(state.token !== ''){
		return (
			<div className='heading'>
				<h1>Account Page</h1>
				<p>You have a token!</p>
			</div>
		)
	} else {
		return <p>You don't have access</p>
	}

	
}

export default Account