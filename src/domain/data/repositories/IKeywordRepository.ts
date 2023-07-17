import { Keyword } from '../../entities/Keyword';

export interface IKeywordRepository {
    retrieveKeyword(input: any): Promise<Keyword | null>;
    createKeyword(keyword: Keyword): Promise<void>;
    updateKeyword(keyword: Keyword): Promise<void>;
    deleteKeyword(keywordId: number): Promise<void>;
}
