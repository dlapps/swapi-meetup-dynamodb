const request = require('request');

exports.handler = (event, context, callback) => {
    let subject = event.Records[0].dynamodb.NewImage;

    let data = {
        'name': subject['Name']['S'],
        'height': parseInt(subject['Height']['N']),
        'credit_index': parseInt(subject['Id']['N'])
    };

    let options = {
        rejectUnauthorized: false,
        uri: 'http://swapi.dreamlabs.rocks/api/character/',
        method: 'POST',
        json: data
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 201) {
            console.log(body);
        } else {
            console.log(error);
        }
    });

    callback(null, 'OK');
};
