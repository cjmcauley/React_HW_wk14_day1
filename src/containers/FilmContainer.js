import React, { Component } from 'react';
import FilmList from '../components/FilmList.js';
import UpcomingRelease from '../components/UpcomingRelease.js';

class FilmContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part",
          url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    };
  }

  render() {
    return (
      <div className="film-container">
      <h1>Upcoming Film Releases for UK</h1>
      <hr />
      <br />
      <FilmList films={this.state.films}  />
      <br />
      <hr />
      <UpcomingRelease />
      </div>
    )
  }

}

export default FilmContainer;
