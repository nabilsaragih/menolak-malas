'use client';

const NavbarScrollTo = ({ id, title, className }) => {
    const scroll = () => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <a onClick={scroll} className={className} style={{ cursor: 'pointer' }}>{title}</a>
    );
}

export default NavbarScrollTo;