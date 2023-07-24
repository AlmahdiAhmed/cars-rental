const Cars = ({
  cars,
  addModal,
  showModal,
  showRent,
  addOrder,
  modal,
  openRent,
}) => {
  return (
    <div className="section cars">
      <div className="cars-container">
        {cars.map((car, index) => {
          const { id, img, name, desc, price } = car;
          const itemId = id;
          return (
            <div className="car" key={id}>
              <div className="img">
                <img src={img} alt="car" />
              </div>
              <div className="text">
                <h1>{name}</h1>
                <hr />
                <p>{desc}</p>
                <span>
                  $ <span className="price">{price} /</span> Day
                </span>
              </div>
              <div className="btn">
                <button
                  id={id}
                  className="rent"
                  onClick={() => {
                    addOrder(id);
                    showRent();
                  }}
                >
                  Rent Now
                </button>
                <button
                  id={id}
                  className="details"
                  onClick={() => {
                    addModal(id);
                    showModal();
                  }}
                >
                  Show Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {modal && <div className="overlay"></div>}
      {openRent && <div className="order-overlay"></div>}
    </div>
  );
};
export default Cars;
