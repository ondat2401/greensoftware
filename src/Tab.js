import './Tab.css'
import React, { useState } from 'react';
import { FaEthereum, FaBtc, FaXing } from 'react-icons/fa'
function Tab1() {
    const [selectOption, setSelectOption] = useState({
        value: "default",
        color:""
        
    });
    const handleProjectChange = (event) => {
        setSelectOption({
            value: event.target.value,
            color: 'black',
        });
        
    };
    return (
        <form className='tab-form' >
            <select
                className='tab-selection'
                value={selectOption.value}
                onChange={handleProjectChange}
                style={{color:selectOption.color}}
            >
                <option value="default" disabled hidden>
                    Select project to deposit
                </option>
                <option value="Game A">Game A</option>
                <option value="Game B">Game B</option>
                <option value="Game C">Game C</option>
            </select>
            
            <div className='amount'>
                <div className='amount-title'>
                <FaXing className='brand-X'/> Token X Amount
                    <span style={{float:'right'}}>Balance: 0.002345</span>
                </div>
                <div className='amount-selection-parent'>
                    <div className='input-wrapper'>
                        <div className='input-parent'>
                            <input placeholder={"0.0"} className='amount-input' />
                            <h5>Max</h5>
                        </div> 
                    </div>
                    
                    <select
                        className='amount-selection'
                    >
                        
                        <option value="tokenX"> Token X</option>
                        <option value="TokenY">Token Y</option>
                        <option value="tokenZ">Token Z</option>
                    </select>
                    
                </div>
                <div className='amount-desc'>
                    Amount must be greater than or equal to 1
                </div>
            </div>
            <button className='amount-button'>Deposit</button>
        </form>
        
    );
}

function Table() {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);    
    };
    const isBorder = (tabNumber) => {
        let border;
        if (tabNumber === 1)
            border = '20px 0 0 0'
        if (tabNumber === 3)
            border = '0 20px 0 0'
        
        return border;
    }
    const tabName = (tabNumber) => {
        const icons = {
          1: <><FaEthereum className='brand-icons'/><span className='icon-name'>Ethereum</span></>,
          2: <><FaBtc className='brand-icons' style={{color:"white", backgroundColor:"#f0b90c"}}/><span className='icon-name'>Binance</span></>,
          3: <><FaBtc className='brand-icons' style={{color:"white", backgroundColor:"#fe0102"}}/><span className='icon-name'>Tron</span></>,
        };
        return icons[tabNumber];
      };
    return (
        <div prop="true" className='Table'>
            <div className='tabs'>
                <div className='tab-header'>
                    {[1, 2, 3].map((tabNumber) => (
                        <div
                        key={tabNumber}
                        className={`header-child ${activeTab === tabNumber ? 'active' : ''}`}
                        onClick={() => handleTabClick(tabNumber)}
                            style={{
                                backgroundColor: activeTab === tabNumber ? 'white' : '',
                                borderRadius: isBorder(tabNumber)
                            }}
                        >
                        <div className={activeTab === tabNumber ? 'tab active' : 'tab'}>
                          <h4>{tabName(tabNumber)}</h4>
                        </div>
                      </div>
                    ))}     
                </div>
                <div className='tab-content'>
                    {activeTab === 1 && <Tab1/>}
                    {activeTab === 2 && <div >Tab 2 Content</div>}
                    {activeTab === 3 && <div >Tab 3 Content</div>}
                </div>
            </div>
      </div>
    );
}
export default Table;


