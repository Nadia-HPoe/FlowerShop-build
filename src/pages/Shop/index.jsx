import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Icons } from '../../components/icons/Icons';
import { flowers } from '../../components/layout/flowers';
import './shop.scss';

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [inputText, setInputText] = useState('');
  const [sortOrder, setSortOrder] = useState('LowToHigh');

  const sortedFlowers = flowers.slice().sort((a, b) => {
    return sortOrder === 'LowToHigh' ? a.price - b.price : b.price - a.price;
  });

  const filteredFlowers = sortedFlowers.filter((item) =>
    item.name.toLowerCase().includes(inputText.toLowerCase()),
  );

  return (
    <div className="shop-wrapper">
      <div className="shop-filter">
        <p className="shop-filter__filtering">
          <Icons
            className="shop-icon"
            name="filter"
            color="#ff8f52"
            size="20"
          />
          Filtering
        </p>
        <div className="shop-filter__search">
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 500,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <Icons name="glass" color="#838383" size="23" />
            </IconButton>
          </Paper>
        </div>
        <div className="shop-filter__price">
          <Box
            sx={{
              minWidth: 180,
            }}
          >
            <FormControl fullWidth>
              <InputLabel color="warning" id="demo-simple-select-label">
                Filter price
              </InputLabel>
              <Select
                color="warning"
                autoWidth
                label="Filter price"
                // value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <MenuItem value="LowToHigh">
                  <Icons
                    className="shop-icon"
                    name="pricedown"
                    color="#ff8f52"
                    size="23"
                  />
                  Low To High
                </MenuItem>
                <MenuItem value="HighToLow">
                  <Icons
                    className="shop-icon"
                    name="priceup"
                    color="#ff8f52"
                    size="23"
                  />
                  High To Low
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <div className="shop-list">
        <div className="shop-container">
          {filteredFlowers.map((item) => (
            <div key={item.id} className="flower__wrapper">
              <img src={item.url} alt="flower" className="flower__image" />
              <p className="flower__name">{item.name}</p>
              <div className="flower__bottom">
                <p className="flower__price">{item.price}$</p>
                <button className="flower__button">
                  <Icons
                    className="shop-icon"
                    name="cart"
                    color="#FF8F52"
                    size="15"
                  />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Shop };
