import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
    // render
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div">
                    Tiny Motion Trainer
                </Typography>
                <Stack direction="row" spacing={2} sx={{ marginLeft: 'auto' }}>
                    <Button color="inherit">
                        Save
                    </Button>
                    <Button color="inherit">
                        Load
                    </Button>
                    <Button color="inherit">
                        Start over
                    </Button>
                    <Button color="inherit">
                        Device
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}