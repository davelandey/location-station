const Nasa = (props) => {
  let coordinates = props.coordinates;
  console.log(coordinates);
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;

  return (
    <>
      <h1>Hello from Nasa - nope, no problems here!</h1>
      <p>
        {lat} {lon}
      </p>
    </>
  );
};

export default Nasa;
