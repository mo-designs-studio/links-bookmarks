import { Fragment } from "react";

const BookmarksFilter = () => {
  return (
    <Fragment>
      <div className="form-row">
        <div className="form-field">
          <label for="bookmark-category" className="form-field--label">
            category
          </label>
          <div className="form-field--input-group search-select-field">
            <div className="input-group--icon">
              <i className="bi bi-bookmark-star"></i>
            </div>
            <input placeholder="select category | optional" />
            <div className="filter-results-container">
              <ul>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">backend</span>
                </li>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">frontend</span>
                </li>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">ui / ux</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="form-field">
          <label for="bookmark-category" className="form-field--label">
            type
          </label>
          <div className="form-field--input-group search-select-field">
            <div className="input-group--icon">
              <i className="bi bi-ui-radios-grid"></i>
            </div>
            <input placeholder="select category | optional" />
            <div className="filter-results-container">
              <ul>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">article</span>
                </li>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">video</span>
                </li>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">repo code</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label for="bookmark-category" className="form-field--label">
            tags
          </label>
          <div className="form-field--input-group search-select-field">
            <div className="input-group--icon">
              <i className="bi bi-tags"></i>
            </div>
            <input placeholder="search tags and select up to 5 tags" />
            <div className="filter-results-container">
              <ul>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">laravel</span>
                </li>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">node js</span>
                </li>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">flutter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="form-field">
          <label for="bookmark-category" className="form-field--label">
            domain name
          </label>
          <div className="form-field--input-group search-select-field">
            <div className="input-group--icon">
              <i className="bi bi-globe"></i>
            </div>
            <input placeholder="search domain names and select up to 5 names" />
            <div className="filter-results-container">
              <ul>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">youtube.com</span>
                </li>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">stackoverflow.com</span>
                </li>
                <li>
                  <i className="bi bi-check-all text-secondary"></i>{" "}
                  <span className="text-span">laravel.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label for="bookmark-category" className="form-field--label">
            title
          </label>
          <div className="form-field--input-group">
            <div className="input-group--icon">
              <i className="bi bi-type"></i>
            </div>
            <input placeholder="search by keword or substring (must be accurate if substring) | optional" />
          </div>
        </div>
        <div className="form-field checkbox-form-field">
          <div className="checkbox-container ">
            
            <label class="checkbox">
              <input class="pseduo-checkbox" type="checkbox" name="" />
              <span class="fake-checkbox">
                <i class="bi bi-check"></i>
              </span>
            </label>
            <label htmlFor="">just important</label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookmarksFilter;
