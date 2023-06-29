// import { ImFeed } from "react-icons/im";
import { MdOutlineRssFeed } from "react-icons/md";

export type IOverviewMenu = {
  key: string;
  label: string;
  path: string;
  icon: IconType;
};

export const overviewMenu: IOverviewMenu[] = [
  {
    key: "feed",
    label: "Feed",
    path: "/",
    icon: <MdOutlineRssFeed />,
  },
  {
    key: "bookmarks",
    label: "Bookmarks",
    path: "/bookmarks",
    icon: <MdOutlineRssFeed />,
  },
  {
    key: "team-blogs",
    label: "Team blogs",
    path: "/team-blogs",
    icon: <MdOutlineRssFeed />,
  },
  {
    key: "drafts",
    label: "Drafts",
    path: "/drafts",
    icon: <MdOutlineRssFeed />,
  },
  {
    key: "analytics",
    label: "Analytics",
    path: "/analytics",
    icon: <MdOutlineRssFeed />,
  },
];
type ITrendingTags = {
  key: string;
  label: string;
  path: string;
  icon: IconType;
};

export const trendingTag: ITrendingTags[] = [
  {
    key: "progtamming",
    label: "Programming",
    path: "/programming",
    icon: <MdOutlineRssFeed />,
  },
  {
    key: "data-science",
    label: "Datascience",
    path: "/datascience",
    icon: <MdOutlineRssFeed />,
  },
  {
    key: "machine-learning",
    label: "Machine Learning",
    path: "/machine-learning",
    icon: <MdOutlineRssFeed />,
  },
  {
    key: "politics",
    label: "Politics",
    path: "/politics",
    icon: <MdOutlineRssFeed />,
  },
  {
    key: "see-all",
    label: "see-all",
    path: "/see-all",
    icon: <MdOutlineRssFeed />,
  },
];

export const personal = [
  {
    key: "account",
    label: "Account",
    path: "/account",
    icon: <MdOutlineRssFeed />,
  },
  {
    key: "notification",
    label: "Notifications",
    path: "/notifications",
    icon: <MdOutlineRssFeed />,
  },
];
