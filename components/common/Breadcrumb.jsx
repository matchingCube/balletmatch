import Link from "next/link";
import BlogSearchForm from "../blog-meu-pages/blog-list-v3/BlogSearchForm";

const Breadcrumb = ({ title = "", meta = "", hasSearch = false }) => {
  return (
    <section className="page-title">
      <div className="auto-container">
        <div className="title-outer">
          <h1>{title}</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{meta}</li>
          </ul>
        </div>
        {hasSearch
          ?
        <div className="auto-container">
          <BlogSearchForm />
        </div>
        : null }
      </div>
    </section>
  );
};

export default Breadcrumb;
