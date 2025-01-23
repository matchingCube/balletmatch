import Link from "next/link";
import SearchForm3 from "../../common/job-search/SearchForm3";
import Image from "next/image";

const index = () => {
  return (
    <section className="banner-section-eight">
      <div className="image-outer">
        <figure className="image">
          <Image
            width={952}
            height={942}
            src="/images/resource/banner-img-9.webp"
            alt="banner image"
          />
        </figure>
      </div>
      {/* End image-outer */}

      <div className="auto-container">
        <div className="row">
          <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div
                className="title-box"
                data-aso-delay="500"
                data-aos="fade-up"
              >
                <h3>The BALLET MATCH</h3>
                <div className="text">
                  Your one-stop shop for ballet auditions, training, and jobs.
                </div>
              </div>
              {/* End title box */}

              {/* <div
                className="job-search-form"
                data-aos-delay="700"
                data-aos="fade-up"
              >
                <SearchForm3 btnStyle="btn-style-one" />
              </div> */}
              <SearchForm3 btnStyle="btn-style-one" onlyFindBtn={true} />
              {/* <!-- Job Search Form --> */}

              <div className="bottom-box wow fadeInUp" data-wow-delay="1500ms">
                <div className="count-employers">
                  <span className="title">10k+ Candidates</span>
                  <Image
                    width={194}
                    height={50}
                    src="/images/resource/multi-peoples.png"
                    alt="multi people"
                  />
                </div>
                <Link
                  href="/candidates-dashboard/cv-manager"
                  className="upload-cv"
                >
                  <span className="icon flaticon-file"></span> Upload your CV
                </Link>
              </div>
              {/* End .bottom-box */}
            </div>
            {/* End inner-column */}
          </div>
          {/* End .content-column */}
        </div>
        {/* <!-- Job Search Form --> */}
      </div>
    </section>
  );
};

export default index;
