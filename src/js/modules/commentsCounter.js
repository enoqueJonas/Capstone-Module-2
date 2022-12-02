const commentsCounter = (commentsArr) => {
  let count = 0;
  if (Array.isArray(commentsArr)) {
    for (let i = 0; i < commentsArr.length; i += 1) {
      count += 1;
    }
    return count;
  }
  return 0;
};

module.exports = commentsCounter;