import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="container my-4">
                <nav className="navbar navbar-expand-lg navbar-dark bg-info rounded sticky-n">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-broadcast" viewBox="0 0 16 16">
                            <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>&nbsp; 𝘁𝗼𝗱𝗮𝘆 </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/health">𝗛𝗲𝗮𝗹𝘁𝗵</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/sports">𝗦𝗽𝗼𝗿𝘁𝘀</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/business">𝗕𝘂𝘀𝗶𝗻𝗲𝘀𝘀</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/science">𝗦𝗰𝗶𝗲𝗻𝗰𝗲</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/all">𝗔𝗹𝗹</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Live News...." aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
