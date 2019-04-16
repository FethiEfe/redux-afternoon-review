import React, {Component} from 'react';
import store from '../store';
import Item from './Item'

export default class List extends Component {
    state = {
        todoItems: store.getState().todoItems
    }
    
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                todoItems: store.getState().todoItems
            })
        })
    }

    render() {
        console.log(this.state.todoItems)
        return (
            <div>
                {this.state.todoItems.map(val => {
                    return <Item text={val}/>
                })}
            </div>
        )
    }
}