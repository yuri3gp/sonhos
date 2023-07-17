import { Dream } from '../../entities/Dream';

export interface IDreamRepository {
    retrieveDream(input: any): Promise<Dream | null>;
    createDream(dream: Dream): Promise<void>;
    updateDream(dream: Dream): Promise<void>;
    deleteDream(dreamId: number): Promise<void>;
}
