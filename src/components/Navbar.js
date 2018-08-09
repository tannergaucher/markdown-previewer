import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import Avatar from './Avatar'

const Nav = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.primary};
  padding: 1em;
  width: 100%;
`

const Navbar = () => (
  <Nav>
    <Avatar src="http://tannerg.com/static/profile-pic.2ef65c8f.jpg" />
    <NavLink to="/test" text="test" />
  </Nav>
)

export default Navbar
