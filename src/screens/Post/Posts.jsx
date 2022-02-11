import React, { useEffect, useState } from 'react';
import ContentContainer from '../../components/ContentContainer';
import List from '../../components/List';
import ShowCase from '../../components/ShowCase';
import { useQuery } from 'react-query';
import { fetcher } from '../../helpers';
import './style.css';
import SweetAlert from 'react-bootstrap-sweetalert/dist/components/SweetAlert';
import axios from 'axios';

const Posts = () => {
  const [pages, setPages] = useState([0]);
  const [list, setList] = useState(null);
  const [tempId, setTempId] = useState(null);
  const [sweetAlert, setSweetAlert] = useState(false);

  const { isLoading, error, data } = useQuery(
    ['repoData', `/posts?_start=${pages[pages.length - 1]}&_limit=6`],
    () => fetcher(`/posts?_start=${pages[pages.length - 1]}&_limit=6`)
  );

  useEffect(() => {
    setList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const next = () => {
    setPages([...pages, data[data.length - 1].id]);
    setList(data);
  };

  const prev = () => {
    const newPages = [...pages];
    newPages.pop();
    setPages(newPages);
    setList(data);
  };

  const deletePost = (id) => {
    setSweetAlert(true);
    setTempId(id);
  };

  const onConfirm = async () => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${tempId}`);

    setSweetAlert(false);
    setTempId(null);
    const newArr = list.filter((item) => item.id !== tempId);
    setList(newArr);
  };

  const onCancel = () => {
    setTempId(null);
    setSweetAlert(false);
  };

  const handelEdit = (newValues) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${newValues.id}`, {
      method: 'PUT',
      body: JSON.stringify(newValues),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const indexOfItem = list.findIndex((post) => post.id === newValues.id);
        const arr = [...list];
        arr[indexOfItem] = newValues;
        setList(arr);
      });
  };

  return (
    <div className="page posts">
      <ShowCase />
      <ContentContainer>
        <div className="list_wrapper">
          {error && <h2 className="message">Oop something went wrong...</h2>}
          {isLoading && <h2 className="message">loading...</h2>}

          {list && (
            <List
              handelEdit={(values) => handelEdit(values)}
              handelDelete={(id) => deletePost(id)}
              items={list}
            />
          )}
          <div className="pagination_buttons">
            <button
              className="pagination_button"
              disabled={pages.length > 1 ? false : true}
              onClick={prev}
            >
              {'< Prev'}
            </button>
            <button
              className="pagination_button"
              disabled={pages[pages.length - 1] === 96}
              onClick={next}
            >
              {'Next >'}
            </button>
          </div>
        </div>
      </ContentContainer>
      {sweetAlert && (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Yes, delete it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={onConfirm}
          onCancel={onCancel}
          focusCancelBtn
        >
          You will not be able to recover this item!
        </SweetAlert>
      )}
    </div>
  );
};

export default Posts;

// import React, { useEffect, useState } from 'react';
// import ContentContainer from '../../components/ContentContainer';
// import List from '../../components/List';
// import ShowCase from '../../components/ShowCase';
// import { useQuery } from 'react-query';
// import { fetcher } from '../../helpers';

// const Posts = () => {
//   const [pages, setPages] = useState([0]);
//   console.log('pages:', pages);
//   const { isLoading, error, data, isFetching } = useQuery(
//     ['posts', `/posts?_start=${pages[pages.length - 1]}&_limit=6`],
//     fetcher
//   );

//   console.log('data:', data);
//   const next = () => {
//     setPages([...pages, data[data.length - 1].id]);
//   };

//   const prev = () => {
//     const newPages = [...pages];
//     newPages.pop();
//     setPages(newPages);
//   };

//   return (
//     <div className="page posts">
//       <ShowCase />
//       <ContentContainer>
//         <List />
//         <button onClick={prev}>prev</button>
//         <button onClick={next}>next</button>
//       </ContentContainer>
//     </div>
//   );
// };

// export default Posts;
