import React from "react";
import ModalAddSong from "../../components/Modal";
import TemplateContent from "../../layouts/components/TemplateContent";

function ManageSong(props) {
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên bài hát</th>
              <th scope="col">Tên ca sĩ</th>
              <th scope="col">Thể loại </th>
              <th scope="col">Top thịnh hành</th>
              <th scope="col">Bài hát</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item) => (
              <tr key={item}>
                <th scope="row">{item}</th>
                <td className="align-middle">Tên bài hát {item}</td>
                <td className="align-middle">Tên ca sĩ {item}</td>
                <td className="align-middle">Thể loại {item}</td>
                <td className="align-middle">Top thịnh hành {item}</td>
                <td className="align-middle">Bài hát {item}.mp3</td>
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
