/**
 * The custom button that can be used for toolkit operations.
 * @param {object} param - The inputted parameters.
 * @param {string} param.title - The title of the button.
 * @param {string} param.id - The identifier of the button.
 * @param {Function} param.onClickButton - The function to handle the onClick event of the input element.
 * @param {string} param.subStyle - The additional style of the button. only accepts `danger`, `warn`, `success`, and `norm`.
 * @returns {React.JSX.Element} The toolkit button object.
 */
export default function ToolkitButton ({title, id, onClickButton, subStyle = 'norm'}) {
    
    let styleName = 'toolkitButton';
    
    switch (subStyle) {
        case 'danger':
            styleName += ' toolkitDanger';
            break;
        
        case 'warn':
            styleName += ' toolkitWarn';
            break;

        case 'success':
            styleName += ' toolkitSuccess';
            break;
        
        case 'norm':
        default:
            break;
    }
    
    return (
        <button className={styleName} id={id} onClick={onClickButton}>{title}</button>
    );
}