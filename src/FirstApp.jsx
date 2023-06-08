import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: 'Fernando Herrera',
  subTitle: 'No hay subtitulo',
  // title: 'No hay titulo',
};
