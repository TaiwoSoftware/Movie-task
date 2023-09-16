/* eslint-disable react/prop-types */
const Col = ({
  src,
  alt,
  headerOne,
  special,
 
  release
}) => {
  return (
    <div className="col col-md-4" data-testid="Movie-card">
      <img src={src} alt={alt}  data-testid="movie-poster"/>
      <h3 className={special} data-testid="movie-title" >{headerOne}</h3>

      <p data-testid="release-date" className="release">{release}</p>
    </div>
  );
};

export default Col;
