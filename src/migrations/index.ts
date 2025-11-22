import * as migration_20251122_080716 from './20251122_080716';

export const migrations = [
  {
    up: migration_20251122_080716.up,
    down: migration_20251122_080716.down,
    name: '20251122_080716'
  },
];
