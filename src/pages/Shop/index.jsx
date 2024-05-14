import React from 'react';
import TextField from '@mui/material/TextField';
// import { flowers } from '../../components/layout/flowers';
import './shop.scss';

function Shop() {
  return (
    <div>
      <div className="shop-wrapper">
        <div className="shop-filter">
          <div className="shop-filter__filtering">Filtering</div>
          <div className="shop-filter__search">
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search"
            />
          </div>
          <div className="shop-filter__price">Cheap</div>
        </div>
        <div className="shop-container"></div>
      </div>
    </div>
  );
}

export { Shop };
