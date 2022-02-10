import { useRef } from 'react';
import dollarIcon from '../images/icon-dollar.svg';
import personIcon from '../images/icon-person.svg';
import './ContainerLeft.css';

const ContainerLeft = ({
   bill,
   setBill,
   person,
   setPerson,
   customTip,
   setCustomTip,
   tip,
   setTip,
}) => {
   const inputReset = () => {
      document.getElementById('tip').value = '';
   };
   const tipButtonReset = () => {
      const buttons = document.querySelectorAll('.btn');
      buttons.forEach((btn) => {
         btn.style.backgroundColor = 'hsl(183, 100%, 15%)';
         btn.style.color = 'hsl(0, 0%, 100%)';
      });
   };
   const tipButton = useRef(null);
   const handleClick = (e) => {
      tipButtonReset();
      inputReset();
      e.target.style.backgroundColor = 'hsl(172, 67%, 45%)';
      e.target.style.color = '#eee';
      setTip(parseInt(e.target.textContent) / 100);
   };
   const handleChange = (e) => {
      tipButtonReset();
      // console.log(e.target.name);
      setTip(parseInt(e.target.value) / 100);
   };

   // console.log(bill, person, customTip);

   return (
      <div className="container__left">
         <div className="bill">
            <h4>Bill</h4>
            <div className="bill__input">
               <img
                  src={dollarIcon}
                  alt="dollar icon"
                  className="bill__input--icon"
               />
               <input
                  type="number"
                  placeholder="0"
                  className="bill__input--amount"
                  id="bill"
                  value={bill}
                  onChange={(event) => setBill(event.target.value)}
               />
            </div>
         </div>

         <div className="selected-tip">
            <h4>Select Tip %</h4>
            <div className="selected-tip__buttons">
               <button
                  className="btn"
                  href="#"
                  onClick={handleClick}
                  ref={tipButton.innerText}
               >
                  5%
               </button>
               <button
                  className="btn"
                  href="#"
                  onClick={handleClick}
                  ref={tipButton.innerText}
               >
                  10%
               </button>
               <button
                  className="btn"
                  href="#"
                  onClick={handleClick}
                  ref={tipButton.innerText}
               >
                  15%
               </button>
               <button
                  className="btn"
                  href="#"
                  onClick={handleClick}
                  ref={tipButton.innerText}
               >
                  20%
               </button>
               <button
                  className="btn"
                  href="#"
                  onClick={handleClick}
                  ref={tipButton.innerText}
               >
                  25%
               </button>
               <input
                  name="customInput"
                  className="custom"
                  type="number"
                  placeholder="Custom"
                  id="tip"
                  // value={tip}
                  onChange={handleChange}
               ></input>
            </div>
         </div>

         <div className="people">
            <h4>Number of People</h4>
            <div className="people__input">
               <img
                  src={personIcon}
                  alt="person icon"
                  className="people__input--icon"
               />
               <input
                  type="number"
                  placeholder="0"
                  className="people__input--amount"
                  id="people"
                  value={person}
                  onChange={(event) => setPerson(event.target.value)}
               />
            </div>
         </div>
      </div>
   );
};

export default ContainerLeft;
