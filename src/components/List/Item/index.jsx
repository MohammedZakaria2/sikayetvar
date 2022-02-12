import React, { useState } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from './../../../helpers/api';
import './style.css';

const Item = ({ item, handelDelete, handelEdit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ title: '', body: '' });

  const fetchItem = async () => {
    const { data } = await api.get(`/posts/${item.id}`);
    setForm({ title: data.title, body: data.body });
    setIsOpen(true);
  };

  const handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handelEditItem = () => {
    setError(null);
    if (form.title && form.body) {
      handelEdit({ id: item.id, title: form.title, body: form.body });
      setIsOpen(false);
    } else {
      setError('Please fill all fields');
    }
  };

  return (
    <div className="item">
      <Row>
        <Col className="flex-grow-1 text_col">
          <div className="post_description">
            <span>{item.id}</span>
            <p>{item.title}</p>
          </div>
        </Col>
        <Col lg="auto">
          <div className="control_buttons">
            <Link to={`/post/${item.id}`} className="primary_button">
              DETAY
            </Link>
            <button onClick={fetchItem} className="edit_button">
              DÜZENLE
            </button>
            <button
              onClick={() => handelDelete(item.id)}
              className="danger_button"
            >
              SİL
            </button>
          </div>
        </Col>
      </Row>
      <Modal show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header>
          <Modal.Title className="modal_title">Düzenle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <small className="fom_error">{error && error}</small>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form_label">Title</Form.Label>
              <Form.Control
                className="input_style"
                type="text"
                placeholder="title ..."
                name="title"
                onChange={(e) => handelChange(e)}
                value={form.title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 input_style"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="form_label">Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="body"
                onChange={(e) => handelChange(e)}
                value={form.body}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="handel_edit_button edit"
            onClick={() => handelEditItem()}
          >
            GÜNCELLE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Item;
