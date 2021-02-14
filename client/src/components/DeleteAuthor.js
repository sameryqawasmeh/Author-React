import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api//author/:id/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            {props.author.map((author, idx) => {
                return <p key={idx}>
                    <Link to={"/" + author._id}>
                        {author.name}
                    </Link>
                    |
                    <button onClick={(e)=>{deleteAuthor(author._id)}}>
                        
                    </button>
                </p>
            })}
        </div>
    )
}
export default DeleteButton;