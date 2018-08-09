import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'
import Navbar from './Navbar'
import Card from './Card'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const App = () => (
  <div>
    <AppContainer>
      <Navbar />
      <Button>First</Button>
      <Button>Second</Button>
      <Card
        title="Card title"
        text="This is sample card text.This is still sample card text"
        src=""
      />
      <Input />
    </AppContainer>
  </div>
)

export default App
