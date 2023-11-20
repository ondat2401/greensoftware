import './Content.css'
import Table from './Tab.js';
import Transfer from './Transfer.js';

function Body() {
    return (
      <div className='content'>
        <LeftContent/>
        <RightContent/>
      </div>
    );
  }
  function LeftContent() {
    return (
      <div className='left-content'>
        <Transfer/>
      </div>
    );
  }
  function RightContent() {
    return (
      <div className='right-content'>
        <Table/>
      </div>
    );
}
  export default Body