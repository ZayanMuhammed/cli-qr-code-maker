const qr = require('qrcode');
const { program } = require('commander');

program
  .option('-i, --input <file>', 'input file path')
  .parse(process.argv);

const options = program.opts();

if (options.input) {
    let dataToEncode = options.input;
    qr.toString(dataToEncode, { type: 'terminal' }, function (err, code) {
        if (err) {
            console.error('Error generating QR code:', err);
            return;
        }
        console.log(code);
    });
} else {
  console.log('No input file provided. Use -i <data to encode>');
}