import { getComments } from "./comments";

const createCommentsSection = async (event) => {
    let list = '';
    const comments = await getComments(event);
    if (Array.isArray(comments)) {
        comments.forEach(comment => {
            list+= 
            `<p>
                ${comment.creation_date} ${comment.username}: ${comment.comment}
            </p>`;
        });
    }
    return list
}

export default createCommentsSection;