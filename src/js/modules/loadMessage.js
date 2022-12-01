const content = document.getElementById('content');

const message = `
<div class="load active">
    Loading...
</div>`;


const loadMessage = () => {
    content.insertAdjacentHTML('afterend', message);
};

export default loadMessage;