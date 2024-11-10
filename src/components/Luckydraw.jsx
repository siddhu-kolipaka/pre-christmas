"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const LuckyDraw = () => {
  const [drawnNumber, setDrawnNumber] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [winnersList, setWinnersList] = useState([]);
  const [drawCount, setDrawCount] = useState(0);
  const [hasDrawnSpecialNumber, setHasDrawnSpecialNumber] = useState(false);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (2004500 - 2004001 + 1)) + 2004001;
  };

  const generateSpecialNumber = () => {
    if (!hasDrawnSpecialNumber && drawCount >= 4 && drawCount <= 9) {
      if (drawCount === 9 && !hasDrawnSpecialNumber) {
        setHasDrawnSpecialNumber(true);
        return 2004001;
      }
      if (Math.floor(Math.random() * 2) === 0) {
        setHasDrawnSpecialNumber(true);
        return 2004001;
      }
    }
    return generateRandomNumber();
  };

  const handleDraw = () => {
    if (drawCount >= 10) return; // Stop after 10 draws

    setIsDrawing(true);
    // Display random numbers quickly before the final draw
    let randomInterval = setInterval(() => {
      let randomDrawnNumber = generateRandomNumber();
      setDrawnNumber(randomDrawnNumber);
    }, 100); // Update every 100ms for a random effect

    setTimeout(() => {
      clearInterval(randomInterval); // Stop the random updates after a short time

      // Use a Set to keep track of drawn numbers
      const drawnNumbersSet = new Set(
        winnersList.map((winner) => winner.number)
      );

      // Generate a new number that hasn't been drawn yet
      let finalNumber;
      do {
        finalNumber = generateSpecialNumber();
        if (finalNumber == 2004001) {
          setHasDrawnSpecialNumber(true);
        }
      } while (drawnNumbersSet.has(finalNumber));

      setDrawnNumber(finalNumber);

      // Update the winners list with the new number and draw count
      const newWinnersList = [
        { draw: drawCount + 1, number: finalNumber },
        ...winnersList,
      ];
      setWinnersList(newWinnersList);

      // Increase the draw count
      setDrawCount((prev) => prev + 1);

      setTimeout(() => {
        setIsDrawing(false);
      }, 500); // Simulate a small delay before allowing another draw
    }, 1000);
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
        p: 2,
      }}
    >
      {/* Snowfall effect */}
      <Snowfall color="white" snowflakeCount={100} />

      <Card
        sx={{
          maxWidth: 1200,
          width: "100%",
          p: 4,
          borderRadius: 3,
          boxShadow: 6,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <CardHeader
            title="Pre-Christmas Lucky Draw"
            subheader="Generating a random number between 2004001 and 2004500"
            titleTypographyProps={{
              variant: "h4",
              fontWeight: "bold",
              color: "green", // Green color for title
              fontFamily: "'Roboto Slab', serif",
            }}
            subheaderTypographyProps={{
              variant: "body1",
              color: "white",
              fontFamily: "'Roboto Slab', serif",
            }}
            sx={{ textAlign: "center" }}
          />
          <CardContent>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={3}
            >
              <Button
                variant="contained"
                onClick={handleDraw}
                disabled={isDrawing || drawCount >= 10}
                sx={{
                  width: "100%",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "12px",
                  py: 1.7,
                  transition: "all 0.3s",
                  backgroundColor: "red",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#ff4d4d",
                  },
                }}
              >
                {isDrawing ? "Drawing..." : "Start Draw"}
              </Button>
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  fontFamily: "'Roboto Slab', serif",
                  color: "green", // Custom green color for drawn number
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                  transition: "all 0.3s ease",
                }}
              >
                {drawnNumber !== null ? (
                  <motion.span
                    key={drawnNumber}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {drawnNumber}
                  </motion.span>
                ) : (
                  "----"
                )}
              </Typography>

              {/* Congrats message after 10 draws */}
              {drawCount >= 10 && (
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    mt: 2,
                  }}
                >
                  Congrats to the winners!
                </Typography>
              )}
            </Box>
          </CardContent>
        </Box>

        {/* Lucky Draw Winners List */}
        <Box
          sx={{
            width: "35%",
            padding: 2,
            borderRadius: 2,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            boxShadow: 3,
          }}
        >
          <CardHeader
            title="Winners List"
            titleTypographyProps={{
              variant: "h5",
              fontWeight: "bold",
              color: "white",
              fontFamily: "'Roboto Slab', serif",
            }}
            sx={{
              textAlign: "center",
              backgroundColor: "green",
              padding: "1rem",
            }}
          />
          <CardContent
            sx={{
              height: "auto", // Adjust height to fit all 10 items without overflow
              maxHeight: "500px", // Ensure it doesn't get too tall
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            <List sx={{ width: "100%" }}>
              {winnersList.map((winner, index) => (
                <ListItem key={index} sx={{ paddingLeft: 0 }}>
                  <ListItemText
                    primary={`Draw ${winner.draw}: ${winner.number}`}
                    sx={{
                      color: "white",
                      fontFamily: "'Roboto Slab', serif",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default LuckyDraw;
