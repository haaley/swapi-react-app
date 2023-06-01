import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { usePopularItem } from "../hooks/usePopularItem";
import axiosClient from "../api";

const PlanetDetails = () => {
  const [planet, setPlanet] = useState<PlanetResult | undefined>();
  const location = useLocation();
  const { savePopularItem } = usePopularItem();

  useEffect(() => {
    axiosClient.get(location.pathname).then((response) => {
      setPlanet(response.data);
      savePopularItem(response.data);
    });
  }, [location, savePopularItem]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">{planet?.name}</Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Rotation Period</Typography>
          <Typography variant="body1">{planet?.rotation_period}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Orbital Period</Typography>
          <Typography variant="body1">{planet?.orbital_period}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Diameter</Typography>
          <Typography variant="body1">{planet?.diameter}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Climate</Typography>
          <Typography variant="body1">{planet?.climate}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Gravity</Typography>
          <Typography variant="body1">{planet?.gravity}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Terrain</Typography>
          <Typography variant="body1">{planet?.terrain}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Surface Water</Typography>
          <Typography variant="body1">{planet?.surface_water}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Population</Typography>
          <Typography variant="body1">{planet?.population}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Residents</Typography>
          <Typography variant="body1">
            {planet?.residents.join(", ")}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Films</Typography>
          <Typography variant="body1">{planet?.films.join(", ")}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Created</Typography>
          <Typography variant="body1">{planet?.created}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Edited</Typography>
          <Typography variant="body1">{planet?.edited}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">URL</Typography>
          <Typography variant="body1">
            <a href={planet?.url}>{planet?.url}</a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PlanetDetails;
