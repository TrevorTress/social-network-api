const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/users
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:id')
    .put(updateThought)
    .get(getThoughtById)
    .delete(deleteThought);

// /api/users/:id
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;