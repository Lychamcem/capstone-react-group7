import React, { useState } from 'react'

function Search({ onSearch }) {
    const [searchString, setSearchString] = useState("");

    const handleChange = (evt) => {
        setSearchString(evt.target.value);
    };

    return (
        <div className="input-group mb-3">
            <input
                id="txtSearch"
                type="text"
                className="form-control"
                placeholder="Nhập từ khóa"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={searchString}
                onChange={handleChange}
            />
            <button className='btn btn-primary p-2' onClick={() => onSearch(searchString)}><i className="fa fa-search"></i></button>
        </div>
    )
}

export default Search