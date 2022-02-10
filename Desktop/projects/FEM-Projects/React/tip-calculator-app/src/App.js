import React, { useState } from 'react';
import './App.css';
import ContainerLeft from './components/ContainerLeft';
import ContainerRight from './components/ContainerRight';
import Header from './components/Header';

function App() {
   const [bill, setBill] = useState();
   const [person, setPerson] = useState();
   const [customTip, setCustomTip] = useState('');
   const [tip, setTip] = useState('');

   const resetAll = () => {
      setBill('');
      setPerson('');
      setTip('');
   };

   let tipAmountPerPerson = parseFloat(
      (parseInt(bill) * tip) / parseInt(person)
   );
   let totalAmountPerPerson = parseFloat(
      (parseInt(bill) * tip + parseInt(bill)) / person
   );

   return (
      <>
         <Header />
         <main className="container">
            <ContainerLeft
               bill={bill}
               person={person}
               tip={tip}
               setTip={setTip}
               customTip={customTip}
               setCustomTip={setCustomTip}
               setBill={setBill}
               setPerson={setPerson}
            />
            <ContainerRight
               tipAmountPerPerson={tipAmountPerPerson.toFixed(2)}
               totalPerPerson={totalAmountPerPerson.toFixed(2)}
               resetAll={resetAll}
            />
         </main>
      </>
   );
}

export default App;
