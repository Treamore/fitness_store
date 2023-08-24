function SideReviews() {
  return (
    <div className="page__reviews-side reviews-side">
      <a href="#" className="reviews-side__title side-title">
        Reviews
      </a>
      <div className="review-side__items">
        <a href="#" className="reviews-side__item">
          <div className="reviews-side__header">
            <div className="reviews-side__user">Bruce Willis</div>
            <div className="reviews-side__data">12.09.2022</div>
          </div>
          <div className="reviews-side__body">
            To save space in the gym hall acquired a multifunctional power simulator Life Gear. For
            such low cost and with such opportunities, he just doesn't replace.
          </div>
        </a>
        <a href="#" className="reviews-side__item">
          <div className="reviews-side__header">
            <div className="reviews-side__user">Matthew McConaughey</div>
            <div className="reviews-side__data">10.09.2022</div>
          </div>
          <div className="reviews-side__body">
            Thanks for the great advice The whole family loves the bike and asked for a decent price
            for it.
          </div>
        </a>
      </div>
    </div>
  );
}

export default SideReviews;
