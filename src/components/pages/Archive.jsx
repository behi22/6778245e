import React from 'react';

const Archive = ({ archiveItems }) => {
  if (!archiveItems || archiveItems.length === 0) {
    return <p>No archived items to display</p>;
  }

  return (
    <div className="archive">
      <h2>Archived Calls</h2>
      <ul>
        {archiveItems.map((call) => (
          <li key={call.id}>
            From: {call.from}, To: {call.to}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Archive;
