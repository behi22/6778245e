import React from 'react';

const Activity = ({ activityItems }) => {
  if (!activityItems || activityItems.length === 0) {
    return <p>No activity items to display</p>;
  }

  return (
    <div>
      {activityItems.map((item) => (
        <p key={item.id}>
          From: {item.from}, To: {item.to}
        </p>
      ))}
    </div>
  );
};

export default Activity;
