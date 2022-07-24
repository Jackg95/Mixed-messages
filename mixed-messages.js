const fortuneCookie = {
  start: ["lonely", "happy", "sad", "accomplished", "content"],
  midAdj: ["fortune", "loss", "love", "happiness"],
  ending: ["haste", "care", "an open heart", "caution"],
};

const fortune = () => {
  console.log(
    `Lately you have been feeling ${
      fortuneCookie.start[
        Math.floor(Math.random() * fortuneCookie.start.length)
      ]
    } in your life. With ${
      fortuneCookie.midAdj[
        Math.floor(Math.random() * fortuneCookie.midAdj.length)
      ]
    } awaiting you round the corner, I advise you to move forward with ${
      fortuneCookie.ending[
        Math.floor(Math.random() * fortuneCookie.midAdj.length)
      ]
    } `
  );
};

fortune();
