import React, { FunctionComponent } from 'react';
import './AddProductForm.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const AddProductForm: FunctionComponent = () => {
  return (
    <div className="add-product-form">
      <h3 className="font-bold tw-text-emerald-400">Add new Product</h3>
      <form>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="name"
              label="Name"
              defaultValue="Product Name"
            />
          </div>
          <div>
            <TextField
              required
              id="description"
              label="Description"
              defaultValue="Description"
            />
          </div>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">
              Upload
              <input accept="image/*" multiple type="file" />
            </Button>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
            </IconButton>
          </Stack>
        </Box>
      </form>
    </div>
  );
};

export default AddProductForm;
