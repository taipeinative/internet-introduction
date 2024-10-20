import DataRecord from "./DataRecord.jsx";

/**
 * The table that contains all data records.
 * @param {object} param - Inputted parameters.
 * @param {Array<ExpenseRecord>} param.record - The array of records.
 * @param {Function} param.onDuplicateRecord - The function to handle the record duplication.
 * @param {Function} param.onRemoveRecord - The function to handle the record removal.
 * @returns {React.JSX.Element} The data table object.
 */
export default function DataTable({record, onDuplicateRecord, onRemoveRecord}) {
    if (record.length > 0) {
        return (
            <section className="tableContainer">
                <table>
                    <thead>
                        <tr key="tableHeading">
                            <th scope="col">Caption</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                            <th scope="col">Tag</th>
                            <th scope="col">Toolkits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((v) => {
                            // Keys should be set within the map level iteration.
                            // Since the DataRecord component already has a <tr> wrapper,
                            // <React.Fragment> is used here to include them without crating a real new wrapper.  
                            return (
                                <DataRecord
                                    key={v.id}
                                    id={v.id}
                                    caption={v.caption}
                                    amount={new Intl.NumberFormat('en-US').format(v.amount)}
                                    date={v.date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
                                    tag={v.tag}
                                    onClickDuplicate={onDuplicateRecord}
                                    onClickRemove={onRemoveRecord}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </section>
        );
    } else {
        return (
            <section className="tableContainer">
                <p>There are no records right now.</p>
            </section>
        );
    }
}