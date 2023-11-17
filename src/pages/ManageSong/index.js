/* eslint-disable react-hooks/exhaustive-deps */
import CustomTooltip from "components/CustomTooltip";
import _size from "lodash/size";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionDelete, actionGetList, resetData } from "store/Song/action";
import TemplateContent from "../../layouts/components/TemplateContent";
import ModalSong from "./ModalSong";

function ManageSong() {
  const {
    listStatus: { isLoading, isSuccess },
    actionStatus: { isLoading: actionLoading, isSuccess: actionSuccess },
    list,
  } = useSelector((state) => state.songReducer);
  const { category } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();
  const onGetListSong = () => dispatch(actionGetList());
  const onDeleteSong = (body) => dispatch(actionDelete(body));
  const onResetData = () => dispatch(resetData());

  const [detail, setDetail] = useState({
    detail: {},
    visible: false,
    type: "",
  });

  const [tooltip, setTooltip] = useState({
    target: null,
    visible: false,
    id: null,
  });

  useEffect(() => {
    if (!isLoading) {
      onGetListSong();
    }
    return () => {
      onResetData();
    };
  }, []);

  const getInfo = (array, key, value) => {
    const demo = array.find((item) => {
      return +item[key] === +value;
    });
    return demo || {};
  };

  const onCloseTooltip = () => {
    setTooltip({
      visible: false,
      target: null,
      id: null,
    });
  };

  return (
    <>
      <TemplateContent
        title="Quản lý bài hát"
        showNew
        btnProps={{
          onClick: () => {
            setDetail({
              detail: {},
              visible: true,
              type: "create",
            });
          },
        }}
      >
        <div
          className="custom-scrollbar"
          style={{
            overflow: "scroll",
            maxHeight: "75vh",
          }}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ maxWidth: "max-content" }}>
                  #
                </th>
                <th
                  scope="col"
                  style={{ maxWidth: "max-content", minWidth: 100 }}
                >
                  Tên bài hát
                </th>
                <th
                  scope="col"
                  style={{ maxWidth: "max-content", minWidth: 100 }}
                >
                  Tên ca sĩ
                </th>
                <th
                  scope="col"
                  style={{ maxWidth: "max-content", minWidth: 100 }}
                >
                  Hình ảnh
                </th>
                <th
                  scope="col"
                  style={{ maxWidth: "max-content", minWidth: 100 }}
                >
                  Bài hát
                </th>
                <th
                  scope="col"
                  style={{ maxWidth: "max-content", minWidth: 100 }}
                >
                  Chủ đề
                </th>
                <th
                  scope="col"
                  style={{ maxWidth: "max-content", minWidth: 150 }}
                >
                  Top thịnh hành
                </th>
                <th
                  scope="col"
                  style={{ maxWidth: "max-content", minWidth: 150 }}
                >
                  Phổ biến
                </th>
                <th
                  scope="col"
                  style={{ maxWidth: "max-content", minWidth: 150 }}
                >
                  Playlist
                </th>

                <th
                  scope="col"
                  style={{ maxWidth: "max-content", minWidth: 100 }}
                >
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && _size(list) === 0 && (
                <tr>
                  <td colSpan={12}>
                    <div
                      className="d-flex justify-content-center align-items-center w-full"
                      style={{ height: 400 }}
                    >
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  </td>
                </tr>
              )}
              {isSuccess &&
                list.map((item, index) => (
                  <tr key={item.IdBaiHat}>
                    <th scope="row">{index + 1}</th>
                    <td className="align-middle">{item.TenBaiHat}</td>
                    <td className="align-middle">{item.TenCaSi}</td>
                    <td className="align-middle">
                      <img src={item.HinhAnh} alt={item.TenBaiHat} />
                    </td>
                    <td className="align-middle">{item.LinkBaiHat}</td>
                    <td className="align-middle">
                      {getInfo(category?.chude || [], "IdChuDe", item.IdChuDe)
                        ?.TenChuDe || "_"}
                    </td>
                    <td className="align-middle">
                      {getInfo(
                        category?.thinhhanh || [],
                        "IdThinhHanh",
                        item.IdThinhHanh
                      )?.TenThinhHanh || "_"}
                    </td>
                    <td className="align-middle">
                      {getInfo(
                        category?.phobien || [],
                        "IdPhoBien",
                        item.IdPhoBien
                      )?.TenPhoBien || "_"}
                    </td>
                    <td className="align-middle">
                      {getInfo(
                        category?.playlist || [],
                        "IdPlayList",
                        item.IdPlayList
                      )?.TenPlayList || "_"}
                    </td>
                    <td className="align-middle">
                      <div className="d-flex">
                        <button
                          className="btn btn-link text-center p-1 text-secondary"
                          onClick={() => {
                            setDetail({
                              detail: item,
                              visible: true,
                              type: "detail",
                            });
                          }}
                        >
                          <i className="far fa-eye me-2"></i>
                        </button>
                        <button
                          className="btn btn-link text-center p-1 text-warning"
                          onClick={() => {
                            setDetail({
                              detail: item,
                              visible: true,
                              type: "edit",
                            });
                          }}
                        >
                          <i className="fas fa-pencil-alt me-2"></i>
                        </button>
                        <button
                          className="btn btn-link text-center p-1 text-danger"
                          onClick={(e) => {
                            setTooltip((prev) => {
                              return {
                                visible:
                                  prev.target === e.target
                                    ? !tooltip.visible
                                    : true,
                                target: e.target,
                                id: item.IdBaiHat,
                              };
                            });
                          }}
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </TemplateContent>
      <ModalSong
        category={category}
        detail={detail}
        onClear={() => setDetail({ detail: {}, visible: false, type: "" })}
      />
      <CustomTooltip
        content="Bạn có chắc muốn xóa bài hat này không?"
        tooltip={tooltip}
        loading={actionLoading}
        onClose={onCloseTooltip}
        onDelete={() => onDeleteSong(tooltip.id)}
      />
    </>
  );
}

export default ManageSong;
