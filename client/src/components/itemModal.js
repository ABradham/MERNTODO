// A file to show our modal adding of a new todo-list item

// Document imports
import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import {
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Input, 
    Label, 
    Form, 
    FormGroup
} from 'reactstrap';

// Redux imports
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component{
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({modal: !this.state.modal});
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const newItem = {
            id: uuid(), 
            name: this.state.name
        }

        // Add item via addItem action
        this.props.addItem(newItem);

        // Close the modal
        this.toggle();
    }

    render(){
        return (
            <div>
                <Button 
                color='dark'
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}>
                    Add Item
                </Button>

                <Modal 
                isOpen={this.state.modal}
                toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Todo</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='item'>Item</Label>
                                <Input 
                                    type='text' 
                                    name='name' 
                                    id='item'
                                    placeholder='Add a new Todo List Item'
                                    onChange={this.onChange}/>
                                <Button 
                                color='dark' 
                                style={{marginTop: '2rem'}}
                                block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});
// Connect to our actions file and allow redux and reducers to do their thing
export default connect(mapStateToProps, { addItem })(ItemModal);
