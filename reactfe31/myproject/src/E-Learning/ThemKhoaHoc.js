import React from "react";
import { Input, FormControl, InputLabel, FormHelperText, MenuItem, Select } from "@material-ui/core";
import { useFormik, useField, Formik } from "formik";

import { useDispatch } from "react-redux";
import { themKhoaHoc } from "../redux/actions/QuanLyKhoaHocActions";
import { useState } from "react";

const MyInput = props => {
  const [field, meta] = useField(props);
  // field bao gom value, handleChange, handleBlur, ...
  // meta bao gom touched, errory dung de validation, ...
  // props co the bao gom name, type, placeholder, ...
  return <input {...field} {...props} />;
};

//values = [{lable: 'Tao', value: 'apple'}]
//lable de hien thi giao dien
//value la cai minh su dung
const MySelect = ({ values, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <select {...field} {...props}>
      {values.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

const ThemKhoaHoc = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const handleChangeFile = e => {
    setFile(e.target.files[0]); //setFieldValue co tac dung set value cho 1 o input bat ky
  };
  console.log(file);
  return (
    <div className="container">
      <div className="row">
        <Formik
          initialValues={{
            maKhoaHoc: "",
            biDanh: "",
            tenKhoaHoc: "",
            moTa: "",
            hinhAnh: "",
            maDanhMucKhoaHoc: ""
          }}
          onSubmit={values =>
            dispatch(themKhoaHoc({ ...values, hinhAnh: file }))
          }
        >
          {({
            handleSubmit,
            values,
            handleBlur,
            handleChange,
            setFieldValue
          }) => {
            return (
              <form>
                <label> Ma khoa hoc</label>
                <MyInput type="text" name="maKhoaHoc" />
                <label> Ten khoa hoc </label>
                <MyInput type="text" name="tenKhoaHoc" />
                <label> Bi danh</label>
                <MyInput type="text" name="biDanh" />
                <label> Mo ta </label>
                <MyInput type="text" name="moTa" />
                <label> Hinh anh</label>
                <MyInput
                  type="file"
                  name="hinhAnh"
                  onChange={handleChangeFile}
                />
                <label> Ma danh muc khoa hoc</label>
                <MySelect
                  name="maDanhMucKhoaHoc"
                  values={[
                    { label: "Chon danh muc khoa hoc", value: "" },
                    { label: "Lap trinh front end", value: "Frontend" },
                    { label: "Lap trinh back end", value: "Backend" }
                  ]}
                />
                
                <button onClick={handleSubmit}>Submit</button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
export default ThemKhoaHoc;
