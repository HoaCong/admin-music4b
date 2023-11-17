/* eslint-disable react-hooks/exhaustive-deps */
import _capitalize from "lodash/capitalize";
import _isEmpty from "lodash/isEmpty";
import _omit from "lodash/omit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAdd, actionEdit, actionGetList } from "store/Song/action";
import ModalSongCOM from "../../components/Modal";
import { parseData } from "./helper";

const initialState = {
  tenbaihat: "",
  tencasi: "",
  image: "",
  sound: "",
  idbxh: "0",
  idchude: "0",
  iddexuat: "0",
  idnghesi: "0",
  idphobien: "0",
  idplaylist: "0",
  idthinhhanh: "0",
  idbaihat: "",
};
function ModalSong({ category, detail: { detail, visible, type }, onClear }) {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(initialState);

  const {
    actionStatus: { isLoading, isSuccess },
  } = useSelector((state) => state.songReducer);
  const dispatch = useDispatch();
  const onAddSong = (data) => dispatch(actionAdd(data));
  const onEditSong = (data) => dispatch(actionEdit(data));
  useEffect(() => {
    if (!_isEmpty(detail)) setData(parseData(detail));
  }, [detail]);

  useEffect(() => {
    if (isSuccess) {
      onClear();
      setData(initialState);
    }
  }, [isSuccess]);

  const getDataSelect = (array, key, value) => {
    return [{ [key]: "0", [value]: "Không" }, ...array];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };
  const handleSubmit = () => {
    const tmpKey = Object.keys(_omit(data, ["idbaihat"]));
    let validates = true;
    tmpKey.forEach((key) => {
      if (data[key] === "") {
        setError((prevError) => ({
          ...prevError,
          [key]: `${_capitalize(key)} required`,
        }));
        validates = false;
      }
    });
    console.log(1233213, validates);
    if (validates) {
      console.log(1233213);
      if (type === "create") onAddSong(data);
      if (type === "edit") onEditSong(data);
    }
  };

  const handleClose = () => {
    onClear();
    setData(initialState);
    setError(initialState);
  };

  const getTitle = {
    detail: "Thông tin bài hát",
    edit: "Chỉnh sửa bài hát",
    create: "Thêm mới bài hát",
  };

  return (
    <ModalSongCOM
      title={getTitle[type]}
      show={visible}
      onClose={handleClose}
      onSave={handleSubmit}
      hideSave={type === "detail"}
      loading={isLoading}
    >
      <div className="mb-3">
        <label htmlFor="tenbaihat" className="form-label">
          Tên bài hát
        </label>
        <input
          type="text"
          className="form-control"
          id="tenbaihat"
          name="tenbaihat"
          value={data.tenbaihat}
          onChange={handleChange}
          disabled={type === "detail"}
        />
        {error.tenbaihat && (
          <small className="d-block text-danger -mb-3">{error.tenbaihat}</small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="tencasi" className="form-label">
          Tên ca sĩ
        </label>
        <input
          type="text"
          className="form-control"
          id="tencasi"
          name="tencasi"
          value={data.tencasi}
          onChange={handleChange}
          disabled={type === "detail"}
        />
        {error.tencasi && (
          <small className="d-block text-danger -mb-3">{error.tencasi}</small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Hình ảnh
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={data.image}
          onChange={handleChange}
          disabled={type === "detail"}
        />
        {error.image && (
          <small className="d-block text-danger -mb-3">{error.image}</small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="sound" className="form-label">
          Bài hát
        </label>
        <input
          type="text"
          className="form-control"
          id="sound"
          name="sound"
          value={data.sound}
          onChange={handleChange}
          disabled={type === "detail"}
        />
        {error.sound && (
          <small className="d-block text-danger -mb-3">{error.sound}</small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="idbxh" className="form-label">
          Bảng Xếp Hạng
        </label>
        <select
          className="form-select"
          id="idbxh"
          name="idbxh"
          value={data.idbxh}
          onChange={handleChange}
          disabled={type === "detail"}
        >
          {getDataSelect(
            category.bangxephang || [],
            "IdBangXepHang",
            "TenBangXepHang"
          ).map((option) => (
            <option key={option.IdBangXepHang} value={option.IdBangXepHang}>
              {option.TenBangXepHang}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="idchude" className="form-label">
          Chủ đề
        </label>
        <select
          className="form-select"
          id="idchude"
          name="idchude"
          value={data.idchude}
          onChange={handleChange}
          disabled={type === "detail"}
        >
          {getDataSelect(category.chude || [], "IdChuDe", "TenChuDe").map(
            (option) => (
              <option key={option.IdChuDe} value={option.IdChuDe}>
                {option.TenChuDe}
              </option>
            )
          )}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="iddexuat" className="form-label">
          Đề xuất
        </label>
        <select
          className="form-select"
          id="iddexuat"
          name="iddexuat"
          value={data.iddexuat}
          onChange={handleChange}
          disabled={type === "detail"}
        >
          {getDataSelect(category.dexuat || [], "IdDeXuat", "TenDeXuat").map(
            (option) => (
              <option key={option.IdDeXuat} value={option.IdDeXuat}>
                {option.TenDeXuat}
              </option>
            )
          )}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="idnghesi" className="form-label">
          Nghệ sĩ
        </label>
        <select
          className="form-select"
          id="idnghesi"
          name="idnghesi"
          value={data.idnghesi}
          onChange={handleChange}
          disabled={type === "detail"}
        >
          {getDataSelect(category.nghesi || [], "IdNgheSi", "TenNgheSi").map(
            (option) => (
              <option key={option.IdNgheSi} value={option.IdNgheSi}>
                {option.TenNgheSi}
              </option>
            )
          )}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="idphobien" className="form-label">
          Phổ biến
        </label>
        <select
          className="form-select"
          id="idphobien"
          name="idphobien"
          value={data.idphobien}
          onChange={handleChange}
          disabled={type === "detail"}
        >
          {getDataSelect(category.phobien || [], "IdPhoBien", "TenPhoBien").map(
            (option) => (
              <option key={option.IdPhoBien} value={option.IdPhoBien}>
                {option.TenPhoBien}
              </option>
            )
          )}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="idplaylist" className="form-label">
          PlayList
        </label>
        <select
          className="form-select"
          id="idplaylist"
          name="idplaylist"
          value={data.idplaylist}
          onChange={handleChange}
          disabled={type === "detail"}
        >
          {getDataSelect(
            category.playlist || [],
            "IdPlayList",
            "TenPlayList"
          ).map((option) => (
            <option key={option.IdPlayList} value={option.IdPlayList}>
              {option.TenPlayList}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="idthinhhanh" className="form-label">
          Thịnh hành
        </label>
        <select
          className="form-select"
          id="idthinhhanh"
          name="idthinhhanh"
          value={data.idthinhhanh}
          onChange={handleChange}
          disabled={type === "detail"}
        >
          {getDataSelect(
            category.thinhhanh || [],
            "IdThinhHanh",
            "TenThinhHanh"
          ).map((option) => (
            <option key={option.IdThinhHanh} value={option.IdThinhHanh}>
              {option.TenThinhHanh}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        name="idbaihat"
        value={data.idbaihat}
        onChange={handleChange}
        disabled={type === "detail"}
        hidden
      />
    </ModalSongCOM>
  );
}

export default ModalSong;
