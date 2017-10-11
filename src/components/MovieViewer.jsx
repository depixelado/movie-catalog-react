import React from 'react';

class MovieViewer extends React.Component {
  constructor(props) {
    super(props);

    this._handleClickBackground = this._handleClickBackground.bind(this);
  }

  _handleClickBackground() {
    const {
      closeMovieExplorer,
    } = this.props;

    closeMovieExplorer();
  }

  render() {
    const {
      title,
      overview,
      backdrop,
      thumb,
    } = this.props.movie;

    const bgSrc = backdrop ? backdrop : thumb;
    const backgroundImage = "url('" + bgSrc + "')";

    return (
      <div className="movieViewer">
        <div 
          className="movieViewer__background animated fadeIn" 
          onClick={this._handleClickBackground}
        >
        </div>
        <div className="movieViewer__box">
          <div className="movieViewer__column1">
            <div className="movieViewer__bigImage" style={{backgroundImage,}}>
            </div>
            <div className="movieViewer__title">
              {title}
            </div>
            <div className="movieViewer__description">
              <h2>Overview:</h2>
              <p>{overview}</p>
            </div>
          </div>

          <div className="movieViewer__column2">
           
          </div>
        </div>
      </div>
    );
  }
};

export default MovieViewer;
