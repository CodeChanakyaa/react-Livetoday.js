import React, { Component } from 'react';

export default class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className="container-fuild">
                <div className="card mb-3">
                    <img src={imageUrl} className="card-img-top" alt="..." style={{ maxHeight: "140px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                    </div>

                    <div className="card-body">
                        <a href={newsUrl} target="__blank" className="text-info card-link text-decoration-none">Explore Now &raquo;</a>
                        <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
                    </div>

                    {/* source badge */}
                    <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                        <span class="badge bg-info">{source}</span>
                    </div>
                </div>
            </div>
        );
    }
}

