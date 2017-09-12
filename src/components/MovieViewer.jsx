import React from 'react';

class MovieViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movieViewer">
        <div className="movieViewer__background animated fadeIn"></div>
        <div className="movieViewer__box">
          <div className="movieViewer__column1">
            <div className="movieViewer__title">
              {'Random movie title'}
            </div>
            <div className="movieViewer__description">
              <p>
                Consectetur amet dictum quam dignissim eu egestas a quisque adipiscing blandit praesent 
                adipiscing conubia euismod id feugiat. Odio quis viverra himenaeos vestibulum ultrices 
                malesuada ullamcorper tincidunt vel molestie erat a torquent eu a rhoncus volutpat feugiat sed. 
                Facilisis sem a duis vitae scelerisque suspendisse lobortis netus ornare a phasellus 
                mollis volutpat mi facilisis. Pulvinar cum amet a vestibulum dis purus a 
                himenaeos semper platea eleifend ad facilisi tincidunt sodales a. 
                Nunc per risus in a mus scelerisque venenatis scelerisque curae consectetur condimentum 
                a ornare interdum. Hac per ut id suspendisse tincidunt in enim dui ullamcorper 
                fusce eros adipiscing nostra torquent a dignissim ullamcorper ipsum. 
              </p>
              <p>
                Consectetur a elit a maecenas a sodales luctus a vitae sapien nunc scelerisque 
                vestibulum quam condimentum. Suscipit cubilia magna morbi pharetra a commodo rhoncus 
                pulvinar a lectus mi gravida adipiscing massa lectus aliquam condimentum tristique dolor 
                luctus congue adipiscing quam urna orci at a. Commodo scelerisque mattis magnis 
                parturient dis condimentum parturient suspendisse lectus in scelerisque est 
                dictumst malesuada fames sem taciti turpis feugiat. Scelerisque a parturient 
                vestibulum a suspendisse adipiscing sociosqu elementum consectetur natoque sit mi 
                morbi tincidunt sit mus a venenatis magna justo tempus velit risus. Suspendisse 
                vestibulum ut a consectetur enim eget dapibus vestibulum cras condimentum a 
                parturient adipiscing sagittis torquent iaculis congue turpis ullamcorper cras at 
                imperdiet taciti a condimentum a lobortis vel. Ridiculus blandit mus vestibulum est 
                blandit duis nec ipsum a a vel a consectetur congue parturient habitasse parturient 
                dolor odio ornare consectetur dignissim cras condimentum ut.
              </p>
            </div>
          </div>

          <div className="movieViewer__column2">
            <p>
              Consectetur amet dictum quam dignissim eu egestas a quisque adipiscing blandit praesent 
              adipiscing conubia euismod id feugiat. Odio quis viverra himenaeos vestibulum ultrices 
              malesuada ullamcorper tincidunt vel molestie erat a torquent eu a rhoncus volutpat feugiat sed. 
            </p>
            
            <p>
              Facilisis sem a duis vitae scelerisque suspendisse lobortis netus ornare a phasellus 
              mollis volutpat mi facilisis. Pulvinar cum amet a vestibulum dis purus a 
              himenaeos semper platea eleifend ad facilisi tincidunt sodales a. 
            </p>
            
            <p>
              Nunc per risus in a mus scelerisque venenatis scelerisque curae consectetur condimentum 
              a ornare interdum. Hac per ut id suspendisse tincidunt in enim dui ullamcorper 
              fusce eros adipiscing nostra torquent a dignissim ullamcorper ipsum.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieViewer;
