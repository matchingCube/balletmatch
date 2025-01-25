const AddPortfolio = (props) => {
  return (
    <div className="uploading-outer">
      <div className="uploadButton">
        {props.onlyPhoto ?
        <input
          className="uploadButton-input"
          type="file"
          name="attachments[]"
          accept="image/*"
          id={props.id}
          multiple
        />
        :
        <input
          className="uploadButton-input"
          type="file"
          name="attachments[]"
          accept="image/*, video/*, application/pdf"
          id={props.id}
          multiple
        />
        }
        <label className="uploadButton-button ripple-effect" htmlFor="upload">
          Add {props.label}
        </label>
        <span className="uploadButton-file-name"></span>
      </div>
      {props.onlyPhoto ?
      <div className="text">
        Max file size is 2MB, Minimum dimension: 330x300 And
        Suitable files are .jpg & .png
      </div>
      : null}
    </div>
  );
};

export default AddPortfolio;
