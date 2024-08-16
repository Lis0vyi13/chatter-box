import moment from "moment";

export const formatTimestamp = (timestamp: number) => {
  const now = moment();
  const date = moment(timestamp);

  if (date.isSame(now, "day")) {
    return date.format("HH:mm");
  } else if (date.isAfter(now.subtract(1, "week"))) {
    return date.format("ddd");
  } else {
    return date.format("DD.MM.YYYY");
  }
};
