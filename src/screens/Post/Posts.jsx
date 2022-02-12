import React, { useEffect, useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert/dist/components/SweetAlert';
import ContentContainer from '../../components/ContentContainer';
import List from '../../components/List';
import ShowCase from '../../components/ShowCase';
import { useQuery } from 'react-query';
import { fetcher } from '../../helpers';
import api from './../../helpers/api';
import './style.css';
import Pagination from '../../components/Pagination';

const Posts = () => {
  const [latestPost, setLatestPost] = useState(null);
  const [page, setPage] = useState(1);
  const [list, setList] = useState(null);
  const [tempId, setTempId] = useState(null);
  const [sweetAlert, setSweetAlert] = useState(false);

  const { isLoading, error, data } = useQuery(
    ['repoData', `/posts?_page=${page}&_limit=6`],
    () => fetcher(`/posts?_page=${page}&_limit=6`)
  );

  useEffect(() => {
    // update list on data change
    setList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    // git the latest post id for last page in pagination button
    getLatestPos();
  }, []);

  const getLatestPos = async () => {
    try {
      // git the latest post id for last page in pagination button
      const { data } = await api.get('/posts?_sort=id&_order=desc&_limit=1');
      setLatestPost(data[0].id);
    } catch (error) {
      console.log('error:', error);
    }
  };

  const next = () => {
    setPage(page + 1);
    setList(data);
  };

  const prev = () => {
    setPage(page - 1);
    setList(data);
  };

  const deletePost = (id) => {
    // show alert and set the post id for delete
    setSweetAlert(true);
    setTempId(id);
  };

  const onConfirm = async () => {
    try {
      // delete post
      await api.delete(`/posts/${tempId}`);
      setSweetAlert(false);
      setTempId(null);
      // update list
      const newArr = list.filter((item) => item.id !== tempId);
      setList(newArr);
      getLatestPos();
    } catch (error) {
      console.log('error:', error);
    }
  };

  const onCancel = () => {
    setTempId(null);
    setSweetAlert(false);
  };

  const handelEdit = async (newValues) => {
    try {
      // update post
      const { data } = await api.patch(`/posts/${newValues.id}`, newValues);
      const indexOfItem = list.findIndex((post) => post.id === newValues.id);
      const arr = [...list];
      arr[indexOfItem] = data;
      setList(arr);
    } catch (error) {
      console.log('error:', error);
    }
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
          <Pagination
            isLoading={isLoading}
            page={page}
            prev={prev}
            next={next}
            list={list}
            latestPost={latestPost}
          />
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
