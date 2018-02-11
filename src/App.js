import React, { Component } from 'react';
import './App.css';

// 创建context实例
const ThemeContext = React.createContext(
  {
    // background: 'red',
    // color: 'white'
  }
);

// Title组件
class Title extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => (
          <h1
            style={{
              background: context.background,
              color: context.color,
              fontSize: context.fontSize,
              padding: context.padding
            }}
          >
            {this.props.children}
          </h1>
        )}
      </ThemeContext.Consumer>
    );
  }
}
// 定义Header组件
class Header extends Component {
  render() {
    return <Title>Hello React Context API.</Title>;
  }
}
// 定义App组件，用到了Provider组件,类似于react-redux的Provider组件
class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeContext.Provider
          value={{
            background: 'green',
            color: 'white',
            fontSize: '32px',
            padding: '15px'
          }}
        >
          <Header />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
