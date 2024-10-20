import ToolkitButton from "./ToolkitButton.jsx";

/**
 * The data record as a table row.
 * @param {object} param - Inputted parameters.
 * @param {number} param.id - The identifier of the record.
 * @param {string} param.caption - The caption of the record.
 * @param {string} param.amount - The amount of the record.
 * @param {string} param.date - The datetime of the record.
 * @param {string} param.tag - The tag of the record.
 * @param {Function} param.onClickDuplicate - The function to handle the click event on the 'Duplicate' button.
 * @param {Function} param.onClickRemove - The function to handle the click event on the 'Remove' button.
 * @returns {React.JSX.Element} The record object.
 */
export default function DataRecord({id, caption, amount, date, tag, onClickDuplicate, onClickRemove}) {    
    return (
        <tr>
            <td>{caption}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td>{tag}</td>
            <td>
                <ul className="toolkit">
                    <li><ToolkitButton
                            title="Duplicate"
                            id={`record${id}Duplicate`}
                            onClickButton={() => {onClickDuplicate(id);}}
                            subStyle="success"
                        />
                    </li>
                    <li><ToolkitButton
                            title="Remove"
                            id={`record${id}Remove`}
                            onClickButton={() => {onClickRemove(id);}}
                            subStyle="danger"
                        />
                    </li>
                </ul>
            </td>
        </tr>
    );
}