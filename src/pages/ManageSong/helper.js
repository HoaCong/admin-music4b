export const parseData = (data) => {
  return {
    tenbaihat: data.TenBaiHat,
    tencasi: data.TenCaSi,
    image: data.HinhBaiHat,
    sound: data.LinkBaiHat,
    idbxh: data.IdBangXepHang,
    idchude: data.IdChuDe,
    iddexuat: data.IdDeXuat,
    idnghesi: data.IdNgheSi,
    idphobien: data.IdPhoBien,
    idplaylist: data.IdPlayList,
    idthinhhanh: data.IdThinhHanh,
    idbaihat: data.IdBaiHat,
  };
};

export const parseFormData = (data) => {
  const formData = new FormData();
  formData.append("tenbaihat", data.tenbaihat);
  formData.append("tencasi", data.tencasi);
  formData.append("image", data.image);
  formData.append("sound", data.sound);
  formData.append("idbxh", data.idbxh);
  formData.append("idchude", data.idchude);
  formData.append("iddexuat", data.iddexuat);
  formData.append("idnghesi", data.idnghesi);
  formData.append("idphobien", data.idphobien);
  formData.append("idplaylist", data.idplaylist);
  formData.append("idthinhhanh", data.idthinhhanh);
  formData.append("idbaihat", data.idbaihat);

  return formData;
};

export const parseSongItem = (data) => {
  return {
    TenBaiHat: data.tenbaihat,
    TenCaSi: data.tencasi,
    HinhBaiHat: data.image,
    LinkBaiHat: data.sound,
    IdBangXepHang: data.idbxh,
    IdChuDe: data.idchude,
    IdDeXuat: data.iddexuat,
    IdNgheSi: data.idnghesi,
    IdPhoBien: data.idphobien,
    IdPlayList: data.idplaylist,
    IdThinhHanh: data.idthinhhanh,
    IdBaiHat: data.idbaihat,
  };
};
