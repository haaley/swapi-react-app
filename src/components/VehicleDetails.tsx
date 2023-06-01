import { Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosClient from "../api";
import { usePopularItem } from "../hooks/usePopularItem";

const VehicleDetails = () => {
  const [vehicle, setVehicle] = useState<VehicleResult | undefined>();
  const location = useLocation();
  const { savePopularItem } = usePopularItem();

  useEffect(() => {
    axiosClient.get(location.pathname).then((response) => {
      setVehicle(response.data);
      savePopularItem(response.data);
    });
  }, [location, savePopularItem]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">{vehicle?.name}</Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Model</Typography>
          <Typography variant="body1">{vehicle?.model}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Manufacturer</Typography>
          <Typography variant="body1">{vehicle?.manufacturer}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Cost in Credits</Typography>
          <Typography variant="body1">{vehicle?.cost_in_credits}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Length</Typography>
          <Typography variant="body1">{vehicle?.length}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Max Atmosphering Speed</Typography>
          <Typography variant="body1">
            {vehicle?.max_atmosphering_speed}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Crew</Typography>
          <Typography variant="body1">{vehicle?.crew}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Passengers</Typography>
          <Typography variant="body1">{vehicle?.passengers}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Cargo Capacity</Typography>
          <Typography variant="body1">{vehicle?.cargo_capacity}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Consumables</Typography>
          <Typography variant="body1">{vehicle?.consumables}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Vehicle Class</Typography>
          <Typography variant="body1">{vehicle?.vehicle_class}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Pilots</Typography>
          <Typography variant="body1">{vehicle?.pilots}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Films</Typography>
          <Typography variant="body1">{vehicle?.films}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Created</Typography>
          <Typography variant="body1">{vehicle?.created}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">Edited</Typography>
          <Typography variant="body1">{vehicle?.edited}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} className="detail-paper">
          <Typography variant="subtitle1">URL</Typography>
          <Typography variant="body1">
            <a href={vehicle?.url}>{vehicle?.url}</a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VehicleDetails;
