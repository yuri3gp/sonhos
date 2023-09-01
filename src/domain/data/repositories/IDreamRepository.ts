import { Dream } from '../../entities/Dream';

export interface IDreamRepository {
    retrieveDream(input: any): Promise<any>;
    createDream(dream: Dream): Promise<void>;
    updateDream(dream: Dream): Promise<void>;
    deleteDream(dreamId: number): Promise<void>;
}
