const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} BalletMatch by{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          tayo
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
