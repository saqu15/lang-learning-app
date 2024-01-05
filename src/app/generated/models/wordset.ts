/* tslint:disable */
/* eslint-disable */
import { Languages } from '../models/languages';
import { Word } from '../models/word';
export interface Wordset {

  /**
   * Source language of the wordset.
   */
  languageFrom?: Languages;

  /**
   * Target language of the wordset.
   */
  languageTo?: Languages;

  /**
   * User ID associated with the wordset.
   */
  userId?: string;
  words?: Array<Word>;

  /**
   * Name of the wordset.
   */
  wordsetName?: string;
}
