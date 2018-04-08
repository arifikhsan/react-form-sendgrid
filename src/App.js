import React, {Component} from 'react';
import './App.css';
import Form from "./componenets/ComponentForm";
import ComponentHeader from './componenets/ComponentHeader'


class App extends Component {
    render() {
        return (
            <div className="App">
                <ComponentHeader/>
                <Form/>
            </div>
        );
    }
}

export default App;
