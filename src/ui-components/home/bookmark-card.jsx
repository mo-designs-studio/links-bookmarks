const BookmarkCard = () => {
  return (
    <div className="bookmark-card">
      <div className="bookmark-card-header">
        <div className="bookmark-title">
          <h3>how to remove a polymorphic relation in eloquent</h3>
        </div>
        <div className="bookmark-category">
          <i class="bi bi-bookmark-star"></i>
          <span>backend</span>
        </div>
      </div>
      <div className="bookmark-card-body">
        <div className="bookmark-links-container">
          <i class="bi bi-link-45deg"></i>
          <div className="link">
            <a href="https://stackoverflow.com/questions/28305553/how-to-remove-a-polymorphic-relation-in-eloquent">
              link 1
            </a>
          </div>
          <div className="link">
            <a href="https://stackoverflow.com/questions/28305553/how-to-remove-a-polymorphic-relation-in-eloquent">
              link 2
            </a>
          </div>
          <div className="link">
            <a href="https://stackoverflow.com/questions/28305553/how-to-remove-a-polymorphic-relation-in-eloquent">
              link 3
            </a>
          </div>
        </div>
        <div className="bookmark-tags-container">
          <i class="bi bi-tags"></i>
          <div className="tag">
            <span>laravel</span>
          </div>
          <div className="tag">
            <span>orm</span>
          </div>
          <div className="tag">
            <span>database</span>
          </div>
        </div>
        <div className="bookmark-bio">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor
            excepturi veniam hic natus? Deleniti iusto, cumque reiciendis magni
            quam consectetur tenetur maxime accusamus, libero ut accusantium
            doloribus quasi nulla!
          </p>
        </div>
      </div>
      <div className="bookmark-card-footer">
        <div className="bookmark-domain">
          <div className="favicon-container">
            <img
              src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a"
              alt=""
            />
          </div>
          <a href="stackoverflow.com">stackoverflow.com</a>
        </div>
        <div className="bookmark-type">
          <i class="bi bi-file-text"></i>
        </div>
        <div className="bookmark-priority">
          <i class="bi bi-stoplights-fill"></i>
        </div>
      </div>
    </div>
  );
};
export default BookmarkCard;
