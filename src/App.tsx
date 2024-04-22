import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";

import {RouterProvider} from "react-router-dom";
import router from "./components/Routes.tsx"


function App() {

const darkTheme = createTheme({
    palette:{
        mode:'dark'
    }
})
  return (
 <ThemeProvider theme={darkTheme}>
<CssBaseline/>

     <Container>
<RouterProvider router={router}/>

     </Container>

 </ThemeProvider>
  )
}

export default App
