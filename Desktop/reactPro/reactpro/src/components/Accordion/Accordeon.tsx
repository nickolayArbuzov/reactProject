import React, { useState } from 'react';

type AccordeonPropsType = {
  title: string,
  onClick: (collapsed: boolean) => void
  collapsed: boolean
}

function Accordeon(props: AccordeonPropsType) {

  return (
    <div>
      <AccordeonTitle onClick={props.onClick} title={props.title} collapsed={props.collapsed}/> 
      {props.collapsed && <AccordeonBody />}
    </div>
  )
}

type AccordeonTitlePropsType = {
  title: string,
  onClick: (collapsed: boolean) => void,
  collapsed: boolean
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
  return (
    <div>
      <h3 onClick={() => {props.onClick(!props.collapsed)}}>{props.title}</h3>
    </div>
  )
}

function AccordeonBody() {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default Accordeon;
