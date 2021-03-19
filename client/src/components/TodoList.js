// Document imports
import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';
import { getItems, deleteItem, addItem } from '../actions/itemActions';


class TodoList extends Component{

    // Lifecycle method
    componentDidMount(){
        // Calls getItems as soon as this component is mounted to the render tree
        this.props.getItems();
    }

    // Callback for when delete button us pressed on an object
    onDeleteClick(id){
        // When clicked, set the state by deleting (fitering) any item in the item array that matches the current item's id
         this.setState(
            this.props.deleteItem(id)
        );
    }

    render(){
        // Get items from TodoList state variable (De-Strucutres item by taking only the first argument [titled `items` in this case])
        const { items } = this.props.item;

        // Return markup
        return (
            <Container>
                {/* Markup for displaying existing TodoList items */}
                <ListGroup>
                    <TransitionGroup className='todo-list'>
                        {/* Loop through items array and create a new ListGroupItem for each element in the array */}
                        {items.map(
                            ({ id, name }) => (
                                <CSSTransition key={id} timeout={500} classNames='fade'>
                                    <ListGroupItem>
                                        <Button 
                                            className='remove-btn'
                                            color='danger'
                                            size='small'
                                            onClick={this.onDeleteClick.bind(this, id)}
                                         >&times;</Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            )
                        )}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
         
    }
}

TodoList.propTypes = {
    deleteItem: PropTypes.func.isRequired, 
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});


// Makes this component accessible to external file and connect actions from itemActions file so that they are usable here
export default connect(mapStateToProps, { getItems, deleteItem })(TodoList);
