import React, { Component } from 'react';
import Load from './Load';
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types';

export default class Newspage extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 16,
        category: "general",
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }


    // props are taken as argument only because to update title dynamically
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            page: 1,
        }
        document.title = `Live today - ${this.props.category === "general" ? "Home" : this.props.category}`;
    }

    // async updateNews(pageNo) {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=$ 43cdedb11af9480bad3757994bc8f21d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles,
    //         totalResults: parsedData.totalResults,
    //         loading: false
    //     });
    // }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43cdedb11af9480bad3757994bc8f21d&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43cdedb11af9480bad3757994bc8f21d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false,
        });
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43cdedb11af9480bad3757994bc8f21d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false,
        });
    }

    render() {
        return (
            <div className="container my-4">
                {this.state.loading && <Load />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 32) : ""} description={element.description ? element.description.slice(0, 68) : "Open now to read the full article"} imageUrl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn--wm8bBojawXcqX607UNOSqMLup_B5AyIwWPHfXvzZcP91daEBo4rxp88R9eUJtrJ7o&usqp=CAU"} newsUrl={element.url} author={element.author ? element.author : "N/A"} date={element.publishedAt} source={element.source.name}></Newsitem>
                        </div>
                    })}
                </div>


                <nav aria-label="Page navigation example my-2">
                    <ul class="pagination d-flex justify-content-between">
                        <li class="page-item">
                            <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} class="page-link bg-info text-light" href="/" aria-label="Previous">
                                <span aria-hidden="true">&laquo; Previous</span>
                            </button>
                        </li>

                        <li class="page-item">
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} class="page-link bg-info text-light" href="/" aria-label="Next">
                                <span aria-hidden="true">Next &raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}