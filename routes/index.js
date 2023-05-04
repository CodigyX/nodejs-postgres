const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/teams', controllers.createTeam);
router.get('/teams', controllers.getAllTeams);

module.exports = router;