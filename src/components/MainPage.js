import React, {Component} from 'react';
import store, { ADD_ITEM_TO_LIST } from '../store';
import List from './List'

class MainPage extends Component {
    state = {
        inputText: '',
    }

    handleChange = e => {
        this.setState({inputText: e.target.value});
    }

    handleClick = () => {
        const action = {
            type: ADD_ITEM_TO_LIST,
            payload: this.state.inputText
        }
        store.dispatch(action);
    }

    render() {
        return(
            <div>
                <input onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Add to List</button>
                <List />
            </div>
        )
    }
}

export default MainPage;