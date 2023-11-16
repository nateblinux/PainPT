import './App.css'
import FormMain from './form-pages/FormMain.jsx';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
