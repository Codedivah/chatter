import {
  Box,
  Card,
  Typography,
  IconButton,
  Drawer,
  TextField,
  Divider,
} from "@mui/material";
import React from "react";
import { MdBook, MdComment, MdHeartBroken } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import {
  getAllFeeds,
  likeFeed,
  PostComment,
  unlikeFeed,
} from "../../constant/redux/feeds/feedApi";
import {
  useAppDispatch,
  useAppSelector,
} from "../../constant/redux/hooks/index";
import { stringAvatar } from "../../constant/utils/utils";
import { Button } from "@mui/material";
import moment  from "moment"


const ForYou = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const { feeds } = useAppSelector((state) => state?.feeds);
  const [selected, setSelected] = React.useState("");
  const [comment, setComment] = React.useState("");
  

  function onClose() {
    setIsOpen(false);
  }

  React.useEffect(() => {
    dispatch(getAllFeeds());
  }, [dispatch]);

  return (
    <>
      {feeds?.map((item, idx: number) => {
        const { author, content, title, image, _id, likes, comments } = item;
        return (
          <Card className="shadow mt-5 p-8 " key={idx}>
            <Box className="w-[70%]">
              <Box className="flex gap-6 items-center">
                {author?.profilePic !== null ? (
                  <Box
                    component="img"
                    src={author?.profilePic}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <IconButton className="border border-solid border-[purple] w-10 h-10 ">
                    <Typography
                      variant="body1"
                      className="text-[16px] uppercase "
                    >
                      {stringAvatar(
                        `${author?.firstName || ""} ${author?.lastName || ""}`
                      )}
                    </Typography>
                  </IconButton>
                )}
                <Box className="flex flex-col gap-3 ">
                  <Typography variant="h6" className="font-bold">
                    {author?.firstName} {author?.lastName}
                  </Typography>
                  <Typography variant="body1" className="font-medium ">
                    Product designer {moment(item?.createdAt).format("ll")}
                  </Typography>
                </Box>
              </Box>

              <Box className="mt-5 space-y-3">
                <Typography variant="h4">{title}</Typography>
                <Typography variant="subtitle1">Lorem, ipsum dolor.</Typography>
                <Typography variant="body1">{content}</Typography>
                <Box
                  component="img"
                  src={image}
                  className="w-full h-[300px] rounded-lg mt-4 object-cover"
                />
                <Box className="flex items-center justify-between mt-2">
                  <IconButton
                    className="flex gap-2 text-base items-center bg-black/0 hover:bg-black/0"
                    onClick={() => {
                      if (likes?.includes(author?._id)) {
                        dispatch(unlikeFeed(_id));
                      } else {
                        dispatch(likeFeed(_id));
                      }
                    }}
                  >
                    {likes?.includes(author?._id) ? <AiFillLike /> : <BiLike />}
                    <Typography>
                      {likes?.length} {likes?.length > 1 ? "likes" : "like"}
                    </Typography>
                  </IconButton>
                  <IconButton
                    className="flex gap-2 text-base items-center"
                    onClick={() => {
                      setSelected(_id);
                      setIsOpen(true);
                    }}
                  >
                    <MdComment />
                    <Typography>{comments?.length} comments</Typography>
                  </IconButton>
                  <Box className="flex gap-2 text-base items-center">
                    <MdBook />
                    <Typography>2000 views</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        );
      })}

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
        PaperProps={{
          sx: { height: "100vh", width: 500 },
        }}
      >
        <Box className="p-4">
          <Typography variant="body1" className="font-[600] text-[20px]">
            Responses(18)
          </Typography>
          <Box>
            <TextField
              variant="outlined"
              label=""
              placeholder="What are your thoughts?"
              className="w-full mt-10"
              value={comment}
              onChange={(e: any) => setComment(e.target.value)}
            />
            <Button
              onClick={() => {
                const payload = {
                  id: selected,
                  content: comment,
                };
                dispatch(PostComment(payload));
              }}
            >
              Submit
            </Button>
          </Box>

          <Box className="mt-16">
            <Button>Most recent </Button>

            <Divider></Divider>
            <Box className="flex gap-4 items-center py-4">
              {false ? (
                <Box
                  component="img"
                  // src={author?.profilePic}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <IconButton className="border border-solid border-[purple] w-10 h-10 ">
                  <Typography
                    variant="body1"
                    className="text-[16px] uppercase "
                  >
                    {stringAvatar(`${"Badmus" || ""} ${"Badmus" || ""}`)}
                  </Typography>
                </IconButton>
              )}
              <Box className="flex flex-col gap-1 ">
                <Typography variant="body1" className="font-bold">
                  ayobami
                </Typography>
                <Typography variant="caption" className="font-medium ">
                  May 2023
                </Typography>
              </Box>
            </Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, numquam nulla hic at quis vero facilis sit pariatur
              doloribus unde rerum dolore impedit eius dignissimos maiores sed
              laboriosam dolorum praesentium.
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default ForYou;
