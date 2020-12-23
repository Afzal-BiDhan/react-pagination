import React, { useState } from 'react';
import './App.css';
import PageOld from './components/PageOld';
import Page from './components/Page';
import fakeData from './fakeData/index'

function App() {
  const data = fakeData;
  const [post, setPost] = useState(data);
  console.log(post);

  const [showPerPage, setShowPerPage] = useState(3)

  const [pages, setPages] = useState({
    start:0,
    end:showPerPage,
  });

  

  const onPageChange = (start, end) => {
    setPages({start:start, end:end})
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          {
            post.slice(pages.start, pages.end).map((post) => (
              <div className="col-md-4" key={post.key}>
                <div className="card">
                  <div className="card-body">
                    <img src={post.img} alt="" />
                    <h5>{post.key}</h5>
                    <p>{post.name}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <PageOld showPerPage={showPerPage} onPageChange={onPageChange} total={post.length}></PageOld>
        <Page showPerPage={showPerPage} onPageChange={onPageChange} total={post.length}></Page>
      </div>
    </div>
  );
}

export default App;
