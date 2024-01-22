export const weeksBetween = (d1, d2) => {
  return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
};

export const getTimerDetails = (today, weedingDate) => {
  const diff = weedingDate - today;
  const secondsRemaining = Math.floor(diff / 1000);

  let weeks = Math.floor(secondsRemaining / (7 * 24 * 60 * 60));

  let divisor_for_days = secondsRemaining % (7 * 24 * 60 * 60);
  let days = Math.floor(divisor_for_days / (7 * 24 * 60));

  let divisor_for_hours = secondsRemaining % (24 * 60 * 60);
  let hours = Math.floor(divisor_for_hours / (24 * 60));

  let divisor_for_minutes = secondsRemaining % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  return {
    w: weeks,
    d: days - 7,
    h: hours,
    m: minutes,
    s: seconds,
  };
};
