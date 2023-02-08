import PropTypes from "prop-types";

function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <img src={medium_cover_image} alt={title} />
      <hr />
    </div>
  );
}

Movie.prototype = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

/* prototype는 첫문자가 소문자지만
카멜표기법에 의해 변수명을 쓸때에는 대문자로 쓰기때문에 주의할것 */
