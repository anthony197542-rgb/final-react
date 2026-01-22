import { useParams } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Car Details</h1>
      <p>Showing details for car ID: {id}</p>
    </div>
  );
}

export default CarDetails;
