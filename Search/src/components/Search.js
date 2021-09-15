import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';

function Search() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect( () => {
        const postsLoad = async () => {
            setLoading(true);
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setPosts(response.data);
            setLoading(false);
        }
        postsLoad();
    }, []);
    return (
        <div className="search">
           <h1>SEARCH BY TITLE</h1>

           <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8">
                    <form class="card card-sm">
                        <div class="card-body row no-gutters align-items-center">
                            <div class="col-auto">
                                <i class="fas fa-search h4 text-body"></i>
                            </div>
                            <div class="col">
                                <input class="form-control form-control-lg form-control-borderless" type="text" placeholder="Search..." onChange = {(e) => setSearchTitle(e.target.value)}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

           { loading ? (<h2>Loading ...</h2>
           ) : (
             posts.filter((value) => {
                 if(searchTitle === ""){
                     return value
                 }else if (value.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                     return value
                 }
             })
            .map((item) => <h3 key={item.id}>{item.title}</h3>)
           )}
        </div>
    )
}

export default Search;
