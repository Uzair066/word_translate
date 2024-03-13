"use client";
import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Message_data } from "../../context/context";
import { useContext } from "react";
import CustomEditor from "./customEditor";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

function AddArticle() {
  const router = useRouter();
  const { id } = router.query;

  const { setIsPageLoaded, userAuthToken } = useContext(Message_data);
  const [singleArticle, setSingleArticle] = useState(null);
  
  const initialState = {
    title: "",
    slug: "",
    meta_description: "",
    article_text: "",
  };
  const [validated, setValidated] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const validateFormData = () => {
    if (
      formData.title === "" ||
      formData.slug === "" ||
      formData.meta_description === "" ||
      formData.article_text === ""
    ) {
      setValidated(false);
      return false;
    }
    setValidated(true);
    return true;
  };

  const handleSubmit = () => {
    if (validateFormData()) {

    let tempData = {
      title: formData.title,
      slug: formData.slug,
      meta_description: formData.meta_description,
      article_text: formData.article_text,
    };
    if (id == null) {
    axios
      .post("http://localhost:3000/api/addArticle", tempData, config)
      .then((result) => {
        console.log("Data: ", result.data);
        toast("Article Added Successfully!")
        setTimeout(() => {
          router.push("/admin-dashboard/all-article")
        }, 1000);
      })
      .catch((err) => {
        console.log("Error: ", err);
        if (err == 401) {
          // showToast("error", "Unauthorized user.");
          console.log("error", "Unauthorized user.");
        } else {
          console.log("error", "Something went wrong.");
        }
      });
    } else {
      axios
      .put(`http://localhost:3000/api/updateArticle/${id}`, tempData, config)
      .then((result) => {
        console.log("Data: ", result.data);
        toast("Article Updated Successfully!")
        setTimeout(() => {
          router.push("/admin-dashboard/all-article")
        }, 1000);
      })
      .catch((err) => {
        console.log("Error: ", err);
        if (err == 401) {
          // showToast("error", "Unauthorized user.");
          console.log("error", "Unauthorized user.");
        } else {
          console.log("error", "Something went wrong.");
        }
      });
    }
  }
  };
  // get data by id
  const config = {
    headers: {
      Authorization: `Bearer ${userAuthToken}`,
    },
  };
  function getArticleById() {
    axios
      .get(`http://localhost:3000/api/getById/${id}`, config)
      .then((result) => {
        setSingleArticle(result.data);
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
    if (userAuthToken || userAuthToken != null) {
      if (id) {
        getArticleById();
      }
    }
  }, [userAuthToken, id]);

  useEffect(() => {
    if (singleArticle != null) {
      let dupObj = { ...formData };
      dupObj.id = singleArticle?.id;
      dupObj.title = singleArticle?.title;
      dupObj.slug = singleArticle?.slug;
      dupObj.meta_description = singleArticle?.meta_description;
      dupObj.article_text = singleArticle?.article_text;

      setFormData(dupObj);
    }
  }, [singleArticle]);
console.log("ddddd", singleArticle);

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff", p: 2}}>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center", mt: 1,  pb:5  }}
      >
        <Grid item xs={12} md={5}>
          <h4>Title</h4>
          <TextField
            sx={{ width: "100%" }}
            value={formData.title}
            onChange={(e) => {
              let dupObj = { ...formData };
              dupObj.title = e.target.value;
              setFormData(dupObj);
            }}
          />
          {!validated &&
              (formData.title === null ||
                formData.title === "") && (
                <div style={{ color: "red", fontSize: "small" }}>
                  Title is required
                </div>
              )}
        </Grid>
        <Grid item xs={12} md={5}>
          <h4>Slug</h4>
          <TextField
            sx={{ width: "100%" }}
            value={formData.slug}
            onChange={(e) => {
              let dupObj = { ...formData };
              dupObj.slug = e.target.value;
              setFormData(dupObj);
            }}
          />
          {!validated &&
              (formData.slug === null ||
                formData.slug === "") && (
                <div style={{ color: "red", fontSize: "small" }}>
                  Slug is required
                </div>
              )}
        </Grid>
        <Grid item xs={12} md={10}>
          <h4>Meta Description</h4>
          <TextField
            sx={{ width: "100%" }}
            value={formData.meta_description}
            onChange={(e) => {
              let dupObj = { ...formData };
              dupObj.meta_description = e.target.value;
              setFormData(dupObj);
            }}
          />
          {!validated &&
              (formData.meta_description === null ||
                formData.meta_description === "") && (
                <div style={{ color: "red", fontSize: "small" }}>
                  Meta Description is required
                </div>
              )}
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomEditor formData={formData} setFormData={setFormData} data={id}          
          singleArticle={singleArticle}
          />
          {!validated &&
              (formData.article_text === null ||
                formData.article_text === "") && (
                <div style={{ color: "red", fontSize: "small" }}>
                  Article Text is required
                </div>
              )}
        </Grid>
        <Grid item xs={12} md={10}>
          <Button
            onClick={handleSubmit}
            sx={{ backgroundColor: "orange", color: "#fff", "&:hover": { backgroundColor: "orange" }, }}
          >
           {!id ?  "Add Article" : "Update Article"}
          </Button>
        </Grid>
      </Grid>
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
    </Box>
  );
}

export default AddArticle;
