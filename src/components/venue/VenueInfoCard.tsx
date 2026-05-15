interface Props {
  title: string;

  value: string;
}

const VenueInfoCard = ({ title, value }: Props) => {
  return (
    <div className="venue-info-card">
      <h4>{title}</h4>

      <p>{value}</p>
    </div>
  );
};

export default VenueInfoCard;
