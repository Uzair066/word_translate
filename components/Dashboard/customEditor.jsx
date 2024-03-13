import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
let htmlToDraft;
if (typeof window !== "undefined") {
  htmlToDraft = require("html-to-draftjs").default;
}

function CustomEditor({ formData, setFormData, data, singleArticle }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (data  && htmlToDraft && singleArticle) {
      const blocksFromHtml = htmlToDraft(singleArticle?.article_text);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const prePopulate = EditorState.createWithContent(contentState);
      setEditorState(prePopulate);
    }
  }, [singleArticle]);
 
  const onEditorStateChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    const htmlContent = draftToHtml(convertToRaw(contentState));
    let dupObj = { ...formData };
    dupObj.article_text = htmlContent;
    setFormData(dupObj);
    setEditorState(editorState);
  };

  const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
    {
      ssr: false,
    }
  );

  const getFileBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const imageUploadCallback = async (file) => {
    try {
      const dataUrl = await getFileBase64(file);
      return { data: { link: dataUrl } };
    } catch (error) {
      return { data: { link: "" } };
    }
  };

  return (
    <div style={{ backgroundColor: "#fff", border: "1px solid grey" }}>
      <Editor
        onEditorStateChange={onEditorStateChange}
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list','image', 'textAlign', 'colorPicker', 'link','emoji',  'remove', 'history'],
          textAlign: { inDropdown: true },
          image: {
            uploadCallback: imageUploadCallback,
            previewImage: true,
          },
        }}
      />
    </div>
  );
}

export default CustomEditor;
