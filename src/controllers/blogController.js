export const createBlog = (req, res) => {
  res.status(200).send('Blog created successfully');
};

export const readBlog = (req, res) => {
  res.status(200).send('Blog read successfully');
};

export const updateBlog = (req, res) => {
  res.status(200).send('Blog update successfully');
};

export const deleteBlog = (req, res) => {
  res.status(200).send('Blog delete successfully');
};
