import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetList, resetData } from "store/Song/action";
import ModalAddSong from "../../components/Modal";
import TemplateContent from "../../layouts/components/TemplateContent";

function ManageSong() {
  const {
    listStatus: { isLoading },
    actionStatus: { isLoading: actionLoading, isSuccess: actionSuccess },
    list,
  } = useSelector((state) => state.songReducer);

  const dispatch = useDispatch();
  const onGetListUser = () => dispatch(actionGetList());
  const onResetData = () => dispatch(resetData());

  useEffect(() => {
    if (!isLoading) {
      onGetListUser();
    }
    return () => {
      onResetData();
    };
  }, []);

  return (
    <>
      <TemplateContent
        title="Quản lý bài hát"
        showNew
        btnProps={{
          "data-bs-toggle": "modal",
          "data-bs-target": "#modal",
        }}
      >
        <div
          style={{
            overflow: "scroll",
            maxHeight: 500,
          }}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ maxWidth: "max-content" }}>
                  #
                </th>
                <th scope="col" style={{ maxWidth: "max-content" }}>
                  Tên bài hát
                </th>
                <th scope="col" style={{ maxWidth: "max-content" }}>
                  Tên ca sĩ
                </th>
                <th scope="col" style={{ maxWidth: "max-content" }}>
                  Thể loại{" "}
                </th>
                <th scope="col" style={{ maxWidth: "max-content" }}>
                  Top thịnh hành
                </th>
                <th scope="col" style={{ maxWidth: "max-content" }}>
                  Bài hát
                </th>
                <th scope="col" style={{ maxWidth: "max-content" }}>
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={item.IdBaiHat}>
                  <th scope="row">{item.index}</th>
                  <td className="align-middle">{item.TenBaiHat}</td>
                  <td className="align-middle">{item.TenCaSi}</td>
                  <td className="align-middle">{item.IdChuDe}</td>
                  <td className="align-middle">{item.IdThinhHanh}</td>
                  <td className="align-middle">{item.LinkBaiHat}</td>
                  <td className="align-middle">
                    <button className="btn btn-link text-center p-1 text-secondary">
                      <i className="far fa-eye me-2"></i>
                    </button>
                    <button className="btn btn-link text-center p-1 text-warning">
                      <i className="fas fa-pencil-alt me-2"></i>
                    </button>
                    <button className="btn btn-link text-center p-1 text-danger">
                      <i className="far fa-edit"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TemplateContent>
      <ModalAddSong title="Thêm mới bài hát">
        <div className="mb-3">
          <label htmlFor="name_song" className="form-label">
            Tên bài hát
          </label>
          <input type="text" className="form-control" id="name_song" />
        </div>
        <div className="mb-3">
          <label htmlFor="singer" className="form-label">
            Ca sĩ
          </label>
          <input type="text" className="form-control" id="singer" />
        </div>

        <div className="mb-3">
          <label htmlFor="type_song" className="form-label">
            Thể loại
          </label>
          <input type="text" className="form-control" id="type_song" />
        </div>
        <div className="mb-3">
          <label htmlFor="singer" className="form-label">
            Top thịnh hành
          </label>
          <input type="text" className="form-control" id="singer" />
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">
            Chọn bài hát
          </label>
          <input className="form-control" type="file" id="file" />
        </div>
      </ModalAddSong>
    </>
  );
}

export default ManageSong;
