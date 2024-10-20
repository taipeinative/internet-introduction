import InputGroup from './InputGroup.jsx';
import { useState } from "react";

/**
 * The panel that offers users a space to filter data by tags.
 * @param {object} param - The inputted parameters.
 * @param {boolean} param.show - Whether to show the panel or not.
 * @param {Function} param.onFilterRecord - The function to handle the change of the input field.
 * @returns {React.JSX.Element} The filter data panel object.
 */
export default function FilterDataPanel({show, onFilterRecord}) {
    
    /**
     * @type {[string, React.Dispatch<string>]} The user inputted keyword value.
     */
    const [keyword, setKeyword] = useState('');
    
    if (show) {
        return (
            <section className="panel">
                <h3>Filter Data</h3>
                <InputGroup
                    title="Filter by tag"
                    id="inputFilter"
                    onChangeInput={e => {
                        setKeyword(e.target.value);
                        onFilterRecord(e.target.value);
                    }}
                    type="text"
                    value={keyword}
                    placeholder="Eat"
                />
            </section>
        );
    } else {
        return '';
    }
}