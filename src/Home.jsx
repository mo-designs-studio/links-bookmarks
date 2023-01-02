import { Fragment } from "react";
import "./assets/css/home.css";
import BookmarkCard from "./ui-components/home/bookmark-card";
import BookmarksFilter from "./ui-components/home/bookmarks-filter";

const Home = () => {
  return (
    <Fragment>
      <section className="bookmarks-filter-section">
        <div className="bookmarks-filter-container">
          <BookmarksFilter />
        </div>
      </section>
      <section className="bookmarks-section">
        <div className="bookmarks-container">
          <BookmarkCard />
          <BookmarkCard />
          <BookmarkCard />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
