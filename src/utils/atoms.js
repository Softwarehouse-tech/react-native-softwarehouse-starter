import {atom} from 'jotai';
import {atomWithStorage, createJSONStorage, selectAtom} from 'jotai/utils';

import Storage from './storage';

export const userAtom = atomWithStorage(
  'user',
  null,
  createJSONStorage(() => Storage),
);
