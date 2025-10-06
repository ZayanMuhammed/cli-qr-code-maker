const qr = require('qrcode');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("dataToEncode??: ", (data) => {
    let dataToEncode = data;

    qr.toString(dataToEncode, { type: 'terminal' }, function (err, code) {
        if (err) {
            console.error('Error generating QR code:', err);
            return;
        }
        console.log(code);
    });
});

