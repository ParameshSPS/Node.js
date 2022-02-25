const express = require('express');
const router = express.Router();

// let { people } = require('../Data');

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people');

/*
// get - read data
router.get('/', getPeople);

// post - insert data
router.post('/', createPerson);
router.post('/postman', createPersonPostman);

// put - Update data
router.put('/:id', updatePerson);

// delete - delete data
router.delete('/:id', deletePerson);
*/

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;