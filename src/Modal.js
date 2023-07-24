const Modal = ({ modalItem, setModal, addOrder, showRent }) => {
  return (
    <div className="section modal">
      <div className="modal-container">
        {modalItem.map((item) => {
          const { id, name, desc, price, img } = item;
          return (
            <div className="item" key={id}>
              <div className="img">
                <img src={img} alt={name} />
              </div>
              <div className="text">
                <h1>{name}</h1>
                <hr />
                <p>{desc}</p>
                <span>
                  $ <span className="price">{price} /</span> Month
                </span>
                <div className="btns">
                  <button
                    className="rent"
                    onClick={() => {
                      addOrder(id);
                      showRent();
                    }}
                  >
                    Rent Now
                  </button>
                  <button className="close" onClick={() => setModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Modal;
