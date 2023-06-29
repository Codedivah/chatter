import { Box, Button, Typography } from "@mui/material";
import { convertToRaw, EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ControlledTextInput from "../shared/textInput/ControlledTextInput";
import { useForm } from "react-hook-form";
import { IcreateFeeds } from "../../constant/validation/types";
import {
  feedDefaultValues,
  feedsResolver,
} from "../../constant/validation/validation";
import { createFeeds } from "../../constant/redux/feeds/feedApi";
import { useAppDispatch } from "../../constant/redux/hooks/index";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const AddPost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [post, setPost] = useState(() => EditorState.createEmpty());

  // const [postMarkup, setPostMarkup] = useState("");

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<IcreateFeeds>({
    defaultValues: feedDefaultValues,
    resolver: feedsResolver,
  });

  const { image } = watch();

  // console.log(errors);

  const handlePost = (post: any) => {
    setPost(post);
    const post_text = draftToHtml(convertToRaw(post.getCurrentContent()));
    // setPostMarkup(post_text);
    setValue("content", post_text);
  };

  const onSubmit = async (values: IcreateFeeds) => {
    const res = await dispatch(createFeeds(values));

    if (res?.payload?.status === "success") {
      navigate(-1);
      addToast(res?.payload?.message, { appearance: "success" });
    }
  };

  return (
    <Box className="w-11/12 p-2 border-2 border-solid border-gray-300 h-full mx-auto my-5">
      <Box className="w-full flex items-center justify-end mb-5">
        <Button
          variant="contained"
          className="bg-violet-700"
          onClick={handleSubmit(onSubmit)}
        >
          Publish
        </Button>
      </Box>
      <Box>
        <ControlledTextInput control={control} name="title" label="Title" />

        <Box>
          <Button
            variant="outlined"
            component="label"
            className="w-full h-[50px] mb-7"
          >
            <p>Upload Image for post</p>
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(e) => {
                const reader = new FileReader();
                reader.onload = () => {
                  const uploadedImage = reader.result;
                  setValue("image", uploadedImage);
                  // console.log(uploadedImage);
                };
                reader.readAsDataURL(e.target.files[0]);
              }}
            />
          </Button>

          {image && <Box component="img" src={image} />}
        </Box>
      </Box>

      <Box>
        <Typography variant="body1">Content</Typography>
        <Editor
          onEditorStateChange={handlePost}
          editorState={post}
          toolbar={{
            emoji: {
              emoji: true,
            },

            font: {
              family: {
                options: ["Arial", "Georgia", "Impact", "Tahoma", "Verdana"],
              },
            },
            heading: {
              options: [1, 2, 3, 4, 5, 6],
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AddPost;
