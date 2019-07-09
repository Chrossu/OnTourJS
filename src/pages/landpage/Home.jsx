import React from 'react';
import { Jumbotron } from '../../components/landpage/Portada';
import { Presentacion } from '../../components/landpage/Presentacion';
import { Catalogo } from '../../components/landpage/Catalogo';
import Campamento from '../../components/landpage/Campamento';
import { NavigationBar } from '../../components/landpage/Navigation';

export const Home = () => (
    <div>
        <NavigationBar />
        <Jumbotron />
        <Presentacion />
        <Catalogo />
        <Campamento />
    </div>
)