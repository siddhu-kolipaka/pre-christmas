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

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (20240400 - 20240001 + 1)) + 20240001;
  };

  const handleDraw = () => {
    if (drawCount >= 30) return;

    setIsDrawing(true);
    let randomInterval = setInterval(() => {
      let randomDrawnNumber = generateRandomNumber();
      setDrawnNumber(randomDrawnNumber);
    }, 100);

    setTimeout(() => {
      clearInterval(randomInterval);

      const drawnNumbersSet = new Set(
        winnersList.map((winner) => winner.number)
      );

      let finalNumber;
      do {
        finalNumber = generateRandomNumber();
      } while (drawnNumbersSet.has(finalNumber));

      setDrawnNumber(finalNumber);

      const newWinnersList = [
        { draw: drawCount + 1, number: finalNumber },
        ...winnersList,
      ];
      setWinnersList(newWinnersList);

      setDrawCount((prev) => prev + 1);

      setTimeout(() => {
        setIsDrawing(false);
      }, 500);
    }, 3000);
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
            subheader="Generating a random number between 20240001 and 20240500"
            titleTypographyProps={{
              variant: "h4",
              fontWeight: "bold",
              color: "green",
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
                disabled={isDrawing || drawCount >= 30}
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
                  color: "green",
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

              {drawCount >= 30 && (
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
              height: "auto",
              maxHeight: "500px",
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
