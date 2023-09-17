import { useState } from "react";
import { AppBar, Box, IconButton, MenuItem } from "@mui/material";
import { Drawer, List, ListItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  LetterN,
  LetterT,
  LetterT1,
  LetterD,
  LetterA,
  LetterT2,
  LetterA1,
} from "../assets/Logo";
import {
  SearchIconWrapper,
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInputBase,
  StyledSelect,
  StyledToolbar,
  StyledToolbar2,
} from "../assets/styled";
import { useDispatch } from "react-redux";
import { setGridInvisible } from "../redux/features/navbar/navbarSlice";

const Searchbar = () => {
  const [category, setCategory] = useState("");
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

  const dispatch = useDispatch();
  const changeGridInvisible = () => {
    dispatch(setGridInvisible());
  };
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <Box
        sx={{ flexGrow: 1, border: "none", borderBottom: "1px solid gray" }}
        onClick={changeGridInvisible}
      >
        <AppBar position="static" color="" sx={{ boxShadow: "none" }}>
          <StyledToolbar2>
            <Box
              sx={{
                display: {
                  xs: "flex",
                },
              }}
            >
              <div style={{ marginRight: "5px" }}>
                <LetterN />
                <LetterT />
                <LetterT1 />
              </div>
              <div>
                <LetterD />
                <LetterA />
                <LetterT2 />
                <LetterA1 />
              </div>
            </Box>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </StyledToolbar2>
          <div>
            <Drawer
              anchor="right"
              variant="temporary"
              open={isDrawerOpen}
              onClose={toggleDrawer}
              PaperProps={{ style: { width: "100%", maxWidth: "100vw" } }}
            >
              <List sx={{ width: { xs: "100vh", sm: "100%" } }}>
                {categories.map((category, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={toggleDrawer}
                    sx={{
                      borderBottom:
                        index === categories.length - 1
                          ? "3px solid #D9D9D9"
                          : "none",
                      mt: index === 0 ? 5 : "",
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" color="initial">
                      {category}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
          <StyledToolbar>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
                marginRight: {
                  sm: 3,
                  md: 3,
                  lg: 4,
                  xl: 4,
                },
              }}
            >
              <div style={{ marginRight: "5px" }}>
                <LetterN />
                <LetterT />
                <LetterT1 />
              </div>
              <div>
                <LetterD />
                <LetterA />
                <LetterT2 />
                <LetterA1 />
              </div>
            </Box>
            <StyledDiv>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <StyledForm variant={category == "" ? "filled" : "outlined"}>
                <StyledSelect
                  value={category}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Categories</em>
                  </MenuItem>
                  <MenuItem value={"Data"}>Data</MenuItem>
                  <MenuItem value={"Category Name"}>Category Name</MenuItem>
                  <MenuItem value={"Category Name"}>Category Name</MenuItem>
                  <MenuItem value={"Category Name"}>Category Name</MenuItem>
                  <MenuItem value={"Category Name"}>Category Name</MenuItem>
                </StyledSelect>
              </StyledForm>
            </StyledDiv>
            <StyledButton>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </StyledButton>
          </StyledToolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Searchbar;
