import React, {Component, PureComponent} from 'react';
import './App.css';
import Test from './components/funBaseComp'
import withClass from './components/Hoc/withClass'
import ClassBaseCom from './components/classBaseCom'
import AppContext from './appCtx'
import FunBaseComp from "./components/funBaseComp";

// function App() {
  class App extends PureComponent {
      constructor(props) {
          super(props);
          console.warn('constructor');
      }
      static getDerivedStateFromProps(props,state) {
          console.warn('getDerivedStateFromProps');
          return state;
      }
      state = {
          msg: 'foo',
          testVisible: true,
          ctxVal: 'ctx-value eee'
      }
      printMsg =(e) => {
          this.setState({
              msg: e.target.value
          })
      }
      toggleTestVisible = () => {
          this.setState((prevState, props) => {
              return {
                  testVisible: !prevState.testVisible
              }
          })
      }
      render() {
          console.warn('render');
          return (
              <React.Fragment>
                  <div className="App">
                      <h1>hey</h1>
                      <button onClick={this.toggleTestVisible}>toogl Test visible</button>
                      {this.state.testVisible ? <Test msg={this.state.msg} action={this.printMsg} /> : ''}
                  </div>
                  <h1>bottom</h1>
                  <AppContext.Provider value={{ctxVal: this.state.ctxVal}}>
                      <ClassBaseCom></ClassBaseCom>
                      <FunBaseComp></FunBaseComp>
                  </AppContext.Provider>
              </React.Fragment>
          );
      }
      componentDidMount() {
          console.warn('componentDidMount');
      }
  }

export default withClass(App, 'foo');
