import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import axios from "axios";
import { allUser } from "../../action/userAction";

const User = () => {
    // const [loading, setLoading] = useState(true);
    // const [success, setSuccess] = useState(true);
    // const [BusinessesData, setBusinessesData] = useState([]);
    const dispatch = useDispatch();
    const { loading, users } = useSelector((state) => state.user)
    console.log(users);
    // const [showData, setShowData] = useState([]);






    // console.log("data is ", showData);
    useEffect(() => {
        dispatch(allUser())

    }, [dispatch]);

    const formatDate = (inputDate) => {
        const options = { year: "numeric", month: "short", day: "numeric" };
        const date = new Date(inputDate);
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="
                    page-title-box
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                            >
                                <div style={{ fontSize: "22px" }} className="fw-bold">
                                    Users
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row ml-0 mr-0 mb-10">
                                        <div className="col-sm-12 col-md-12">
                                            {/* <div className="dataTables_length">
                                                <label className="w-100">
                                                    Show
                                                    <select
                                                        style={{ width: "10%" }}
                                                        name=""
                                                        onChange={(e) => handleShowEntries(e)}
                                                        className="
                                select-w
                                custom-select custom-select-sm
                                form-control form-control-sm
                              "
                                                    >
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                    entries
                                                </label>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className="table-responsive table-shoot mt-3">
                                        <table
                                            className="table table-centered table-nowrap"
                                            style={{ border: "1px solid" }}
                                        >
                                            <thead
                                                className="thead-info"
                                                style={{ background: "rgb(140, 213, 213)" }}
                                            >
                                                <tr>
                                                    <th className="text-start">Id</th>
                                                    {/* <th className="text-start">Logo</th> */}
                                                    {/* <th className="text-start">User Type</th> */}
                                                    <th className="text-start">name</th>
                                                    <th className="text-start">Instagram handle</th>
                                                    {/* <th className="text-start">Status</th> */}
                                                    <th className="text-start">Date Added</th>
                                                    <th className="text-start">Count</th>
                                                    {/* <th className="text-start">Campaigns</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {!loading && users && users.length === 0 && (
                                                    <tr className="text-center">
                                                        <td colSpan="6">
                                                            <h5>No Data Available</h5>
                                                        </td>
                                                    </tr>
                                                )}
                                                {loading || (users && users.length === 0) ? (
                                                    <tr>
                                                        <td className="text-center" colSpan="6">
                                                            Loading...
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    users && users.map((i, idx) => {
                                                        return (
                                                            <tr key={idx}>
                                                                <td className="text-start">
                                                                    {i._id}
                                                                </td>

                                                                <td className="text-start">
                                                                    {i.name}
                                                                </td>
                                                                <td className="text-start">
                                                                    {i.username}
                                                                </td>
                                                                <td className="text-start">
                                                                    {formatDate(i.createdAt)}
                                                                </td>
                                                                <td className="text-start">
                                                                    {i.count}
                                                                </td>

                                                            </tr>
                                                        );
                                                    })
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* <div className="row mt-20">
                                        <div className="col-sm-12 col-md-6 mb-20">
                                            <div
                                                className="dataTables_info"
                                                id="datatable_info"
                                                role="status"
                                                aria-live="polite"
                                            >
                                                Showing {currentPage * itemPerPage - itemPerPage + 1} to{" "}
                                                {Math.min(
                                                    currentPage * itemPerPage,
                                                    users.length
                                                )}{" "}
                                                of {users.length} entries
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6">
                                            <div className="d-flex">
                                                <ul className="pagination ms-auto">
                                                    <li
                                                        className={
                                                            currentPage === 1
                                                                ? "paginate_button page-item previous disabled"
                                                                : "paginate_button page-item previous"
                                                        }
                                                    >
                                                        <span
                                                            className="page-link"
                                                            style={{ cursor: "pointer" }}
                                                            onClick={() => setCurrentPage((prev) => prev - 1)}
                                                        >
                                                            Previous
                                                        </span>
                                                    </li>

                                                    {!(currentPage - 1 < 1) && (
                                                        <li className="paginate_button page-item">
                                                            <span
                                                                className="page-link"
                                                                style={{ cursor: "pointer" }}
                                                                onClick={(e) =>
                                                                    setCurrentPage((prev) => prev - 1)
                                                                }
                                                            >
                                                                {currentPage - 1}
                                                            </span>
                                                        </li>
                                                    )}

                                                    <li className="paginate_button page-item active">
                                                        <span
                                                            className="page-link"
                                                            style={{ cursor: "pointer" }}
                                                        >
                                                            {currentPage}
                                                        </span>
                                                    </li>

                                                    {!(
                                                        (currentPage + 1) * itemPerPage - itemPerPage >
                                                        users.length - 1
                                                    ) && (
                                                            <li className="paginate_button page-item ">
                                                                <span
                                                                    className="page-link"
                                                                    style={{ cursor: "pointer" }}
                                                                    onClick={() => {
                                                                        setCurrentPage((prev) => prev + 1);
                                                                    }}
                                                                >
                                                                    {currentPage + 1}
                                                                </span>
                                                            </li>
                                                        )}

                                                    <li
                                                        className={
                                                            !(
                                                                (currentPage + 1) * itemPerPage - itemPerPage >
                                                                users.length - 1
                                                            )
                                                                ? "paginate_button page-item next"
                                                                : "paginate_button page-item next disabled"
                                                        }
                                                    >
                                                        <span
                                                            className="page-link"
                                                            style={{ cursor: "pointer" }}
                                                            onClick={() => setCurrentPage((prev) => prev + 1)}
                                                        >
                                                            Next
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div>table</div>
    );
};

export default User;