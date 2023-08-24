import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory, setSubcategory } from '../../redux/slices/filterSlice';

function MainBannerSlider__Slide() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="mainslider__content content-mainslider">
        <div className="content-mainslider__title">
          <span>Mega</span>sale
        </div>
        <div className="content-mainslider__text text-mainslider">
          <p>
            <span className="text-mainslider__text-1">Hurry up to buy </span>Treadmills
          </p>
          <span className="text-mainslider__text-2">at the old price </span>
          <p>
            before <span className="text-mainslider__text-3">they are raised</span>
          </p>
        </div>
        <div className="content-mainslider__footer">
          <div className="content-mainslider__price">from 349£</div>
          <Link
            to="/catalogue"
            onClick={() => {
              dispatch(setSubcategory(''));
              dispatch(setCategory(1));
            }}
            className="content-mainslider__button">
            <span>More</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainBannerSlider__Slide;
