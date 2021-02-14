import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router"
import DeleteButton from './DeleteButton';


// import { Author } from "../../../server/Config/Controllers/models/routes/mongoosemodels"

const AuthorsTable = props => {
    const [author, setAuthor] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/getAllAutshor")
            .then(response => setAuthor((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[])

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId))
    }

    const navigateToNewRoute =(e) => {
        navigate("/new");
    }
    return(
        <div className="container">
            {author.length>0 && author.map((item, index) =>{
                return(<>
                 <div key={index}>{item.name}</div>
                 <Link to = {`author/${item._id}/edit`}>edit</Link>
                 
                 <DeleteButton authortId={author._id} successCallback={() => navigate("/")} />

                 <br/>
                 </>)
            })
            }
                <input type="button" value="Please Press Here to Add a New Author" onClick = { e => navigateToNewRoute(e) }/>
        </div>
    )

};

export default AuthorsTable