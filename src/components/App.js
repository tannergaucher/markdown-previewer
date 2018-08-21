import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Toolbar as toolbar, NavLink as navlink } from 'rebass'
import ReactMarkdown from 'react-markdown'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  font-family: Roboto mono;
  padding: 10px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
`

const Lead = styled.h3`
  color: ${props => props.theme.leadColor};
`

const MarkdownLead = Lead.extend``
const PreviewLead = Lead.extend``

const Markdown = styled.textarea`
  font-family: Roboto mono;
  font-size: 22px;
  flex: 1;
  margin: 10px;
  border: none;
  background: ${props => props.theme.primary};
  border-top: 3px solid ${props => props.theme.secondary};
  color: ${props => props.theme.textColor}
  resize: none;
  &:focus {
    outline: black;
  }
`

const Preview = styled(ReactMarkdown)`
  font-family: Roboto mono;
  font-size: 22px;
  flex: 1;
  margin: 10px;
  border: none;
  background: ${props => props.theme.primary};
  border-top: 3px solid ${props => props.theme.secondary};
  font-family: Montserrat;
  resize: none;
  &:focus {
    outline: black;
  }
`

const Textareas = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

const Toolbar = styled(toolbar)`
  justify-content: space-around;
  align-items: center;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
`

const DarkModeIcon = styled.i`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${props => props.theme.leadColor};
`

const Credit = styled.a`
  color: ${props => props.theme.creditColor};
`

class App extends React.Component {
  state = {
    text: '',
    mode: 'light'
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onClick = () => {
    // this.setState({ darkMode: !this.state.darkMode })
    this.state.mode === 'light'
      ? this.setState({ mode: 'dark' })
      : this.setState({ mode: 'light' })
  }

  mode = () => {
    const light = {
      // primary: '#fbf0d5',
      primary: 'white',
      secondary: '#eae0c7',
      textColor: 'black',
      leadColor: 'black',
      creditColor: 'black'
    }

    const dark = {
      primary: 'rgb(20,20,20)',
      secondary: '#4F27B0',
      textColor: '#98c379',
      leadColor: '#e06c75',
      creditColor: '#d19a66'
    }
    return this.state.mode === 'light' ? light : dark
  }

  render() {
    return (
      <ThemeProvider theme={this.mode()}>
        <Container>
          <Toolbar>
            <Lead>Markdown</Lead>
            <Lead>Preview</Lead>
          </Toolbar>
          <Textareas>
            <Markdown
              value={this.state.text}
              onChange={this.onChange}
              name="text"
            />
            <Preview source={this.state.text} />
          </Textareas>
          <Credit>Made by Tanner</Credit>
          <DarkModeIcon onClick={this.onClick}>
            <i className="material-icons">invert_colors</i>
          </DarkModeIcon>
        </Container>
      </ThemeProvider>
    )
  }
}

export default App
