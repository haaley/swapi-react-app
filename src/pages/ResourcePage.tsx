import { Box, Grid, TextField } from "@mui/material";
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import axiosClient from "../api";
import MediaCard from "../components/Card";

export default function ResourcePage() {
  const [data, setData] = useState<ApiResponse | undefined>();
  const [searchData, setSearchData] = useState<ApiResponse | undefined>();
  const [searchInput, setSearchInput] = useState("");

  const location = useLocation();

  useEffect(() => {
    setSearchInput("");
    axiosClient
      .get(location.pathname)
      .then((response) => setData(response.data));
  }, [location]);

  const handleSearch = useMemo(
    () =>
      debounce((word: string) => {
        axiosClient
          .get(`${location.pathname}/?search=${word}`)
          .then((result) => setSearchData(result.data));
      }, 300),
    [location.pathname]
  );

  useEffect(() => {
    return () => {
      handleSearch.cancel();
    };
  }, [handleSearch]);

  return (
    <Grid container spacing={2} alignItems={"flex-start"}>
      <Grid item xs={12}>
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          value={searchInput}
          fullWidth
          onChange={(event) => {
            setSearchInput(event.target.value);
            handleSearch(event.target.value);
          }}
        />
      </Grid>
      {searchInput
        ? searchData?.results?.map((film, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <MediaCard
                title={film?.name ?? film?.title}
                to={film.url.replace(/\D/g, "")}
              />
            </Grid>
          ))
        : data?.results?.map((film, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <MediaCard
                title={film?.name ?? film?.title}
                to={film.url.replace(/\D/g, "")}
              />
            </Grid>
          ))}
    </Grid>
  );
}
