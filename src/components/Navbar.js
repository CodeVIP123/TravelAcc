import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg"
            style={{
                fontFamily: 'Canva Sans',
                borderRadius: '150px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: 'calc(100vw - 20px)',
                margin: '0 10px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div className="container-fluid" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                justifyContent: 'center',
                width: '100%',
            }}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "navbar-brand spotlight" : "navbar-brand"
                    }
                    style={{ color: '#004aad', fontWeight: 'bold' }}
                >
                    TravelAcc
                </NavLink>
                <ul className="navbar-nav" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '30px',
                    marginBottom: 0,
                    listStyle: 'none',
                }}>
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "nav-link active text-danger" : "nav-link"
                            }
                            aria-current="page"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "nav-link active text-danger" : "nav-link"
                            }
                            aria-current="page"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive ? "nav-link active text-danger" : "nav-link"
                            }
                            aria-current="page"
                        >
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
