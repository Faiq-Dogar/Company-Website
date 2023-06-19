import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark nav-back fixed-top w-100">
                    <div className="container">
                        <a className="navbar-brand fw-bold" href="/">{this.props.Logo_prop}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
                                <li className="nav-item me-3">
                                    <a className="nav-link active" aria-current="page" href="/">{this.props.link1}</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link active" aria-current="page" href="/">{this.props.link2}</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link active" aria-current="page" href="/">{this.props.link3}</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link active" aria-current="page" href="/">{this.props.link4}</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link active" aria-current="page" href="/">{this.props.link5}</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link active" aria-current="page" href="/">{this.props.link6}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">{this.props.link7}</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-light ps-5 pe-5" type="button">Login</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
