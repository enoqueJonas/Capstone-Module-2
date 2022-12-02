const commentsCounter = (commentsArr) => {
    let count  =  0;
    if (Array.isArray(commentsArr)) {
        commentsArr.forEach((comment) => {
            count+=1;
        })
        return count;
    }
    return 0;
}

module.exports = commentsCounter;