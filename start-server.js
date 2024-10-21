const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');  // Add this line

const app = express();
const PORT = 5001;

// Use CORS middleware to allow requests from your React app (http://localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000' // Allow only your React app to access this server
}));

// Route to start Next.js
app.get('/start-next', (req, res) => {
  console.log('Received request to start Next.js');
  
  const nextAppPath = 'C:/xampp/htdocs/Fervis/Next'; // Path to your Next.js app
  
  // Use spawn to start Next.js on port 3001
  const nextProcess = spawn('npm', ['run', 'dev', '--', '-p', '3001'], { cwd: nextAppPath, shell: true });

  nextProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  nextProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  nextProcess.on('close', (code) => {
    console.log(`Next.js process exited with code ${code}`);
  });

  res.send('Next.js server is starting on port 3001...');
});

app.listen(PORT, () => {
  console.log(`Node.js server listening on port ${PORT}`);
});
