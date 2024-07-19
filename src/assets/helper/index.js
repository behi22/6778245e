// help with time formatting!

export const formatDateTime = (dateString) => {
  const targetDate = new Date(dateString);
  const date = targetDate.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const time = targetDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return [date, time];
};

export const formatDuration = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? 'Minute' : 'Minutes'}`;
  }

  return `${seconds} ${seconds === 1 ? 'Second' : 'Seconds'}`;
};
