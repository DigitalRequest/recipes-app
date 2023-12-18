const Navbar = () => {
    return (
        <nav className="navbar p-2" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img
                        src="../../public/Logo.jpeg"
                        alt="Recipes App Logo"
                        height="48px"
                    />
                </a>
                <div className="navbar-item">
                    <p className="title is-4">Recipes App</p>
                </div>

            </div>
            <div className="navbar-end is-flex is-justify-content-center">
                <div className="navbar-item">
                    <p className="label is-flex g-1">Made with <img src="../../public/vite.svg" alt="" /> + <img src="src/assets/react.svg" alt="" /></p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
