const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then((categoryData) => {
    /* for (x=0; x<Category.id.length; x++) {

    } */
  });
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id).then((categoryData) => {

  })
});

router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => {
      
    })
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((category) => {
      
    })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
