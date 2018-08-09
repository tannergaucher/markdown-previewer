import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.primary};
  border: 3px solid ${props => props.theme.secondary};
  color: ${props => props.theme.secondary};
  font-size: ${props => props.theme.typography.secondaryTextSize};
  font-family: ${props => props.theme.typography.primaryFont}
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 2px;
  &:hover {
    background: ${props => props.theme.secondary};
    border: 3px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }
`

export default Button
