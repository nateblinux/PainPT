import './App.css'
import FormMain from './form-pages/FormMain.jsx';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#efb15d',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#310000',
      paper: '#731010',
    },
  },
  typography: {
    fontFamily: 'Do Hyeon',
  },
  shape: {
    borderRadius: 16,
  },
});


function App() {
  return ( //simply render page - this will render the form currently but any perminant features will be rendered here
  <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Box>
      <FormMain/>
    </Box>
    </ThemeProvider>
  );
}

export default App
