import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, Button, Drawer, Tab, Tabs } from "@mui/material";
import { useHotkeys } from "react-hotkeys-hook";

const App: React.FC = () => {
  // State for controlling drawer visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // State for managing the active tab
  const [currentTab, setCurrentTab] = useState(0);

  // Reset tab to the first one when the drawer is closed
  useEffect(() => {
    if (!isDrawerOpen) {
      setCurrentTab(0);
    }
  }, [isDrawerOpen]);

  /**
   * Accessibility props for tabs
   * @param index Tab index
   * @returns Accessibility properties for each tab
   */
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  /**
   * Handle tab change event
   * @param _event Synthetic event
   * @param newValue New tab index
   */
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  /**
   * Toggle drawer open/close state
   */
  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  /**
   * Handle forward tab navigation (Ctrl+Right)
   */
  const handleForward = (): void => {
    const totalTabsCount = 6;
    const lastTab = totalTabsCount - 1;

    if (currentTab < lastTab) {
      const nextTab = (currentTab + 1) % totalTabsCount; // Move forward
      setCurrentTab(nextTab);
    }
  };

  /**
   * Handle backward tab navigation (Ctrl+Left)
   */
  const handleBackward = (): void => {
    const totalTabCount = 6;

    if (currentTab > 0) {
      const prevTab = (currentTab - 1 + totalTabCount) % totalTabCount; // Move backward
      setCurrentTab(prevTab);
    }
  };

  /**
   * Hotkey bindings using react-hotkeys-hook
   */
  useHotkeys("ctrl+shift+a", (event) => {
    event.preventDefault();
    toggleDrawer();
  });

  useHotkeys("esc", () => setIsDrawerOpen(false)); // Close drawer on Esc key

  useHotkeys("ctrl+right", () => handleForward()); // Navigate to the next tab

  useHotkeys("ctrl+left", () => handleBackward()); // Navigate to the previous tab

  useHotkeys("ctrl+p", (event) => {
    event.preventDefault();
    setCurrentTab(0); // Jump to the Personal tab
  });

  /**
   * Render the component
   */
  return (
    <div>
      {/* Button to open the drawer */}
      <Button
        variant="contained"
        onClick={() => setIsDrawerOpen(true)}
        style={{ marginBottom: "16px" }}
      >
        Open Drawer
      </Button>

      {/* Drawer component */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{ "& .MuiDrawer-paper": { width: "600px" } }} // Set drawer width
      >
        <Box>
          {/* Tabs for different sections */}
          <Tabs
            value={currentTab}
            onChange={handleChange}
            aria-label="Navigation Tabs"
          >
            <Tab {...a11yProps(0)} label="Personal" wrapped />
            <Tab {...a11yProps(1)} label="Address" />
            <Tab {...a11yProps(2)} label="Contact" />
            <Tab {...a11yProps(3)} label="Bank" />
            <Tab {...a11yProps(4)} label="Co-Bank" />
            <Tab {...a11yProps(5)} label="Project" />
          </Tabs>
        </Box>
      </Drawer>
    </div>
  );
};

export default App;
