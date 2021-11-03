const store = require('./store');
const router = express.Router();

router.get('/', async (req, res) => {
  let recent = await store.list();
  res.render('index', {recent})
})
module.exports = router;
