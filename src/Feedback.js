import './Feedback.css'
import feedback from './img/review.png'
import Table from './Tab';


function Feedback() {
    return (
      <div className="Feedback">
           
            <div className='feedback-wrapper'>
                
            <div className='feedback-left'>
                <h2 className='feedback-title'>Send Us<br/> Your Feedback</h2>
                    <div className='img-wrapper'>
                        <img src={feedback} alt=''></img>
                    </div>
                    <div className='img-circle'>
                        
                    </div>
            </div>
            <div className='feedback-right'>
                <Table/>
            </div>
            </div>
            
      </div>
    );
  }
  
  export default Feedback;
  
