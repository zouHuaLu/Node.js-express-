const stream = require("stream");

const readableStream = new stream.Readable();

readableStream._read = () => {};
