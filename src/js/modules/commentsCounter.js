const commentsCounter = () => {
    const commentsArr = Array.from(document.querySelectorAll('.comments-items'));
    commentsArr.forEach(comment => {
        console.log(comment + '1')
    })
}

module.exports = commentsCounter;