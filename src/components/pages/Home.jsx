import React from 'react';
import { Jumbotron } from '../layout/Portada';
import { Presentacion } from '../layout/Presentacion';
import { Catalogo } from '../layout/Catalogo';
import Campamento from '../layout/Campamento';

export const Home = () => (
    <div>
        <Jumbotron />
        <Presentacion />
        <Catalogo />
        <Campamento />
    </div>
)