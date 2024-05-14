import { useState } from 'react'

/* Style */
import { StyledDrawer } from '@/layouts/leftSideBar/style.ts'

// material
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import { useTheme } from '@mui/material/styles'
import { Menu as MenuIcon } from '@mui/icons-material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Box, IconButton, useMediaQuery } from '@mui/material'

const SidebarContent = ({ onClose, isMobile }: { onClose: () => void; isMobile: boolean }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: 'primary.main',
    }}>
    {isMobile && (
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto' }}>
        <CloseRoundedIcon id="close-icon" onClick={onClose} />
      </Box>
    )}
    <List component="nav" sx={{ flex: 1, color: 'primary' }}>
      <ListItemButton>Home</ListItemButton>
      <ListItemButton>About</ListItemButton>
      <ListItemButton>Studio</ListItemButton>
      <ListItemButton>Contact</ListItemButton>
    </List>
  </Box>
)

const LeftSideBar = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      {isMobile ? (
        <>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <StyledDrawer open={open} onClose={() => setOpen(false)}>
            <SidebarContent onClose={() => setOpen(false)} isMobile={isMobile} />
          </StyledDrawer>
        </>
      ) : (
        <Box component="nav" sx={{ width: '240px', height: '100vh', backgroundColor: 'primary' }}>
          <SidebarContent onClose={() => setOpen(false)} isMobile={isMobile} />
        </Box>
      )}
    </>
  )
}

export default LeftSideBar
