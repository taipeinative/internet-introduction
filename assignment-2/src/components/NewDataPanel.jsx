import InputGroup from './InputGroup.jsx';
import { sanitizeText } from '../classes/Utils.js';
import ToolkitButton from './ToolkitButton.jsx';
import { useState } from 'react';

/**
 * The panel that offers user a place to configure new record's properties.
 * @param {object} param - The inputted parameters.
 * @param {boolean} param.show - Whether to show the panel or not.
 * @param {Function} param.onAppendRecord - The function to handle the newly added record data.
 * @returns {React.JSX.Element} The new data panel object.
 */
export default function NewDataPanel({show, onAppendRecord}) {
    
    // Default input field values
    const defaultAmount = '';
    const defaultCaption = '';
    const defaultDate = new Date().toISOString().split('T')[0];
    const defaultTag = '';
    
    /**
     * @type {[string, React.Dispatch<string>]} The user inputted amount value.
     */
    const [amount, setAmount] = useState(defaultAmount);

    /**
     * @type {[string, React.Dispatch<string>]} The user inputted caption value.
     */
    const [caption, setCaption] = useState(defaultCaption);

    /**
     * @type {[string, React.Dispatch<string>]} The user inputted date value.
     */
    const [date, setDate] = useState(defaultDate);

    /**
     * @type {[string, React.Dispatch<string>]} The user inputted tag value.
     */
    const [tag, setTag] = useState(defaultTag);
    
    /**
     * Handle the onClick event on the 'Add data' button, and pass the current value up.
     */
    const handleNewData = () => {
        onAppendRecord(sanitizeText(caption), parseInt(amount), new Date(date), sanitizeText(tag));
        setAmount('');
        setCaption('');
        setDate(new Date().toISOString().split('T')[0]);
        setTag('');
    }
    
    if (show) {
        return (
            <section className="panel">
                <h3>New Data</h3>
                <InputGroup
                    title="Caption"
                    id="inputCaption"
                    onChangeInput={e => setCaption(e.target.value)}
                    type="text"
                    value={caption}
                    placeholder="Bubble Tea"
                />
                <InputGroup
                    title="Amount"
                    id="inputAmount"
                    onChangeInput={e => setAmount(e.target.value)}
                    type="currency"
                    value={amount}
                    placeholder="65"
                />
                <InputGroup
                    title="Date"
                    id="inputDate"
                    onChangeInput={e => setDate(e.target.value)}
                    type="date"
                    value={date}
                />
                <InputGroup
                    title="Tag"
                    id="inputTag"
                    onChangeInput={e => setTag(e.target.value)}
                    type="text"
                    placeholder="Eat"
                    value={tag}
                />
                <ToolkitButton
                    title="Add Data"
                    id="panelAdd"
                    onClickButton={handleNewData}
                    subStyle="warn"
                />
            </section>
        );
    } else {
        return '';
    }
}