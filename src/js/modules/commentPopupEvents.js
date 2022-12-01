const addCommnetPopupEvents = (renderCommentPopup) => {
    const buttons = Array.from(document.querySelectorAll('.comment-button'));
    if (buttons !== null) {
        buttons.forEach(btn => {
            btn.addEventListener('click', renderCommentPopup)
        })
    }
}

export default addCommnetPopupEvents;