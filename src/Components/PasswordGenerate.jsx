import React,{useState,useEffect} from 'react'
import Image from './Img/logo512.png';
import styled from 'styled-components';
import { BttonCheck, DecreaseBtton,IncrementBtton,BttonGenerate } from './Button';
import PasswordGenerator from './Functions/PasswordGenerator';

const PasswordGenerate = () => {
    const [setting,setSetting]=useState({
        characterNumber:1,
        symbol:true,
        number:true,
        capitalLetter:true
    });
    const [passGenerate,setPassGenerate]=useState('Ffg5D3?');
    useEffect(() => {
        setPassGenerate(PasswordGenerator(setting));
    }, [setting])
    const IncCharacterNumber = () =>{
        setSetting((last)=>{
            const newNumberCharacter = {...last};
            newNumberCharacter.characterNumber += 1;
            return newNumberCharacter;   
        });
    }
    const DecCharacterNumber = () =>{
        if(setting.characterNumber > 1){
            setSetting((last)=>{
                const newNumberCharacter = {...last};
                newNumberCharacter.characterNumber -= 1;
                return newNumberCharacter;   
            });
        }
    }
    const toggleSymbol = () =>{
    
        setSetting((last)=>{
            const newSymbol = {...last};
            newSymbol.symbol = !newSymbol.symbol;
            return newSymbol;
        })
        
    }
    const toggleNumber = () =>{
    
        setSetting((last)=>{
            const newNumber = {...last};
            newNumber.number = !newNumber.number;
            return newNumber;
        })
        
    }
    const toggleLetter = () =>{
    
        setSetting((last)=>{
            const newLetter = {...last};
            newLetter.capitalLetter = !newLetter.capitalLetter;
            return newLetter;
        })
        
    }
    const onSubmit = (e) =>{
        e.preventDefault();
       setPassGenerate(PasswordGenerator(setting));
    }
    return (
        <div className='container'>
            <Logo className="image">
                <img src={Image} alt="i" />
            </Logo>
            <form onSubmit={onSubmit}>
                <Row>
                    <label>Number of caracter:</label>
                    <Controls>
                       <DecreaseBtton click={DecCharacterNumber}/>
                        <span>{setting.characterNumber}</span>
                        <IncrementBtton click={IncCharacterNumber}/>
                    </Controls>
                </Row>
                <Row>
                    <label>Include Simbol?</label>
                    <BttonCheck selected={setting.symbol} click={toggleSymbol}/>
                </Row>
                <Row>
                    <label>Include Number?</label>
                    <BttonCheck selected={setting.number} click={toggleNumber}/>
                </Row>
                <Row>
                    <label> Include Uppercase?</label>
                    <BttonCheck selected={setting.capitalLetter} click={toggleLetter}/>
                        
                </Row>
                <Row>
                   <BttonGenerate type="submit"/>
                   <Input type="text" readOnly={true} value={passGenerate}/>
                </Row>
            </form>
        </div>
    )
}

export default PasswordGenerate

const Logo=styled.div`
    margin-bottom:50px;

    img{
        width:100%;
        vertical-align:top;
    }
`;
const Row = styled.div`
    margin-bottom:40px;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
`;
const Controls = styled.div`
    display:flex;
    justify-content:space-between;
    text-align:center;

    & > *{
        flex: 1;
    }
    span{
        line-height:40px;
        background: #33257E;
    }
`;
const Input = styled.input`
    width: 100%;
    background: none;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,.25);
    color: #fff;
    height: 40px;
    line-height:40px;
    cursor:pointer;
    transition: all .3s ease;
    &:hover{
        border: 1px solid rgba(255,255,255,.50);
    }
    &::selection{
        background: #212139;
    }
    &::-moz-selection{
        background: #212139;
    }
`;
