const express = require('express');
const blogController = require('../controllers/blogController')
const router = express.Router();


//blog route 
router.get('/', blogController.blog_index);

// post request
router.post('/', blogController.blog_create_post);

// delete request
router.delete('/:id', blogController.blog_delete);

router.get('/create', blogController.blog_create_get);

// get request
router.get('/:id', blogController.blog_details);

module.exports = router;