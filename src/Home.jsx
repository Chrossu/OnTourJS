import React from 'react';
import { Jumbotron } from './components/Portada';
import { Layout } from './components/Layout';
import { Presentacion } from './components/Presentacion';
import { Catalogo } from './components/Catalogo';

export const Home = () => (
    <div>
        <Jumbotron />
        <Presentacion />
        <Catalogo />
    </div>
)