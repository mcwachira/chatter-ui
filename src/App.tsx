import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";


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
         <div>DARK MODE
         </div>
     </Container>

 </ThemeProvider>
  )
}

export default App
