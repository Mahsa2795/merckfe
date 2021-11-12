
import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadIcon from '@mui/icons-material/Upload';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import MenuBar from './components/MenuBar';
import DataTable from './components/DataTable';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <br/>
      <Stack className="button-grp" direction="row" spacing={2}>
      <Button color='primary' variant="contained" startIcon={<UploadIcon />}>Upload</Button>
      <Button color='primary' variant="contained" startIcon={<QrCodeScannerIcon/>}>Scan Tag</Button>
    </Stack>
    <br/>
    <DataTable/>

    </div>
  );
}

export default App;
