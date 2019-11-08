const mockData = require('./mockData');
const enums = require('./mockDataEnums');

function mockForLokal(server) {
    server.get('/syfomotebehov/api/internad/veileder/motebehov', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(mockData[enums.MOTEBEHOV]));
    });

    server.post('/syfomotebehov/api/internad/veileder/motebehov/:fnr/behandle', (req, res) => {
        res.sendStatus(200);
    });

    server.get('/syfomotebehov/api/internad/veileder/historikk', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(mockData[enums.HISTORIKKMOTEBEHOV]));
    });
}

function mockSyfomotebehov(server) {
    mockForLokal(server);
}

module.exports = mockSyfomotebehov;
