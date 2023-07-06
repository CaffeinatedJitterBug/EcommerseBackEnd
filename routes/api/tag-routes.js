const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll().then((TagData) => {
    res.json(TagData);
  });
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id).then((TagData) => {
    res.json(TagData);
  });
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tag) => {
      if (req.body.tagName) {
        const TagArr = req.body.tagName.map((tag_name) => {
          return {
            tag_id,
            tag_name: tag.tagName
          };
        });
        return Tag.bulkCreate(TagArr);
      }
    })
    .then((tagNames) => res.status(200).json(tagNames))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    },
  })
    .then((tag) => {
      if (req.body.name) {
        const mapName = tag.map(({  }) => )
      }
    })
});
  

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
