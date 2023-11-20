import './Transfer.css'
import img from './img/wealthy-bussiness.png'
import { FaWallet, FaUserCircle, FaXing } from 'react-icons/fa'

function Img() {
  return (
    <div className='bussined-img'>
      <img src={img} alt='bussined'></img>
    </div>
  );
}
const Info = () => {
  return (
    <>
      <div className='info-wrapper'>
        <span><FaUserCircle className='reg-icons'/>&nbsp; Game Account:</span>
        <span className='span1'>XXXXXXXXXXX</span>
      </div>
      <div className='info-wrapper'>
        <span><FaWallet className='reg-icons'/>&nbsp; Game Balance:</span>
        <span className='span1'><FaXing className='brand-X'/>&nbsp; 0.00 Token X</span>
    </div>
    </>
  );
}
function Transer() {
    return (
      <div className='transfer'>
        <div className='transfer-title'>
          <h2>Transfer</h2>          
        </div>
        <div className='info'>
          <Info/>
        </div>

        <Img/>
      </div>
        
    );
}
  export default Transer