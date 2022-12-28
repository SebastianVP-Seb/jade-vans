import React from "react";
import { useParams } from "react-router-dom";
import { rootArray } from "../../db/tenisMan";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/reducers/cartSlice";
import { RootState } from "../../store";
import { IItemProduct } from "../../interfaces/index";
import "./cardGrid.scss";

const Card: React.FC<IItemProduct> = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state.cart);

  const { id } = useParams();

  const handleAdd = (item: any) => {
    dispatch(increment(item));
  };

  return (
    <div className="cardGrid">
      {rootArray.map((item) =>
        id === item?.id ? (
          <div key={item.id}>
            <div className="cardGrid_imagesCard">
              {item.imagesArray?.map((item) => (
                <img key={item} className='cardGrid_imagesCard_imgGallery' src={item} />
              ))}
            </div>
            <div className="cardGrid_infoCard">
              <h4>Modelo: {item.name}</h4>
              <p>{item.description}</p>
              <h3>Precio: ${item.price}</h3>
              <h4>Talla: {item.size}</h4>
              <button
                className="cardGrid_btn"
                disabled={item.added}
                onClick={() => handleAdd(item)}
              >
                {item.added ? "Agregado" : "Agregar a la bolsa"}
              </button>
            </div>
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default Card;
