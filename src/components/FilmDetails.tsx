import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import axiosClient from "../api";
import { usePopularItem } from "../hooks/usePopularItem";

const FilmDetails = () => {
  const [film, setFilm] = useState<FilmResult | undefined>();
  const location = useLocation();
  const { savePopularItem } = usePopularItem();

  useEffect(() => {
    axiosClient.get(location.pathname).then((response) => {
      setFilm(response.data);
      savePopularItem(response.data);
    });
  }, [location.pathname, savePopularItem]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">{film?.title}</Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Episode ID</Typography>
          <Typography variant="body1">{film?.episode_id}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Opening Crawl</Typography>
          <Typography variant="body1">{film?.opening_crawl}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Director</Typography>
          <Typography variant="body1">{film?.director}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Producer</Typography>
          <Typography variant="body1">{film?.producer}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Release Date</Typography>
          <Typography variant="body1">{film?.release_date}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Characters</Typography>
          <Typography variant="body1">{film?.characters.join(", ")}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Planets</Typography>
          <Typography variant="body1">{film?.planets.join(", ")}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Starships</Typography>
          <Typography variant="body1">{film?.starships.join(", ")}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Vehicles</Typography>
          <Typography variant="body1">{film?.vehicles.join(", ")}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Species</Typography>
          <Typography variant="body1">{film?.species.join(", ")}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Created</Typography>
          <Typography variant="body1">{film?.created}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Edited</Typography>
          <Typography variant="body1">{film?.edited}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">URL</Typography>
          <Typography variant="body1">
            <a href={film?.url}>{film?.url}</a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FilmDetails;
