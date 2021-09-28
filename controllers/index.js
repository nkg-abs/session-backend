const sequelize = require('sequelize');
const { Op } = sequelize;
const session = require('../models').Session;

const sessionController = {
    createEvent: async (req, res) => {
        const { event } = req.body;
        const result = await session.create({
            event: event,
            time: Date.now(),
        });

        res.send({
            message: result || 'Error',
        });
    },

    fetchEvents: async (req, res) => {
        const result = await session.findAll({});

        res.send({
            events: result || 'Error',
        })
    },
};

module.exports = sessionController;
