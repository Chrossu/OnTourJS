import React from 'react';
import { Jumbotron } from '../../landpage/Portada';
import { Presentacion } from '../../landpage/Presentacion';
import { Catalogo } from '../../landpage/Catalogo';
import Campamento from '../../landpage/Campamento';
import { NavigationBar } from '../../landpage/Navigation';

export const Home = () => (
    <div>
        <NavigationBar />
        <Jumbotron />
        <Presentacion />
        <Catalogo />
        <Campamento />
    </div>
)