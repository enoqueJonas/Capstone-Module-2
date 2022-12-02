import getAllItemsCount from '../modules/views/all-items-counter.js'
import {displayPokemonCount} from '../modules/views/home.js' 
import 'isomorphic-fetch';

describe('Testing All Pokemon Count Function', () => {
    test("Check jest is working", () => {
        expect(1).toBe(1);
    });
    it('Count All Pokemon on Home page', async () =>  {
      
      document.body.innerHTML = ` <div id="content">
                                        <h1 id="main-title">Pokemon</h1>
                                    </div>`;
      const content = document.getElementById('content');                                
      const data = await getAllItemsCount()                              
      displayPokemonCount(data)  
      console.log(data)
      expect(document.querySelector('#main-title').innerHTML).toBe("Pokemon(20)");
    });
    it('Count All Pokemon', async () => {
         // Arrange
        const count = 20 
        // Act
        const data = await getAllItemsCount()
        // Assert
        expect(data).toBe(count);
      })
  });
