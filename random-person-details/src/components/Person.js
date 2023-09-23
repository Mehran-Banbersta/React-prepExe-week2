import React from 'react';

function Person({ person, fetchNewPerson }) {
  return (
    <div>
      <button onClick={fetchNewPerson}>Fetch New User</button>
      <ul>
        {person ? (
          <>
            <li>First Name: {person.name.first}</li>
            <li>Last Name: {person.name.last}</li>
            <li>Email: {person.email}</li>
          </>
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
}

export default Person;
