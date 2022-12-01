const content = document.getElementById('content');

const header = `
<header class="header">
        <nav class="nav-bar">
          <a href="" class="logo">Logo</a>
          <ul class="nav-menu">
            <li class="nav-item"> 
              <a href="" class="nav-link">
                Pokemons
              </a>  
            </li>
          </ul>
        </nav>
      </header>
`;
const renderHeader = () => {
  content.insertAdjacentHTML('beforebegin', header);
};

export default renderHeader;