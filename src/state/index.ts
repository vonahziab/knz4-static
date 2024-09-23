import { atom } from 'recoil';

export const test = atom<number>({
	key: 'test',
	default: undefined,
});
