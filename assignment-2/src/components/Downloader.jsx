/**
 * The invisible downloader object.
 * @param {object} param - The inputted parameters.
 * @param {string} param.csv - The CSV contents.
 * @param {*} param.refLink - The reference of the anchor object.
 * @returns {React.JSX.Element} The downloader object.
 */
export default function Downloader({csv, refLink}) {
    return (
        <a
            ref={refLink}
            href={window.URL.createObjectURL(new Blob([csv], {type: "text/csv"}))}
            className="hidden"
            target="_self"
            rel="noopener"
            download="records.csv"
        >a</a>
    );
}