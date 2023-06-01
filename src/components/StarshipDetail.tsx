import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import axiosClient from "../api";
import { usePopularItem } from "../hooks/usePopularItem";

const StarshipDetails = () => {
  const [starship, setStarship] = useState<StarshipResult | undefined>();
  const location = useLocation();
  const { savePopularItem } = usePopularItem();

  useEffect(() => {
    axiosClient.get(location.pathname).then((response) => {
      setStarship(response.data);
      savePopularItem(response.data);
    });
  }, [location, savePopularItem]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">{starship?.name}</Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Model</Typography>
          <Typography variant="body1">{starship?.model}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Manufacturer</Typography>
          <Typography variant="body1">{starship?.manufacturer}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Cost (in credits)</Typography>
          <Typography variant="body1">{starship?.cost_in_credits}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Length</Typography>
          <Typography variant="body1">{starship?.length}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Max Atmosphering Speed</Typography>
          <Typography variant="body1">
            {starship?.max_atmosphering_speed}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Crew</Typography>
          <Typography variant="body1">{starship?.crew}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Passengers</Typography>
          <Typography variant="body1">{starship?.passengers}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Cargo Capacity</Typography>
          <Typography variant="body1">{starship?.cargo_capacity}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Consumables</Typography>
          <Typography variant="body1">{starship?.consumables}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Starship Class</Typography>
          <Typography variant="body1">{starship?.starship_class}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Hyperdrive Rating</Typography>
          <Typography variant="body1">{starship?.hyperdrive_rating}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">MGLT</Typography>
          <Typography variant="body1">{starship?.MGLT}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Pilots</Typography>
          <Typography variant="body1">{starship?.pilots}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Films</Typography>
          <Typography variant="body1">{starship?.films}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Created</Typography>
          <Typography variant="body1">{starship?.created}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Edited</Typography>
          <Typography variant="body1">{starship?.edited}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">URL</Typography>
          <Typography variant="body1">
            <a href={starship?.url}>{starship?.url}</a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default StarshipDetails;
