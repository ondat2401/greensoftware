import './Transaction.css'
import { FaArrowDownLong } from "react-icons/fa6";

const AddTbody = (data) => {
    return data.map((item, index) => (
        <tr key={index} className={`${index % 2 === 0 ? 'even' : 'odd'}`}>
            <td>{item.ACTION}</td>
            <td>{item.GAME}</td>
            <td>{item.AMOUNT}</td>
            <td>{item.TRANSACTION}</td>
            <td>{item.STATUS}</td>
            <td>{item.TIME}</td>
        </tr>
    ));
};
function Table() {
    const data = [
        {
            ACTION: "ACTION",
            GAME: "GAME",
            AMOUNT: "AMOUNT",
            TRANSACTION: "TRANSACTION",
            STATUS: "STATUS",
            TIME: "TIME",
        },
        {
            ACTION: "ACTION",
            GAME: "GAME",
            AMOUNT: "AMOUNT",
            TRANSACTION: "TRANSACTION",
            STATUS: "STATUS",
            TIME: "TIME",
        },
        {
            ACTION: "ACTION",
            GAME: "GAME",
            AMOUNT: "AMOUNT",
            TRANSACTION: "TRANSACTION",
            STATUS: "STATUS",
            TIME: "TIME",
        }
    ];
    return (
        <table className='transaction-table'>
            <thead>
                <tr>
                    <th>ACTION</th>
                    <th>GAME</th>
                    <th>AMOUNT</th>
                    <th>TRANSACTION</th>
                    <th>STATUS</th>
                    <th>TIME <FaArrowDownLong/></th>
                </tr>
            </thead>
            <tbody>
                {AddTbody(data)}
                
            </tbody>
            <tfoot></tfoot>
        </table>
    );
}
function Transaction() {
    return (
        <div className='Transaction'>
            <h2 className='transaction-title'>Transaction</h2>
            <Table/>
        </div>
    )
}
export default Transaction;