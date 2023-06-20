import React, { Component } from 'react'
import { Link } from 'react-scroll'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark nav-back fixed-top w-100">
                    <div className="container">
                        <Link className="navbar-brand fw-bold" to="/">{this.props.Logo_prop}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
                                <li className="nav-item me-3">
                                    <Link className="nav-link active" aria-current="page" to={this.props.home_id}>{this.props.link1}</Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link active" aria-current="page" to={this.props.about_id}>{this.props.link2}</Link>
                                </li>
                                <li className="nav-item me-3">
                                <Link className="nav-link active" aria-current="page" to={this.props.serve_id}>{this.props.link3}</Link>
                                </li>
                                <li className="nav-item me-3">
                                <Link className="nav-link active" aria-current="page" to={this.props.feature_id}>{this.props.link4}</Link>
                                </li>
                                <li className="nav-item me-3">
                                <Link className="nav-link active" aria-current="page" to={this.props.price_id}>{this.props.link5}</Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link active" aria-current="page" to={this.props.team_id}>{this.props.link6}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={this.props.con_id}>{this.props.link7}</Link>
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
