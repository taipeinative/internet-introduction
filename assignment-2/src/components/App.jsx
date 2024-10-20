import DataTable from './DataTable.jsx';
import ExpenseRecord from "../classes/ExpenseRecord.js";
import FilterDataPanel from './FilterDataPanel.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import NewDataPanel from './NewDataPanel.jsx';
import { useEffect, useRef, useState } from "react";
import Downloader from './Downloader.jsx';

/**
 * @type {Array<ExpenseRecord>} The array of dummy pre-prepared expense data.
 */
const dummyData = [
    new ExpenseRecord(0, 'Sneakers', 2450, new Date('2024-07-26'), 'Wear'),
    new ExpenseRecord(1, 'Cup Noodles', 220, new Date('2024-08-20'), 'Eat'),
    new ExpenseRecord(2, 'Rent', 19500, new Date('2024-09-01'), 'Living'),
    new ExpenseRecord(3, 'Kumamon Doll', 200, new Date('2024-09-03'), 'Leisure'),
    new ExpenseRecord(4, 'Textbook', 950, new Date('2024-09-10'), 'Education'),
    new ExpenseRecord(5, 'Easy Card Recharge', 5000, new Date('2024-10-01'), 'Transportation'),
    new ExpenseRecord(6, 'T-Shirt', 450, new Date('2024-10-08'), 'Wear')
];

/**
 * @type {number} The counter that stores the identifier for the next record.
 */
let nextRecordUID = dummyData.length;

/**
 * @type {Array<ExpenseRecord>} The copy of the records, which can be useful after removing the filter.
 */
let recordsCopy = [...dummyData];

/**
 * The application interface that contains other components.
 * @returns {React.JSX.Element} The app interface object.
 */
export default function App() {
    
    /**
     * @type {[string, React.Dispatch<string>]} The dynamically generated CSV document. This is a temporary data.
     */
    const [csv, setCSV] = useState('');
    
    /**
     * @type {React.MutableRefObject<null>} The reference to the anchor element.
     */
    const csvRef = useRef(null);

    /**
     * @type {[Array<ExpenseRecord>, React.Dispatch<Array<ExpenseRecord>>]} The inputted records.
     */
    const [records, setRecords] = useState(dummyData);

    /**
     * @type {[boolean, React.Dispatch<boolean>]} The visibility status of the New Data Panel.
     */
    const [showNewDataPanel, setShowNewDataPanel] = useState(false);

    /**
     * @type {[boolean, React.Dispatch<boolean>]} The visibility status of the Filter Data Panel.
     */
    const [showFilterDataPanel, setShowFilterDataPanel] = useState(false);

    /**
     * Export the records as a CSV file.
     */
    const exportRecords = () => {
        let csvContent = 'id,caption,amount,date,tag\n';
        recordsCopy.forEach((v) => {
            csvContent += v.serialize();
            csvContent += '\n';
        });
        setCSV(csvContent);
    }

    /**
     * Handle the click event on the 'Add data' button.
     * @param {string} caption - The caption of the record.
     * @param {number} amount - The amount of the record.
     * @param {Date} date - The date of the record.
     * @param {string} tag - The tag of the record.
     */
    const handleAppendRecord = (caption, amount, date, tag) => {
        let newRecords = [...recordsCopy];
        newRecords.push(new ExpenseRecord(nextRecordUID, caption, amount, date, tag));
        setRecords(newRecords);
        recordsCopy = [...newRecords];
        nextRecordUID ++;
    }

    /**
     * Handle the click event on the 'Clear' button.
     */
    const handleClearRecords = () => {
        setRecords([]);
        recordsCopy = [];
    }

    /**
     * Handle the click event on the 'Duplicate' button.
     * @param {number} id - The identifier of the record.
     */
    const handleDuplicateRecord = (id) => {
        let flag = true
        let index = 0;
        while (flag) {
            if (recordsCopy[index].id === id) {
                break;
            } else {
                index ++;
            }
        }
        const lastObject = recordsCopy[index];
        recordsCopy.push(new ExpenseRecord(nextRecordUID, lastObject.caption, lastObject.amount, lastObject.date, lastObject.tag));
        setRecords([...recordsCopy]);
        nextRecordUID ++;
    }

    /**
     * Handle the change event in the 'Filter by tag:' input field.
     * @param {string} keyword - The keyword used to filter the record tags.
     */
    const handleFilterRecord = (keyword) => {
        if (keyword !== '') {
            let filteredRecords = [...recordsCopy].filter((v) => {
                return v.tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').search(new RegExp(keyword, 'i')) >= 0;
            });
            setRecords(filteredRecords);
        } else {
            setRecords(recordsCopy);
        }
    }

    /**
     * Handle the click event on the 'Dummy' button.
     */
    const handleGenerateDummyRecord = () => {
        setRecords(dummyData);
        recordsCopy = [...dummyData];
    }
    
    /**
     * Handle the click event on the 'Remove' button.
     * @param {number} id - The identifier of the record.
     */
    const handleRemoveRecord = (id) => {
        let flag = true
        let index = 0;
        while (flag) {
            if (recordsCopy[index].id === id) {
                break;
            } else {
                index ++;
            }
        }
        recordsCopy.splice(index, 1);
        setRecords([...recordsCopy]);
    }

    /**
     * Trigger download when the csv content changes.
     */
    useEffect(() => {
        if (csv && csvRef.current) {
            csvRef.current.click();
        }
    }, [csv]);

    return (
        <div className="appContainer">
            <Header
                title="Simple Expense Logger"
                info="This simple expense logger helps you track your expenses and export the data for you."
            />
            <h2>Data</h2>
            <Navbar
                onClickNew={() => {setShowNewDataPanel(!showNewDataPanel);}}
                onClickFilter={() => {setShowFilterDataPanel(!showFilterDataPanel);}}
                onClickExport={exportRecords}
                onClickDummy={handleGenerateDummyRecord}
                onClickClear={handleClearRecords}
            />
            <Downloader
                csv={csv}
                refLink={csvRef}
            />
            <NewDataPanel
                show={showNewDataPanel}
                onAppendRecord={handleAppendRecord}
            />
            <FilterDataPanel
                show={showFilterDataPanel}
                onFilterRecord={handleFilterRecord}
            />
            <DataTable
                record={records}
                onDuplicateRecord={handleDuplicateRecord}
                onRemoveRecord={handleRemoveRecord}
            />
            <Footer
                title="Simple Expense Logger"
                info={
                    <a href="https://github.com/taipeinative">Made by Ho, Chang-Yu with ❤️ & ☕</a>
                }
            />
        </div>
    );
}
