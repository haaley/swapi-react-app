import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import colorConfigs from "../colors";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const location = useLocation();

  if (item?.path?.includes(":id")) {
    console.log(location.pathname);
    return null;
  }
  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        backgroundColor:
          location.pathname === item.path
            ? colorConfigs.sidebar.activeBg
            : "unset",
        paddingY: "12px",
        paddingX: "24px",
      }}
    >
      <ListItemIcon
        sx={{
          color: colorConfigs.sidebar.color,
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
