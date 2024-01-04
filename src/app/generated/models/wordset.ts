/* tslint:disable */
/* eslint-disable */
import { Word } from '../models/word';
export interface Wordset {

  /**
   * Source language of the wordset.
   */
  languageFrom?: string;

  /**
   * Target language of the wordset.
   */
  languageTo?: string;

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
