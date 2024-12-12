"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaSnapchat,
  FaPinterest,
} from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const ParallaxPage = () => {
  const [backgroundPositionY, setBackgroundPositionY] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setBackgroundPositionY(scrollY * 0.3);

      const cardPosition = document.getElementById("user-card")?.getBoundingClientRect();
      if (cardPosition && cardPosition.top <= 0) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const icons = [
    { component: FaFacebook, color: "#3b5998" },
    { component: FaTwitter, color: "#1DA1F2" },
    { component: FaLinkedin, color: "#0077b5" },
    { component: FaInstagram, color: "#e4405f" },
    { component: FaYoutube, color: "#FF0000" },
    { component: FaSnapchat, color: "#FFFC00" },
    { component: FaPinterest, color: "#E60023" },
  ];

  const socialIcons = Array.from({ length: 48 }, (_, index) => icons[index % icons.length]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "200vh",
        overflow: "hidden",
      }}
    >

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh", // Covers the full height of the viewport
          backgroundImage: 'url(/assets/marioback.jpg)', // Replace with your background image
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `center ${backgroundPositionY}px`, // Parallax effect using background position
          filter: isBlurred ? "blur(5px)" : "none", // Apply blur dynamically
          transition: "filter 0.3s ease", // Smooth transition for blur effect
        }}
      />

      {/* Content Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1, // Ensures content is above the background
          pt: 8, // Padding at the top to avoid overlap
        }}
      >
        {/* User Card Section */}
        <Box
          id="user-card" // Use this ID to track the card's position
          sx={{
            minHeight: "70vh", // Increased height of the card
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column", // Align content vertically
            mt: 5, // Reduced margin-top to decrease the gap
          }}
        >
          <Box
            sx={{
              width: { xs: "75%", sm: "80%", md: "60%", lg: "40%" }, // Responsive widths
              maxWidth: 350, // Max width for larger screens
              padding: 3,
              backgroundColor: "rgb(31, 33, 48)",
              borderRadius: 2,
              boxShadow: 3,
              textAlign: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 90,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
              }}
            >
              <img src="/assets/user.jpg" style={{ width: '100px', borderRadius: '50%' }} />
            </Box>

            <Typography variant="h5" fontWeight="bold" sx={{ color: "white", marginTop: "40px" }}>
              Sanjay Malhotra
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", opacity: 0.8 }}>
              Software Developer @ Taponn
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: 1, marginBottom: 2, color: "white", opacity: 0.8 }}
            >
              I am a passionate and results-driven software developer with a strong foundation in building efficient.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between", // Align buttons side by side
                gap: 2, // Space between the buttons
                marginTop: 2, // Space above the buttons
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  width: "68%",
                  textTransform: "none",
                  ml: 2,
                  color: 'white',
                  background: 'rgb(31, 33, 48)',
                  borderRadius: 5,
                }}
              >
                Exchange Contact
              </Button>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "rgb(31, 33, 48)", // Button background
                    color: "white", // Icon color
                    width: 50, // Set a fixed width for the circle
                    height: 50, // Set a fixed height for the circle
                    borderRadius: "50%", // Make it circular
                    boxShadow: 3, // Add some shadow
                    ml: -12,
                    '&:hover': {
                      backgroundColor: "rgb(50, 55, 70)", // Darker shade on hover
                    },
                  }}
                >
                  <IoMdContact size={30} />
                </IconButton>
              </Box>

            </Box>
          </Box>
        </Box>


        {/* Social Media Icons Section */}
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgb(31, 33, 48)",
            padding: "2rem 1.8rem",
            marginTop: "-80px",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: 2, // Space between icons
              width: "100%",
              maxWidth: 1100,
              gridTemplateColumns: {
                xs: "repeat(4, 1fr)", // 3 icons per row for extra-small and small screens
                sm: "repeat(3, 1fr)", // 3 icons per row for small screens
                md: "repeat(4, 1fr)", // 4 icons per row for medium screens
                lg: "repeat(4, 1fr)", // 4 icons per row for large screens
              },
            }}
          >
            {socialIcons.map((IconData, index) => {
              const { component: Icon, color } = IconData;
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center", // Center the icons horizontally
                    alignItems: "center",
                    width: 60,
                    height: 60,
                    cursor: "pointer",
                  }}
                >
                  <Icon size={60} color={color} />
                </Box>
              );
            })}
          </Box>

          <Button
            sx={{
              borderRadius: 5,
              background: "rgb(25, 168, 196)",
              color: "white",
              mt: 5,
              p: 1,
              width: 200,
            }}
          >
            Open in Taponn
          </Button>
        </Box>



      </Box>
    </Box>
  );
};

export default ParallaxPage;
