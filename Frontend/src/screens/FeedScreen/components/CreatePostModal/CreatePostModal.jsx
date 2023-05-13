import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import cloudinary from "cloudinary";

const CreatePostModal = ({ open, onClose, onSubmit }) => {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  cloudinary.config({
    cloud_name: "shehancloudinarystore",
    api_key: "764387618299358",
    api_secret: "yhNZsTIQ6K9C_e4QdSN77G9vWHE",
  });

  const handleImageChange = (e) => {
    const newImages = [...images];
    for (let i = 0; i < e.target.files.length && i < 4; i++) {
      newImages.push(e.target.files[i]);
    }
    setImages(newImages);
    cloudinary.v2.uploader.upload(images[0], (error, result) => {
      if (error) {
        console.error(error);
      } else {
        console.log(result);
      }
    });
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePost = () => {
    onSubmit(images, description);
    setImages([]);
    setDescription("");
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography variant="h6">Create Post</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Card>
          <CardContent>
            <Typography variant="body1">Add up to 4 images:</Typography>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              value={description}
              onChange={handleDescriptionChange}
            />
          </CardContent>
        </Card>
        <div style={{ marginTop: "1rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePost}
            disabled={images.length === 0}
          >
            Post
          </Button>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
