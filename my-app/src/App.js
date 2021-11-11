
import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadIcon from '@mui/icons-material/Upload';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <br/>
      <Stack direction="row" spacing={2}>
      <Button color='secondary' variant="contained" startIcon={<UploadIcon />}>Upload</Button>
      <Button color='secondary' variant="contained" startIcon={<QrCodeScannerIcon/>}>Scan Tag </Button>
    </Stack>
    </div>
  );
}

export default App;
