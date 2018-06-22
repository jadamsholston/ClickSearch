import React, {Component} from 'react';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Jumbo from './components/Jumbo/Jumbo'
import Images from './components/Images/Image';
import GameSpace from './components/GameSpace/GameSpace';

class App extends Component {
    
  state = {
    image: [
      { id: 1,
        image: "https://i.cdn.turner.com/drp/nba/lakers/sites/default/files/1718ball.jpg",
        clicked: false
      },
      
      { id: 2, 
        image: "https://i.cdn.turner.com/drp/nba/lakers/sites/default/files/1718kcp.jpg", 
        clicked: false
      },

      { id: 3,
        image: "https://i.cdn.turner.com/drp/nba/lakers/sites/default/files/1718ingram.jpg",
        clicked: false
      },
      
      { id: 4,
        image: "https://i.cdn.turner.com/drp/nba/lakers/sites/default/files/1718hart.jpg",
        clicked: false
      },

      { id: 5,
        image: "https://s.cdn.turner.com/drp/nba/lakers/sites/default/files/channing-frye-player.png",
        clicked: false
      },

      { id: 6,
        image: "https://i.cdn.turner.com/drp/nba/lakers/sites/default/files/1718kuzma.jpg",
        clicked: false
      },

      { id: 7, 
        image: "https://i.cdn.turner.com/drp/nba/lakers/sites/default/files/1718randle.jpg", 
        clicked: false
      },
      { id: 8,
        image: "https://i.cdn.turner.com/drp/nba/lakers/sites/default/files/1718lopez.jpg",
        clicked: false
      },

      { id: 9, 
        image: "https://s.cdn.turner.com/drp/nba/lakers/sites/default/files/player-page-isaiah-thomas.jpg", 
        clicked: false
      },
      
      { id: 10,
        image: "https://i.cdn.turner.com/drp/nba/lakers/sites/default/files/1718ennis.jpg",
        clicked: false
      },

      { id: 11, 
        image: "https://i.cdn.turner.com/drp/nba/lakers/sites/default/files/1718deng.jpg", 
        clicked: false
      },

      { id: 12, 
        image: "https://i.cdn.turner.com/drp/nba/lakers/sites/default/files/1718bryant.jpg", 
        clicked: false
      }
    ],
    counter: 0,
    topScore: 0
  };

  sortImages = (id, clicked) => {
      
    const imageOrder = this.state.image;
      
    //need to reference the image in the forEach and not the imageOrder array
      
    if (clicked) {
      console.log("true");
      imageOrder.forEach((img, index) => {
        // console.log(imageOrder[index].clicked);
        imageOrder[index].clicked = false;
        // console.log(imageOrder[index].clicked);
      });

      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        topScore: this.state.counter,
        counter: 0
      })
    }

    else {
      console.log("false");
      imageOrder.forEach((image, index) => {
        if (id === image.id) {
          // console.log(index);
          // console.log(image);
          // console.log(imageOrder[index].clicked);
          // console.log(imageOrder[index].image);
          // console.log(imageOrder[index].id);
          imageOrder[index].clicked = true;
          // console.log(imageOrder[index].clicked);
        }
      });
      return this.setState({image: imageOrder.sort(() => Math.random() - 0.5), counter: this.state.counter + 1})
    }
  };

  render() {
    return (
      <Wrapper>
        <Header
          score= {this.state.counter}
          topScore= {this.state.topScore}
        />
        <Jumbo/>
        <GameSpace>
          {this.state.image.map(image => (
            <Images
              key={image.id}
              sortImages={this.sortImages}
              id={image.id}
              src={image.image}
              clicked={image.clicked}
              />
          ))}
        </GameSpace>
        <Footer/>
      </Wrapper>
    );
  }
}

  export default App;
