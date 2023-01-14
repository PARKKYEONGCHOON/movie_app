
import React from "react";
//import logo from './logo.svg';
//import './App.css';
//import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "../component/Movie";
import "./Home.css";

class Home extends React.Component {

  state = {
    isloading: true,
    movies: [],
  };

  getMovies = async () => {

    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isloading: false});
  };

  componentDidMount() {
    this.getMovies();
  }

  

  render() {
    const { isloading, movies } = this.state;
    return (
      <section className="container">
        {isloading ? 
        (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
              key={movie.key}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres} 
            />
            ))}
          </div>
      )}
      </section>
      
    
    );
    
  }


}

/*
function Food({name, picture, rating})
{
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
    

  );
}

const foodLike= [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://w.namu.la/s/bf2527dfd9717aea7f08232f93199df34d308181c08223628b862f90b4d77593479ba3d8b7fe6b1e781c731472c3679113e43dd1c93b608ca5c1f069386f24f7786e9324a3d72e9f6d2a300bef62e14c437bfc4aa568713123a7a55490d1088352d0368c378dd3ad7b00f71bf1950544',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://w.namu.la/s/05876ba153ccefcc901768e02f6d6da1e40920e5f9264e11e72f1c0ba7af0ae23ea0f7d2676ee5680d1ac133716d091a45d07919e9f523d1d619732f7b83974262ef9d4e73a2220e77166dfa460434576fd32a8223bfe26ec1d6a215ebb9f4fbc1751d7a17a409aa4aae0a2bf6b9438b',
    rating: 4.0,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Gimbap_%28pixabay%29.jpg',
    rating: 4.3,
  },  
];

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};


function App() {
  return (
   //<div className="App" />
   <div>
    <h1>Hello</h1>
    {foodLike.map(dish => (<Food id={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  );
}
*/

export default Home;
