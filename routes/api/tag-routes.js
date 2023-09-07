const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json('Something went wrong with retrieving tag data.')
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = Tag.findByPk(req.params.id);

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id.'});
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json('Error with retrieving tag.');
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});
  

router.delete('/:id', async (req, res) => {
  try {
    const productData = await Traveller.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
