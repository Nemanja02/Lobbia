import React, { Component } from "react";
import classes from "./styles/About.module.scss";
import Header from "../components/Header/Header";
import { Typography, TextField, Container, CardMedia } from "@material-ui/core";
import { typography, textAlign } from "@material-ui/system";
export class about extends Component {
  render() {
    return (
      <>
        <div className={classes.main}>
          <Header page="about" />
          <Container maxWidth="lg" fixed>
            {/* Neki quote nesto nmp */}
            <Typography variant="h2" className={classes.quote}>
              About Lobbia
            </Typography>
            {/* Neki naslov fzn o nama ili nesto tako(nije obavezno) */}
            <div className={classes.title}>Paragraph title</div>
            {/* Neki tekst/opis */}
            <p className={classes.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              ipsam maiores eaque dolorem beatae inventore sunt, sequi officiis
              earum quis. Enim facere mollitia pariatur cupiditate culpa est
              explicabo. Quaerat, eum.
            </p>
            {/* Slika cisto da bude nesto */}
            <img src="index/IndexBG.svg" className={classes.photo} alt="Background photo"/>
          </Container>
        </div>
      </>
    );
  }
}

export default about;
