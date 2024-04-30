import "../ui/Shimmer.css";
const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(8)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-cards"></div>
        ))}
    </div>
  );
};

export default Shimmer;
