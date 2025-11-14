import { formatTime } from "../helper";

const LapCard = ({ lap }) => {
  return <div>{formatTime(lap)}</div>;
};

export default LapCard;
