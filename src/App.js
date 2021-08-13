import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family:sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 20px;
  padding: 7px 10px;
  
  background: ${props => (props.primary? 'red' : 'green')};
  color: ${props => (props.primary? 'white' : 'black')};
  &:hover {
    background:blue;
  }
`;
function App() {
  return (
    <div>
      <h2>NORMAL</h2>
      <Button primary>button</Button>&nbsp;&nbsp;&nbsp;
      <Button >button</Button>&nbsp;&nbsp;&nbsp;
      <Button >button</Button>&nbsp;&nbsp;&nbsp;
      
      
    </div>
  );
}

export default App;
