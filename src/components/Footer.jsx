function Footer() {
  return <footer className="page-footer green lighten-1">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a
        className="grey-text text-lighten-4 right"
        href="https://github.com/VladimirChernovv/Project_shop"
        target="_blank"
        rel="noreferror"
      >
        Repo
      </a>
      </div>
    </div>
  </footer>
};

export {Footer};