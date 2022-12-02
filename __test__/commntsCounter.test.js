const { internalIP } = require('webpack-dev-server');
const commentsCounter = require('../src/js/modules/commentsCounter.js');

describe('Comments', () => {
    it('Count commnents', () => {
        const commentsArr = [
            [
                {
                    "comment": "This is nice!",
                    "creation_date": "2021-01-10",
                    "username": "John"
                },
                {
                    "comment": "Great content!",
                    "creation_date": "2021-02-10",
                    "username": "Jane"
                }
            ]
        ]
        const result = commentsCounter(commentsArr);
        expect(commentsArr.length).toBe(result);
        document.body.innerHTML = '';
        for (let i = 0; i < result; i += 1) {
            document.body.innerHTML +=
                `
                    <div class="works">
                         <ul id="list"><li></li></ul>
                     </div>
                 `;
        }
        const list = document.querySelectorAll('.works');
        expect(list).toHaveLength(result);
    })
})