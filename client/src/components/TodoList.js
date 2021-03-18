// Document imports
import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {v4 as uuid} from 'uuid';

class TodoList extends Component{
    state = {
        items: [
            { id: uuid(), name: 'Walk'},
            { id: uuid(), name: 'Eat'},
            { id: uuid(), name: 'Shower'},
            { id: uuid(), name: 'Sleep'}
        ],

    }

    render(){
        // Get items from TodoList state variable (De-Strucutres item by taking only the first argument [titled `items` in this case])
        const { items } = this.state;

        // Return markup
        return (
            <Container>

                {/* Button to add TodoList items */}
                <Button 
                // Inline react styling
                color='dark'
                style={{marginBottom:'2rem'}}

                // OnClick function to change state
                onClick={()=>{
                    // Prompt user for new task name
                    const name = prompt('Enter a new Todo');

                    if(name){
                        // Set state by copying all previous items and adding newly created item with infro from prompt
                        this.setState(state => ({
                            items: [...state.items, {id: uuid(), name}]
                        }));
                    }
                }}
                >Add Todo</Button>

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
                                            onClick={()=>{
                                                {/* When clicked, set the state by deleting (fitering) any item in the item array that matches the current item's id */}
                                                this.setState(state => ({items: state.items.filter(item => item.id != id)}));
                                            }}
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

export default TodoList;
