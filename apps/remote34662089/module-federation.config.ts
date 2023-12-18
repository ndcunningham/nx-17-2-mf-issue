import {ModuleFederationConfig} from '@nx/webpack';

const config: ModuleFederationConfig = {
    name: 'remote34662089',
    
    exposes: {
        './Module': './src/remote-entry.ts',
    },
};

export default config;
