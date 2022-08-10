import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = (props) => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);


    useEffect(() => {
        setData(JSON.parse(JSON.stringify(props.data)))
    }, []);

    return (
        <Paper component="form" className='m-auto col-2 my-3 d-flex justify-content-around'>
            <InputBase placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
            {/* <IconButton type="button" onClick={(e) => props.dispatch(filterComponents({nameComponent: props.nameComponent, search: search, data: data}))} className="py-2" aria-label="search">
                <SearchIcon />
            </IconButton> */}
        </Paper>
    )
}

export default SearchBox