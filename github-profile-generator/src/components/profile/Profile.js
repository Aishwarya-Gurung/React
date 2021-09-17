import React from 'react';
import './Profile.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { Information } from './Information';
import { Status } from './Status';

const Profile=()=> {
    const history = useHistory();
    const userName = history.location.state;

    const [details, setDetails] = useState({});

    useEffect(()=>{
        axios.get("https://api.github.com/users/"+userName)
        .then(response => {
            setDetails(response.data);
        })
        .catch(error =>{
            alert('error');
        })
    },[])
    return (
        <div className="container">
            <header className="header">
                <div className="backArrow__header">
                    <img 
                        src="./backArrow.png"  
                        onClick={()=>{history.push('/')}}
                    />
                </div>
                <button className="hireButton__header">
                    Hire Me    
                </button>
            </header>

            <section className="sub__container">
                <div className="profile__sub__container">
                    <img 
                        src={details.avatar_url} 
                        className="photo__profile" alt="profile pic"
                    />

                    <h1 className="name__profile">
                        {details.name}
                    </h1>

                    <h3 className="loginId__profile">
                        {"@"+details.login}
                    </h3>
                </div>

                <div className="status__sub__container">
                    <Status
                        label="Followers" 
                        count={details.followers} 
                    />
                    
                    <Status 
                        label="Following" 
                        count={details.following} 
                    />

                    <Status 
                        label="Repositories" 
                        count={details.public_repos} 
                    />
                </div>

                <div className="information__sub__container">
                    <div className="sub__information">
                        <Information 
                            label="Email" 
                            infoValue={details.email ? details.email : "-"} 
                            iconUrl="./email.png"
                        />

                        <Information 
                            label="Organization" 
                            infoValue={details.company ? details.company: "-"} 
                            iconUrl="./org.png"
                        />

                        <Information 
                            label="Location" 
                            infoValue={details.location ? details.location : "-"}
                            iconUrl="./location.png" 
                        />

                        <Information 
                            label="Joined Date" 
                            infoValue={details.created_at}
                            iconUrl="./joined.png" 
                        />

                        <Information 
                            label="Twitter" 
                            infoValue={(details.twitter_username == null) ? "-" : '@'+details.twitter_username}
                            iconUrl="./twitter.png" 
                        />

                        <Information  
                            label="Website" 
                            infoValue={details.html_url} 
                            iconUrl="./website.png"
                        />
                    </div>

                    <div className="bio__sub__container">
                        <article className="description__bio">
                            <h3>Bio</h3>
                            <p>{details.bio}</p>
                        </article>
                    </div>
                </div>
            </section>  
        </div>
    )
}

export default Profile