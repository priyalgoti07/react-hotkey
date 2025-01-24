import React, { useState } from 'react'
import './App.css'
import { Box, Button, Drawer, Tab, Tabs } from '@mui/material'
import { useHotkeys } from 'react-hotkeys-hook'

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [value, setValue] = React.useState('one');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  // Hotkey to toggle the drawer
  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  useHotkeys("ctrl+shift+a", (event) => {
    event.preventDefault()
    toggleDrawer()
  });

  const handleForword = () => {

  }
  useHotkeys("esc", () => setIsDrawerOpen(false))
  useHotkeys("ctrl+right", handleForword())



  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setIsDrawerOpen(true)}
        style={{ marginBottom: "16px" }}
      >
        Open Drawer
      </Button>
      {/* Drawer Component */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{ "& .MuiDrawer-paper": { width: "600px" } }} // Increased size
      >
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab
              value="one"
              label="Item One"
              wrapped
            />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
          </Tabs>
        </Box>
      </Drawer>
    </div>
  )
}

export default App
