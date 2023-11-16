/* eslint-disable react-hooks/exhaustive-deps */
import CustomTooltip from "components/CustomTooltip";
import ToggleSwitch from "components/ToggleSwitch";
import TemplateContent from "layouts/components/TemplateContent";
import _size from "lodash/size";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionActive, actionGetList, resetData } from "store/User/action";

function Users() {
  const {
    listStatus: { isLoading },
    actionStatus: { isLoading: actionLoading, isSuccess: actionSuccess },
    list,
  } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const onGetListUser = () => dispatch(actionGetList());
  const onActiveUser = (body) => dispatch(actionActive(body));
  const onResetData = () => dispatch(resetData());

  const [tooltip, setTooltip] = useState({
    target: null,
    visible: false,
    detail: null,
  });

  useEffect(() => {
    if (!isLoading) onGetListUser();
    return () => {
      onResetData();
    };
  }, []);

  useEffect(() => {
    if (actionSuccess) onCloseTooltip();
  }, [actionSuccess]);

  const onCloseTooltip = () => {
    setTooltip({
      visible: false,
      target: null,
      detail: null,
    });
  };

  return (
    <div className="mb-5">
      <TemplateContent title="Danh sách người dùng">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên người dùng</th>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">Email </th>
              <th scope="col">Mật khẩu</th>
              <th scope="col">Trạng thái </th>
            </tr>
          </thead>
          <tbody>
            {isLoading && _size(list) === 0 && (
              <tr>
                <td colSpan={7}>
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
            {list.map((item, index) => (
              <tr key={`${index}-${item.active}`}>
                <th scope="row" className="align-middle">
                  {index + 1}
                </th>
                <td className="align-middle">{item.Name}</td>
                <td className="align-middle">{item.UserName}</td>
                <td className="align-middle">{item.Email}</td>
                <td className="align-middle">{item.Password}</td>
                <td className="align-middle">
                  <ToggleSwitch
                    status={+item.active}
                    callback={(e) =>
                      setTooltip((prev) => {
                        return {
                          visible:
                            prev.target === e.target ? !tooltip.visible : true,
                          target: e.target,
                          detail: item,
                        };
                      })
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TemplateContent>

      <CustomTooltip
        content={`Bạn có chắc muốn ${
          +tooltip.detail?.active ? "hủy " : ""
        }kích hoạt người dùng này không?`}
        tooltip={tooltip}
        loading={actionLoading}
        onClose={onCloseTooltip}
        onDelete={() => onActiveUser(tooltip.detail)}
      />
    </div>
  );
}

export default Users;
