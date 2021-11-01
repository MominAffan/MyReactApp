import React from 'react'

const NewsItem =(props)=> {

        let { title, Description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div>
                <div class="card text-start text-white bg-dark mt-3 border-danger">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%',zIndex:'1'}}>
                        {source}
                    </span>
                    <img src={!imageUrl ? "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/328600/328671.6.jpg" : imageUrl} class="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{Description}</p>
                        <p className="card-text"><small className="text-warning">By {!author ? 'Unknown ' : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" class="btn btn-sm btn-success">Read More...</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
