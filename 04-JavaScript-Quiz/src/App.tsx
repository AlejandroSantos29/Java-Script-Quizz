import { useState } from 'react'
import './App.css'
import { Container, Typography, Stack } from '@mui/material'
import { JavaScriptLogo } from './assets/JavaScriptLogo'

function App() {
  return (
    <>
      <Container maxWidth='sm'>

        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavaScriptLogo />
          <Typography variant='h2' component='h1'>
            Java Script Quizz
          </Typography>
        </Stack>
      </Container >
    </>
  )
}

export default App
