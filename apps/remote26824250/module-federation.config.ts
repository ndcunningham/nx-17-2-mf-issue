import {ModuleFederationConfig} from '@nx/webpack';

const config: ModuleFederationConfig = {
    name: 'remote26824250',
    
    exposes: {
        './Module': './src/remote-entry.ts',
    },
};

export default config;
