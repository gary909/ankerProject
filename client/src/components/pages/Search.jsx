import React, { Component } from 'react';
import AudioComp from '../AudioComp';
import FormField from '../Formfield';
import { Link } from 'react-router-dom';
import api from '../../api';

/* TODO */
/* Styling */
/* Explain to Sylvie what we just did - Jaaaaaaaaa */

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiHash: [],
            search: ''
        };
    }
    componentDidMount() {
        /* Here comes an api call to cloudinary that searches for all the audiofiles and sets to state. 
    the search will filter out the correct hashtags */

        /* Fake data. Must be changed when cloudinary is set up */

        api.getAllAudios()
            .then(data => this.setState({ apiHash: data }))
            .catch(err => this.setState({ message: err.toString() }));

        console.log(this.state.apiHash);
    }

    /* takes care of whatever is being written in the searchinput and sets it to the state */
    handleSearchInput = e => {
        console.log(this.state.search);
        this.setState({
            search: e.target.value
        });
    };

    render() {
        console.log(this.state.apiHash);
        return (
            <div className="Search">
                <br />
                <br />
                <br />
                <br />
                <p>Looking for audio?</p>

                <div>
                    {/* Formfield component that's copied from another lab. here the user can type in whatever he or she is looking for */}
                    {/* Check out the FormField component! */}
                </div>
                <input
                    type="text"
                    name="search"
                    id=""
                    value={this.state.search}
                    placeholder="Search here"
                    onChange={this.handleSearchInput}
                    className="searchBar"
                />

                {this.state.apiHash
                    .filter(el => el.hashtag.toLowerCase().includes(this.state.search.toLowerCase()))
                    .map((el, i) => {
                        return i % 2 === 0 ? (
                            <Link
                                to={'/playfeed/' + el.userId.username}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <AudioComp
                                    key={i}
                                    backgroundNr={i}
                                    hashtag={el.hashtag}
                                    user={el.userId}
                                    url={el.videoURL}
                                    likes={el.likes}
                                    color="audioWrapper"
                                />
                            </Link>
                        ) : (
                                <Link
                                    to={'/playfeed/' + el.userId.username}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <AudioComp
                                        key={i}
                                        backgroundNr={i}
                                        hashtag={el.hashtag}
                                        user={el.userId}
                                        url={el.videoURL}
                                        likes={el.likes}
                                        color="audioWrapper2"
                                    />
                                </Link>
                            );
                    })}
            </div>
        );
    }
}
