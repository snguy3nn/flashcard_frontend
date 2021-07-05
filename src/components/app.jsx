import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
    state = {
        collection: [],
        subject: [],
        question: [],
        answer: [],
      }
    
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/flashcard/')
        .then(res => {
            const flashcard = res.data;
            this.setState({ flashcard });
        })
    }
    
    render() { 
        return (
            <div>
                
            </div>
          );
    }
}
 
export default App;