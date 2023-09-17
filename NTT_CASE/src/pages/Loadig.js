import { CircularProgress, Box, Typography } from "@mui/material";

const Loadig = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F4F5F6",
        color: "#0059BC",
        borderRadius: "8px",
        boxShadow: "0px 0px 8px rgba(0, 89, 188, 0.2)",
        padding: "32px",
      }}
    >
      <CircularProgress
        sx={{ color: "#0059BC", mb: 2, size: 60 }}
        thickness={5}
      />
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Yükleniyor...
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Lütfen bekleyin, sayfa yükleniyor.
      </Typography>
    </Box>
  );
};

export default Loadig;
