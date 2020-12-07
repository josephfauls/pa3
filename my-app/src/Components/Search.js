import React from 'react';

const Search = (props) => {

    return (
        <form>
            <input style={{width: '75%',padding: '20px',borderRadius: '10px',marginTop: '25px',marginBottom: '8px'}} type="text" placeholder="Type to Search" onChange={props.onFilterChange}/>
        </form>
    );

};

export default Search;