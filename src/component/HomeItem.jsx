import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const HomeItem = ({item}) =>{
  const dispatch = useDispatch();
  const bagItem = useSelector(store => store.bag);
  const elementFound = bagItem.indexOf(item.id)>=0;
    const handleAddToBag = () =>{
        dispatch(bagActions.addToBag(item.id));
    }
    const handleRemoveFromBag = () => {
        dispatch(bagActions.removeFromBag(item.id)); // Removes item from the bag
      };

return  <div className="item-container">
<img className="item-image" src={item.image} alt="item image"/>
<div className="rating">
    {item.rating.stars} ⭐ | {item.rating.count}
</div>
<div className="company-name">{item.company}</div>
<div className="item-name">{item.item_name}</div>
<div className="price">
    <span className="current-price">Rs {item.current_price}</span>
    <span className="original-price">Rs {item.original_price}</span>
    <span className="discount">(${item.discount_percentage}% OFF)</span>
</div>
{elementFound ? <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemoveFromBag}><MdDelete /></button> :<button type="button" className="btn-add-bag btn btn-success"  onClick={handleAddToBag}><IoIosAddCircle /></button> }
</div>
}

export default HomeItem;