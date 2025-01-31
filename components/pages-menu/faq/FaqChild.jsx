const FaqChild = (props) => {
  return (
    <>
      <div className="accordion" id={`${props.ide}accordionExample`}>
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header">
            <button
              className="acc-btn accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${props.ide}collapseOne`}
              aria-expanded="true"
            >
              Why won&apos;t my payment go through?
            </button>
          </h2>
          <div
            id={`${props.ide}collapseOne`}
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent={`#${props.ide}accordionExample`}
          >
            <div className="accordion-body ">
              <div className="content">
                <p>
                  Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                  pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                  vel fames interdum urna lobortis sagittis sed pretium. Aliquam
                  eget posuere sit enim elementum nulla vulputate magna. Morbi
                  sed arcu proin quis tortor non risus.
                </p>
                <p>
                  Elementum lectus a porta commodo suspendisse arcu, aliquam
                  lectus faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button acc-btn collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${props.ide}collapseTwo`}
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How do I get a refund?
            </button>
          </h2>
          <div
            id={`${props.ide}collapseTwo`}
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent={`#${props.ide}accordionExample`}
          >
            <div className="accordion-body">
              <div className="content">
                <p>
                  Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                  pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                  vel fames interdum urna lobortis sagittis sed pretium. Aliquam
                  eget posuere sit enim elementum nulla vulputate magna. Morbi
                  sed arcu proin quis tortor non risus.
                </p>
                <p>
                  Elementum lectus a porta commodo suspendisse arcu, aliquam
                  lectus faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button acc-btn collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${props.ide}collapseThree`}
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I redeem a coupon?
            </button>
          </h2>
          <div
            id={`${props.ide}collapseThree`}
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent={`#${props.ide}accordionExample`}
          >
            <div className="accordion-body">
              <div className="content">
                <p>
                  Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                  pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                  vel fames interdum urna lobortis sagittis sed pretium. Aliquam
                  eget posuere sit enim elementum nulla vulputate magna. Morbi
                  sed arcu proin quis tortor non risus.
                </p>
                <p>
                  Elementum lectus a porta commodo suspendisse arcu, aliquam
                  lectus faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button acc-btn collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${props.ide}collapseFour`}
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Changing account name
            </button>
          </h2>
          <div
            id={`${props.ide}collapseFour`}
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent={`#${props.ide}accordionExample`}
          >
            <div className="accordion-body">
              <div className="content">
                <p>
                  Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                  pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                  vel fames interdum urna lobortis sagittis sed pretium. Aliquam
                  eget posuere sit enim elementum nulla vulputate magna. Morbi
                  sed arcu proin quis tortor non risus.
                </p>
                <p>
                  Elementum lectus a porta commodo suspendisse arcu, aliquam
                  lectus faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqChild;
