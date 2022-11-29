const content = document.getElementById('content');

const home = `
<div>
  Home
</div>
`;
const renderHome = () => {
  content.insertAdjacentHTML('beforeend', home);
};

export default renderHome;
