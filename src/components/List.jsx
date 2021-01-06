import React from 'react';
import {NavLink} from 'react-router-dom';
import "../App.css"
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
    
      {repos.map((repo) => {
        return (
          <li key={repo.id} className=''>
            {/* <span className=''>{repo.ProductTitle} </span> */}
            {/* <span className=''>{repo.ProductDescription}</span> */}
            {/* <img src={'http://sc910.sc/-'+repo.ProductImageUrl} className="prod_img"/> */}
            {/* <button>{repo.ProductLinkText}</button> */}
            {/* <NavLink className="navbar-brand" to={repo.ProductLink}>{repo.ProductLinkText}</NavLink> */}
            {/* <a href={repo.ProductLink}>{repo.ProductLinkText}</a> */}

            <div class="card" >
  <img className="card-img-top prod_img" src={'http://sc910.sc/-'+repo.ProductImageUrl} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{repo.ProductTitle}</h5>
    <p className="card-text">{repo.ProductDescription}</p>
    <a href={repo.ProductLink} class="btn btn-primary">{repo.ProductLinkText}</a>
  </div>
</div>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
