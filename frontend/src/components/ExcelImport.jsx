import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  importStudents,
  listStudents,
} from "../redux/actions/userActions";
import { resetState } from "../redux/slices/userSlices";
import Message from "./Message";

const ExcelImport = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState('');
  const [fileErr, setFileErr] = useState(null);
  const [showImportBtn, setShowImportBtn] = useState(false);
  const [successImport, setSuccessImport] = useState(null);

  const {
    loading,
    error,
    students: studentsList,
    deleted,
    updateInfo,
  } = useSelector((state) => state.user);

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  };

  const uploadExcelFile = () => {
    if (file === '') {
      setFileErr("Please choose an excel file to upload!");
    } else {
      const reader = new FileReader();

      reader.onload = (evt) => {
        const data = new Uint8Array(evt.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const studentData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Assuming the Excel file has columns: REG NO, FULL NAME, INDEX NO, EMAIL, CONTACT, YEAR JOINED, FACULTY, COURSE
        const students = studentData.slice(1).map((row) => ({
          reg_no: row[0],
          full_name: row[1],
          index_no: row[2],
          email: row[3],
          contact: row[4],
          year_joined: row[5],
          user_type: "student",
        })).filter((student) => student.reg_no);

        dispatch(importStudents(students));
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const handleDeleteUser = (userId) => {
    alert("Are you sure you want to delete the user?");
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    if (updateInfo?.total_items) {
      setSuccessImport(
        `${updateInfo?.updates_count}/${updateInfo?.total_items} added successfully!`
      );
    }
    const timeout = setTimeout(() => {
      dispatch(resetState());
      setSuccessImport(null);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [dispatch, updateInfo]);

  useEffect(() => {
    dispatch(listStudents());
  }, [dispatch]);

  useEffect(() => {
    if (deleted || updateInfo?.total_items) {
      dispatch(listStudents());
    }
  }, [dispatch, deleted, updateInfo]);

  useEffect(() => {
    if (deleted || error) {
      const timeout = setTimeout(() => {
        dispatch(resetState());
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [dispatch, deleted, error]);

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-semibold'>Students</h2>
        {!showImportBtn ? (
          <span className='flex gap-5 items-center border text-sm text-gray-600 p-2'>
            <span>
              <h6 className='text-xl font-semibold text-gray-900'>
                Import Students
              </h6>
              <p>
                To Import students data, please click on Import, select an excel
                file and upload data.
              </p>
            </span>
            <button
              className='bg-gray-900 text-white px-4 py-2 rounded'
              onClick={() => setShowImportBtn(true)}
            >
              Import
            </button>
          </span>
        ) : (
          <div className='flex gap-3 border p-2 relative'>
            <input
              type='file'
              accept='.xlsx, .ods'
              onChange={handleFileChange}
              className='border focus:outline-gray-900 px-4 py-1 rounded'
            />
            <button
              className='bg-gray-900 text-white px-4 py-2 rounded'
              onClick={uploadExcelFile}
            >
              Upload data
            </button>
            <button
              className='bg-gray-200 h-6 w-6 text-gray-900 rounded-full flex justify-center items-center absolute top-0 close-import-btn'
              onClick={() => setShowImportBtn(false)}
            >
              x
            </button>
          </div>
        )}
      </div>
      <section className='w-full overflow-x-auto'>
        {loading && <p>Loading...</p>}
        {error && (
          <Message onClose={() => dispatch(resetState())}>{error}</Message>
        )}
        {deleted && (
          <span className='flex items-center justify-between my-1 bg-green-100 w-full py-2 px-4 rounded border border-green-400 text-green-700'>
            <p>User has been deleted successfully!</p>
          </span>
        )}
        {successImport && (
          <Message variant='success' onClose={() => setSuccessImport(null)}>
            {successImport}
          </Message>
        )}
        {fileErr && (
          <Message onClose={() => setFileErr(null)}>{fileErr}</Message>
        )}
        <table className='w-max border border-gray-400'>
          <thead className=''>
            <tr className='bg-gray-200'>
              <th className='border border-gray-400 p-2'>#</th>
              <th className='border border-gray-400 p-2'>REG NO</th>
              <th className='border border-gray-400 p-2'>FULL NAME</th>
              <th className='border border-gray-400 p-2'>INDEX NO</th>
              <th className='border border-gray-400 p-2'>EMAIL</th>
              <th className='border border-gray-400 p-2'>CONTACT</th>
              <th className='border border-gray-400 p-2'>YEAR JOINED</th>
              <th className='border border-gray-400 p-2'>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {studentsList.map((student, index) => (
              <tr key={index}>
                <td className='border border-gray-400 p-2'>{index + 1}</td>
                <td className='border border-gray-400 p-2'>{student.reg_no}</td>
                <td className='border border-gray-400 p-2'>
                  {student.full_name}
                </td>
                <td className='border border-gray-400 p-2'>
                  {student.index_no}
                </td>
                <td className='border border-gray-400 p-2'>{student.email}</td>
                <td className='border border-gray-400 p-2'>
                  {student.contact}
                </td>
                <td className='border border-gray-400 p-2'>
                  {student.year_joined}
                </td>
                <td className='border border-gray-400 p-2'>
                  <button
                    className='bg-red-500 text-white rounded px-2 py-1 text-sm'
                    onClick={() => handleDeleteUser(student.user)}
                  >
                    Deregister
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ExcelImport;
