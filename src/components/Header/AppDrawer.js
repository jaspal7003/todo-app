import { Drawer, Box, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import menuItems from './MenuItems';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function AppDrawer(props) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Drawer anchor='left' open={!matches && props.isDrawerOpen} type="persistent" onClose={() => props.setDrawerClosed()}>
            <Box width={270}>
                <List>
                    {
                        menuItems.map(({ itemName, itemLink }, index) => {
                            return (
                                <ListItem disablePadding key={index}>
                                    <ListItemButton>
                                        <ListItemText primary={itemName} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>
        </Drawer>
    )
}