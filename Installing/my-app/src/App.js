import React from 'react'
import App1 from './task/AppTask/App1.jsx'
import App2 from './task/AppTask/App2.jsx'
import App3 from './task/AppTask/App3.jsx'
import App4 from './task/AppTask/App4.jsx'
import App5 from './task/AppTask/App5.jsx'
import App6 from './task/AppTask/App6.jsx'
import Select from './task/WorkWithForm/select/Select.jsx'
import Select2 from './task/WorkWithForm/select/Select2.jsx'
import Radio from './task/WorkWithForm/radio/Radio.jsx'
import DefaultValue from './task/WorkWithForm/defaultValue/DefaultValue.jsx'
import BindingInputs from './task/WorkWithForm/BindingInputsToArray/BindingInputs.jsx'
import BindingInputsToObject from './task/WorkWithForm/BindingInputsToObject/BindingInputsToObject.jsx'
import ReactiveAddition from './task/DataWork/ReactiveAddition.jsx'
import ReactiveChange from './task/DataWork/ReactiveChange.jsx'
import ReactiveArrayOfObject from './task/DataWork/ReactiveArrayOfObject.jsx'
import ReactiveOperations from './task/DataWork/ReactiveOperations.jsx'
import DataDisplay from './task/DataWork/DataDisplay.jsx'

function App() {
	return (
		<div>
			<App1 />
			<App2 />
			<App3 />
			<App4 />
			<App5 />
			<App6 />
			<Select />
			<Select2 />
			<Radio />
			<DefaultValue />
			<BindingInputs />
			<BindingInputsToObject />
			<ReactiveAddition />
			<ReactiveChange />
			<ReactiveArrayOfObject />
			<ReactiveOperations />
			<DataDisplay />
		</div>
	)
}

export default App
