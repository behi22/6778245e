import React from 'react';
import { Card, Button } from 'antd';
import { formatDateTime, formatDuration } from '../../assets/helper';

const CallCard = ({ call, onAction, actionLabel, isActive, onClick }) => {
  const handleAction = async () => {
    try {
      await onAction(call.id);
    } catch (error) {
      console.error(`Error ${actionLabel.toLowerCase()} call:`, error);
    }
  };

  return (
    <Card
      title={`Caller's Number: ${call.from}`}
      onClick={onClick}
      style={{
        marginBottom: 16,
        cursor: 'pointer',
        backgroundColor: isActive ? '#f0f0f0' : 'inherit',
      }}
    >
      <p>
        <strong>Call Type:</strong> {call.call_type}
      </p>
      <p>
        <strong>Created At:</strong> {formatDateTime(call.created_at).join(' ')}
      </p>
      <p>
        <strong>{call.call_type}</strong>
      </p>
      {isActive && (
        <>
          <p>
            <strong>Duration:</strong> {formatDuration(call.duration)}
          </p>
          <Button type="primary" onClick={handleAction}>
            {actionLabel}
          </Button>
        </>
      )}
    </Card>
  );
};

export default CallCard;
