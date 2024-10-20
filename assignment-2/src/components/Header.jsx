/**
 * The app header.
 * @param {object} param - Inputted parameters.
 * @param {string} param.title - The title of the object.
 * @param {string} param.info - The paragraph that follows the heading.
 * @returns {React.JSX.Element} The header object.
 */
export default function Header({title, info}) {
    return (
        <section>
            <h1>{title}</h1>
            <p>{info}</p>
        </section>
    );
}