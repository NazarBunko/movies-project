import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            type: "all",
        };
    }

    handleKeyDown = (e) => {
        if (e.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (e) => {
        this.setState({ type: e.target.value });
    };

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validate"
                        placeholder="Search"
                        type="search"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKeyDown}
                    />
                    <button
                        className="btn red lighten-2 button-search"
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            )
                        }
                    >
                        Search
                    </button>

                    <div className="filters">
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                value="all"
                                checked={this.state.type === "all"}
                                onChange={this.handleFilter}
                            />
                            <span>All</span>
                        </label>

                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                value="movie"
                                checked={this.state.type === "movie"}
                                onChange={this.handleFilter}
                            />
                            <span>Movies</span>
                        </label>

                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                value="series"
                                checked={this.state.type === "series"}
                                onChange={this.handleFilter}
                            />
                            <span>Series</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
