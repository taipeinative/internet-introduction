/**
 * The data record object class.
 */
export default class ExpenseRecord {
    /**
     * @property {number} amount - The amount of the record. 
     */
    amount = 0;

    /**
     * @property {string} caption - The caption of the record.
     */
    caption = 'Unnamed';

    /**
     * @property {Date} date - The datetime of the record.
     */
    date = new Date();

    /**
     * @property {number} id - The unique identifier of the record.
     */
    id = 0;

    /**
     * @property {string} tag - The tag of the record.
     */
    tag = 'undefined';
    
    /**
     * The interior expense data record object.
     * @param {number} id - The unique identifier of the record.
     * @param {string} caption - The caption of the record.
     * @param {number} amount - The amount of the record.
     * @param {Date} date - The datetime of the record.
     * @param {string} tag - The tag of the record.
     */
    constructor(id, caption = 'Unnamed', amount = 0, date = new Date(), tag = 'undefined') {
        this.id = id;
        this.caption = caption;
        this.amount = amount;
        this.date = date;
        this.tag = tag;
    }

    /**
     * Get the serialized record.
     * @returns {string} The record serialized as a CSV row.
     */
    serialize = () => {
        return `${this.id},"${this.caption}",${this.amount},"${this.date.toISOString().split('T')[0]}","${this.tag}"`;
    }
}