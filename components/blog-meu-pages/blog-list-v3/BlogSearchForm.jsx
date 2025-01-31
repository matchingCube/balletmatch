import SearchBox from "@/components/job-listing-pages/components/SearchBox";

const BlogSearchForm = () => {
  return (
    <div className="job-search-form blog-search-form">
      <div className="row">
        <div className="form-group col-lg-8 col-md-8 col-sm-12">
          <SearchBox />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-4 col-md-4 col-sm-12 text-right">
          <button type="submit" className="theme-btn btn-style-one">
            Find Blogs
          </button>
        </div>
        {/* <!-- Form Group --> */}
      </div>
    </div>
    // End blog Search form
  );
};

export default BlogSearchForm;
