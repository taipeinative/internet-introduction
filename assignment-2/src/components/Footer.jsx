/**
 * The footer element placed at the bottom of the page.
 * @param {object} param - The inputted parameters.
 * @param {string} param.title - The title of the footer.
 * @param {string} param.info - The subtitle of the footer.
 * @returns {React.JSX.Element} The footer object.
 */
export default function Footer({title, info}) {
    return (
        <section>
            <footer>
                <h3>{title}</h3>
                <p>{info}</p>
            </footer>
        </section>
    );
}