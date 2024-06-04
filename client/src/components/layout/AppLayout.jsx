/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from '@mui/material';
import Header2 from './Header2';

const AppLayout = () => WrappedComponent => {
    return (props) => {
        return (
            <div>
                <Title />
                <Header />

                <Grid container height={"calc(100vh-4rem)"}>
                    <Grid item sm={4} md={3} sx={{
                        display: { xs: "none", sm: "block" }
                    }} height={"100%"}>First</Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} bgcolor="cyan">
                    </Grid>
                    <Grid item md={4} lg={3} sx={{
                        display: { xs: "none", md: "block" },
                        bgcolor: (0, 0, 0, 0.85 ),
                        padding: "2rem",
                    }} height={"100%"}>Last</Grid>
                </Grid>

            </div>
        );
    };
};

export default AppLayout