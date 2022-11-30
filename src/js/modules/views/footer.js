const content = document.getElementById('content');

const footer = `
<footer>
   <p>Copyright © 2022 All Rights Reserved.</p>
</footer>
`;
const renderFooter = () => {
  content.insertAdjacentHTML('afterend', footer);
};

export default renderFooter;
