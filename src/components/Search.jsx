import React, {useState} from "react";

function Search(props) {
    const {
        searchMovies = Function.prototype
    } = props;

    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchMovies(search, type);
        }
    };

    const handleFilter = (e) => {
        setType(e.target.value);
    };

    return (
        <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder="Search"
                    type="search"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    onKeyDown={handleKeyDown}
                >
                </input>
                
                <button
                    className="btn red lighten-2 button-search"
                    onClick={() =>
                        searchMovies(
                            search,
                            type
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
                            checked={type === "all"}
                            onChange={handleFilter}
                        />
                        <span>All</span>
                    </label>

                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            value="movie"
                            checked={type === "movie"}
                            onChange={handleFilter}
                        />
                        <span>Movies</span>
                    </label>

                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            value="series"
                            checked={type === "series"}
                            onChange={handleFilter}
                        />
                        <span>Series</span>
                    </label>

                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            value="game"
                            checked={type === "game"}
                            onChange={handleFilter}
                        />
                        <span>Games</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Search;
