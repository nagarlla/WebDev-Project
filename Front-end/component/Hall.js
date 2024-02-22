import React, { useState, useEffect } from 'react';

const halls = [
  {
    id: 'hall1',
    name: 'Placement Gallery 1',
    seatCount: 200,
  },
  {
    id: 'hall2',
    name: 'Placement Gallery 2',
    seatCount: 200,
  },
  {
    id: 'hall3',
    name: 'Placement Gallery 3',
    seatCount: 200,
  },
];

const Hall = () => {
  // Initialize seat colors for each hall
  const [seatColors, setSeatColors] = useState(() => {
    const initialSeatColors = {};
    halls.forEach((hall) => {
      initialSeatColors[hall.id] =
        JSON.parse(localStorage.getItem(`bookedSeats_${hall.id}`)) || {};
    });
    return initialSeatColors;
  });

  const bookSeat = (hallId, seatNumber) => {
    const hallSeatColors = { ...seatColors[hallId] };
    if (hallSeatColors[seatNumber] === 'black') {
      hallSeatColors[seatNumber] = 'black';
    } else {
      hallSeatColors[seatNumber] = 'black';
    }

    const updatedSeatColors = { ...seatColors, [hallId]: hallSeatColors };
    setSeatColors(updatedSeatColors);
    localStorage.setItem(`bookedSeats_${hallId}`, JSON.stringify(hallSeatColors));
  };

  useEffect(() => {
    // Load booked seats from local storage for each hall when the component mounts
    halls.forEach((hall) => {
      const bookedSeatsFromStorage = JSON.parse(localStorage.getItem(`bookedSeats_${hall.id}`));
      if (bookedSeatsFromStorage) {
        setSeatColors((prevSeatColors) => ({
          ...prevSeatColors,
          [hall.id]: bookedSeatsFromStorage,
        }));
      }
    });
  }, []);

  return (
    <div>
      {halls.map((hall) => (
        <div key={hall.id}>
          <h2>{hall.name}</h2>
          <div className="seat-grid">
            {Array.from({ length: hall.seatCount }, (_, index) => (
              <div
                key={index}
                className={`seat ${seatColors[hall.id][index] === 'black' ? 'booked' : ''}`}
                onClick={() => bookSeat(hall.id, index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Hall;