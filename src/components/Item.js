import React, {Component} from 'react';

class Item extends Component {
    state = {

    }
    render() {
        return(
            <div>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

export default Item;