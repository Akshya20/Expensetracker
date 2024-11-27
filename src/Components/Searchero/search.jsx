import { Box, Select, Container, Stack, Typography, MenuItem, Button, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Srch() {
    const [states, setstates] = useState([]);
    const [cities, setcities] = useState([]);
    const [formdata, setformdata] = useState({ state: "", city: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchstates = async () => {
            try {
                const response = await axios.get("https://meddata-backend.onrender.com/states");
                setstates(response.data);
            } catch (e) {
                console.error("error", e)
            }
        };

        fetchstates();

    }, []);

    useEffect(() => {
        const fetchcities = async () => {
            setcities([]);
            setformdata((prev) => ({ ...prev, cities: "" }));
            try {
                const response = await axios.get(`https://meddata-backend.onrender.com/cities/${formdata.state}`);
                setcities(response.data);
            } catch (e) {
                console.error("error", e);
            }
        };

        if (formdata.state !== "") {
            fetchcities();
        }




    }, [formdata.state])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata((prev) => ({ ...prev, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formdata.state && formdata.city) {
          navigate(`/search?state=${formdata.state}&city=${formdata.city}`);
        }
      };

    return (
        <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formdata.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={formdata.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </Box>
    );
};



export default Srch;