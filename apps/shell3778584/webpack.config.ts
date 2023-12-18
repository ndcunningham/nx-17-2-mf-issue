import { composePlugins, withNx, ModuleFederationConfig } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const config: ModuleFederationConfig = {
...baseConfig,
remotes: [
'remote15330346',
['remote26824250', 'http://localhost:4202/remoteEntry.js'],
['remote34662089', 'http://localhost:4203'],
],
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(withNx(), withReact(), withModuleFederation(config));