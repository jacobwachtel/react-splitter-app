import React from 'react';
import './ContainerRight.css';

const ContainerRight = ({ tipAmountPerPerson, totalPerPerson, resetAll }) => {
   if (isNaN(tipAmountPerPerson) || isNaN(totalPerPerson)) {
      tipAmountPerPerson = '$0.00';
      totalPerPerson = '$0.00';
   }

   return (
      <div className="container__right">
         <div className="content__total">
            <div className="content__total--tip">
               <h4>
                  Tip Amount<span>/ person</span>
               </h4>

               <h3 id="total-amount">{tipAmountPerPerson}</h3>
            </div>

            <div className="content__total--total">
               <div className="tip__total-content">
                  <h4>
                     Total<span>/ person</span>
                  </h4>
               </div>
               <h3 id="total-people">{totalPerPerson}</h3>
            </div>
         </div>
         <button id="reset" onClick={resetAll}>
            RESET
         </button>
      </div>
   );
};

export default ContainerRight;
