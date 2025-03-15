import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../custominput/CustomInput";
import { bookInputes } from "../../../assets/custominputs/bookInputes";
import { useForm } from "../../../hooks/useForm";
import { postNewBookAction } from "../../../features/book/bookAction";
const initialState = {};
const NewBookForm = () => {
  const { form, handleOnChange } = useForm(initialState);
  const [image, setImage] = useState();
  const handleOnImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    formData.append("image", image);
    postNewBookAction(formData);
  };
  return (
    <div>
      <div>
        <h3>Insert the New Book Here !!</h3>
      </div>
      <div className="p-3">
        <Form onSubmit={handleOnSubmit}>
          {bookInputes.map((input) => (
            <CustomInput
              key={input.name}
              {...input}
              onChange={handleOnChange}
            />
          ))}
          <Form.Group className="mb-3">
            <Form.Control type="file" name="image" onChange={handleOnImage} />
          </Form.Group>

          <div className="d-grid">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewBookForm;
