
'use client'

import { useState, useEffect } from "react";

const LogoUpload = () => {
    const [logoImg, setLogoImg] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const logImgHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file size maximum
            if (file.size > 2 * 1024 * 1024) {
                alert("File size exceeds 2MB.");
                return;
            }

            const img = new Image();
            const objectUrl = URL.createObjectURL(file);
            img.src = objectUrl;
            img.onload = () => {
                // Validate image dimensions minimum
                if (img.width < 300 || img.height < 300) {
                    alert("Image dimensions are too small. Minimum 300x300px required.");
                    URL.revokeObjectURL(objectUrl);
                    return;
                }
                setLogoImg(file);
                setPreviewUrl(objectUrl);
            }
            img.onerror = () => {
                alert("Invalid image file.");
                URL.revokeObjectURL(objectUrl);
            }
        } else {
            setLogoImg(null);
            setPreviewUrl(null);
        }
    };

    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*"
                        id="upload"
                        required
                        onChange={logImgHandler}
                    />
                    <label
                        className={`uploadButton-button ripple-effect headShot ${previewUrl ? "hasImage" : ""}`}
                        htmlFor="upload"
                    >
                        {previewUrl ? (
                            <img src={previewUrl} alt="Uploaded Headshot" className="uploaded-image" />
                        ) : "Browse Headshot"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    Max file size is 2MB, Minimum dimension: 300x300 And
                    Suitable files are .jpg & .png
                </div>
            </div>
        </>
    );
};

export default LogoUpload;
