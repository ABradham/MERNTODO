// Document imports
const express = require('express');
const Item = require('../../models/item');

// Create router object
const router = express.Router();

// --------- Create routes ---------

// @route   GET /api/items
// @desc    Get all items in the database
// @access  Public
router.get('/', (req, res) => {
    console.log('GET endpoint hit!')

    Item.find()
    .sort({ date: -1}) // Object specifying that we are querying and sorting by date in descending order
    .then((items) => res.json(items)); // Uses the res.json() function to send the jsonified items back to the requester
});


// @route   POST /api/items
// @desc    Insert a new item into the database
// @access  Public
router.post('/', (req, res) => {
    console.log('POST endpoint hit!');

    // Construct an object to add to the database
    const newItem = new Item({
        // Uses info from request's body to create new item. (body-parser enables us to do this)
        name: req.body.name
    });

    // Add this new item into the database
    newItem.save()
    .then((item) => res.json(item)) // Returns the item returned from MongoDB save function to the requester in JSON format
});


// @route   DELETE /api/items/:id
// @desc    Delete an existing item from the database
// @access  Public
router.delete('/:id', (req, res) => {
    console.log('DELETE endpoint hit!');

    // Find item that we we're looking to delete in the database by using id passed in the url (params)
    const itemId = req.params.id;
    Item.findById(itemId)
    .then(
        // If item is found sucessfully, then return a true success json
        (foundItem) => foundItem.remove()
                                .then(() => res.json({success: true})))
    .catch(
        // If item is not found sucessfully, return a false success json with a 404 error
        () => res.status(404).json({success: false}));

});

// Make the router object accessible to outside files (i.e. server.js)
module.exports = router;