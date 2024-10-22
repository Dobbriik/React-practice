import React from 'react'
import UsingComponents from './task/Components/UsingComponents.jsx'
import Tasks from './task/AppTask/index.jsx'
import WorkWithForm from './task/WorkWithForm/index.jsx'
import DataWorks from './task/DataWork/index.jsx'
import Context from './task/hooks/useContext/index.jsx'
import RefComponent from './task/hooks/useRef/index.jsx'
import HooksUseMemo from './task/hooks/useMemo/index.jsx'
import CallbackComponent from './task/hooks/useCallback/index.jsx'

function App() {
	return (
		<div>
			<Tasks />

			<WorkWithForm />

			<DataWorks />

			<UsingComponents />

			<Context />

			<RefComponent />

			<HooksUseMemo />

			<CallbackComponent />
			<br />
		</div>
	)
}

export default App
