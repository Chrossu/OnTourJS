import React from 'react';
import { Jumbotron } from '../layout/Portada';
import { Layout } from '../bstrap/Layout';
import { Presentacion } from '../layout/Presentacion';
import { Catalogo } from '../layout/Catalogo';

export const Home = () => (
    <div>
        <Jumbotron />
        <Presentacion />
        <Catalogo />
    </div>
)