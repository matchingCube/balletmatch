

'use client'

import AddPortfolio from "./AddPortfolio";
import Awards from "./Awards";
import Education from "./Education";
import Experiences from "./Experiences";
import SkillsMultiple from "./SkillsMultiple";
import LogoUpload from "../../my-profile/components/my-profile/LogoUpload";
import countrycodes from "@/data/countrycodes";
import heightData from "@/data/heightData.";
import Training from "./Training";
import SummerIntensive from "./SummerIntensive";
import Repertoire from "./Repertoire";

const index = () => {
  const handleSubmit = (event) => {
    // event.preventDefault();
  };

  return (
    <form className="default-form" onClick={handleSubmit}>
      <div className="row">
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Select Your CV</label>
          <select className="chosen-single form-select">
            <option>My CV</option>
          </select>
        </div> */}
        <LogoUpload />

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Jerome" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Job Title</label>
          <input type="text" name="title" placeholder="Ballet Dancer" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="0 123 456 7890"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="balletdancer@gmail.com"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Gender</label>
          <select className="chosen-single form-select" required>
            <option>Male</option>
            <option>Female</option>
            <option>Non-Binary</option>
            <option>Other</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Height</label>
          <select className="chosen-single form-select" required>
            {heightData.map((data) => (
              <option>{data.height}</option>
            ))}
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Date of Birth</label>
          <input
            type="date"
            name="birth"
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Nationality</label>
          <select className="chosen-single form-select" required>
            {countrycodes.map((country) => (
              <option>{country.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div>
        {/* <!-- About Company --> */}

        <div className="form-group col-lg-12 col-md-12">
          <Education />
          {/* <!-- Resume / Education --> */}

          <Experiences />
          {/* <!-- Resume / Work & Experience --> */}
        </div>
        {/* <!--  education and word-experiences --> */}

        <div className="form-group col-lg-6 col-md-12">
          <AddPortfolio id="upload_album" label="Album" />
        </div>
        {/* <!-- End more portfolio upload --> */}

        <div className="form-group col-lg-12 col-md-12">
          {/* <!-- Resume / Awards --> */}
          <Awards />
        </div>
        {/* <!-- End Award --> */}

        <div className="form-group col-lg-12 col-md-12">
          {/* <!-- Resume / Training --> */}
          <Training />
        </div>
        {/* <!-- End Training --> */}

        <div className="form-group col-lg-12 col-md-12">
          {/* <!-- Resume / Summer Intensive --> */}
          <SummerIntensive />
        </div>
        {/* <!-- End Summer Intensive --> */}

        <div className="form-group col-lg-12 col-md-12">
          {/* <!-- Resume / Repertoire Performed --> */}
          <Repertoire />
        </div>
        {/* <!-- End Repertoire Performed --> */}

        <div className="form-group col-lg-6 col-md-12">
          <label>Skills </label>
          <SkillsMultiple />
        </div>
        {/* <!-- Multi Selectbox --> */}

        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
        {/* <!-- Input --> */}
      </div>
      {/* End .row */}
    </form>
  );
};

export default index;
