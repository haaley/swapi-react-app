import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import axiosClient from "../api";
import { usePopularItem } from "../hooks/usePopularItem";

const SpeciesDetails = () => {
  const [species, setSpecies] = useState<SpeciesResult | undefined>();
  const location = useLocation();
  const { savePopularItem } = usePopularItem();

  useEffect(() => {
    axiosClient.get(location.pathname).then((response) => {
      setSpecies(response.data);
      savePopularItem(response.data);
    });
  }, [location, savePopularItem]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">{species?.name}</Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Classification</Typography>
          <Typography variant="body1">{species?.classification}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Designation</Typography>
          <Typography variant="body1">{species?.designation}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Average Height</Typography>
          <Typography variant="body1">{species?.average_height}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Skin Colors</Typography>
          <Typography variant="body1">{species?.skin_colors}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Hair Colors</Typography>
          <Typography variant="body1">{species?.hair_colors}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Eye Colors</Typography>
          <Typography variant="body1">{species?.eye_colors}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Average Lifespan</Typography>
          <Typography variant="body1">{species?.average_lifespan}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Homeworld</Typography>
          <Typography variant="body1">{species?.homeworld}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Language</Typography>
          <Typography variant="body1">{species?.language}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">People</Typography>
          <Typography variant="body1">{species?.people}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Films</Typography>
          <Typography variant="body1">{species?.films}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Created</Typography>
          <Typography variant="body1">{species?.created}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Edited</Typography>
          <Typography variant="body1">{species?.edited}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">URL</Typography>
          <Typography variant="body1">
            <a href={species?.url}>{species?.url}</a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SpeciesDetails;
