const Repertoire = () => {
  return (
    <div className="resume-outer theme-pink">
      <div className="upper-title">
        <h4>Repertoire Performed</h4>
        <button className="add-info-btn">
          <span className="icon flaticon-plus"></span> Add Repertoire Performed
        </button>
      </div>
      {/* <!-- Resume BLock --> */}
      <div className="resume-block">
        <div className="inner">
          <span className="name">M</span>
          <div className="title-box">
            <div className="info-box">
              <h3>Repertoire Performed in Fine Arts</h3>
              <span>Modern Audition</span>
            </div>
            <div className="edit-box">
              <span className="year">2012 - 2014</span>
              <div className="edit-btns">
                <button>
                  <span className="la la-pencil"></span>
                </button>
                <button>
                  <span className="la la-trash"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum et malesuada fames ac ante
            <br /> ipsum primis in faucibus.
          </div>
        </div>
      </div>

      {/* <!-- Resume BLock --> */}
      <div className="resume-block">
        <div className="inner">
          <span className="name">B</span>
          <div className="title-box">
            <div className="info-box">
              <h3>Repertoire Performed in DDC</h3>
              <span>DDC LLC</span>
            </div>
            <div className="edit-box">
              <span className="year">2008 - 2012</span>
              <div className="edit-btns">
                <button>
                  <span className="la la-pencil"></span>
                </button>
                <button>
                  <span className="la la-trash"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum et malesuada fames ac ante
            <br /> ipsum primis in faucibus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repertoire;
