import React, { useState, useEffect } from 'react';
import Person from './Person';

function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const responseApi = await fetch('https://www.randomuser.me/api?results=1');
      const data = await responseApi.json();
      setPerson(data.results[0]);
    } catch (error) {
      console.error('Error fetching data from api:', error);
    }
  };

  const fetchNewPerson = () => {
    getPerson();
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <Person person={person} fetchNewPerson={fetchNewPerson} />
    </div>
  );
}

export default PersonController;
