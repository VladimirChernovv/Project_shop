function GoodsItem({mainId, displayName, displayAssets, displayDescription, price}) {

  return (
    <div className="card" >
      <div className="card-image">
        <img src={displayAssets[0].url} alt={displayName} />
      </div>
      <div className="card-content">
      <span className="card-title">{displayName}</span>
        <p>
          {displayDescription}
        </p>
      </div>
      <div className="card-action">
        <button className="btn">Купить</button>
        <span className="right" style={{fontSize: '1.8rem'}}>{price.finalPrice} руб.</span>
      </div>
    </div>
  );
};

export {GoodsItem};