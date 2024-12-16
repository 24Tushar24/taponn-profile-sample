"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaSnapchat, FaPinterest } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { Parallax } from "react-parallax";

const ParallaxPage = () => {
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
      <Parallax
        bgImage="/assets/marioback.jpg"
        strength={200}
        blur={0}
        bgImageStyle={{
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
        }}
        renderLayer={(percentage) => (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: `translateY(${percentage * 0.3}px)`,
            }}
          />
        )}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            pt: 8,
          }}
        >
          <Box
            id="user-card"
            sx={{
              minHeight: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: 5,
            }}
          >
            <Box
              sx={{
                width: { xs: "75%", sm: "80%", md: "60%", lg: "40%" },
                maxWidth: 350,
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
                <img src="/assets/user.jpg" style={{ width: "100px", borderRadius: "50%" }} />
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
                I am a passionate and results-driven software developer with a strong foundation in
                building efficient.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                  marginTop: 2,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    width: "68%",
                    textTransform: "none",
                    ml: 2,
                    color: "white",
                    background: "rgb(31, 33, 48)",
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
                      backgroundColor: "rgb(31, 33, 48)",
                      color: "white",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      boxShadow: 3,
                      ml: -12,
                      "&:hover": {
                        backgroundColor: "rgb(50, 55, 70)",
                      },
                    }}
                  >
                    <IoMdContact size={30} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>

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
                gap: 2,
                width: "100%",
                maxWidth: 1100,
                gridTemplateColumns: {
                  xs: "repeat(4, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(4, 1fr)",
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
                      justifyContent: "center",
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
      </Parallax>
    </Box>
  );
};

export default ParallaxPage;
