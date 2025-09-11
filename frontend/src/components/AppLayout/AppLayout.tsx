import {Container } from "@mui/material";
import { Outlet } from "react-router";
import Header from "../Header";


export default function AppLayout() {
    return (
        <>
            <Header/>
            <Container maxWidth="lg">
                <Outlet/>
            </Container>
        </>
    );
}