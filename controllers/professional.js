const { getDb } = require('../db/connect');

const getData = async (req, res, next) => {
  try {
    const db = getDb(); 
    const doc = await db.collection('user').findOne({});
    if (!doc) return res.status(404).json({ error: 'No user document found' });
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getData };
