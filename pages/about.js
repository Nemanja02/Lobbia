import React, { Component } from "react";
import classes from "./styles/Index.module.scss";
import Header from "../components/Header/Header";
import { Typography, TextField, Container, CardMedia } from "@material-ui/core";
import { typography, textAlign } from "@material-ui/system";
export class about extends Component {
  inputStyle = {
    width: "calc(100% - 20px)",
    margin: "10px"
  };
  paragraphStyle = {
    color: "white",
    fontSize: "24px",
    width: "50%",
    margin: "10px",
    wordBreak: "break-all"
  };
  imgStyle = {
    width: "65%",
    float: "right",
    margin: "10px"
  };
  titleStyle = {
    color: "white",
    fontSize: "36px",
    margin: "10px"
  };
  render() {
    return (
      <>
        <div className={classes.main}>
          <Header page="about" />
          <Container maxWidth="lg" fixed>
            <br />
            {/* Neki quote nesto nmp */}
            <Typography
              variant="h2"
              style={{ color: "white", textAlign: "center", fontSize: "45px" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              nostrum.
            </Typography>
            <br />
            <br />
            {/* Neki naslov fzn o nama ili nesto tako(nije obavezno) */}
            <Typography variant="subtitle1" style={this.titleStyle}>
              Paragraph Title
            </Typography>
            {/* Neki tekst/opis */}
            <Typography style={this.paragraphStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              ipsam maiores eaque dolorem beatae inventore sunt, sequi officiis
              earum quis. Enim facere mollitia pariatur cupiditate culpa est
              explicabo. Quaerat, eum.
            </Typography>
            {/* Slika cisto da bude nesto */}
            <img
              src="https://images.pexels.com/photos/264706/pexels-photo-264706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              style={this.imgStyle}
            />
            <div style={{ clear: "both" }}></div>
            {/* I ovo samo ako treba jos nesto da se doda */}
            <Typography variant="subtitle1" style={this.titleStyle}>
              Paragraph Title
            </Typography>
            <Typography style={this.paragraphStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              ipsam maiores eaque dolorem beatae inventore sunt, sequi officiis
              earum quis. Enim facere mollitia pariatur cupiditate culpa est
              explicabo. Quaerat, eum.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Animi ipsam maiores eaque dolorem beatae
              inventore sunt, sequi officiis earum quis. Enim facere mollitia
              pariatur cupiditate culpa est explicabo. Quaerat, eum.
            </Typography>
            <img
              src="https://images.pexels.com/photos/264706/pexels-photo-264706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              style={this.imgStyle}
            />
          </Container>
        </div>
      </>
    );
  }
}

export default about;
