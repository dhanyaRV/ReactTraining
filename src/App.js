import React from 'react';
import styled from 'styled-components';


import {Button} from './styles/elements.js'


// import './App.css'

const Container = styled.div`
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
  .row {
    width: 100%;
    display: flex;
    align-items: center;
  }
`

const Subhead = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 160px 0 48px;
`


function App() {
  return (
    <div className="App">  
    <Container>
      <Subhead>NORMAL</Subhead>
        <div className="row">
          
          
          <Button primary >Button</Button>
          <Button secondary>Button</Button>
          <Button  success>Button</Button>
          <Button  warning>Button</Button>
        </div>
        
        <Subhead>OUTLINE</Subhead>
        <div className="row">
          
          
          <Button  outline>Button</Button>
          <Button  outline>Button</Button>
          <Button  outline>Button</Button>
          <Button  outline>Button</Button>
        </div>

        <Subhead>PILL</Subhead>
        <div className="row">
          
          
          <Button  pill >Button</Button>
          <Button  pill>Button</Button>
          <Button  pill>Button</Button>
          <Button  pill>Button</Button>
        </div>
        <Subhead>SQUARE</Subhead>
        <div className="row">
          
          
          <Button  square>Button</Button>
          <Button  square>Button</Button>
          <Button  square>Button</Button>
          <Button  square>Button</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
