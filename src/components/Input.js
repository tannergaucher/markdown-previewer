import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  background: ${props => props.theme.secondary};
  font-size: ${props => props.theme.typography.secondaryTextSize};
  font-family: ${props => props.theme.typography.primaryFont}
  padding: 0.5em;
  margin: ${props => props.theme.margin}
`

export default Input
