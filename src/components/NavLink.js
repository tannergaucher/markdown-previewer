import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  color: ${props => props.theme.typography.anchorTextColor};
  font-size: ${props => props.theme.typography.primaryTextSize};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    opacity: 0.6;
  }
`

const NavLink = props => <StyledLink to={props.to}>{props.text}</StyledLink>

export default NavLink
