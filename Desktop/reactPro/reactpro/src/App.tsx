import React, { useState } from 'react';
import s from './App.module.css';
import UncontrolledRating from './components/Rating/UncontrolledRating';
import UncontrolledAccordeon from './components/Accordion/UncontrolledAccordeon';
import UncontrolledOnOff from './components/OnOff/UncontrolledOnOff';
import Rating, { RatingValueType } from './components/Rating/Rating';
import Accordeon from './components/Accordion/Accordeon';
import OnOff from './components/OnOff/OnOff';

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [fixValue, setFixValue] = useState<RatingValueType>(0);

  let [collapsed, setCollapsed] = useState(false);

  let [toggle, setToggle] = useState(false)

  return (
    <div className={s.App}>
      <AppTitle title={'Uncontrolled:'}/>
      <UncontrolledRating />
      <UncontrolledAccordeon title={'my toDos'} />
      <UncontrolledOnOff />
      <AppTitle title={'Controlled:'}/>
      <Rating fixValue={fixValue} 
              ratingValue={ratingValue}
              onClick={setFixValue} 
              onMouseEnter={setRatingValue} 
              onMouseLeave={setRatingValue}/>
      <Accordeon title={'my purchases'} onClick={setCollapsed} collapsed={collapsed}/>
      <OnOff onClick={setToggle} toggle={toggle}/>
    </div>
  );
}

function AppTitle(props: any){
  return <>{props.title}</>
}

export default App;
