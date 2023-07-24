import { LiaTimesSolid } from "react-icons/lia";
const Order = ({ order, setOpenRent, openRent, setModal }) => {
  return (
    <div className="section order">
      <div className="order-container">
        {order.map((item) => {
          const { id, name, desc, price, img } = item;
          return (
            <div className="item" key={id}>
              <div className="img">
                <img src={img} alt={name} />
              </div>
              <div className="text">
                <h1>{name}</h1>
                <div className="details">
                  <form>
                    <div className="input">
                      <label>
                        Phone number{" "}
                        <input
                          type="number"
                          placeholder="Please Enter your phone number"
                        />
                      </label>
                    </div>
                    <div className="input">
                      <label>
                        Your Address{" "}
                        <input type="text" placeholder="Your Address" />
                      </label>
                    </div>
                    <div className="input">
                      <label>
                        Days <input type="number" placeholder="How many days" />
                      </label>
                    </div>
                  </form>
                  <div className="payment">
                    <div className="choice">
                      <input type="radio" name="payment" />
                      Bank Transfer
                    </div>
                    <div className="choice">
                      <input type="radio" name="payment" />
                      Paypal
                    </div>
                    <div className="choice">
                      <input type="radio" name="payment" />
                      Credit card
                    </div>
                  </div>
                </div>
                <button
                  className="submit"
                  onClick={() => {
                    setOpenRent(false);
                    setModal(false);
                  }}
                >
                  Submit
                </button>
              </div>
              <div className="close">
                <button onClick={() => setOpenRent(false)}>
                  <LiaTimesSolid />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="order-overlay"></div>
    </div>
  );
};
export default Order;
