import express from 'express';
import blogRoutes from './routes/blogRoutes.js'; 



const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
