import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../custominput/CustomInput";
import { useForm } from "../../../hooks/useForm";
import { editbookInputes } from "../../../assets/custominputs/editbookInputes";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteBookApi, updateBookApi } from "../../../features/book/bookApi";

const initialState = {};
const EditBookForm = () => {
  const { _id } = useParams();
  const { form, setForm, handleOnChange } = useForm(initialState);
  const { books } = useSelector((state) => state.bookInfo);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [imagestodelete, setImagesToDelete] = useState([]);

  useEffect(() => {
    if (form._id !== _id) {
      const selectedbook = books.find((book) => book._id === _id);
      selectedbook?._id ? setForm(selectedbook) : navigate("/user/books");
    }
  }, []);
  const handleOnImageSelect = (e) => {
    if (e.target.files.length > 2) {
      e.target.value = "";
      return alert("only 2 images are allowed");
    }
    setImages([...e.target.files]);
  };

  const handleOnDeleteImages = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    checked
      ? setImagesToDelete([...imagestodelete, value])
      : setImagesToDelete(imagestodelete.filter((img) => img !== value)); // which does not matched img and  value setthem images to delted namilne lai matrai yesma rakha
  };

  const handleOnDelete = async (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to delete ??")) {
      console.log(_id);
    }
    const response = await deleteBookApi(_id);
    response.status === "success" && navigate("/user/books");
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const {
      addedBy,
      availability,
      createdAt,
      isbn,
      lastUpdateBy,
      updatedAt,
      slug,
      __v,
      ...rest
    } = form;
    if (imagestodelete.includes(form.imgUrl)) {
      return alert("this can't be deleted");
    }
    const formdata = new FormData();
    for (const key in rest) {
      formdata.append(key, rest[key]);
    }
    // formdata.append("images",)
    images.map((image) => formdata.append("images", image));
    // append images to delete

    imagestodelete.map((image) => formdata.append("imageTodelete", image));

    const result = await updateBookApi(formdata);
    console.log(result);
  };
  // console.log(form);
  return (
    <div>
      <div>
        <h3>Edit the New Book Here !!</h3>
      </div>
      <div className="p-3">
        <Form onSubmit={handleOnSubmit}>
          <Form.Check
            name="status"
            type="switch"
            id="custom-switch"
            label={form.status}
            onChange={handleOnChange}
            checked={form.status === "active"}
          />
          {editbookInputes.map((input) => (
            <CustomInput
              key={input.name}
              {...input}
              onChange={handleOnChange}
              value={form[input.name]}
            />
          ))}
          <div className="d-flex">
            {form?.imageList?.map((img) => (
              <div key={img} className="m-1">
                <img
                  src={import.meta.env.VITE_BASE_API_URL + img.slice(6)}
                  width="100px"
                  height="100px"
                  className="img-thumbnail"
                />
                <Form.Check
                  type="radio"
                  name="imgUrl"
                  label="Make Thumbnail"
                  checked={form.imgUrl === img}
                  value={img}
                  onChange={handleOnChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Delete"
                  value={img}
                  onChange={handleOnDeleteImages}
                />
              </div>
            ))}
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Uploades mulitples images (max 2)</Form.Label>
            <Form.Control
              type="file"
              name="image"
              multiple
              accept="image/*"
              onChange={handleOnImageSelect}
            />
          </Form.Group>

          <div>
            <div className="mb-2">
              <h3>Additional Information</h3>
              <h6>Added by: {form.addedBy?.name}</h6>
              <h6>Created At: {form.createdAt?.slice(0, 10)}</h6>
            </div>
            <div>
              <h6>LastUpdated by: {form.lastUpdateBy?.name}</h6>
              <h6>Updated At: {form.createdAt?.slice(0, 10)}</h6>
            </div>
          </div>
          <div className="d-grid mb-2">
            <Button type="submit" className="bg-warning">
              Update
            </Button>
          </div>
          <div className=" d-grid">
            <Button className="bg-danger" onClick={handleOnDelete}>
              Delete Book
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default EditBookForm;
