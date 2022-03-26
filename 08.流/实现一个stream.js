const Readable = require("stream").Readable;

class ToReadable extends Readable {
  constructor(iterator) {
    super();
    this.iterator = iterator;
  }

  _read() {
    const res = this.iterator.next();
    if (res.done) {
      return this.push(null);
    } else {
      setTimeout(() => {
        this.push(res.value + "\n");
      }, 0);
    }
  }
}

const iterator = (function (limit) {
  return {
    next: function () {
      if (limit--) {
        return {
          done: false,
          value: limit + Math.random(),
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
})(1000);

const readable = new ToReadable(iterator);

readable.on("data", (res) => {
  process.stdout.write(res);
});

readable.on("end", () => {
  process.stdout.write("结束！");
});
