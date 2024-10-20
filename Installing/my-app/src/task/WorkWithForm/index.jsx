import BindingInputs from './BindingInputsToArray/BindingInputs'
import BindingInputsToObject from './BindingInputsToObject/BindingInputsToObject'
import DefaultValue from './defaultValue/DefaultValue'
import Radio from './radio/Radio'
import Select from './select/Select'
import Select2 from './select/Select2'

function WorkWithForm() {
	return (
		<>
			<BindingInputs />
			<BindingInputsToObject />
			<DefaultValue />
			<Radio />
			<Select />
			<Select2 />
		</>
	)
}

export default WorkWithForm
