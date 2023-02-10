import React from 'react';

function PassState({ muhName }) {
  return (
    <>
		<div className="ticket">

      <h4>Hello, {muhName.name} from the PassState component!</h4>
		</div>
    </>
  );
}

export default PassState;
