import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const LoaiCauHoi1 = () => {
  const { danhSachCauHoi } = useSelector(state => state.baiTapCauHoiReducer);
  const disptach = useDispatch();
  console.log(danhSachCauHoi);
  return (
    <div>
      {danhSachCauHoi.map(item => (
        <div>
          {item.questionType === 1 && (
            <div>
              <h2>{item.content}</h2>
              {item.answers &&
                item.answers.map(answers => <div>{answers.content}</div>)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default LoaiCauHoi1;
