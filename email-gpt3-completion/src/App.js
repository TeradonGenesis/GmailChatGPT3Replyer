import './App.css';
import { Component } from 'react';
import TriggerButton from './components/TriggerButton';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: null
    };
  }



  render() {
    return (
      <div className="react-app">
        <TriggerButton />
      </div>
    );
  }
}

export default App;
