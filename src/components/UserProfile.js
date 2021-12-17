import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { useRecoilValue } from 'recoil'
import { userState as userAtom } from '../atoms'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(LocalizedFormat)

const UserProfile = () => {
  const u = useRecoilValue(userAtom)

  const getInitials = name => {
    let initials = name.split(' ')

    if (initials.length > 1) {
      initials = initials.shift().charAt(0) + initials.pop().charAt(0)
    } else {
      initials = name.substring(0, 2)
    }

    return initials.toUpperCase()
  }

  const fullName = u.profile.firstName + u.profile.lastName

  var daydate = dayjs(u.createdAt).format('LLLL')

  return (
    <>
      <div
        className=' p-3 '
        style={{
          position: 'sticky',
          border: '2px black',
          width: '25%',
          height: '100%',
          alignItems: 'baseline',
          backgroundColor: 'rgba(0, 0, 0, 0.61)',
          backdropFilter: 'blur(5px)',
          top: '0%'
        }}
      >
        <Box
          className='d-flex text-center justify-content-center text-white flex-row'
          sx={{
            backgroundColor: 'grey',
            height: '10%',
            width: '100%',
            margin: '10px'
          }}
        >
          <Typography className='mx-auto' variant='h5'>
            USER PROFILE
          </Typography>
        </Box>
        <div
          className='mx-auto d-flex flex-row align-items-center'
          style={{
            border: '2px black',
            height: '50%',
            width: '100%',
            flexWrap: 'wrap'
          }}
        >
          <Avatar
            alt={getInitials(fullName)}
            src={u.avatar}
            className='mx-auto'
            sx={{ bgcolor: deepPurple[500], width: '5rem', height: '5rem' }}
          ></Avatar>
          <Box
            className='d-flex text-center justify-content-center text-white flex-row'
            sx={{
              backgroundColor: 'rgb(46 46 46 / 35%)',
              backdropFilter: 'blur(67px)',
              height: '10%',
              width: '100%',
              margin: '10px'
            }}
          >
            <Typography className='mx-auto' variant='h5'>
              @{u.profile.username}
            </Typography>
          </Box>

          <Typography
            sx={{ paddingRight: '15rem', fontSize: '13px' }}
            className='text-align-left my-1 text-white'
            variant='h6'
          >
            About Me
          </Typography>
          <Box
            className='d-flex text-center justify-content-center text-white flex-row'
            sx={{
              backgroundColor: 'rgb(46 46 46 / 35%)',
              backdropFilter: 'blur(67px)',
              height: '30%',
              width: '100%',
              margin: '10px'
            }}
          >
            <Typography className='mx-auto' variant='body1'>
              {u.Bio}
            </Typography>
          </Box>
          <Typography
            sx={{ paddingRight: '15rem', fontSize: '13px' }}
            className='text-align-left text-white'
            variant='h6'
          >
            Full name
          </Typography>
          <Box
            className='d-flex text-center justify-content-center text-white flex-row'
            sx={{
              backgroundColor: 'rgb(46 46 46 / 35%)',
              backdropFilter: 'blur(67px)',
              height: '10%',
              width: '100%',
              margin: '10px'
            }}
          >
            <Typography className='mx-auto' variant='body1'>
              {u.profile.firstName} {u.profile.lastName}
            </Typography>
          </Box>
          <Typography
            sx={{ paddingRight: '15rem', fontSize: '13px' }}
            className='text-align-left text-white'
            variant='h6'
          >
            Email
          </Typography>
          <Box
            className='d-flex text-center justify-content-center text-white flex-row'
            sx={{
              backgroundColor: 'rgb(46 46 46 / 35%)',
              backdropFilter: 'blur(67px)',
              height: '10%',
              width: '100%',
              margin: '10px'
            }}
          >
            <Typography className='mx-auto' variant='body1'>
              {u.profile.email}
            </Typography>
          </Box>
          <Typography
            sx={{ paddingRight: '15rem', fontSize: '13px' }}
            className='text-align-left text-white'
            variant='h6'
          >
            Job Title
          </Typography>
          <Box
            className='d-flex text-center justify-content-center text-white flex-row'
            sx={{
              backgroundColor: 'rgb(46 46 46 / 35%)',
              backdropFilter: 'blur(67px)',
              height: '10%',
              width: '100%',
              margin: '10px'
            }}
          >
            <Typography className='mx-auto' variant='body1'>
              {u.jobTitle}
            </Typography>
          </Box>
          <Typography
            sx={{ paddingRight: '15rem ', fontSize: '13px' }}
            className='text-align-left text-white'
            variant='h6'
          >
            account created at
          </Typography>
          <Box
            className='d-flex text-center justify-content-center text-white flex-row'
            sx={{
              backgroundColor: 'rgb(46 46 46 / 35%)',
              backdropFilter: 'blur(67px)',
              height: '10%',
              width: '100%',
              margin: '10px'
            }}
          >
            <Typography className='mx-auto' variant='body1'>
              {daydate}
            </Typography>
          </Box>
        </div>
      </div>
    </>
  )
}

export default UserProfile
