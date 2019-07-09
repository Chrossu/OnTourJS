import React from 'react';
import { Jumbotron } from '../layout/Portada';
import { Presentacion } from '../layout/Presentacion';
import { Catalogo } from '../layout/Catalogo';
import Campamento from '../layout/Campamento';
import { NavigationBar } from '../layout/Navigation';

export const Home = () => (
    <div>
        <NavigationBar />
        <Jumbotron />
        <Presentacion />
        <Catalogo />
        <Campamento />
    </div>
)