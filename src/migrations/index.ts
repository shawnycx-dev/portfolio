import * as migration_20251124_233331 from './20251124_233331';
import * as migration_20251126_044832 from './20251126_044832';

export const migrations = [
  {
    up: migration_20251124_233331.up,
    down: migration_20251124_233331.down,
    name: '20251124_233331',
  },
  {
    up: migration_20251126_044832.up,
    down: migration_20251126_044832.down,
    name: '20251126_044832'
  },
];
