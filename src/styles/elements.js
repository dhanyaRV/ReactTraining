import styled, {css} from 'styled-components';
import { colors } from './global.js'

export const Button = styled.button`
height: 48px;
line-height: 40px;
padding: 0 64px;
font-weight: 600;
/* color: ${colors.black};
background: ${colors.white}; */
font-family: 'Avenir';
cursor: pointer;
margin: 0 24px;
font-size: 14px;
text-decoration: none;
&:hover {
    border-color:blacl
  }
${props => props.outline && css`
    background: none;
    border: 2px solid ${colors.success };
    border-radius:10px;
    &:hover {
    border-color:${colors.secondary}
  }
    

  `};
${props => props.primary && css`
    background: ${colors.primary};
    border-radius:10px;
    border:2px ${colors.primary };
    &:hover {
    background:${colors.blur}
  }
    
`};
${props => props.secondary && css`
    background: ${colors.secondary}; 
    border-radius:10px;
    border:2px ${colors.secondary };
    &:hover {
    background:${colors.blur}
  }
`};

${props => props.success && css`
    background: ${colors.success}; 
    border-radius:10px;
    border:2px ${colors.success };
    &:hover {
    background:${colors.blur}
  }
`};
${props => props.warning && css`
    background: ${colors.warning}; 
    border-radius:10px;
    border:2px ${colors.warning };
    &:hover {
    background:${colors.blur}
  }
`};

${props => props.pill && css`
    background: ${colors.primary}; 
    border-radius:100px;
    border:2px ${colors.primary };
    &:hover {
    background:${colors.blur}
  }
`};


${props => props.square && css`
    background: ${colors.success}; 
    border-radius:none;
    border:2px ${colors.success };
    &:hover {
    background:${colors.blur}
  }
`};
`
