const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const dataRoutes = require('./routes/data.routes');

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/data', dataRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
