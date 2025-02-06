 

// React Imports
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css';

// Next Imports
// import Link from 'next/link'
import { Link, useNavigate } from 'react-router-dom'
// import { useRouter } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
// import Divider from '@mui/material/Divider'

// Component Imports
// import Logo from '@components/layout/shared/Logo'
// import Logo from '../components/layout/shared/Logo'
// import Illustrations from '@components/Illustrations'
// import Illustrations from '../components/Illustrations'

// Config Imports
// import themeConfig from '@configs/themeConfig'
// import themeConfig from '../configs/themeConfig'

// Hook Imports
// import { useImageVariant } from '@core/hooks/useImageVariant'
import { useImageVariant } from '../core/hooks/useImageVariant'


const Login = ({ mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const navigate = useNavigate() // Replace useRouter with useNavigate
  // Vars
 
  const darkImg = '/public/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/public/images/pages/auth-v1-mask-light.png'

  // Hooks
  // const router = useRouter()
  const authBackground = useImageVariant(mode, lightImg, darkImg)
  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/') // Use navigate instead of router.push
  }

  return (
    <div className='flex justify-center items-center min-h-screen p-6 border-2 border-red-300'>
  <Card className='flex flex-col w-full sm:w-[450px]'>
    <CardContent className='p-6 sm:!p-12 w-full'>
      <div className='flex flex-col gap-5'>
        <form noValidate autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-5 w-full'>
          <TextField fullWidth label='Email' />
          <TextField
            fullWidth
            label='Password'
            id='outlined-adornment-password'
            type={isPasswordShown ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    size='small'
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={e => e.preventDefault()}
                  >
                    <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
            <FormControlLabel control={<Checkbox />} label='Remember me' />
            <Link>Forgot Password?</Link>
          </div>
          <Button fullWidth variant='contained' type='submit'>
            Log In
          </Button>
          <div className='flex justify-center items-center flex-wrap gap-2'>
            <Typography>New on our platform?</Typography>
            <Typography className='text-blue-400'>
              Create an account
            </Typography>
          </div>
        </form>
      </div>
    </CardContent>
  </Card>
    </div>
  )
}

export default Login




