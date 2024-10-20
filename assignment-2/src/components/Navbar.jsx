import ToolkitButton from './ToolkitButton.jsx';

/**
 * The navigation bar which contains a series of handful buttons.
 * @param {object} param - The inputted parameters.
 * @param {Function} param.onClickNew - The function to handle the click event on the 'New' button.
 * @param {Function} param.onClickFilter - The function to handle the click event on the 'Filter' button.
 * @param {Function} param.onClickExport - The function to handle the click event on the 'Export' button.
 * @param {Function} param.onClickDummy - The function to handle the click event on the 'Dummy' button.
 * @param {Function} param.onClickClear - The function to handle the click event on the 'Clear' button.
 * @returns {React.JSX.Element} The navbar object.
 */
export default function Navbar({onClickNew, onClickFilter, onClickExport, onClickDummy, onClickClear}) {
    return (
        <nav>
            <ul>
                <li><ToolkitButton
                        title="New"
                        id="navbarNew"
                        onClickButton={() => {onClickNew();}}
                    />
                </li>
                <li><ToolkitButton
                        title="Filter"
                        id="navbarFilter"
                        onClickButton={() => {onClickFilter();}}
                    />
                </li>
                <li><ToolkitButton
                        title="Export"
                        id="navbarExport"
                        onClickButton={() => {onClickExport();}}
                    />
                </li>
                <li><ToolkitButton
                        title="Dummy"
                        id="navbarDummy"
                        onClickButton={() => {onClickDummy();}}
                    />
                </li>
                <li><ToolkitButton
                        title="Clear"
                        id="navbarClear"
                        onClickButton={() => {onClickClear();}}
                        subStyle="danger"
                    />
                </li>
            </ul>
        </nav>
    );
}