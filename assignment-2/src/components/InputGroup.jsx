import { sanitizeNumber } from '../classes/Utils.js';

/**
 * The group that contains the label and the input element.
 * @param {object} param - The inputted parameters.
 * @param {string} param.title - The title of the input element.
 * @param {string} param.id - The identifier of the input element.
 * @param {Function} param.onChangeInput - The function to handle the onChange event of the input element.
 * @param {string} param.type - The type of the input element. Only accepts `currency`, `date`, or `text`.
 * @param {string} param.value - The default value of the input element.
 * @param {string} param.placeholder - The placeholder text in the input field.
 * @returns {React.JSX.Element} The input group object.
 */
export default function InputGroup({title, id, onChangeInput, type = 'text', value = '', placeholder = ''}) {

    /**
     * Handle the onChange event for any input field set to number related type.
     * @param {Event} e - The onChange event.
     * @returns {void} Nothing returns.
     */
    const handleNumberChange = (e) => {
        e.target.value = sanitizeNumber(e.target.value);
        onChangeInput({target: {id, value: e.target.value}});
    }

    let inputJSX = null;

    switch (type) {
        case 'currency':
            inputJSX = (
                <input
                    id={id}
                    type="text"
                    inputMode="numeric"
                    placeholder={placeholder}
                    value={value}
                    onChange={e => {handleNumberChange(e);}}
                />
            );
            break;

        case 'date':
            inputJSX = (
                <input
                    id={id}
                    type="date"
                    value={value}
                    onChange={e => {onChangeInput(e);}}
                />
            );
            break;
        
        case 'text':
        default:
            inputJSX = (
                <input
                    id={id}
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={e => {onChangeInput(e);}}
                />
            );
            break;
    }

    return (
        <div className="inputGroup">
            <label htmlFor={id}>{title}</label>
            {inputJSX}
            {type === 'currency' && <span>$</span>}
        </div>
    );
}