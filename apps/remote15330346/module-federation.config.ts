import {ModuleFederationConfig} from '@nx/webpack';

const config: ModuleFederationConfig = {
    name: 'remote15330346',
    
    exposes: {
        './Module': './src/remote-entry.ts',
    },
};

export default config;
