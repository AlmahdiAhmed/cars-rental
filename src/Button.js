const Button = ({ filterCars }) => {
  return (
    <div className="section buttons" id="cars">
      <h2>Choose Your Car</h2>
      <div className="buttons-container">
        <button onClick={() => filterCars("all")}>All</button>
        <button onClick={() => filterCars("economic")}>Economic</button>
        <button onClick={() => filterCars("luxury")}>Luxurious</button>
        <button onClick={() => filterCars("suv")}>SUVs</button>
      </div>
    </div>
  );
};
export default Button;
