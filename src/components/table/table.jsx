import { Row } from '../../components/row/row';
import { useMyContext } from '../../provider';
import { useState } from 'react';
import './table.css'
import { useNavigate } from 'react-router-dom';
export function Table({question, content,verified,page}){
const navigate = useNavigate()
const [clicked,setClicked] = useState(false)
const handleClick = (e) => {
  e.preventDefault();
  setClicked(true);
  setTimeout(() =>{
   navigate(page)
  },1000)
};
return(
    <div
     onClick={handleClick}
     className='table'>
        <div className='question'>{question}</div>
        <Row
        isCorrect={verified.uno}
        clicked={clicked}
        content={content.uno}
        onClick={handleClick}
        />
        <Row
        isCorrect={verified.dos}
        clicked={clicked}
        content={content.dos}
        onClick={handleClick}
        />
        <Row
        isCorrect={verified.tres}
        clicked={clicked}
        content={content.tres}
        onClick={handleClick}
        />
       
    </div>
)
}