export default function JewelleryCard({ item }) {
  return (
    <div className="col" key={item._id}>
      <div className="card h-100 card-all" key={item._id}>
        <img src={item.imageUrls[0]} className="card-img-top" alt="pic"></img>
        <div className="card-body">
          <p className="card-title">
            <strong>{item.name}</strong>
          </p>
          <p className="card-text">${item.price}</p>
        </div>
      </div>
    </div>
  );
}
