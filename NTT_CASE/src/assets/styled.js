import {
  styled,
  Button,
  Toolbar,
  InputBase,
  FormControl,
  Select,
} from "@mui/material";

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: theme.spacing(2),
    boxSizing: "border-box",
    border: "1px solid gray",
    height: "40px",
    [theme.breakpoints.up("xs")]: {
      borderRight: "none",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      width: "200px",
    },
    [theme.breakpoints.up("sm")]: {
      border: "1px solid gray",
      width: "340px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(1),
      width: "500px",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(1),
      width: "635px",
    },
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#0059BC",
  color: "white",
  [theme.breakpoints.up("xs")]: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: "106px",
    height: "40px",
  },
  [theme.breakpoints.up("sm")]: {
    borderRadius: theme.shape.borderRadius,
    width: "110px",
    height: "40px",
    marginLeft: `calc(1em + ${theme.spacing(1)})`,
  },
  "&:hover": {
    backgroundColor: "#0059BC",
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("sm")]: {
    justifyContent: "space-evenly",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
  },
}));

export const StyledToolbar2 = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const StyledForm = styled(FormControl)(() => ({
  boxSizing: "border-box",
  position: "absolute",
  top: "0",
  right: "0",
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  height: "40px",
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "block",
    width: "160px",
  },
  [theme.breakpoints.up("md")]: {
    width: "180px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "180px",
  },
  "& .MuiInputBase-input": {
    paddingTop: "10px",
    paddingLeft: "20px",
  },
}));

export const StyledDiv = styled("div")(() => ({
  display: "flex",
  position: "relative",
}));
