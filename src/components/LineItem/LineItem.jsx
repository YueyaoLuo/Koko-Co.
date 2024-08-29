export default function LineItem({ order, handleChangeQty, handleRemoveItem }) {
    
  return (
    <>
   
        {order.items.map((item) => (
          <div key={item._id} className="d-flex d-flex-bag align-items-stretch mb-3">
            <img
              src={item.jewellery.imageUrls[0]}
              alt={item.jewellery.name}
              style={{ width: "100px" }}
            />
            <div className="d-flex-col">
              <div className="bag-text">{item.jewellery.name}</div>
              <div className="bag-text">
                <small>${item.jewellery.price}</small>
              </div>
              {/* qty */}
              <div className="qty">
                <button
                  className="btn-light bag-btn"
                  onClick={() =>
                    handleChangeQty(item.jewellery._id, item.qty - 1)
                  }
                >
                  −
                </button>

                <div className="btn qty-text btn-light">{item.qty}</div>

                <button
                  className="btn-light bag-btn"
                  onClick={() =>
                    handleChangeQty(item.jewellery._id, item.qty + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>
            <button className="align-items-center btn btn-light btn-delete" onClick={()=> handleRemoveItem(item.jewellery._id)}><ion-icon name="trash-outline"></ion-icon></button>
          </div>
        ))}

    </>
  );
}
