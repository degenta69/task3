import { Avatar, Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { deepPurple } from '@mui/material/colors'
import { useRecoilState } from 'recoil'
import { userState as userAtom } from '../atoms'
import ReactLoading from 'react-loading'

const UserList = () => {
  const [data, setdata] = useState([])

  const [loading, setloading] = useState(false)

  const [, setcurrentUserState] = useRecoilState(userAtom)

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get(
          'https://602e7c2c4410730017c50b9d.mockapi.io/users'
        )
        setloading(true)
        setdata(resp.data)
        // console.table(resp.data);
        // console.log(resp.data[1]);
      } catch (err) {
        // Handle Error Here
       alert(err)
      }
    }

    sendGetRequest()
  }, [])

  return (
    <>
      <Box
        className='d-flex flex-column  p-3 m-auto'
        sx={{
          border: '2px black',
          width: '35%',
          backgroundColor: 'rgba(0, 0, 0, 0.61)',
          backdropFilter: 'blur(5px)'
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
            USER LIST
          </Typography>
        </Box>
        {loading ? (
          data.map(user => {
            return (
              <>
                <Box
                  key={user.id}
                  className='d-flex my-2 justify-content-between text-white flex-row'
                  sx={{
                    backgroundColor: 'rgb(46 46 46 / 35%)',
                    backdropFilter: 'blur(67px)',
                    borderRadius: '51px 25px 23px 52px',
                    border: '2px black',
                    height: '10%',
                    width: '100%'
                    //   margin: '10px'
                  }}
                >
                  <div className='d-flex bg-success flex-row w-50'>
                    <Avatar
                      alt={user.profile.firstName}
                      src={user.avatar}
                      sx={{ bgcolor: deepPurple[500], marginRight: '5%' }}
                    ></Avatar>
                    <Typography className='my-auto '>
                      {user.profile.firstName} {user.profile.lastName}
                    </Typography>
                  </div>
                  <Button
                    variant='text'
                    onClick={() => {
                      setcurrentUserState(user)
                    }}
                  >
                    Profile{' '}
                    <i class='fa fa-hand-o-right' aria-hidden='true'></i>
                  </Button>
                </Box>
              </>
            )
          })
        ) : (
            <div className='mx-auto'>
          <ReactLoading type='spin' color='orange' />
            </div>
        )}
      </Box>
    </>
  )
}

export default UserList
