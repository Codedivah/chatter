import { Box, Button, Card, Typography } from "@mui/material";
import { MdEditRoad } from "react-icons/md";
import {
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ForYou from "../../components/home/ForYou";

const LinkTab = () => {
  const feedLinks = [
    {
      label: "Feed",
      path: "/",
    },
    {
      label: "Featured",
      path: "/featured",
    },
    {
      label: "Recent",
      path: "/recent",
    },
  ];
  return (
    <Box className='flex items-center justify-between shadow mt-10  w-full z-[999] bg-white'>
      {feedLinks.map((f) => {
        return (
          <NavLink
            className={({ isActive }) => {
              console.log(isActive);
              return `${
                isActive ? "border-b-purple-950 border-b-4 border-solid" : ""
              }`;
            }}
            to={f.path}
            key={f.path}
          >
            {f.label}
          </NavLink>
        );
      })}
    </Box>
  );
};

const Home = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  function renderScreen() {
    switch (pathname) {
      case "/":
        return <ForYou />;

      case "/featured":
        return <Box>Featured</Box>;
      case "/recent":
        return <Box>Recent</Box>;

      default:
        return <ForYou />;
    }
  }

  return (
    <Card className='m-8 px-16 py-2  shadow-md z-[50] bg-white'>
      <Box className='flex items-center justify-between '>
        <Box className='flex flex-col gap-3'>
          <Typography variant='h6'>Feed</Typography>
          <Typography variant='caption'>
            Explore diffrent content you'd love
          </Typography>
        </Box>
        <Button
          className='px-5 py-3 bg-purple-500 text-white'
          variant='contained'
          onClick={() => navigate("/create")}
        >
          <MdEditRoad className='text-xl' />
          Post a content
        </Button>
      </Box>

      <LinkTab />
      <Box className='z-10'>{renderScreen()}</Box>
    </Card>
  );
};

export default Home;
