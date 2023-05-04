const models = require("../database/models");

const createTeam = async (req, res) => {
    try {
        const team = await models.Team.create(req.body);
        return res.status(201).json({
            team
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };

    const getAllTeams = async (req, res) => {
        console.log('getting teams');
    try {
        const teams = await models.Team.findAll({
            include: [
            ]
        });
    return res.status(200).json({ teams });
    }catch (error) {
        return res.status(500).send(error.message);
    }
    };

    module.exports = {
        createTeam,
        getAllTeams
    };