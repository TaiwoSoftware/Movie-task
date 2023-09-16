/* eslint-disable react/prop-types */
const Col = ({
  src,
  alt,
  headerOne,
  special,
  logo,
  tomatoes,
  type,
  adventure,
  release
}) => {
  return (
    <div className="col col-md-4" data-testid="Movie-card">
      <img src={src} alt={alt}  data-testid="movie-poster"/>
      <h3 className={special} data-testid="movie-title" >{headerOne}</h3>
      <div className="inner-logo">
        <img src={logo} alt="copied-logo" className="logo-copy" />
        <img src={tomatoes} alt="tomotoes" className="tomotoes-copy" />
      </div>
      <p data-testid="release-date" className="release">{release}</p>
      <p className={adventure}>{type}</p>
    </div>
  );
};

export default Col;
