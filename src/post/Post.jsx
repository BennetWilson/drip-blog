import "./post.css"

export default function Post() {
    return(
        <div className="post">
            <img className="postImg"
            src="https://via.placeholder.com/250"
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                   <span className="postCat">Music</span> 
                   <span className="postCat">Life</span> 
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor, sit amet 
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem est id obcaecati ullam atque quae voluptas quisquam error consequuntur. Quaerat corrupti temporibus debitis nostrum aperiam praesentium expedita magni consectetur recusandae.

            </p>
        </div>
    )
}