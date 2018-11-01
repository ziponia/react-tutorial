import React from 'react';
import {Link, Route} from 'react-router-dom';
import { Post } from '../pages';

const Posts = ({match, location}) => {
    console.log('location', location);
    console.log('match', match);
    return (
        <div>
            <h2>Post Link</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #1</Link></li>
                <li><Link to={`${match.url}/3`}>Post #1</Link></li>
                <li><Link to={`${match.url}/4`}>Post #1</Link></li>
            </ul>
            <Route exact path={match.url} render={() => (<h3>Please select any post</h3>)} />
            <Route path={`${match.url}/:id`} component={Post} />
        </div>
    )
}

export default Posts;