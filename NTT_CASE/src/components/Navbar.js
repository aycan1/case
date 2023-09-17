import { useState } from "react";
import { Grid, Box, Tabs, Tab, Menu, MenuItem, Link } from "@mui/material";
import categoryImage from "../assets/categoryImg.png";
import { menuItems } from "../assets/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  setGridInvisible,
  setGridVisible,
} from "../redux/features/navbar/navbarSlice";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(e) => {
        e.preventDefault();
      }}
      {...props}
    />
  );
}

const Navbar = () => {
  const [value, setValue] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const { isGridVisible } = useSelector((state) => state.isGridVisible);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeGridVisible = () => {
    dispatch(setGridVisible());
  };
  const changeGridInvisible = () => {
    dispatch(setGridInvisible());
  };

  const handleReload = (e) => {
    e.preventDefault();
    changeGridInvisible();
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          marginTop: "5px",
        }}
      >
        <Tabs
          value={value}
          scrollButtons
          variant="scrollable"
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          {menuItems.map((_, index) => (
            <LinkTab
              key={index}
              label="Menu Item"
              style={{ textTransform: "none" }}
              onClick={changeGridVisible}
            />
          ))}
        </Tabs>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "block", md: "none" },
          marginTop: "5px",
        }}
      >
        <Box sx={{ marginTop: "5px" }}>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            {menuItems.slice(0, 6).map((_, index) => (
              <LinkTab
                key={index}
                label="Menu Item"
                style={{ textTransform: "none" }}
                onClick={changeGridVisible}
              />
            ))}
            <LinkTab
              label="More"
              sx={{ textTransform: "none" }}
              onClick={handleClick}
            />
          </Tabs>
        </Box>
        <div>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              "& .MuiList-root.MuiList-padding.MuiMenu-list.css-6hp17o-MuiList-root-MuiMenu-list":
                {
                  backgroundColor: "#F4F5F6",
                  color: "#6A6D70",
                  "& :hover": {
                    backgroundColor: "gray",
                    color: "white",
                  },
                },
            }}
          >
            {menuItems.slice(0, 3).map((_, index) => (
              <MenuItem key={index} onClick={handleClose}>
                Menu Item
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: "#F4F5F6",
            p: 5,
            position: "absolute",
            zIndex: 999,
            mx: 9,
            display: { xs: "none", md: isGridVisible ? "grid" : "none" },
          }}
        >
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <Box sx={{ display: "flex" }}>
                <Grid item sm={6}>
                  <div style={{ paddingLeft: "25%" }}>
                    <Box
                      sx={{
                        typography: "subtitle1",
                        fontWeight: "bold",
                        pb: 1,
                      }}
                    >
                      <Link
                        href="/"
                        underline="none"
                        color="inherit"
                        sx={{ "&:hover": { color: "#0059BC" } }}
                        onClick={handleReload}
                      >
                        Header
                      </Link>
                    </Box>
                    {menuItems.slice(0, 8).map((_, index) => (
                      <Box key={index} sx={{ typography: "subtitle1", pb: 1 }}>
                        <Link
                          href="/"
                          underline="none"
                          color="inherit"
                          sx={{ "&:hover": { color: "#0059BC" } }}
                          onClick={handleReload}
                        >
                          Subheader
                        </Link>
                      </Box>
                    ))}
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div style={{ paddingLeft: "25%" }}>
                    <Box
                      sx={{
                        typography: "subtitle1",
                        fontWeight: "bold",
                        pb: 1,
                      }}
                    >
                      <Link
                        href="/"
                        underline="none"
                        color="inherit"
                        sx={{ "&:hover": { color: "#0059BC" } }}
                        onClick={handleReload}
                      >
                        Header
                      </Link>
                    </Box>
                    {menuItems.slice(0, 8).map((_, index) => (
                      <Box key={index} sx={{ typography: "subtitle1", pb: 1 }}>
                        <Link
                          href="/"
                          underline="none"
                          color="inherit"
                          sx={{ "&:hover": { color: "#0059BC" } }}
                          onClick={handleReload}
                        >
                          Subheader
                        </Link>
                      </Box>
                    ))}
                  </div>
                </Grid>
              </Box>
            </Grid>
            <Grid item sm={8}>
              <Box>
                <img
                  src={categoryImage}
                  alt="Image"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
export default Navbar;
