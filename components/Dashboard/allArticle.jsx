"use client";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Message_data } from "../../context/context";
import { useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "./deleteModal";
import { toast, Toaster } from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

function AllArticle() {
  const router = useRouter();

  const { setIsPageLoaded, userAuthToken } = useContext(Message_data);
  const [allArticles, setAllArticles] = useState([]);
  const [openDelModal, setOpenDelModal] = useState(false);
  const [delArticle, setDelArticle] = useState("");

  const config = {
    headers: {
      Authorization: `Bearer ${userAuthToken}`,
    },
  };
  function getData() {
    axios
      .get(`http://localhost:3000/api/getAllArticle`, config)
      .then((result) => {
        console.log("Data: ", result);
        setAllArticles(result.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
        if (err.response.status == 401) {
          console.log("error", "Unauthorized user.");
        } else {
          console.log("error", "Something went wrong.");
        }
      });
  }

  useEffect(() => {
    if (userAuthToken || userAuthToken !== "") {
      getData();
    }
  }, [userAuthToken]);
  const CloseDelModal = () => {
    setOpenDelModal(false);
  };
  function deleteArticle(id) {
    axios
      .delete(`http://localhost:3000/api/deleteArticle/${id}`, config)
      .then(() => {
        CloseDelModal();
        getData();
        toast("Article Deleted Successfully!");
      })
      .catch((err) => {
        console.log("Error: ", err);
        if (err.response.status == 401) {
          console.log("error", "Unauthorized user.");
        } else {
          console.log("error", "Something went wrong.");
        }
      });
  }
  const delFunc = (article) => {
    setOpenDelModal(true);
    setDelArticle(article);
  };

  return (
    <>
      {allArticles && allArticles?.length ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Title
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Slug
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allArticles.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row?.title}
                  </TableCell>
                  <TableCell>{row?.slug}</TableCell>
                  <TableCell>
                    <EditIcon
                      onClick={() =>
                        router.push(
                          `/admin-dashboard/update-article/${row?.id}`
                        )
                      }
                      sx={{ color: "orange", cursor: "pointer" }}
                    />
                    <DeleteIcon
                      onClick={() => delFunc(row)}
                      sx={{ color: "#800000", cursor: "pointer", ml: 1 }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {openDelModal && (
            <DeleteModal
              del={deleteArticle}
              currentArticle={delArticle}
              openDelModal={openDelModal}
              setDeleteModal={setOpenDelModal}
            />
          )}

          <Toaster
            toastOptions={{
              className: "custom-toast",
              style: {
                fontFamily: '"Nunito", sans-serif',
                color: "orange-green", // Adjust text color as needed
              },
            }}
            position="top-right"
          />
        </TableContainer>
      ) : (
        <Box
          // className={classes}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "100vh",
            width: "100vw",
            zIndex: "999999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress style={{ color: "orange" }} />
          </Box>
        </Box>
      )}
    </>
  );
}

export default AllArticle;
