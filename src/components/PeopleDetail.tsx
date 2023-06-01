import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import axiosClient from "../api";
import { usePopularItem } from "../hooks/usePopularItem";

const PeopleDetails = () => {
  const [people, setPeople] = useState<PeopleResult | undefined>();
  const location = useLocation();
  const { savePopularItem } = usePopularItem();

  useEffect(() => {
    axiosClient.get(location.pathname).then((response) => {
      setPeople(response.data);
      savePopularItem(response.data);
    });
  }, [location, savePopularItem]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">{people?.name}</Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Height</Typography>
          <Typography variant="body1">{people?.height}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Mass</Typography>
          <Typography variant="body1">{people?.mass}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Hair Color</Typography>
          <Typography variant="body1">{people?.hair_color}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Skin Color</Typography>
          <Typography variant="body1">{people?.skin_color}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Eye Color</Typography>
          <Typography variant="body1">{people?.eye_color}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Birth Year</Typography>
          <Typography variant="body1">{people?.birth_year}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Gender</Typography>
          <Typography variant="body1">{people?.gender}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Homeworld</Typography>
          <Typography variant="body1">{people?.homeworld}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Films</Typography>
          <Typography variant="body1">{people?.films}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Species</Typography>
          <Typography variant="body1">{people?.species}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Vehicles</Typography>
          <Typography variant="body1">{people?.vehicles}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Starships</Typography>
          <Typography variant="body1">{people?.starships}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Created</Typography>
          <Typography variant="body1">{people?.created}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Edited</Typography>
          <Typography variant="body1">{people?.edited}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">URL</Typography>
          <Typography variant="body1">
            <a href={people?.url}>{people?.url}</a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PeopleDetails;
