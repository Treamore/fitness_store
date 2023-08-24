import ItemCard from '../global/ItemCard';
import popular from '../../json/AllItems.json';

function MainProductSlider__Slide(props) {
  popular.sort((a, b) => {
    return b.popularity - a.popularity;
  });

  let items = popular.slice(props.indexStart, props.indexStart + 6);

  return (
    <div className="products-slider__items items-products">
      {items.map((obj, index) => (
        <ItemCard
          id={obj.id}
          title={obj.title}
          type={obj.type}
          labels={obj.labels}
          oldPrice={obj.oldPrice}
          currentPrice={obj.currentPrice}
          imageUrl={obj.imagesUrl[0]}
          params={obj.params}
          key={index}
        />
      ))}
    </div>
  );
}

export default MainProductSlider__Slide;
